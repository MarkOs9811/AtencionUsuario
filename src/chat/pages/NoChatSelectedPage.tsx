import { cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"

export default function NoChatSelectedPage({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("grid min-h-full w-full place-items-center p-6", className)}
            {...props}
        >
            <div className="flex max-w-sm flex-col items-center gap-5 text-center">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <MessageCircle aria-hidden="true" className="size-8" strokeWidth={1.75} />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight">Ningún chat seleccionado</h1>
                    <p className="text-balance text-sm leading-relaxed text-muted-foreground">
                        Selecciona un contacto para comenzar a chatear.
                    </p>
                </div>
            </div>
        </div>
    )
}