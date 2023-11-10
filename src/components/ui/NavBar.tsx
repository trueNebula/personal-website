'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { headingFont } from '../../../public/fonts'

export default function NavBar() {
  return (
    <NavigationMenu className="absolute top-0 right-0 m-4 text-2xl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`
              ${navigationMenuTriggerStyle()} 
              ${headingFont.className} 
              `}
            >
              trNebula
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#introduction" legacyBehavior passHref>
            <NavigationMenuLink
              className={`
              ${navigationMenuTriggerStyle()} 
              ${headingFont.className} 
              `}
            >
              Introduction
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#projects" legacyBehavior passHref>
            <NavigationMenuLink
              className={`
              ${navigationMenuTriggerStyle()} 
              ${headingFont.className} 
              `}
            >
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#music" legacyBehavior passHref>
            <NavigationMenuLink
              className={`
              ${navigationMenuTriggerStyle()} 
              ${headingFont.className} 
              `}
            >
              Music
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={`
              ${navigationMenuTriggerStyle()} 
              ${headingFont.className} 
              `}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
