"use client"

import * as React from "react"
import { NavbarMenu } from "./NavbarMenu"
import { NavbarAction } from "./NavbarAction"
import { NavbarMenuMobile } from "./NavbarMenuMobile"

export function AppHeader() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2">
      {/* Mobile Menu Button */}
      <NavbarMenuMobile />
      {/* NavbarMenu: hidden on mobile, visible on desktop */}
      <div className="hidden md:flex items-center">
        <NavbarMenu />
      </div>
      {/* NavbarAction: selalu tampil */}
      <div className="flex items-center">
        <NavbarAction />
      </div>
    </header>
  )
}


