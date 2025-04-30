import { Link } from "react-router"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { CalendarDays, MapPin, Users, LogIn } from "lucide-react"
import logo from '@/assets/logo.webp'
import video from '@/assets/video1.mp4'

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex px-4 h-16 items-center justify-between">
          <a href="/#" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Tomodachi Events Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Tomodachi Events</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              Sobre el Evento
            </a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary">
              Programación
            </a>
            <a href="#sponsors" className="text-sm font-medium hover:text-primary">
              Patrocinadores
            </a>
            <a href="#tickets" className="text-sm font-medium hover:text-primary">
              Entradas
            </a>
            <a href="#stands" className="text-sm font-medium hover:text-primary">
              Stands
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outlineDark" size="sm" className="hidden md:flex gap-2">
                <LogIn className="h-4 w-4" />
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="hidden md:flex">
                Registrarse
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative w-full py-12 md:py-24 lg:py-32 bg-[url('/src/assets/banner.webp')] bg-position-[0_25%] bg-cover`}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Tomodachi Events 2025
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl">
              El evento de anime más grande del año. Únete a nosotros para celebrar la cultura japonesa, conocer a tus
              artistas favoritos y vivir una experiencia inolvidable.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Comprar Entradas
            </Button>
            <Button variant="outline" size="lg">
              Ver Programación
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              <span>15-17 Junio, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Centro de Convenciones</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>+5000 Asistentes</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 mt-6 lg:py-24">
        <div className="space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/15 px-3 py-1 text-sm text-primary">Sobre el Evento</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                La Celebración del Anime y la Cultura Japonesa
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tomodachi Events es un evento anual dedicado a los amantes del anime, manga, videojuegos y la cultura
                japonesa. Con invitados especiales, paneles, concursos de cosplay, zonas de juego y mucho más.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-3 lg:grid-cols-2 lg:gap-12">
            <video
              src={video}
              width={400}
              autoPlay
              loop
              muted
              className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center sm:w-full md:w-2/3 lg:w-1/2 lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Invitados Especiales</h3>
                    <p className="text-muted-foreground">
                      Conoce a tus actores de doblaje, ilustradores y creadores favoritos del mundo del anime.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Concurso de Cosplay</h3>
                    <p className="text-muted-foreground">
                      Participa en nuestro famoso concurso de cosplay con premios increíbles.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Zona de Juegos</h3>
                    <p className="text-muted-foreground">
                      Disfruta de los últimos videojuegos japoneses y participa en torneos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="w-full py-12 px-6 lg:py-24 bg-muted">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/15 px-3 py-1 text-sm text-primary">Programación</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tres Días de Actividades</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explora nuestra programación completa y planifica tu visita para no perderte nada.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Day 1 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 bg-secondary text-white rounded-t-lg">
                <h3 className="text-2xl font-bold">Día 1 - Viernes</h3>
                <p className="text-rose-100">15 de Junio, 2025</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">10:00 - 12:00</p>
                  <h4 className="font-medium">Ceremonia de Apertura</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">13:00 - 15:00</p>
                  <h4 className="font-medium">Panel con Actores de Doblaje</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">16:00 - 18:00</p>
                  <h4 className="font-medium">Concurso de Karaoke</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">19:00 - 21:00</p>
                  <h4 className="font-medium">Proyección de Anime</h4>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button variant="outlineDark" className="w-full">
                  Ver Detalles
                </Button>
              </div>
            </div>

            {/* Day 2 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 bg-secondary text-white rounded-t-lg">
                <h3 className="text-2xl font-bold">Día 2 - Sábado</h3>
                <p className="text-rose-100">16 de Junio, 2025</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">10:00 - 13:00</p>
                  <h4 className="font-medium">Concurso de Cosplay</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">14:00 - 16:00</p>
                  <h4 className="font-medium">Firma de Autógrafos</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">17:00 - 19:00</p>
                  <h4 className="font-medium">Torneo de Videojuegos</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">20:00 - 23:00</p>
                  <h4 className="font-medium">Fiesta Temática</h4>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button variant="outlineDark" className="w-full">
                  Ver Detalles
                </Button>
              </div>
            </div>

            {/* Day 3 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 bg-secondary  text-white rounded-t-lg">
                <h3 className="text-2xl font-bold">Día 3 - Domingo</h3>
                <p className="text-rose-100">17 de Junio, 2025</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">10:00 - 12:00</p>
                  <h4 className="font-medium">Taller de Dibujo Manga</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">13:00 - 15:00</p>
                  <h4 className="font-medium">Panel de Industria</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">16:00 - 18:00</p>
                  <h4 className="font-medium">Concurso de Trivias</h4>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">19:00 - 21:00</p>
                  <h4 className="font-medium">Ceremonia de Clausura</h4>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button variant="outlineDark" className="w-full">
                  Ver Detalles
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button>Descargar Programa Completo</Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="w-full py-12 lg:py-24">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/15 px-3 py-1 text-sm text-primary">Patrocinadores</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Patrocinadores</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Agradecemos a todas las marcas que hacen posible este evento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center px-4 py-2">
                <img
                  src={logo}
                  alt={`Patrocinador ${i}`}
                  className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-4">Conviértete en Patrocinador</h3>
            <p className="mx-auto max-w-[600px] mb-6">
              ¿Interesado en patrocinar nuestro evento? Contáctanos para conocer los diferentes paquetes disponibles.
            </p>
            <Button variant="outlineDark">Información para Patrocinadores</Button>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="w-full mb-6 py-12 md:mb-0 lg:py-24 bg-muted">
        <div className="px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/15 px-3 py-1 text-sm text-primary">Entradas</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Asegura tu Lugar</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Elige el tipo de entrada que mejor se adapte a ti y vive la experiencia Tomodachi Events.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Standard Ticket */}
            <div className="flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-primary/85 to-primary text-white">
                <h3 className="text-2xl font-bold">Entrada Estándar</h3>
                <div className="mt-4 text-3xl font-bold">$50</div>
                <p className="text-rose-100">Acceso por un día</p>
              </div>
              <ul className="space-y-2 px-6 pt-6">
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Acceso a todas las áreas
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Participación en actividades
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Programa digital
                </li>
              </ul>
              <div className="p-6">
                <Button className="w-full mt-6">Comprar Ahora</Button>
              </div>
            </div>

            {/* Premium Ticket */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold uppercase py-1 px-2 rounded-bl-lg text-white">
                Popular
              </div>
              <div className="p-6 bg-gradient-to-r from-secondary/80 to-secondary text-white">
                <h3 className="text-2xl font-bold">Entrada Premium</h3>
                <div className="mt-4 text-3xl font-bold">$120</div>
                <p className="text-violet-100">Acceso por tres días</p>
              </div>
              <ul className="space-y-2 px-6 pt-6">
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Acceso completo por 3 días
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Bolsa de regalo exclusiva
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Acceso prioritario a paneles
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Descuentos en mercancía
                </li>
              </ul>
              <div className="p-6">
                <Button variant="secondary" className="w-full mt-6">Comprar Ahora</Button>
              </div>
            </div>

            {/* VIP Ticket */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-accent-dark/85 to-accent-dark text-white">
                <h3 className="text-2xl font-bold">Entrada VIP</h3>
                <div className="mt-4 text-3xl font-bold">$200</div>
                <p className="text-amber-100">Experiencia completa</p>
              </div>
              <ul className="space-y-2 px-6 pt-6">
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Todo lo incluido en Premium
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Meet & Greet con invitados
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Asientos reservados
                </li>
                <li className="flex items-center">
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
                    className="h-4 w-4 mr-2 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Fiesta VIP exclusiva
                </li>
              </ul>
              <div className="p-6">
                <Button className="w-full mt-6 bg-accent-dark/85 hover:bg-accent-dark">Comprar Ahora</Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Tienes un grupo grande? Contáctanos para descuentos especiales.
            </p>
            <Button variant="outlineDark">Contactar para Grupos</Button>
          </div>
        </div>
      </section>

      {/* Login/Register CTA */}
      <section className="w-full py-12 md:py-12 lg:py-24 bg-gradient-to-r from-rose-500 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Regístrate para una Mejor Experiencia
              </h2>
              <p className="mt-4 text-lg text-rose-100 md:text-xl">
                Crea una cuenta para comprar entradas, guardar tu itinerario personalizado y recibir actualizaciones
                exclusivas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="tertiary" size="lg">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mantente Informado</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones sobre el evento.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Ingresa tu email" className="max-w-lg flex-1" />
              <Button type="submit">
                Suscribirse
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Nunca compartiremos tu correo electrónico.{" "}
              <Link to="/privacy" className="underline underline-offset-2">
                Política de Privacidad
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t">
        <div className="">
          <div className="grid px-4 md:px-8 lg:px-12 xl:px-20 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logo}
                  alt="Tomodachi Events Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Tomodachi Events</span>
              </div>
              <p className="text-sm text-muted-foreground">
                El evento de anime más grande del año. Celebrando la cultura japonesa y el anime.
              </p>
              <div className="flex gap-4 mt-4">
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#" className="text-sm text-muted-foreground hover:text-foreground">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                    Sobre el Evento
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="text-sm text-muted-foreground hover:text-foreground">
                    Programación
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="text-sm text-muted-foreground hover:text-foreground">
                    Patrocinadores
                  </a>
                </li>
                <li>
                  <a href="#tickets" className="text-sm text-muted-foreground hover:text-foreground">
                    Entradas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Información</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contacto</h3>
              <address className="not-italic text-sm text-muted-foreground">
                <p>Centro de Convenciones</p>
                <p>Calle Principal 123</p>
                <p>Ciudad, CP 12345</p>
                <p className="mt-2">Email: info@tomodachievents.com</p>
                <p>Teléfono: +1 (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Tomodachi Events. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
