import { Link } from "react-router"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Checkbox } from "@/components/ui/Checkbox"

export function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Link to="/">
        <Button variant="outlineDark" className="fixed top-4 left-4 md:top-8 md:left-16 px-6">
          Atrás
        </Button>
      </Link>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Crear una cuenta</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name">Nombre</Label>
                <div className="mt-2">
                  <Input id="first-name" name="first-name" type="text" autoComplete="given-name" required />
                </div>
              </div>
              <div>
                <Label htmlFor="last-name">Apellido</Label>
                <div className="mt-2">
                  <Input id="last-name" name="last-name" type="text" autoComplete="family-name" required />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <div className="mt-2">
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <div className="mt-2">
                <Input id="password" name="password" type="password" autoComplete="new-password" required />
              </div>
            </div>

            <div>
              <Label htmlFor="password-confirm">Confirmar contraseña</Label>
              <div className="mt-2">
                <Input
                  id="password-confirm"
                  name="password-confirm"
                  type="password"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                Acepto los{" "}
                <Link to="/terms" className="text-rose-600 hover:text-rose-500">
                  términos y condiciones
                </Link>
              </Label>
            </div>

            <div>
              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
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
