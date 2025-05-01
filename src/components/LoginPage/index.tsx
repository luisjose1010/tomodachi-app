import { Link, useNavigate } from "react-router"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Checkbox } from "@/components/ui/Checkbox"
import { api } from "@/api"
import { setToken } from "@/api/localApi"
import { useForm, Errors } from "@/hooks/useForm"
import { validateEmail } from "@/lib/utils"

const loginData = {
  email: '',
  password: '',
  remember: true,
}

function validate(values: typeof loginData) {
  const errors: Errors<typeof loginData> = {
    email: [],
    password: [],
  }

  if (values.email === '') errors.email?.push('Correo electrónico requerido')
  if (!validateEmail(values.email)) errors.email?.push('Correo electrónico no válido')
  if (values.password === '') errors.password?.push('Contraseña requerida')

  return errors
}

export function LoginPage() {
  const navigate = useNavigate();
  const { values, valid, error, rawError, handleChange, handleBlur } = useForm(
    { initialData: loginData, validate }
  )

  const fetchToken = (email: string, password: string) => {
    api.post('auth/login', {
      email,
      password
    }).then(response => {
      setToken(response.data.token, values.remember)
      navigate('/')
    }).catch(error => {
      if (error.response?.data?.message) {
        console.error('Login failed:', error.response.data.message)
      }
      else {
        console.error('Login failed:', error)
      }
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchToken(values.email, values.password)
  }

  const handleRememberCheckboxChange = (checked: boolean) => {
    const syntheticEvent = {
      currentTarget: {
        name: 'remember',
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
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Iniciar Sesión</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <div className="mt-2">
                <Input id="email" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete="email" required />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-semibold text-rose-600 hover:text-rose-500">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Input
                id="password"
                name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete="current-password" required />
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
                id="remember"
                name="remember"
                checked={values.remember}
                onCheckedChange={handleRememberCheckboxChange}
              />
              <Label htmlFor="remember">Recordarme</Label>
            </div>

            <div title={rawError ? rawError : 'Enviar formulario'}>
              <Button type="submit" disabled={!valid} className="w-full bg-rose-600 hover:bg-rose-700">
                Iniciar Sesión
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="font-semibold leading-6 text-rose-600 hover:text-rose-500">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
