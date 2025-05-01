import { api } from "@/api";
import { clearToken, getTokenData } from "@/api/localApi";
import logo from '@/assets/logo.webp';
import { Button } from "@/components/ui/Button";
import { User } from "@/lib/types";
import { LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export function Navbar() {
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = () => {
    const tokenData = getTokenData()

    if (!tokenData?.userId) {
      return;
    }

    api.get(`/users/${tokenData.userId}?include=role`)
      .then(response => {
        setUser(response.data.user)
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      })
  }

  const isAdmin = user?.role?.permissions?.includes('admin');

  const logout = () => {
    clearToken()
    setUser(null)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex px-4 h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Tomodachi Events Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Tomodachi Events</span>
        </a>
        <nav className="hidden lg:flex items-center gap-6">
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
          {
            user ? (
              <div className="flex items-center gap-2">
                <Link to={isAdmin ? '/admin' : '/profile'}>
                  <span className="text-lg font-medium relative h-10 w-10 rounded-full bg-muted flex items-center justify-center bg-primary">
                    {user.name[0]}
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={logout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <>
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
              </>
            )
          }

          <Button variant="ghost" size="icon" className="lg:hidden">
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
  );
}
