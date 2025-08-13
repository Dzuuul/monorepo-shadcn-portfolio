"use client";

import { Languages, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";

import type { NavbarActionItem } from "@workspace/mocks";

import mocks from "@workspace/mocks";
import { Button } from "@workspace/ui/components/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@workspace/ui/components/dropdown-menu";
const navbarAction: NavbarActionItem[] = mocks.navbarAction;

const handleClickButton = (sectionId: string) => {
  const section = document.getElementById(sectionId.replace(/^#/, ""));
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export function NavbarAction() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Cek preferensi awal
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {navbarAction.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.type === "switch" ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            ) : item.type === "button" ? (
              <Button
                variant="outline"
                onClick={() => handleClickButton(item.href)}
              >
                {item.label}
              </Button>
            ) : item.type === "dropdown" ? (
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Languages className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuGroup>
                      {item.localization?.map((lang) => (
                        <DropdownMenuItem key={lang.id}>
                          <Link href={`/${lang.code}`}>
                            <img
                              src={lang.flag}
                              alt={lang.name}
                              className="inline-block mr-2"
                              width={20}
                              height={20}
                            />
                            {lang.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
