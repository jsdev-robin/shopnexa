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
import Image from "next/image";

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
          {value ? (
            <div className="flex items-center">
              {options.find((option) => option.value === value)?.img && (
                <Image
                  src={
                    options.find((option) => option.value === value)?.img ?? ""
                  }
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 rounded-full mr-2"
                />
              )}
              {options.find((option) => option.value === value)?.label}
            </div>
          ) : (
            placeholder
          )}
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
          <CommandList className="whisper-scroll">
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
                  {option.img && (
                    <Image
                      src={option.img}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded-md object-cover"
                      priority
                    />
                  )}
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
