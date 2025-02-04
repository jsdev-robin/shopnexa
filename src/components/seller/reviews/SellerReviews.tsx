"use client";

import React from "react";
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
import Heading from "@/components/ui/heading";
import Typography from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock,
  CornerDownRight,
  EllipsisVertical,
  Gavel,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { reviewsData } from "@/components/data/reviewsData";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Checkbox from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import SellerReviewReply from "./particles/SellerReviewReply";
import {
  Popover,
  PopoverContent,
  PopoverItem,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import useRowSelection from "@/hooks/useRowSelection";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

const SellerReviews = () => {
  const {
    // selectedRows,
    toggleRowSelection,
    isRowSelected,
    isAllSelected,
    handleSelectAllChange,
    selectedRowsCount,
  } = useRowSelection({
    totalRows: reviewsData.length,
  });

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
                <BreadcrumbPage>Reviews</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Card className="p-4">
            <div className="flex gap-8 flex-col md:flex-row">
              <div>
                <svg
                  className="w-20 h-auto mb-2"
                  width={728}
                  height={398}
                  viewBox="0 0 728 398"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.4113 139.994C63.8882 135.396 69.1386 131.535 73.0734 134.36L101.888 155.043C103.647 156.307 106.02 156.293 107.765 155.01L136.341 133.997C140.243 131.128 145.538 134.928 144.067 139.543L133.3 173.339C132.642 175.403 133.388 177.656 135.148 178.919L163.963 199.603C167.897 202.427 165.919 208.637 161.075 208.664L125.606 208.867C123.44 208.88 121.529 210.286 120.871 212.35L110.104 246.145C108.633 250.76 102.116 250.798 100.593 246.2L89.4396 212.529C88.7585 210.473 86.8307 209.089 84.6646 209.102L49.1956 209.305C44.3521 209.333 42.3028 203.146 46.205 200.277L74.7806 179.264C76.5257 177.981 77.2461 175.72 76.5649 173.664L65.4113 139.994Z"
                    className="fill-[#292524] dark:fill-neutral-200"
                    fill="currentColor"
                  />
                  <path
                    d="M208.372 57.4387C208.309 52.5955 214.481 50.5016 217.378 54.3831L238.596 82.8067C239.892 84.5425 242.158 85.2465 244.209 84.5506L277.798 73.1547C282.385 71.5986 286.284 76.821 283.487 80.7761L263.012 109.739C261.761 111.507 261.792 113.88 263.088 115.616L284.305 144.04C287.203 147.921 283.441 153.242 278.815 151.805L244.943 141.282C242.874 140.639 240.627 141.401 239.376 143.17L218.901 172.133C216.104 176.088 209.881 174.154 209.818 169.311L209.36 133.844C209.332 131.678 207.912 129.777 205.844 129.134L171.971 118.61C167.346 117.173 167.262 110.657 171.848 109.101L205.437 97.7048C207.489 97.0089 208.859 95.0712 208.831 92.9053L208.372 57.4387Z"
                    className="fill-[#292524] dark:fill-neutral-200"
                    fill="currentColor"
                  />
                  <path
                    d="M368.522 20.3786C370.332 15.8857 376.834 16.3331 378.011 21.0316L386.629 55.4381C387.156 57.5393 388.975 59.0626 391.136 59.2113L426.522 61.6465C431.354 61.9791 432.938 68.3008 428.833 70.8721L398.774 89.7012C396.938 90.8511 396.052 93.0523 396.578 95.1535L405.197 129.56C406.374 134.258 400.851 137.718 397.137 134.609L369.941 111.839C368.28 110.449 365.912 110.286 364.077 111.436L334.017 130.265C329.913 132.836 324.916 128.652 326.725 124.16L339.976 91.2582C340.785 89.2489 340.209 86.947 338.548 85.5565L311.351 62.787C307.638 59.6777 310.072 53.6325 314.904 53.9651L350.29 56.4003C352.451 56.549 354.462 55.2893 355.272 53.28L368.522 20.3786Z"
                    className="fill-[#292524] dark:fill-neutral-200"
                    fill="currentColor"
                  />
                  <path
                    d="M671.036 131.221L659.902 164.898C658.882 167.983 659.964 171.374 662.583 173.297L691.171 194.293C693.123 195.727 692.1 198.82 689.678 198.808L654.209 198.625C650.96 198.609 648.069 200.686 647.049 203.771L635.915 237.448C635.155 239.747 631.897 239.73 631.16 237.423L620.373 203.634C619.385 200.539 616.516 198.432 613.267 198.415L577.798 198.232C575.376 198.22 574.385 195.116 576.352 193.702L605.154 173.002C607.792 171.105 608.91 167.726 607.922 164.631L597.135 130.841C596.398 128.534 599.044 126.632 600.996 128.066L629.584 149.062C632.203 150.985 635.762 151.003 638.401 149.107L667.203 128.406C669.17 126.993 671.796 128.922 671.036 131.221Z"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={5}
                  />
                  <path
                    d="M530.478 51.8783L527.379 87.2122C527.096 90.449 528.928 93.5004 531.919 94.7706L564.566 108.636C566.795 109.583 566.51 112.829 564.151 113.373L529.588 121.345C526.422 122.076 524.087 124.761 523.803 127.998L520.704 163.332C520.493 165.745 517.318 166.477 516.071 164.401L497.809 133.994C496.136 131.208 492.859 129.817 489.693 130.547L455.131 138.519C452.771 139.063 451.094 136.27 452.683 134.443L475.959 107.678C478.091 105.226 478.402 101.68 476.729 98.895L458.467 68.488C457.22 66.4118 459.358 63.953 461.587 64.8998L494.234 78.7654C497.225 80.0356 500.693 79.2356 502.826 76.7838L526.101 50.0193C527.69 48.1919 530.69 49.4657 530.478 51.8783Z"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={5}
                  />
                  <path
                    d="M523.194 163.551L526.468 126.217C526.561 125.165 526.318 124.111 525.774 123.205L499.391 79.2776C498.848 78.3724 498.032 77.6625 497.06 77.2498L462.564 62.5991C458.106 60.7056 453.83 65.6232 456.323 69.7755L474.585 100.183C475.701 102.04 475.493 104.403 474.072 106.038L450.796 132.802C447.618 136.457 450.973 142.044 455.693 140.956L490.255 132.984C492.366 132.497 494.55 133.425 495.665 135.281L513.927 165.689C516.421 169.841 522.771 168.376 523.194 163.551Z"
                    className="fill-[#292524] dark:fill-neutral-200"
                    fill="currentColor"
                  />
                  <path
                    d="M352.089 394.479L369.162 349.69"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                  <path
                    d="M369.161 349.692C355.075 340.09 313.524 320.14 259.036 315.506"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                  <path
                    d="M258.927 316.314C255.341 333.101 244.966 370.853 232.149 387.568"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                  <path
                    d="M355.802 338.448C368.802 322.448 392.302 297.448 401.802 279.948L417.302 253.448C427.802 236.579 432.296 222.826 436.308 215.37C438.092 212.055 439.202 209.538 441.672 204.613C443.913 200.141 445.886 195.626 444.321 191.923C443.123 189.087 438.124 184.123 427.715 186.956C417.306 189.79 410.207 198.581 407.959 202.622C405.707 205.97 395.931 218.103 393.254 220.766C387.032 226.953 356.38 252.611 337.264 237.579M333.544 212.733C349.412 204.344 380.237 189.219 390.975 178.835C402.003 176.7 429.236 180.268 426.488 165.645C425.916 162.598 416.327 155.042 402.073 152.477C391.815 150.632 384.378 149.911 375.857 154.49C371.026 157.086 369.109 158.008 362.872 162.151M332.954 184.462C341.183 176.698 347.066 172.26 351.127 169.468C355.081 166.751 358.03 164.284 362.872 162.151M362.872 162.151C360.284 160.743 349.1 160.834 335.915 167.365C321.512 174.498 319.052 177.199 313.475 180.879C307.898 184.558 296.743 191.918 292.377 195.469C284.651 201.751 277.61 208.831 274.83 212.403C269.936 219.961 272.664 225.679 280.02 239.752M284.43 265.881C284.43 275.25 282.302 297.448 275.802 315.948"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                  <path
                    d="M413.372 195.473L287.926 264.014C272.77 269.943 262.227 249.168 278.13 242.154L333.458 212.656M430.821 185.701L454.02 173.158L443.034 155.591L427.329 163.524"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                  <path
                    d="M457.149 171.455L470.229 152.098"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                  <path
                    d="M446.149 153.955L470.229 152.098"
                    className="stroke-[#292524] dark:stroke-neutral-200"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
                <Heading as="h3">4.24</Heading>
                <Typography variant="body2" className="text-muted-foreground">
                  — of 12 reviews
                  <span className="bg-muted font-medium ml-1 py-1 px-2 text-xs text-muted-foreground rounded-full">
                    +1 this week
                  </span>
                </Typography>
              </div>
              <div className="grow">
                <div className="space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-8 lg:gap-10">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                      </div>
                      <div className="grow">
                        <div className="flex items-center gap-4">
                          <Progress value={96} className="h-2" />
                          <Typography
                            variant="subtitle2"
                            className="text-muted-foreground"
                          >
                            6
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 lg:gap-10">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                      </div>
                      <div className="grow">
                        <div className="flex items-center gap-4">
                          <Progress value={80} className="h-2" />
                          <Typography
                            variant="subtitle2"
                            className="text-muted-foreground"
                          >
                            4
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 lg:gap-10">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                      </div>
                      <div className="grow">
                        <div className="flex items-center gap-4">
                          <Progress value={50} className="h-2" />
                          <Typography
                            variant="subtitle2"
                            className="text-muted-foreground"
                          >
                            2
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 lg:gap-10">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                      </div>
                      <div className="grow">
                        <div className="flex items-center gap-4">
                          <Progress value={20} className="h-2" />
                          <Typography
                            variant="subtitle2"
                            className="text-muted-foreground"
                          >
                            1
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 lg:gap-10">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                        <Star className="w-4 h-4 text-muted fill-muted" />
                      </div>
                      <div className="grow">
                        <div className="flex items-center gap-4">
                          <Progress value={0} className="h-2" />
                          <Typography
                            variant="subtitle2"
                            className="text-muted-foreground"
                          >
                            0
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Typography variant="body2">Overall performance</Typography>
                    <Badge
                      className="bg-yellow-500/25 text-yellow-500 border-none py-1"
                      variant="outline"
                    >
                      Average
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <CardHeader className="border-b p-4">
              <CardTitle className="text-xl">Reviews</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search or type"
                      className="pl-8"
                    />
                  </div>
                </div>
                <Table className="max-lg:scrollbar lg:poem">
                  <TableHeader className="sticky-top">
                    <TableRow>
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
                      <TableHead>Product</TableHead>
                      <TableHead>Reviewer</TableHead>
                      <TableHead className="whitespace-normal w-auto lg:w-80">
                        Review
                      </TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reviewsData.map((item, index) => (
                      <TableRow
                        key={index}
                        className={cn("*:align-top", {
                          "bg-muted/50": isRowSelected(index),
                        })}
                      >
                        <TableCell>
                          <div className="flex items-center gap-x-2">
                            <SellerReviewReply />
                            <Popover>
                              <PopoverTrigger
                                asChild
                                className="data-[state=open]:bg-secondary/80"
                              >
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="size-8"
                                >
                                  <EllipsisVertical size={16} />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-24 p-1"
                                align="start"
                              >
                                <PopoverItem>Publish</PopoverItem>
                                <PopoverItem>Unpublish</PopoverItem>
                                <Separator className="my-0.5" />
                                <PopoverItem className="bg-red-500/25 text-red-500 hover:bg-red-500 hover:text-foreground">
                                  Delete
                                </PopoverItem>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox
                            checked={isRowSelected(index)}
                            onChange={() => toggleRowSelection(index)}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-x-2 mr-10">
                            <Image
                              src={item.img.src}
                              alt={item.img.alt}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-md object-cover"
                              priority
                            />
                            {item.product}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-x-2">
                            <Avatar>
                              <AvatarImage src={item.reviewer.img.src} />
                              <AvatarFallback>
                                {item.reviewer.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="grow">
                              <Typography variant="subtitle2">
                                {item.reviewer.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                className="text-muted-foreground"
                              >
                                {item.reviewer.email}
                              </Typography>
                              {item.reviewer.verified && (
                                <Typography
                                  as="span"
                                  variant="overline"
                                  className="flex items-center gap-x-1 text-muted-foreground"
                                >
                                  <ShieldCheck className="w-4 h-4" />
                                  Verified customer
                                </Typography>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="whitespace-normal w-auto lg:w-80">
                          <div className="flex items-center gap-1 mb-1">
                            {item.reviewImage?.map(
                              (reviewImg, revewImgIndex) => (
                                <Image
                                  key={revewImgIndex}
                                  src={reviewImg}
                                  alt={reviewImg}
                                  width={40}
                                  height={40}
                                  className="w-10 h-10 rounded-md object-cover"
                                  priority
                                />
                              )
                            )}
                          </div>
                          <div className="flex items-center gap-x-0.5 mb-0.5">
                            <Star className="w-3.5 h-3.5 text-foreground fill-foreground" />
                            <Star className="w-3.5 h-3.5 text-foreground fill-foreground" />
                            <Star className="w-3.5 h-3.5 text-foreground fill-foreground" />
                            <Star className="w-3.5 h-3.5 text-foreground fill-foreground" />
                            <Star className="w-3.5 h-3.5 text-foreground fill-foreground" />
                          </div>
                          <Typography variant="body2" className="font-semibold">
                            Good product
                          </Typography>
                          <Typography
                            variant="body2"
                            className="text-muted-foreground"
                          >
                            {item.review}
                          </Typography>
                          {item.reply && (
                            <div className="mt-3">
                              <div className="flex gap-x-2">
                                <span>
                                  <CornerDownRight className="w-4 h-4" />
                                </span>
                                <div className="grow">
                                  <Typography
                                    variant="body2"
                                    className="font-semibold"
                                  >
                                    You replied with
                                  </Typography>
                                  <Typography
                                    as="blockquote"
                                    variant="body2"
                                    className="text-muted-foreground border-l-2 pl-4"
                                  >
                                    {item.reply}
                                  </Typography>
                                </div>
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                          {item.status === "Published" ? (
                            <Badge
                              variant="outline"
                              className="bg-green-400/25 text-green-500 py-1 px-1.5"
                            >
                              <Check className="w-3.5 h-3.5 mr-1" />
                              {item.status}
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-yellow-500/25 text-yellow-500 py-1 px-1.5"
                            >
                              <Clock className="w-3.5 h-3.5 mr-1" />
                              {item.status}
                            </Badge>
                          )}
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
                    {selectedRowsCount} of {reviewsData.length} row(s){" "}
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

export default SellerReviews;
