"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Building2,
  Check,
  ChevronsUpDown,
  Edit,
  Eye,
  EyeOff,
  Filter,
  Globe,
  Import,
  Plus,
  Printer,
  Search,
  Sheet,
  Table2,
  Trash,
  Upload,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Checkbox from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverItem,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { useReactToPrint } from "react-to-print";
import FilterByBarcode from "@/components/featured/FilterByBarcode";
import Image from "next/image";
import { dummyProducts } from "@/components/data/productsData";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import useRowSelection from "@/hooks/useRowSelection";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import useLoadingSimulator from "@/hooks/useLoadingSimulator";
import SellerProductListSkeleton from "./skeleton/SellerProductListSkeleton";
import useExcelExport from "@/hooks/useExcelExport";
import { Switch } from "@/components/ui/switch";
import TableEmptyState from "@/components/ui/table-empty-state";
import { Separator } from "@/components/ui/separator";

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

interface ProductImage {
  alt: string;
  src: string;
}

interface ProductChange {
  growth: string;
  impact: string;
}

interface President {
  item: string;
  category: string;
  stocks: string;
  sku: string;
  barcode: string;
  price: string;
  salesPerDay: number;
  salesPerMonth: number;
  rating: number;
  totalSales: number;
  revenue: string;
  lastUpdate: string;
  availableIn: string[];
  change: ProductChange;
  img: ProductImage;
}

