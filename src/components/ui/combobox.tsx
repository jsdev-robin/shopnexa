"use client";

import React, { useState } from "react";
import { useElementSize } from "@/hooks/use-element-size";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Options {
  label: string;
  value: string;
  img?: string | undefined;
}

interface ComboboxProps {
  options: Options[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  isSearch?: boolean;
  placeholder?: string;
}

const Combobox: React.FC<ComboboxProps> = ({
  options,
  onChange,
  defaultValue = "",
  isSearch = true,
  placeholder = "Select option...",
}) => {
  const { ref, width } = useElementSize();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between hover:bg-background data-[state=open]:ring-2 data-[state=open]:ring-ring data-[state=open]:ring-offset-2 data-[state=open]:border data-[state=open]:border-blue-500",
            !value && "text-muted-foreground"
          )}
        >
          {value
            ? options.find((option: Options) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-0"
        align="start"
        style={{ width: `${width}px` }}
      >
        <Command>
          {isSearch && (
            <CommandInput
              placeholder="Search option..."
              className="focus-within:ring-0 focus-within:border-none h-9"
            />
          )}
          <CommandList
            className="[&::-webkit-scrollbar]:size-2
[&::-webkit-scrollbar-track]:bg-border
[&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-corner]:bg-border/50 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option: Options) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    if (onChange) {
                      onChange(currentValue);
                    }
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
