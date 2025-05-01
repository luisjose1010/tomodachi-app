import { Link, useNavigate } from "react-router"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Checkbox } from "@/components/ui/Checkbox"
import { api } from "@/api"
import { setToken } from "@/api/localApi"
import { Errors, useForm } from "@/hooks/useForm"
import { validateEmail } from "@/lib/utils"

const registerData = {
  id_card: '',
  name: '',
  email: '',
  password: '',
  password_confirm: '',
  phone_number: '',
  instagram: '',
  terms: false
}

function validate(values: typeof registerData) {
  const errors: Errors<typeof registerData> = {
    id_card: [],
    name: [],
    email: [],
    password: [],
    phone_number: [],
    instagram: [],
    terms: []
  }

  if (values.id_card === '') errors.id_card?.push('Número de cédula requerido')
  if (values.name === '') errors.name?.push('Nombre requerido')
  if (values.email === '') errors.email?.push('Correo electrónico requerido')
  if (!validateEmail(values.email)) errors.email?.push('Correo electrónico no válido')
  if (values.password === '') errors.password?.push('Contraseña requerida')
  if (values.password.length < 8) errors.password?.push('Contraseña debe tener al menos 8 caracteres')
  if (values.password !== values.password_confirm) errors.password?.push('Las contraseñas no coinciden')
  if (values.terms === false) errors.terms?.push('Debe aceptar los términos y condiciones')

  return errors
}

export function RegisterPage() {
  const navigate = useNavigate();
  const { values, valid, error, rawError, handleChange, handleBlur } = useForm(
    { initialData: registerData, validate }
  )

  const fetchToken = (data: typeof registerData) =>
    api.post('auth/register',
      data
    ).then(response => {
      setToken(response.data.token)
      navigate('/')
    }).catch(error => {
      if (error.response?.data?.message) {
        console.error('Login failed:', error.response.data.message)
      }
      else {
        console.error('Login failed:', error)
      }
    })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetchToken(values)
  }

  const handleTermsCheckboxChange = (checked: boolean) => {
    const syntheticEvent = {
      currentTarget: {
        name: 'terms',
        value: checked,
        type: 'checkbox',
        checked: checked,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    handleChange(syntheticEvent);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Link to="/">
        <Button variant="outlineDark" className="fixed top-4 left-4 md:top-8 md:left-16 px-6">
          Atrás
        </Button>
      </Link>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-6 lg:px-">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Crear una cuenta</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-full lg:max-w-2/3">
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit} method="POST">
            <div className="grid gap-y-4 md:grid-cols-2 sm:gap-x-6">
              <div>
                <Label htmlFor="id_card">Cédula</Label>
                <div className="mt-2">
                  <Input
                    id="id_card"
                    name="id_card"
                    type="text"
                    value={values.id_card}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name">Nombre</Label>
                <div className="mt-2">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone_number">Número de teléfono</Label>
                <div className="mt-2">
                  <Input
                    id="phone_number"
                    name="phone_number"
                    type="text"
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <div className="mt-2">
                  <Input
                    id="instagram"
                    name="instagram"
                    type="text"
                    value={values.instagram}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Contraseña</Label>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password_confirm">Confirmar contraseña</Label>
                <div className="mt-2">
                  <Input
                    id="password-password_confirm"
                    name="password_confirm"
                    type="password"
                    value={values.password_confirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>
            </div>

            {
              error && (
                <div>
                  <span className="text-red-500 text-xs">* {error}</span>
                </div>
              )
            }

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                name="terms"
                checked={values.terms}
                onCheckedChange={handleTermsCheckboxChange}
                required
              />
              <Label htmlFor="terms" className="text-sm">
                Acepto los
                {" "}
                <Link to="/terms" className="text-rose-600 hover:text-rose-500">
                  términos y condiciones
                </Link>
              </Label>
            </div>

            <div title={rawError ? rawError : 'Enviar formulario'}>
              <Button type="submit" disabled={!valid} className="w-full bg-rose-600 hover:bg-rose-700">
                Registrarse
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="font-semibold leading-6 text-rose-600 hover:text-rose-500">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
