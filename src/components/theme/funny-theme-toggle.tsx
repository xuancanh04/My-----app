"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FunnyThemeToggle({
  className,
}: {
  className?: string;
}) {
  const { setTheme, theme } = useTheme();

  const goLight = () => {
    setTheme("light");
  };
  const goDark = () => {
    setTheme("dark");
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("border-none bg-transparent", className)}
      onClick={theme === "light" ? goDark : goLight}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 pointer-events-none" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 pointer-events-none" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
