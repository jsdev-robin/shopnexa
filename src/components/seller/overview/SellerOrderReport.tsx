"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverItem,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  ChevronRight,
  CornerDownLeft,
  FileBox,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import Checkbox from "@/components/ui/checkbox";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { chartData } from "./data/chartData";
import Heading from "@/components/ui/heading";
import Typography from "@/components/ui/typography";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  online: {
    label: "Online",
    color: "hsl(var(--chart-1))",
  },
  inStore: {
    label: "In-store",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const SellerOrderReport = () => {
  const [timeRange] = React.useState("90d");
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const [progress1, setProgress1] = React.useState(13);
  const [progress2, setProgress2] = React.useState(20);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress1(66), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress2(40), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="container">
        <Card>
          <CardHeader className="border-b border-border py-4 px-4 lg:px-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <CardTitle className="text-xl">Orders</CardTitle>
              <div className="flex flex-wrap items-center gap-2 ml-auto">
                <Popover>
                  <PopoverTrigger
                    asChild
                    className="data-[state=open]:bg-secondary"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      25 Jul - 25 Aug
                      <ChevronDown />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <div className="flex gap-4">
                      <Calendar mode="range" />
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      Add activity
                      <Plus />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 p-1" align="end">
                    <PopoverItem className="justify-between">
                      <Label
                        htmlFor="revenue"
                        className="flex items-center gap-x-2"
                      >
                        <TrendingUp className="w-4 h-4 stroke-primary" />
                        Revenue
                      </Label>
                      <Checkbox id="revenue" />
                    </PopoverItem>
                    <PopoverItem className="justify-between">
                      <Label
                        htmlFor="orders"
                        className="flex items-center gap-x-2"
                      >
                        <FileBox className="w-4 h-4 stroke-primary" />
                        Orders
                      </Label>
                      <Checkbox id="orders" />
                    </PopoverItem>
                    <PopoverItem className="justify-between">
                      <Label
                        htmlFor="refound"
                        className="flex items-center gap-x-2"
                      >
                        <CornerDownLeft className="w-4 h-4 stroke-primary" />
                        Refound
                      </Label>
                      <Checkbox id="refound" />
                    </PopoverItem>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
              <div className="lg:col-span-2">
                <div className="p-4 lg:p-5 w-full h-full">
                  <ChartContainer
                    config={chartConfig}
                    className="aspect-auto min-h-64 h-full w-full"
                  >
                    <AreaChart data={filteredData}>
                      <defs>
                        <linearGradient
                          id="fillonline"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-online)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-online)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                        <linearGradient
                          id="fillinStore"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-inStore)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-inStore)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
                        tickFormatter={(value) => {
                          const date = new Date(value);
                          return date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          });
                        }}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={
                          <ChartTooltipContent
                            labelFormatter={(value) => {
                              return new Date(value).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                }
                              );
                            }}
                            indicator="dot"
                          />
                        }
                      />
                      <Area
                        dataKey="inStore"
                        type="natural"
                        fill="url(#fillinStore)"
                        stroke="var(--color-inStore)"
                        stackId="a"
                      />
                      <Area
                        dataKey="online"
                        type="natural"
                        fill="url(#fillonline)"
                        stroke="var(--color-online)"
                        stackId="a"
                      />
                      <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="p-4 grid grid-cols-1 gap-4 lg:p-5 lg:border-l lg:border-border w-full h-full">
                  <Tabs defaultValue="Orders">
                    <TabsList className="bg-transparent w-full gap-x-1 justify-start pb-4 relative before:absolute before:w-full before:border-b-2 before:bottom-0 before:border-border">
                      {["Orders", "Sales"].map((item, index) => (
                        <TabsTrigger
                          value={item}
                          key={index}
                          className="data-[state=active]:bg-muted relative before:data-[state=active]:content-[''] before:data-[state=active]:absolute before:data-[state=active]:h-0.5 before:data-[state=active]:w-full before:data-[state=active]:bg-foreground/30 before:data-[state=active]:-bottom-2.5 hover:bg-muted capitalize"
                        >
                          {item}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <TabsContent value="Orders" className="mt-4">
                      <Heading as="h5" className="mb-4">
                        125,090
                      </Heading>
                      <Progress value={progress1} className="w-full h-2 mb-2" />
                      <div className="flex items-center justify-between mb-4">
                        <Typography
                          variant="caption"
                          className="text-muted-foreground mb-0"
                        >
                          0.00
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-muted-foreground mb-0"
                        >
                          200,000
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        className="text-muted-foreground mb-4"
                      >
                        A project-wise breakdown of total orders complemented by
                        detailed insights.
                      </Typography>
                    </TabsContent>
                    <TabsContent value="Sales" className="mt-4">
                      <Heading as="h5" className="mb-4">
                        $993,758.20
                      </Heading>
                      <Progress value={progress2} className="w-full h-2 mb-2" />
                      <div className="flex items-center justify-between mb-4">
                        <Typography
                          variant="caption"
                          className="text-muted-foreground mb-0"
                        >
                          0.00
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-muted-foreground mb-0"
                        >
                          $2min
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        className="text-muted-foreground mb-4"
                      >
                        A project-wise breakdown of total orders complemented by
                        detailed insights.
                      </Typography>
                    </TabsContent>
                  </Tabs>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Sparkles className="stroke-primary" />
                      Show all highlights
                      <ChevronRight className="ml-auto" />
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <ChartNoAxesColumnIncreasing className="stroke-primary" />
                      Show all sales data
                      <ChevronRight className="ml-auto" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SellerOrderReport;
