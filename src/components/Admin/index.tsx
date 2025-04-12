import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Ticket, Calendar, BarChart3, Settings, PlusCircle, FileText, MessageSquare, Bell } from "lucide-react"

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <Link to="/" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-rose-600 flex items-center justify-center text-white">TE</span>
              <span>Tomodachi Events</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Mensajes</span>
            </Button>
            <div className="relative h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
              A
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 outline-2 outline-background"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="w-64 border-r bg-muted/40 p-4 hidden md:block">
          <nav className="grid gap-2">
            <Button variant="ghost" className="justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <Users className="h-4 w-4" />
              Usuarios
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <Ticket className="h-4 w-4" />
              Entradas
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <Calendar className="h-4 w-4" />
              Programación
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <FileText className="h-4 w-4" />
              Informes
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <Settings className="h-4 w-4" />
              Configuración
            </Button>
          </nav>
        </div>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Dashboard de Administración</h1>
            <Button className="bg-rose-600 hover:bg-rose-700">
              <PlusCircle className="h-4 w-4 mr-2" />
              Nueva Acción
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total de Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Entradas Vendidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0</div>
                <p className="text-xs text-muted-foreground">+0% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Actividades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">+0 desde la semana pasada</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="analytics">Analíticas</TabsTrigger>
              <TabsTrigger value="reports">Informes</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Ventas de Entradas</CardTitle>
                    <CardDescription>Ventas de entradas por tipo en los últimos 30 días</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
                      [Gráfico de Ventas]
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Actividades Recientes</CardTitle>
                    <CardDescription>Últimas actividades en la plataforma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                            <Users className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Usuario nuevo registrado</p>
                            <p className="text-xs text-muted-foreground">Hace 2 minutos</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Usuarios por Tipo</CardTitle>
                    <CardDescription>Distribución de usuarios por tipo de cuenta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
                      [Gráfico de Usuarios]
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Entradas por Categoría</CardTitle>
                    <CardDescription>Distribución de ventas por categoría</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
                      [Gráfico de Categorías]
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Próximos Eventos</CardTitle>
                    <CardDescription>Eventos programados para los próximos días</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Panel de Discusión</p>
                            <p className="text-xs text-muted-foreground">Mañana, 15:00 - 17:00</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      Ver todos los eventos
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analíticas</CardTitle>
                  <CardDescription>Estadísticas detalladas y análisis de datos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] bg-muted/20 rounded-md flex items-center justify-center">
                    [Contenido de Analíticas]
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informes</CardTitle>
                  <CardDescription>Informes generados y disponibles para descargar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] bg-muted/20 rounded-md flex items-center justify-center">
                    [Contenido de Informes]
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notificaciones</CardTitle>
                  <CardDescription>Gestiona las notificaciones del sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] bg-muted/20 rounded-md flex items-center justify-center">
                    [Contenido de Notificaciones]
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
