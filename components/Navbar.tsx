"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const links = [
    { href: "/Topics", label: "Topics" },
    { href: "/", label: "Feature" },
    { href: "/Stories", label: "Stories & Voices" },
    { href: "/Events", label: "Opportunities & events" },
    { href: "/Resources", label: "Resources" },
    { href: "/Data", label: "Data" },
    { href: "/About", label: "About" },
  ];

  return (
    <header className="w-full bg-white border-b fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between px-5 h-16">
          {/* Left / Brand */}
          <div className="flex items-center">
            <Image
              src="/IPPLogo.webp"
              alt="prisonlogo"
              width={100}
              height={100}
            ></Image>
          </div>

          {/* Desktop nav (md and up) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavigationMenu className="flex items-center">
              <NavigationMenuList className="flex items-center gap-8">
                {links.map((l) => (
                  <NavigationMenuItem key={l.href}>
                    {/* render the library link as your next/link (so only one <a> exists) */}
                    <NavigationMenuLink asChild>
                      <Link
                        href={l.href}
                        className="hover:text-gray-900 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/Topics"
                      className="px-4 py-2 bg-gray-700 text-white rounded-md"
                    >
                      Contribute
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              {mobileOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-gray-700 font-medium py-2 hover:bg-gray-50 rounded-md"
              >
                {l.label}
              </Link>
            ))}

            <div>
              <Button asChild>
                <Link
                  href="/Topics"
                  onClick={() => setMobileOpen(false)}
                  className="w-full block text-center px-4 py-2 bg-gray-700 text-white rounded-md"
                >
                  Contribute
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
