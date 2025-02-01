"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface SellerCommandSearchProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SellerCommandSearch: React.FC<SellerCommandSearchProps> = ({
  open,
  setOpen,
}) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <>
      <div className="w-full relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search or type a command"
          className="w-full pl-8 pr-20 bg-muted"
          onFocus={() => {
            setOpen(true);
          }}
        />
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
          <p className="text-sm text-muted-foreground flex items-center">
            Press{" "}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 ml-1">
              <span className="text-xs">⌘</span>J
            </kbd>
          </p>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className="focus-within:ring-0 focus-within:border-none"
          placeholder="Type a command or search..."
        />
        <CommandList
          className="[&::-webkit-scrollbar]:size-2
    [&::-webkit-scrollbar-track]:bg-muted
    [&::-webkit-scrollbar-thumb]:bg-muted-foreground/50
    [&::-webkit-scrollbar-thumb]:rounded-full
    dark:[&::-webkit-scrollbar-track]:bg-muted
    dark:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/50"
        >
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SellerCommandSearch;
