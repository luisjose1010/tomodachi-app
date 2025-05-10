import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Separator } from '@/components/ui/Separator';
import { ArrowLeft, Calendar, CheckCircle2, CreditCard, Ticket, Users } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../Navbar';

function TicketsForm() {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Ticket className="mr-2 h-5 w-5 text-primary" />
          Selecciona tus Entradas
        </h2>

        <section className="mt-4 space-y-4">
          <RadioGroup defaultValue="standard">
            <Label htmlFor="standard" className="rounded-lg border border-border p-4 font-normal hover:bg-muted transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="standard" id="standard" className="mt-1" />
                <div className="flex-1">
                  <p className="text-base font-medium cursor-pointer">
                    Entrada Estándar - Viernes
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Acceso a todas las áreas y actividades del viernes 15 de junio.
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">15 de Junio, 2025</span>
                    </div>
                    <span className="font-bold text-lg">$50</span>
                  </div>
                </div>
              </div>
            </Label>

            <Label htmlFor="saturday" className="rounded-lg border border-border p-4 font-normal hover:bg-muted transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="saturday" id="saturday" className="mt-1" />
                <div className="flex-1">
                  <p className="text-base font-medium cursor-pointer">
                    Entrada Estándar - Sábado
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Acceso a todas las áreas y actividades del sábado 16 de junio.
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">16 de Junio, 2025</span>
                    </div>
                    <span className="font-bold text-lg">$60</span>
                  </div>
                </div>
              </div>
            </Label>

            <Label htmlFor="sunday" className="rounded-lg border border-border p-4 font-normal hover:bg-muted transition-colors cursor-pointer">
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="sunday" id="sunday" className="mt-1" />
                <div className="flex-1">
                  <p className="text-base font-medium cursor-pointer">
                    Entrada Estándar - Domingo
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Acceso a todas las áreas y actividades del domingo 17 de junio.
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">17 de Junio, 2025</span>
                    </div>
                    <span className="font-bold text-lg">$50</span>
                  </div>
                </div>
              </div>
            </Label>
          </RadioGroup>

          <div className="pt-4">
            <Label htmlFor="quantity" className="mb-2 block text-sm font-medium">
              Cantidad
            </Label>
            <div className="flex items-center gap-4">
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Cantidad" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">Máximo 10 entradas por persona</span>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}

function UserForm() {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Users className="mr-2 h-5 w-5 text-primary" />
          Información Personal
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">Nombre</Label>
            <Input id="first-name" placeholder="Tu nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Apellido</Label>
            <Input id="last-name" placeholder="Tu apellido" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
            <p className="text-xs text-muted-foreground">
              Enviaremos la confirmación y las entradas a este correo electrónico.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">País</Label>
            <Select defaultValue="mexico">
              <SelectTrigger id="country">
                <SelectValue placeholder="Selecciona tu país" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mexico">México</SelectItem>
                <SelectItem value="usa">Estados Unidos</SelectItem>
                <SelectItem value="canada">Canadá</SelectItem>
                <SelectItem value="spain">España</SelectItem>
                <SelectItem value="other">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </Card>
  );
}

function PaymentForm() {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <CreditCard className="mr-2 h-5 w-5 text-primary" />
          Información de Pago
        </h2>

        <div className="space-y-4">
          <div className="grid gap-4">
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
              <div className="relative rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="card" id="card" className="absolute right-2 top-2" />
                <div className="flex flex-col items-center justify-between gap-1">
                  <CreditCard className="mb-3 h-6 w-6" />
                  <Label htmlFor="card" className="text-xs font-medium">
                    Tarjeta de Crédito
                  </Label>
                </div>
              </div>
              <div className="relative rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="paypal" id="paypal" className="absolute right-2 top-2" />
                <div className="flex flex-col items-center justify-between gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="mb-3 h-6 w-6 fill-current"
                  >
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.813 4.643h-2.189c-.988 0-1.86.713-2.005 1.696l-1.12 7.106c-.083.53.277 1.026.82 1.026h4.604c.576 0 1.1-.394 1.184-.966l.035-.205.7-4.44.045-.25c.086-.572.567-.966 1.142-.966h.72c4.658 0 8.306-1.896 9.363-7.372.44-2.28.21-4.144-1.838-5.985z" />
                  </svg>
                  <Label htmlFor="paypal" className="text-xs font-medium">
                    PayPal
                  </Label>
                </div>
              </div>
              <div className="relative rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="transfer" id="transfer" className="absolute right-2 top-2" />
                <div className="flex flex-col items-center justify-between gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <Label htmlFor="transfer" className="text-xs font-medium">
                    Transferencia
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre en la Tarjeta</Label>
              <Input id="name" placeholder="Nombre como aparece en la tarjeta" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Número de Tarjeta</Label>
              <Input id="card-number" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Fecha de Expiración</Label>
                <Input id="expiry" placeholder="MM/AA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ProgressSteps() {
  return (
    <div className="mb-10 hidden md:block">
      <div className="relative">
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted"></div>
        <ol className="relative z-10 flex justify-between">
          <li className="flex items-center gap-2 bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Selección</span>
          </li>
          <li className="flex items-center gap-2 bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span className="text-xs font-bold">2</span>
            </div>
            <span className="text-sm font-medium">Datos</span>
          </li>
          <li className="flex items-center gap-2 bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <span className="text-xs font-bold">3</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Pago</span>
          </li>
          <li className="flex items-center gap-2 bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <span className="text-xs font-bold">4</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Confirmación</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="lg:col-span-1">
      <Card className="rounded-lg border bg-card text-card-foreground shadow-sm sticky top-20">
        <CardHeader className="pb-3">
          <CardTitle>Resumen de la Orden</CardTitle>
          <CardDescription>Revisa los detalles de tu compra</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">Entrada Premium - Fin de Semana</p>
                <p className="text-sm text-muted-foreground">15-17 de Junio, 2025</p>
                <p className="text-sm text-muted-foreground">Cantidad: 1</p>
              </div>
              <p className="font-medium">$120.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="font-medium">$120.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Impuestos</p>
              <p className="font-medium">$19.20</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Cargo por servicio</p>
              <p className="font-medium">$5.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-bold">
              <p>Total</p>
              <p>$144.20</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Completar Compra</Button>
          <p className="text-xs text-center text-muted-foreground">
            Al completar tu compra, aceptas nuestros{' '}
            <Link to="/terms" className="underline underline-offset-2 hover:text-foreground">
              Términos y Condiciones
            </Link>{' '}
            y{' '}
            <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground">
              Política de Privacidad
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export function TicketsPurchase() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 py-10">
        <div className="px-4 md:px-6">
          <div className="mb-8">
            <Link
              to="/#tickets"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Entradas
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Comprar Entradas</h1>
            <p className="mt-2 text-muted-foreground">
              Selecciona tus entradas para Tomodachi Events 2025 y vive una experiencia inolvidable.
            </p>
          </div>

          {/* Progress Steps */}
          <ProgressSteps />

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Ticket Selection */}
              <TicketsForm />

              {/* Personal Information */}
              <UserForm />

              {/* Payment Information */}
              <PaymentForm />
            </div>

            {/* Order Summary */}
            <OrderSummary />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 border-t mt-12">
        <div className="px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-2">Ayuda</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Políticas</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Reembolsos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Evento</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Programación
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Invitados
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Ubicación
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Síguenos</h3>
              <div className="flex gap-4 mt-2">
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Tomodachi Events. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