const SellerProudcts = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("10");
  const contentRef = useRef<HTMLTableElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const isLoading = useLoadingSimulator(1000);
  const {
    // selectedRows,
    toggleRowSelection,
    isRowSelected,
    isAllSelected,
    handleSelectAllChange,
    selectedRowsCount,
  } = useRowSelection({
    totalRows: dummyProducts.length,
  });
  const [pres, setPres] = useState<President[]>([]);

  const exportFile = useExcelExport({ pres, fileName: "products.xlsx" });

  useEffect(() => {
    setPres(dummyProducts);
  }, []);

  return (
    <section>
      <div className="container">
        <div className="space-y-4 lg:space-y-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/seller/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Card>
            <CardHeader className="border-b p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="text-xl">All Products List</CardTitle>
                <div className="flex flex-wrap items-center gap-2 ml-auto">
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8"
                        disabled={isLoading}
                      >
                        <Sheet />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="py-1">
                      <p>Google Sheet</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8"
                        disabled={isLoading}
                      >
                        <Upload />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="py-1">
                      <p>Upload</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8"
                        onClick={exportFile}
                        disabled={isLoading}
                      >
                        <Import />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="py-1">
                      <p>Import</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8"
                        onClick={() => reactToPrintFn()}
                        disabled={isLoading}
                      >
                        <Printer />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="py-1">
                      <p>Print</p>
                    </TooltipContent>
                  </Tooltip>
                  <FilterByBarcode disabled={isLoading} />
                  <Popover>
                    <PopoverTrigger
                      asChild
                      className="data-[state=open]:bg-secondary/80"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="h-8"
                        disabled={isLoading}
                      >
                        <Filter />
                        Filter
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-44 p-1" align="end">
                      <PopoverItem>
                        <Checkbox id="name" />
                        <Label htmlFor="name" className="flex-1">
                          Name
                        </Label>
                      </PopoverItem>
                      <PopoverItem>
                        <Checkbox id="category" />
                        <Label htmlFor="category" className="flex-1">
                          Category
                        </Label>
                      </PopoverItem>
                      <PopoverItem>
                        <Checkbox id="Stocks" />
                        <Label htmlFor="Stocks" className="flex-1">
                          Stocks
                        </Label>
                      </PopoverItem>
                    </PopoverContent>
                  </Popover>
                  <Link
                    href="/seller/dashboard/product/create"
                    className={cn(buttonVariants({ size: "sm" }), "h-8")}
                  >
                    <Plus />
                    Add Product
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Tabs defaultValue="all" className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <TabsList className="flex-wrap h-auto">
                    {["all", "Archived", "Publish", "Unpublish"].map(
                      (item, index) => (
                        <TabsTrigger
                          key={index}
                          value={item}
                          className="capitalize"
                        >
                          {item}
                        </TabsTrigger>
                      )
                    )}
                  </TabsList>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search or type"
                      className="pl-8"
                    />
                  </div>
                </div>
                <TabsContent value="all">
                  {isLoading ? (
                    <SellerProductListSkeleton />
                  ) : (
                    <div className="space-y-4">
                      <Table
                        ref={contentRef}
                        className="h-[75vh] overflow-scroll scroll-smooth [&::-webkit-scrollbar]:size-3
    [&::-webkit-scrollbar-track]:bg-border
    [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-corner]:bg-border/50"
                      >
                        <TableHeader className="sticky top-0 bg-muted z-10 border-x">
                          <TableRow className="whitespace-nowrap">
                            <TableHead>
                              <div className="flex items-center gap-x-2">
                                <Table2 size={16} />
                                Manage
                              </div>
                            </TableHead>
                            <TableHead>
                              <Checkbox
                                onChange={handleSelectAllChange}
                                checked={isAllSelected}
                              />
                            </TableHead>
                            <TableHead>Publish</TableHead>
                            <TableHead>
                              <Popover>
                                <PopoverTrigger
                                  asChild
                                  className="data-[state=open]:bg-accent data-[state=open]:text-foreground"
                                >
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className={cn("w-full justify-start")}
                                  >
                                    Product
                                    <ChevronsUpDown className="w-4 h-4" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-40 p-1"
                                  align="start"
                                >
                                  {[
                                    {
                                      icon: ArrowUp,
                                      label: "Import Contact",
                                    },
                                    {
                                      icon: ArrowDown,
                                      label: "Sort descending",
                                    },
                                    { icon: ArrowLeft, label: "Move left" },
                                    {
                                      icon: ArrowRight,
                                      label: "Move right",
                                    },
                                  ].map((button, index) => (
                                    <PopoverItem key={index}>
                                      <button.icon className="w-4 h-4" />
                                      {button.label}
                                    </PopoverItem>
                                  ))}
                                  <Separator className="my-1" />
                                  <PopoverItem>
                                    <EyeOff className="w-4 h-4" />
                                    Hide in view
                                  </PopoverItem>
                                </PopoverContent>
                              </Popover>
                            </TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Stocks</TableHead>
                            <TableHead>Sales/Day</TableHead>
                            <TableHead>Sales/Month</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Sales</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>SKU</TableHead>
                            <TableHead>Available In</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {dummyProducts.map((item, index) => (
                            <TableRow
                              key={index}
                              className={cn("whitespace-nowrap *:border", {
                                "bg-muted/50": isRowSelected(index),
                              })}
                            >
                              <TableCell>
                                <div className="flex items-center gap-x-2">
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    className="size-6"
                                  >
                                    <Trash size={16} />
                                  </Button>
                                  <Link
                                    href="/seller/dashboard/product/view/dfdd"
                                    className={cn(
                                      buttonVariants({
                                        variant: "secondary",
                                        size: "sm",
                                      }),
                                      "size-6"
                                    )}
                                  >
                                    <Eye size={16} />
                                  </Link>
                                  <Link
                                    href="/seller/dashboard/product/update/dfd"
                                    className={cn(
                                      buttonVariants({
                                        variant: "secondary",
                                        size: "sm",
                                      }),
                                      "size-6"
                                    )}
                                  >
                                    <Edit size={16} />
                                  </Link>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Checkbox
                                  role="checkbox"
                                  checked={isRowSelected(index)}
                                  onChange={() => toggleRowSelection(index)}
                                />
                              </TableCell>
                              <TableCell>
                                <Switch />
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-x-2">
                                  <Image
                                    src={item.img.src}
                                    alt={item.img.alt}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-md object-cover"
                                    priority
                                  />
                                  <Typography
                                    variant="subtitle2"
                                    className="font-medium mr-8"
                                  >
                                    {item.item}
                                  </Typography>
                                </div>
                              </TableCell>
                              <TableCell>{item.category}</TableCell>
                              <TableCell>{item.stocks}</TableCell>
                              <TableCell>{item.salesPerDay}</TableCell>
                              <TableCell>{item.salesPerMonth}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-x-2">
                                  ({item.rating.toFixed(1)})
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-x-2">
                                  {item.totalSales}
                                </div>
                              </TableCell>
                              <TableCell>{item.revenue}</TableCell>
                              <TableCell>{item.sku}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-x-2">
                                  {item.availableIn.map((avai, avIdx) => (
                                    <span
                                      key={avIdx}
                                      className="inline-flex items-center gap-x-1 px-2 py-1.5 bg-muted rounded-md text-xs"
                                    >
                                      {avai === "Online" ? (
                                        <Globe
                                          size={12}
                                          className="stroke-primary"
                                        />
                                      ) : (
                                        <Building2 size={12} />
                                      )}
                                      {avai}
                                    </span>
                                  ))}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <Typography
                          variant="subtitle2"
                          className="text-muted-foreground"
                        >
                          {selectedRowsCount} of {dummyProducts.length} row(s)
                          selected.
                        </Typography>
                        <div className="flex flex-wrap items-center justify-between w-full gap-4 sm:justify-normal sm:w-auto">
                          <div className="flex items-center gap-2">
                            <Typography
                              variant="subtitle2"
                              className="hidden sm:block"
                            >
                              Rows per page
                            </Typography>
                            <Popover open={open} onOpenChange={setOpen}>
                              <PopoverTrigger
                                asChild
                                className="data-[state=open]:bg-muted"
                              >
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={open}
                                  className="w-16 h-8 justify-between"
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
                                            setValue(currentValue);
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
                          </div>
                          <Typography
                            variant="subtitle2"
                            className="hidden sm:block"
                          >
                            Page 1 of 3
                          </Typography>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              className="hidden h-8 w-8 p-0 lg:flex"
                            >
                              <span className="sr-only">Go to first page</span>
                              <DoubleArrowLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="h-8 w-8 p-0">
                              <span className="sr-only">
                                Go to previous page
                              </span>
                              <ChevronLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="h-8 w-8 p-0">
                              <span className="sr-only">Go to next page</span>
                              <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              className="hidden h-8 w-8 p-0 lg:flex"
                            >
                              <span className="sr-only">Go to last page</span>
                              <DoubleArrowRightIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="Archived">
                  <TableEmptyState />
                </TabsContent>
                <TabsContent value="Publish">
                  <TableEmptyState />
                </TabsContent>
                <TabsContent value="Unpublish">
                  <TableEmptyState />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SellerProudcts;
