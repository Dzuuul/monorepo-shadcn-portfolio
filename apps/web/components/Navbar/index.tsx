"use client";

import * as React from "react";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarAction } from "./NavbarAction";
import { NavbarMenuMobile } from "./NavbarMenuMobile";

export function AppHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-between px-4 py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
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
  );
}
