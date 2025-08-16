"use client";

import { Home, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/contexts/sidebar-contexts";

export function Sidebar() {
  const { collapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo + Título */}
      <div className="flex items-center gap-2 p-4">
        <div className="h-8 w-8 min-w-8 rounded bg-primary flex items-center justify-center text-white dark:text-black font-bold">
          L
        </div>

        {/* Aqui vem a mágica */}
        <span
          className={cn(
            "whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
            collapsed ? "max-w-0 opacity-0" : "max-w-xs opacity-100"
          )}
        >
          Minha Sidebar
        </span>
      </div>

      {/* Links */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-accent transition-colors"
        >
          <Home className="h-4 w-4 min-w-4" />
          <span
            className={cn(
              "whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
              collapsed ? "max-w-0 opacity-0" : "max-w-xs opacity-100"
            )}
          >
            Home
          </span>
        </a>

        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-accent transition-colors"
        >
          <Settings className="h-4 w-4 min-w-4" />
          <span
            className={cn(
              "whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
              collapsed ? "max-w-0 opacity-0" : "max-w-xs opacity-100"
            )}
          >
            Configurações
          </span>
        </a>
      </nav>
    </aside>
  );
}
