"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { discountData } from "@/components/data/discount";
import Checkbox from "@/components/ui/checkbox";
import {
  CalendarRangeIcon,
  ChevronDown,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDown,
  CircleCheck,
  Download,
  Edit,
  Eye,
  FilePenLine,
  Gavel,
  Square,
  Trash,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useRowSelection from "@/hooks/useRowSelection";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import useLoadingSimulator from "@/hooks/useLoadingSimulator";
import SellerDiscountSkeleton from "./particles/SellerDiscountSkeleton";
import SellerDiscountError from "./particles/SellerDiscountError";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CartesianGrid, Legend, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import DiscountCreateForm from "./particles/DiscountCreateForm";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const SellerDiscount = () => {
  const isLoading = useLoadingSimulator(1000);
  const error = false;
  const {
    // selectedRows,
    toggleRowSelection,
    isRowSelected,
    isAllSelected,
    handleSelectAllChange,
    selectedRowsCount,
  } = useRowSelection({
    totalRows: discountData.length,
  });

  return (
    <section>
      <div className="container">
        <div className="space-y-4 lg:space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/seller/dashboard">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Discounts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <DiscountCreateForm />
          </div>
          <Card>
            <CardHeader className="border-b p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Popover>
                  <PopoverTrigger
                    asChild
                    className="data-[state=open]:bg-secondary"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      <CalendarRangeIcon />
                      25 Jul, 2025 - 25 Aug, 2025
                      <ChevronDown />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <div className="flex gap-4">
                      <Calendar mode="range" />
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center">
                    <Square className="h-3 w-3 fill-blue-500 stroke-blue-500 mr-1" />
                    <Typography variant="caption">Desktop</Typography>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-3 w-3 fill-green-500 stroke-green-500 mr-1" />
                    <Typography variant="caption">Mobile</Typography>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <ChartContainer
                config={chartConfig}
                className="md:w-full md:h-80"
              >
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  {/* <YAxis /> */}
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Legend />
                  <Line
                    dataKey="desktop"
                    type="monotone"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="mobile"
                    type="monotone"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="border-b p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="text-xl">Discount List</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {error ? (
                  <SellerDiscountError />
                ) : isLoading === true ? (
                  <SellerDiscountSkeleton />
                ) : (
                  <Table className="max-lg:scrollbar lg:poem">
                    <colgroup>
                      <col span={3} />
                      <col span={1} className="bg-muted/25" />
                    </colgroup>
                    <TableHeader className="sticky-top">
                      <TableRow className="*:border-overlay">
                        <TableHead>
                          <div className="flex items-center gap-x-2">
                            <Gavel className="text-primary" />
                            Manage
                          </div>
                        </TableHead>
                        <TableHead>
                          <Checkbox
                            onChange={handleSelectAllChange}
                            checked={isAllSelected}
                          />
                        </TableHead>
                        <TableHead>
                          <div className="flex items-center gap-x-1">
                            Name
                            <ChevronsUpDown className="w-3.5 h-3.5 text-muted-foreground" />
                          </div>
                        </TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Redemption</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {discountData.map((item, index) => (
                        <TableRow
                          key={index}
                          className={cn("*:border-r", {
                            "bg-muted/50": isRowSelected(index),
                          })}
                        >
                          <TableCell>
                            <div className="flex items-center gap-x-2">
                              <Button
                                variant="destructive"
                                size="icon"
                                className="size-6"
                              >
                                <Trash size={16} />
                              </Button>
                              <Button
                                variant="secondary"
                                size="icon"
                                className="size-6"
                              >
                                <Edit size={16} />
                              </Button>
                              <Button
                                variant="secondary"
                                size="icon"
                                className="size-6"
                              >
                                <Eye size={16} />
                              </Button>
                              <Button
                                variant="secondary"
                                size="icon"
                                className="size-6"
                              >
                                <Download size={16} />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Checkbox
                              checked={isRowSelected(index)}
                              onChange={() => toggleRowSelection(index)}
                            />
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.code}</TableCell>
                          <TableCell>
                            {item.status === "Draft" ? (
                              <Badge
                                variant="outline"
                                className="bg-yellow-400/25 text-yellow-500 py-1 px-1.5"
                              >
                                <FilePenLine className="w-3.5 h-3.5 mr-1" />
                                Draft
                              </Badge>
                            ) : item.status === "Active" ? (
                              <Badge
                                variant="outline"
                                className="bg-green-500/25 text-green-500 py-1 px-1.5"
                              >
                                <CircleCheck className="w-3.5 h-3.5 mr-1" />
                                Active
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-red-500/25 text-red-500 py-1 px-1.5"
                              >
                                <XCircle className="w-3.5 h-3.5 mr-1" />
                                Expired
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>{item.products}</TableCell>
                          <TableCell>{item.amount}</TableCell>
                          <TableCell>{item.redemption}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Typography
                    variant="subtitle2"
                    className="text-muted-foreground"
                  >
                    {selectedRowsCount} of {discountData.length} row(s){" "}
                    <span className="hidden sm:inline-block"> selected.</span>
                  </Typography>
                  <div className="flex items-center gap-x-4">
                    <Typography variant="subtitle2" className="hidden sm:block">
                      Page 1 of 3
                    </Typography>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <DoubleArrowLeftIcon />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className=" h-8 w-8"
                      >
                        <ChevronLeftIcon />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className=" h-8 w-8"
                      >
                        <ChevronRightIcon />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className=" h-8 w-8"
                      >
                        <DoubleArrowRightIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SellerDiscount;
