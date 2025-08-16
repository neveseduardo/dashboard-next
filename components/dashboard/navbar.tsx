"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { ModeToggle } from "../theme/theme-toggler";
import { useSidebar } from "@/contexts/sidebar-contexts";

export function Navbar() {
  const { collapsed, toggle } = useSidebar();


  return (
    <header className="flex items-center justify-between border-b px-6 py-3 bg-background h-[60px]">
      <div className="flex items-center gap-4">
        <Button
          aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
          variant="ghost"
          size="icon"
          onClick={toggle}
          className="cursor-pointer"
          >
          {collapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </Button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
