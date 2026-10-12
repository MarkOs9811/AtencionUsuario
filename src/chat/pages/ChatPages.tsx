import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, MessageCircle, Send, UserRound } from "lucide-react"
import { useParams } from "react-router"
import { getClientMessages } from "@/fake/fake-data"
import { useQuery } from "@tanstack/react-query"



export default function ChatPages() {

    const { clientId } = useParams();

    const [input, setInput] = useState("")

    const { data: messages = [], isLoading } = useQuery({
        queryKey: ['messages', clientId],
        queryFn: () => getClientMessages(clientId!),
        enabled: !!clientId,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-950" />
            </div>
        )
    }

    return (
        <div className="flex min-h-0 flex-1 flex-col bg-background">
            <ScrollArea className="flex-1">
                {messages.length > 0 ? (
                    <div className="mx-auto flex max-w-3xl flex-col gap-6 p-5 sm:p-8">
                        {messages.map((message, index) => {
                            const isAgent = message.sender === "agent"

                            return (
                                <div key={index} className={`flex gap-3 ${isAgent ? "" : "flex-row-reverse"}`}>
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground">
                                        {isAgent ? <Bot className="h-4 w-4" /> : <UserRound className="h-4 w-4" />}
                                    </div>
                                    <div className={`flex max-w-[85%] flex-col gap-1.5 ${isAgent ? "items-start" : "items-end"}`}>
                                        <div className={`flex items-center gap-2 text-xs text-muted-foreground ${isAgent ? "" : "flex-row-reverse"}`}>
                                            <span className="font-medium text-foreground">{isAgent ? "NexTalk" : "G5"}</span>
                                            <span>{message.createdAt.toLocaleString()}</span>
                                        </div>
                                        <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${isAgent ? "rounded-tl-sm bg-muted" : "rounded-tr-sm bg-primary text-primary-foreground"}`}>
                                            <p className="whitespace-pre-wrap">{message.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 px-6 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border text-muted-foreground">
                            <MessageCircle className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-muted-foreground">No hay mensajes. Selecciona una conversación para ver los detalles.</p>
                    </div>
                )}
            </ScrollArea>

            <div className="border-t bg-background p-4">
                <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-xl border bg-background p-2 shadow-sm focus-within:ring-2 focus-within:ring-ring/20">
                    <Textarea
                        placeholder="Escribe un mensaje como cliente..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="min-h-10 resize-none border-0 bg-transparent px-2 py-2 shadow-none focus-visible:ring-0"
                    />
                    <Button size="icon" className="h-10 w-10 shrink-0 rounded-lg" aria-label="Enviar mensaje">
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

