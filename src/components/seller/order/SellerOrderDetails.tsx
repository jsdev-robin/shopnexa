import React from "react";
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
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import QuillEditor from "@/components/ui/QuillEditor";
import {
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Landmark,
  Mail,
  Phone,
  ShoppingBasket,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const SellerOrderDetails = () => {
  return (
    <section>
      <div className="container">
        <div className="grid gap-4 lg:gap-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/seller/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/seller/dashboard/order/list">Orders</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-2">
              <div className="grid gap-4 lg:gap-6">
                <Card>
                  <CardHeader className="border-b p-4">
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle className="text-lg">Order #32543</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid gap-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <Typography variant="body2">
                          Order placed: 17 Aug, 2023, 5:48 am
                        </Typography>
                        <div className="flex items-center gap-2 ml-auto">
                          <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20 hover:text-green-500">
                            Paid
                          </Badge>
                          <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-500">
                            Unfulfilled
                          </Badge>
                        </div>
                      </div>
                      <div className="grid gap-4">
                        <div className="border-t border-border pt-4 grid gap-4 sm:grid-cols-12 md:grid-cols-11">
                          <div className="sm:col-span-3 md:col-span-2">
                            <Image
                              src="https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                              alt=""
                              width={320}
                              height={320}
                              className="w-28 h-28 object-cover rounded-md"
                            />
                          </div>
                          <div className="sm:col-span-3 md:col-span-3">
                            <div className="h-full grid grid-cols-2 gap-4 sm:grid-cols-1">
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Item
                                </Typography>
                                <Typography variant="body2">
                                  White T-shirts
                                </Typography>
                              </div>
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Color
                                </Typography>
                                <Typography variant="body2">White</Typography>
                              </div>
                            </div>
                          </div>
                          <div className="sm:col-span-3 md:col-span-3">
                            <div className="h-full grid grid-cols-2 gap-4 sm:grid-cols-1">
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Size
                                </Typography>
                                <Typography variant="body2">M</Typography>
                              </div>
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Price
                                </Typography>
                                <Typography variant="body2">$21</Typography>
                              </div>
                            </div>
                          </div>
                          <div className="sm:col-span-3 md:col-span-3">
                            <div className="h-full grid grid-cols-2 gap-4 sm:grid-cols-1">
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Quantity
                                </Typography>
                                <Typography variant="body2">1</Typography>
                              </div>
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Expected delivery date
                                </Typography>
                                <Typography variant="body2">
                                  Oct 3, 4:20 pm
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-border pt-4 grid gap-4 sm:grid-cols-12 md:grid-cols-11">
                          <div className="sm:col-span-3 md:col-span-2">
                            <Image
                              src="https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                              alt=""
                              width={320}
                              height={320}
                              className="w-28 h-28 object-cover rounded-md"
                            />
                          </div>
                          <div className="sm:col-span-3 md:col-span-3">
                            <div className="h-full grid grid-cols-2 gap-4 sm:grid-cols-1">
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Item
                                </Typography>
                                <Typography variant="body2">
                                  White T-shirts
                                </Typography>
                              </div>
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Color
                                </Typography>
                                <Typography variant="body2">White</Typography>
                              </div>
                            </div>
                          </div>
                          <div className="sm:col-span-3 md:col-span-3">
                            <div className="h-full grid grid-cols-2 gap-4 sm:grid-cols-1">
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Size
                                </Typography>
                                <Typography variant="body2">M</Typography>
                              </div>
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Price
                                </Typography>
                                <Typography variant="body2">$21</Typography>
                              </div>
                            </div>
                          </div>
                          <div className="sm:col-span-3 md:col-span-3">
                            <div className="h-full grid grid-cols-2 gap-4 sm:grid-cols-1">
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Quantity
                                </Typography>
                                <Typography variant="body2">1</Typography>
                              </div>
                              <div className="space-y-1">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground"
                                >
                                  Expected delivery date
                                </Typography>
                                <Typography variant="body2">
                                  Oct 3, 4:20 pm
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-border pt-4 grid gap-4 md:grid-cols-2">
                        <div className="md:col-span-1 md:col-start-2">
                          <div className="grid gap-4">
                            <div className="grid gap-2">
                              <Label>Promo code</Label>
                              <div className="relative">
                                <Input
                                  placeholder="Thankyou"
                                  className="pr-20"
                                  readOnly
                                />
                                <Button
                                  size="sm"
                                  className="h-8 absolute top-1/2 right-1 -translate-y-1/2 px-2 text-xs font-medium"
                                >
                                  Redeem
                                </Button>
                              </div>
                            </div>
                            <div className="grid gap-2">
                              <dl className="grid grid-cols-4 gap-x-4 text-sm">
                                <dt className="col-span-3">Subotal:</dt>
                                <dd className="col-span-1 font-medium text-right">
                                  $2750.00
                                </dd>
                              </dl>
                              <dl className="grid grid-cols-4 gap-x-4 text-sm">
                                <dt className="col-span-3">
                                  Delivery (Standard delivery):
                                </dt>
                                <dd className="col-span-1 font-medium text-right">
                                  0.00
                                </dd>
                              </dl>
                              <dl className="grid grid-cols-4 gap-x-4 text-sm">
                                <dt className="col-span-3">Est tax:</dt>
                                <dd className="col-span-1 font-medium text-right">
                                  $20.00
                                </dd>
                              </dl>
                              <dl className="grid grid-cols-4 gap-x-4 text-sm">
                                <dt className="col-span-3">Order total:</dt>
                                <dd className="col-span-1 font-medium text-right">
                                  $143.00
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t border-border justify-between">
                    <Button variant="outline" size="sm" className="h-8 px-2">
                      <ChevronLeft />
                      Prev
                    </Button>
                    <Typography
                      variant="caption"
                      className="text-muted-foreground"
                    >
                      Order 36 of 129
                    </Typography>
                    <Button variant="outline" size="sm" className="h-8 px-2">
                      Next
                      <ChevronRight />
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="border-b p-4">
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle className="text-lg">Timeline</CardTitle>
                      <div className="flex items-center gap-x-2">
                        <Checkbox id="show-comments" />
                        <Label htmlFor="show-comments">Show comments</Label>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid gap-2">
                      <div className="flex gap-4">
                        <div className="relative after:absolute after:w-px after:top-7 after:bottom-0 after:bg-muted after:left-[13px]">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center z-10 relative">
                            <span className="block w-2 h-2 bg-muted rounded-full" />
                          </div>
                        </div>
                        <div className="grow">
                          <div className="pb-8">
                            <QuillEditor />
                            <div className="flex flex-wrap gap-4 justify-between mt-2">
                              <Typography
                                variant="caption"
                                className="text-right text-muted-foreground"
                              >
                                <CircleAlert className="w-3.5 h-3.5 text-muted-foreground inline-block align-middle mr-2" />
                                Only you and other staff can see comments
                              </Typography>
                              <Button size="sm" className="h-8">
                                Post
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Typography
                          variant="caption"
                          className="font-medium uppercase ps-2"
                        >
                          Today
                        </Typography>
                      </div>
                      <div className="flex gap-4">
                        <div className="relative after:absolute after:w-px after:top-7 after:bottom-0 after:bg-muted after:left-[13px]">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center z-10 relative">
                            <span className="block w-2 h-2 bg-muted rounded-full" />
                          </div>
                        </div>
                        <div className="grow">
                          <div className="mb-8">
                            <Typography variant="subtitle2">
                              Package has dispatched
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-muted-foreground mt-2"
                            >
                              5 mts ago
                            </Typography>
                            <Link
                              href="/"
                              className="text-xs font-medium text-primary transition-all underline-offset-2 hover:underline"
                            >
                              See details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Typography
                          variant="caption"
                          className="font-medium uppercase ps-2"
                        >
                          18 Aug, 2023
                        </Typography>
                      </div>
                      <div className="flex gap-4">
                        <div className="relative after:absolute after:w-px after:top-7 after:bottom-0 after:bg-muted after:left-[13px]">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center z-10 relative">
                            <span className="block w-2 h-2 bg-muted rounded-full" />
                          </div>
                        </div>
                        <div className="grow">
                          <div className="mb-8">
                            <Typography variant="subtitle2">
                              An invoice sent to Amanda Harvey
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-muted-foreground mt-2"
                            >
                              4:57 pm
                            </Typography>
                            <Link
                              href="/"
                              className="text-xs font-medium text-primary transition-all underline-offset-2 hover:underline"
                            >
                              See details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="relative after:absolute after:w-px after:top-7 after:bottom-0 after:bg-muted after:left-[13px]">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center z-10 relative">
                            <span className="block w-2 h-2 bg-muted rounded-full" />
                          </div>
                        </div>
                        <div className="grow">
                          <div className="mb-8">
                            <Typography variant="subtitle2">
                              Order confirmed
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-muted-foreground mt-2"
                            >
                              4:56 pm
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="relative after:absolute after:w-px after:top-7 after:bottom-0 after:bg-muted after:left-[13px]">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center z-10 relative">
                            <span className="block w-2 h-2 bg-muted rounded-full" />
                          </div>
                        </div>
                        <div className="grow">
                          <div className="mb-8">
                            <Typography variant="subtitle2">
                              Order #32543 was placed
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-muted-foreground mt-2"
                            >
                              4:56 pm
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="grid gap-4 lg:gap-6 sticky top-4">
                <Card>
                  <CardHeader className="border-b p-4">
                    <CardTitle className="text-lg">Customer</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid gap-2">
                      <div className="grid gap-2">
                        <Link
                          href="/"
                          className="flex items-center justify-between py-2 px-2 rounded-lg -mx-2 transition-all hover:bg-muted"
                        >
                          <div className="flex items-center gap-x-2">
                            <Avatar>
                              <AvatarImage
                                src="/images/avatar/user.jpg"
                                alt="Robin"
                                className="object-cover"
                              />
                              <AvatarFallback>RT</AvatarFallback>
                            </Avatar>
                            <Typography variant="subtitle2">
                              Amanda Harvey
                            </Typography>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </Link>
                        <Separator className="h-[0.5px]" />
                        <Link
                          href="/"
                          className="flex items-center justify-between py-2 px-2 rounded-lg -mx-2 transition-all hover:bg-muted"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="w-10 h-10 flex items-center justify-center rounded-full border border-border">
                              <ShoppingBasket className="w-4 h-4 text-muted-foreground" />
                            </span>
                            <Typography variant="subtitle2">
                              7 orders
                            </Typography>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </Link>
                      </div>
                      <div className="grid gap-4">
                        <div className="border-t border-border pt-4">
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <Typography variant="subtitle2">
                              Contact info
                            </Typography>
                            <Link
                              href="/"
                              className="text-primary text-sm font-medium transition-all underline-offset-2 hover:underline"
                            >
                              Edit
                            </Link>
                          </div>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-x-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <Typography
                                variant="body2"
                                className="text-muted-foreground"
                              >
                                jsdev.robin@gmail.com
                              </Typography>
                            </li>
                            <li className="flex items-center gap-x-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <Typography
                                variant="body2"
                                className="text-muted-foreground"
                              >
                                +88017-63408494
                              </Typography>
                            </li>
                          </ul>
                        </div>
                        <div className="border-t border-border pt-4">
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <Typography variant="subtitle2">
                              Shipping address
                            </Typography>
                            <Link
                              href="/"
                              className="text-primary text-sm font-medium transition-all underline-offset-2 hover:underline"
                            >
                              Edit
                            </Link>
                          </div>
                          <address className="text-muted-foreground text-sm">
                            45 Roker Terrace
                            <br />
                            Latheronwheel
                            <br />
                            KW5 8NW, London, UK
                          </address>
                        </div>
                        <div className="border-t border-border pt-4">
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <Typography variant="subtitle2">
                              Billing address
                            </Typography>
                            <Link
                              href="/"
                              className="text-primary text-sm font-medium transition-all underline-offset-2 hover:underline"
                            >
                              Edit
                            </Link>
                          </div>
                          <address className="text-muted-foreground text-sm">
                            45 Roker Terrace
                            <br />
                            Latheronwheel
                            <br />
                            KW5 8NW, London, UK
                          </address>
                        </div>
                        <div className="border-t border-border pt-4">
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <Typography variant="subtitle2">
                              Mastercard
                            </Typography>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Landmark className="w-4 h-4 text-muted-foreground" />
                            <Typography
                              variant="body2"
                              className="text-muted-foreground"
                            >
                              Card Number: ************ 7887
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerOrderDetails;
