"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { menuItems } from "./particles/sellerNavLinks";

const SellerDashboardNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b py-1.5 hidden lg:block">
      <div className="container">
        <div className="flex items-center gap-x-2">
          {menuItems.map((item, index) => (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                {item.submenu ? (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-1 min-w-[12rem]">
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          href={sub.href}
                          legacyBehavior
                          passHref
                          key={subIdx}
                        >
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "w-full justify-start"
                            )}
                            active={pathname === sub.href}
                          >
                            {sub.label}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle())}
                        active={pathname === item.href}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SellerDashboardNavbar;
