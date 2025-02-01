"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronDown, Ellipsis } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import MainLogo from "@/components/common/MainLogo";
import * as Accordion from "@radix-ui/react-accordion";
import { menuItems } from "./sellerNavLinks";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";

const SellerSidenav = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <Ellipsis />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
        </VisuallyHidden.Root>
        <MainLogo />
        <ScrollArea className="h-screen pb-20">
          <div className="mt-4 flex flex-col pr-4 space-y-1">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.submenu ? (
                  <Accordion.Root type="single" collapsible>
                    <Accordion.Item value={`item-${index}`}>
                      <Accordion.Trigger
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "justify-start w-full text-base",
                          pathName === item.href &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.icon && <item.icon />}
                        {item.label}

                        <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200" />
                      </Accordion.Trigger>
                      <Accordion.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="flex flex-col pl-4">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "justify-start",
                                pathName === item.href &&
                                  "bg-accent text-accent-foreground"
                              )}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  </Accordion.Root>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "justify-start text-base",
                      pathName === item.href &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.icon && <item.icon />}
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default SellerSidenav;
