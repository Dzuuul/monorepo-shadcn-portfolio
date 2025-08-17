"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";

import type { NavbarMenuItem } from "@workspace/mocks";

import mocks from "@workspace/mocks";
const navbarMenu: NavbarMenuItem[] = mocks.navbarMenu;

export function NavbarMenu() {
  const t = useTranslations();
  return (
    <NavigationMenu viewport={false} className="">
      <NavigationMenuList>
        {navbarMenu.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink
              href={item.href}
              className={navigationMenuTriggerStyle()}
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.href.split("#")[1];
                if (targetId) {
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              {t(item.label as any)}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
