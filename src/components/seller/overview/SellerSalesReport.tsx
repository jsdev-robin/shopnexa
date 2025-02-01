import React from "react";
import Heading from "@/components/ui/heading";
import Typography from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BringToFront,
  CirclePercent,
  Globe,
  Store,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const salesData = [
  {
    title: "In-store sales",
    amount: "$7,820.75",
    orders: "5k orders",
    change: "4.3%",
    isPositive: true,
    icon: Store,
  },
  {
    title: "Website sales",
    amount: "$985,937.45",
    orders: "5k orders",
    change: "12.5%",
    isPositive: true,
    icon: Globe,
  },
  {
    title: "Discount",
    amount: "$7,820.75",
    orders: "$15,503.00",
    change: null,
    isPositive: null,
    icon: CirclePercent,
  },
  {
    title: "Affiliate",
    amount: "$7,820.75",
    orders: "5k orders",
    change: "4.4%",
    isPositive: false,
    icon: BringToFront,
  },
];

const SellerSalesReport = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-4 sm:mb-5 lg:mb-6">
          <Heading as="h6">Good morning, James.</Heading>
          <Typography variant="body2" className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your store today.
          </Typography>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {salesData.map((item, index) => (
            <Card key={index}>
              <CardHeader className="p-4 lg:p-5">
                <div className="flex items-center justify-between">
                  <Typography variant="body1" className="text-muted-foreground">
                    {item.title}
                  </Typography>
                  <item.icon className="stroke-muted-foreground stroke-1" />
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4 lg:px-5 lg:pb-5">
                <Heading as="h6">{item.amount}</Heading>
                <div className="flex items-center gap-4">
                  <Typography variant="body2" className="text-muted-foreground">
                    {item.orders}
                  </Typography>
                  {item.change &&
                    (item.isPositive ? (
                      <div className="flex items-center gap-x-1">
                        <TrendingUp className="w-4 h-4 stroke-primary" />
                        <span className="text-primary text-sm">
                          {item.change}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-x-1">
                        <div className="flex items-center gap-1">
                          <TrendingDown className="w-4 h-4 stroke-red-500" />
                          <span className="text-red-500 text-sm">
                            {item.change}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerSalesReport;
