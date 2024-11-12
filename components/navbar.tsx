"use client"

import React from 'react'
import {Bell, ChevronDown, Menu, Search} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import {ModeToggle} from "@/components/modetoggle";

export default function Navbar() {
  const navItems = [
    {
      name: 'About',
      href: '/about',
      items: [
        {name: 'Our Story', href: '/about/story'},
        {name: 'Team', href: '/about/team'}
      ]
    },
    {
      name: 'Career',
      href: '/jobs',
      items: [
        {name: 'Zug', href: '/jobs/zug'},
        {name: 'Hongkong', href: '/jobs/hongkong'}
      ]
    },
    {
      name: 'Contact',
      href: '/about',
      items: []
    },
  ]

  return (
    <nav className="fixed w-full z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          <Link href="/">
              <Image src="/next.svg" alt="logo" width={100} height={100}/>
          </Link>
          <div className="ml-10 flex items-baseline space-x-4">
            {/*<ModeToggle />*/}
            {navItems.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild >
                  <Button variant="ghost" className="px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    {item.name}
                    {item.items.length > 0 ? <ChevronDown className="w-5 h-5 ml-2"/> : null}
                  </Button>
                </DropdownMenuTrigger>
                {
                  item.items.length > 0 ? (<DropdownMenuContent>
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link href={subItem.href} className="w-full">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  </DropdownMenuContent>) : null
                }
              </DropdownMenu>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}