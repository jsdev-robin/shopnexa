"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { benefitData } from "./data/benefitData";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import {
  Check,
  ChevronRight,
  ChevronsUpDown,
  Search,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Checkbox from "@/components/ui/checkbox";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { dummyProducts } from "@/components/data/productsData";
import FilterByBarcode from "@/components/featured/FilterByBarcode";

const tableLength = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "40",
    label: "40",
  },
  {
    value: "50",
    label: "50",
  },
];

const SellerBenefitCards = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("10");
  const [data, setData] = useState(dummyProducts);
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    const filterData = dummyProducts.filter((product) =>
      product.barcode.includes(barcode)
    );
    setData(filterData);
  }, [barcode]);

  return (
    <section>
      <div className="container">
        <Card>
          <CardHeader className="p-4 lg:p-5">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex w-max pb-4 gap-x-4 lg:pb-5 lg:gap-x-5">
                {benefitData.map((item, index) => (
                  <Card key={index} className="p-4 w-60 relative group">
                    <Link
                      href={`/seller/dashboard?=${item.title.toLowerCase()}`}
                      className="absolute top-0 bottom-0 left-0 right-0"
                    />
                    <div className="flex flex-col items-center justify-center text-center gap-2">
                      <item.icon className="w-10 h-10 stroke-muted-foreground stroke-1" />
                      <div>
                        <Typography className="transition-all group-hover:text-primary">
                          {item.title}
                        </Typography>
                        <Typography className="text-pretty text-[13px] text-muted-foreground">
                          {item.description}
                        </Typography>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardHeader>
          <CardContent className="px-4 lg:px-5">
            <div className="space-y-4 lg:space-y-5">
              <div className="space-y-2">
                <Typography className="font-semibold">All products</Typography>
                <div className="flex items-center justify-between gap-x-2">
                  <div className="relative w-full sm:w-1/4">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products"
                      className="w-full rounded-lg bg-background placeholder:text-muted-foreground placeholder:text-sm pl-8"
                    />
                  </div>
                  <FilterByBarcode
                    onChange={(value) => {
                      setBarcode(value);
                    }}
                  />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 *:whitespace-nowrap">
                    <TableHead>
                      <Checkbox />
                    </TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Barcode</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>stocks</TableHead>
                    <TableHead>Sales/Day</TableHead>
                    <TableHead>Sales/Month</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.slice(0, 10).map((item, index) => (
                    <TableRow key={index} className="*:whitespace-nowrap">
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-x-2">
                          <Image
                            src={item.img.src}
                            alt={item.img.alt}
                            width={32}
                            height={32}
                            className="w-8 rounded-md"
                            priority
                          />
                          <Typography
                            variant="body1"
                            className="font-medium mr-8"
                          >
                            {item.item}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-x-2">
                          <span>{item.change.growth}%</span>
                          {Number(item.change.impact) > 5 ? (
                            <span className="text-primary flex items-center">
                              {item.change.impact}%
                              <TrendingUp size={16} className="ml-1" />
                            </span>
                          ) : (
                            <span className="text-red-500 flex items-center">
                              {item.change.impact}%
                              <TrendingDown size={16} className="ml-1" />
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.barcode}</TableCell>
                      <TableCell>{item.totalSales}</TableCell>
                      <TableCell>{item.revenue}</TableCell>
                      <TableCell>{item.stocks}</TableCell>
                      <TableCell>{item.salesPerDay}</TableCell>
                      <TableCell>{item.salesPerMonth}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-16 justify-between"
                    >
                      {value &&
                        tableLength.find(
                          (framework) => framework.value === value
                        )?.label}
                      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-16 p-0">
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {tableLength.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              {framework.label}
                              <Check
                                className={cn(
                                  "h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <Link
                  href="/"
                  className={cn(buttonVariants({ variant: "link" }))}
                >
                  All top products
                  <ChevronRight />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SellerBenefitCards;
