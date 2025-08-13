"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

import type { NavbarMenuItem } from "@workspace/mocks"; 

import mocks from "@workspace/mocks";
const navbarMenu: NavbarMenuItem[] = mocks.navbarMenu;

export function NavbarMenu() {
  return (
    <NavigationMenu viewport={false} className="">
      <NavigationMenuList>
        {navbarMenu.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}


