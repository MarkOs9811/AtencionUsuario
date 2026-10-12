import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import placeholderImage from "@/assets/placeholder.svg";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";

export function RegisterPage({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <div className="relative hidden bg-muted md:block">
                        <img
                            src={placeholderImage}
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                    <form className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Registro</h1>
                                <p className="text-balance text-muted-foreground">Crea una cuenta para comenzar</p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="fullName">Nombre completo</Label>
                                <Input id="fullName" type="text" placeholder="Marcos pari" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">Registrar</Button>
                        </div>
                    </form>

                </CardContent>
            </Card>
            <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="underline-offset-2 hover:underline">
                        <Badge variant="link" >Inicia sesión</Badge>
                    </Link>
                </p>
            </div>
        </div>
    )
}