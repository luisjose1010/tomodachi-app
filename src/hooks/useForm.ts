import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent
} from 'react';

type TouchedMap<T> = Partial<Record<keyof T, boolean>>;
export type Errors<T extends object> = Partial<Record<keyof T, string[]>>;

interface useFormProps<T extends object> {
  initialData: T;
  validate?: (values: T) => Errors<T>;
  debounceTime?: number;
}

interface useFormReturn<T extends object> {
  values: T;
  valid: boolean;
  errors: Errors<T>; // Errors filtered by 'touched'
  error: string | null; // First visible error
  flatErrors: string[]; // Visible errors flattened
  rawErrors: Errors<T>; // Errors not filtered by 'touched'
  rawError: string | null; // First unfiltered error
  rawFlatErrors: string[]; // Unfiltered errors flattened
  handleChange: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errorsLength: number; // Number of visible errors
  rawErrorsLength: number; // Number of unfiltered errors
  touched: TouchedMap<T>; // The 'touched' object (does not cause re-render)
}

// --- Main Hook ---
export function useForm<T extends object>(
  { initialData, validate, debounceTime = 300 }: useFormProps<T>
): useFormReturn<T> {
  const [values, setValues] = useState<T>(initialData);
  const [errors, setErrors] = useState<Errors<T>>({}); // Visible errors (filtered by touched)
  const [rawErrors, setRawErrors] = useState<Errors<T>>({}); // Actual errors (unfiltered)
  const [valid, setValid] = useState<boolean>(false); // Status for general validity
  const touched = useRef<TouchedMap<T>>({}); // Ref to track touched fields (no need to re-render)
  const debounceTimeout = useRef<number | null>(null);

  // --- Function to filter errors based on 'touched' ---
  const filterErrorsByTouched = useCallback((errorsToFilter: Errors<T>): Errors<T> => {
    const newErrors = { ...errorsToFilter };
    Object.keys(newErrors).forEach(key => {
      // If the field has NOT been touched, clean up the error array
      if (!touched.current[key as keyof T]) {
        newErrors[key as keyof Errors<T>] = [];
      }
    });
    return newErrors;
  }, []);

  // --- Debounced Validation ---
  const debouncedValidate = useCallback((currentValues: T) => {
    if (validate) {
      const validationErrors = validate(currentValues); // Get *actual* errors
      setRawErrors(validationErrors); // Save actual mistakes

      const visibleErrors = filterErrorsByTouched(validationErrors); // Filter to show
      setErrors(visibleErrors); // Update status of visible errors

      // Calculate validity based on *actual* errors (before filtering by touched)
      const formIsValid = Object.values(validationErrors as string[]).every(
        errorArray => errorArray.length === 0
      );
      setValid(formIsValid); // Update validity status

    } else {
      // If there is no validation function, the form is considered valid and error-free.
      setRawErrors({});
      setErrors({});
      setValid(true);
    }
  }, [validate, filterErrorsByTouched]); // It depends on validate and the filter function

  // --- Initial Validation ---
  // Runs only once or if initialData/validate changes
  useEffect(() => {
    // Performs initial validation to set the correct 'valid' state upon mounting.
    // Don't display initial errors (unless a field is already 'touched' if logic allows it)
    // but calculate the initial validity.
    debouncedValidate(initialData);
    // Restarting 'touched' if the initial data changes might be necessary
    // touched.current = {}; // Uncomment if need to reset 'touched' when 'initialData' changes
  }, [initialData, debouncedValidate]); // Run initial validation


  // --- Change Handler ---
  const handleChange = useCallback((event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const target = event.currentTarget; // Using currentTarget is often safer
    const { name, value } = target;
    const type = target.type;
    const checked = (target as HTMLInputElement).checked; // Safe cast for checkboxes

    // Mark the field as 'touched' the first time it changes
    if (!touched.current[name as keyof T]) {
      touched.current[name as keyof T] = true;
    }

    // Update value (using functional update to ensure the most recent state)
    const newValue = type === 'checkbox' ? checked : value;
    setValues(prevValues => ({
      ...prevValues,
      [name]: newValue,
    }));

    // Clear previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Run validation with debounce
    // Create the updated values object here to pass to the debounce
    const updatedValues = { ...values, [name]: newValue };
    debounceTimeout.current = setTimeout(() => {
      debouncedValidate(updatedValues);
    }, debounceTime);

  }, [debounceTime, debouncedValidate, values]); // Include 'values' in dependencies is important for `updatedValues`

  // --- Blur Handler ---
  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = event.currentTarget;
    const { name } = target;

    // 1. Ensure the field is marked as 'touched' when focus is lost
    if (name && !touched.current[name as keyof T]) {
      touched.current[name as keyof T] = true;
      // Important: Mutating the 'touched' ref here does not cause a re-render by itself.
      // However, the validation call (which does update states) will force a re-render,
      // ensuring that errors filtered by 'touched' are updated.
    }

    // 2. Run validation immediately (without debounce) for the current state
    // Use the same core validation logic function ('debouncedValidate'),
    // but call it directly instead of inside a setTimeout.
    // Validate with the current state values.
    if (name && validate) {
      debouncedValidate(values);
    }

  }, [values, debouncedValidate, validate]);

  // --- Clear the Debounce ---
  useEffect(() => {
    // Cleanup function that runs when the component is unmounted
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  // --- Calculate Derived Values ---
  // These are calculated on each render based on the current `errors` state.
  const flatErrorList = Object.values(errors).flat() as string[];
  const error = flatErrorList.length > 0 ? flatErrorList[0] : null;
  const rawFlatErrorList = Object.values(rawErrors).flat() as string[];
  const rawError = rawFlatErrorList.length > 0 ? rawFlatErrorList[0] : null;
  const errorsLength = flatErrorList.length;
  const rawErrorsLength = rawFlatErrorList.length;

  // --- Hook Return ---
  return {
    values,
    handleChange,
    handleBlur,
    errors, // Errors filtered by 'touched'
    error, // First visible error
    flatErrors: flatErrorList, // Visible errors flattened
    rawErrors, // Errors not filtered by 'touched'
    rawError, // First unfiltered error
    rawFlatErrors: rawFlatErrorList, // Unfiltered errors flattened
    valid, // Actual validity status
    errorsLength, // Number of visible errors
    rawErrorsLength, // Number of unfiltered errors
    touched: touched.current, // The current 'touched' object (does not cause re-render)
  };
}

// --- Example Validation Function ---
export function requiredValidate<T extends object>(values: T): Errors<T> {
  const errors: Errors<T> = {} as Errors<T>;

  for (const key in values) {
    // Consider `false` as a valid value for checkboxes, etc.
    const value = values[key];
    if (value === '' || value === null || value === undefined) {
      // Make sure we don't mark boolean `false` as invalid if it's intentional
      if (typeof value !== 'boolean') {
        if (!errors[key]) errors[key] = [];
        errors[key].push(`${String(key)}: Este campo es obligatorio`);
      }
    }
  }
  return errors;
}
