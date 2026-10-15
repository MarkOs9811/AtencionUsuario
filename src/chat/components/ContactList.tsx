import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";

import { getClients } from "@/fake/fake-data";

export const ContactList = () => {
  const { clientId } = useParams();

  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading && (
              <div className="flex items-center justify-center h-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-950" />
              </div>
            )}

            {clients?.map((client) => (
              <NavLink
                to={`/chat/${client.id}`}
                key={client.id}
                className={({ isActive }) => `
                    flex w-full items-center rounded-md px-2 py-2 transition-all duration-500
                    ${
                      isActive
                        ? "bg-gray-200 text-primary shadow-sm  ring-primary/20"
                        : "text-gray-700 hover:bg-muted/60"
                    }
                `}
              >
                <div
                  className={`mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full 
                                        text-xs font-medium ${clientId === client.id ? "bg-green-600 text-white" : "bg-gray-200"}`}
                >
                  {client.name.charAt(0).toUpperCase()}
                </div>
                <span
                  className={`${clientId === client.id ? "text-green-500 font-medium" : "text-gray-500"}`}
                >
                  {client.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
