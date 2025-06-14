"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuthStore } from "@/stores";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useRouter();
  const [authStatus, setAuthStatus] = useState<{
    isLoading: boolean;
    error: string | null;
  }>({
    isLoading: false,
    error: null,
  });
  const { login } = useAuthStore();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthStatus({ isLoading: true, error: null });
    login(credentials.username, credentials.password)
      .then((res) => {
        setAuthStatus({ isLoading: false, error: null });
        if (res.isAuthenticated) {
          navigate.replace("/");
        }
      })
      .catch((error) => {
        setAuthStatus({
          isLoading: false,
          error: "Invalid credentials. Please try again.",
        });
      });
  };

  return (
    <>
      {
        authStatus.isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
            <div className="loader">
                <div className="square" id="sq1"></div>
                <div className="square" id="sq2"></div>
                <div className="square" id="sq3"></div>
                <div className="square" id="sq4"></div>
                <div className="square" id="sq5"></div>
                <div className="square" id="sq6"></div>
                <div className="square" id="sq7"></div>
                <div className="square" id="sq8"></div>
                <div className="square" id="sq9"></div>
            </div>
          </div>
        )
      }
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Bienvenido</CardTitle>
            <CardDescription>
              Inicia sesión con tu cuenta de Lumen Billing
            </CardDescription>
            {authStatus.error && (
              <div className="text-red-500 text-sm mt-2">
                {authStatus.error}
              </div>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Email</Label>
                    <Input
                      id="username"
                      type="email"
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          username: e.target.value,
                        })
                      }
                      value={credentials.username}
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Contraseña</Label>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Olvidaste tu contraseña?
                      </a>
                    </div>
                    <Input
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          password: e.target.value,
                        })
                      }
                      value={credentials.password}
                      placeholder="********"
                      id="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Iniciar sesión
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        {/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          Al hacer clic en continuar, aceptas nuestros{" "}
          <a href="#">Términos de Servicio</a> y{" "}
          <a href="#">Política de Privacidad</a>.
        </div>
      </div>
    </>
  );
}
