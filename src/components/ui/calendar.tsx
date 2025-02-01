"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-y-0",
        month: "space-y-4",
        caption_label: "text-sm font-medium block text-center",
        nav: "space-x-1 flex items-center",
        button_previous: "absolute top-2 left-2",
        button_next: "absolute top-2 right-2",
        chevron: "stroke-1 fill-foreground",
        day_button:
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        disabled: "text-muted-foreground opacity-50",
        today: "bg-accent text-accent-foreground rounded-md",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        range_end: "bg-primary rounded-md",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        range_start: "bg-primary rounded-md",
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
