import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function LoginPage() {
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
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <div className="mt-2">
                <Input id="email" name="email" type="email" autoComplete="email" required />
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
                <Input id="password" name="password" type="password" autoComplete="current-password" required />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Recordarme</Label>
            </div>

            <div>
              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
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
