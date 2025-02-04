"use client";

import React from "react";
import useElementPosition from "@/hooks/useElementPosition";
import Heading from "@/components/ui/heading";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const SellerPurchaseOrders = () => {
  const { elementRef, position } = useElementPosition();
  return (
    <section className="-my-4 lg:-my-6">
      <div className="container bg-muted/25">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <Heading as="h6">Purchase Orders</Heading>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search or type"
              className="pl-8"
            />
          </div>
        </div>
      </div>
      <div
        className="container pb-10 flex grow bg-muted/25 overflow-auto max-lg:whisper-scroll lg:whisper-poem"
        ref={elementRef}
        style={{ height: `calc(100vh - ${position.y}px)` }}
      >
        <div className="flex gap-4">
          <div className="w-72 space-y-2">
            <Card className="w-full p-1 bg-muted">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px]">Arrived</span>
                    <span className="text-[13px] text-muted-foreground">
                      / 3
                    </span>
                  </div>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Plus className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create new task</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </Card>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Plus />
              New
            </Button>
          </div>
          <div className="w-72 space-y-2">
            <Card className="w-full p-1 bg-muted">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px]">Ready for pickup</span>
                    <span className="text-[13px] text-muted-foreground">
                      / 3
                    </span>
                  </div>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Plus className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create new task</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="space-y-1">
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #235325
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Calvin Klein T-shirts
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1605905337157-caf31dfaa565?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823904
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                </div>
              </div>
            </Card>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Plus />
              New
            </Button>
          </div>
          <div className="w-72 space-y-2">
            <Card className="w-full p-1 bg-muted">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px]">Order sent</span>
                    <span className="text-[13px] text-muted-foreground">
                      / 2
                    </span>
                  </div>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Plus className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create new task</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="space-y-1">
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #236784
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          White T-shirts, Pattern Winter Sweater, and Mango
                          Women&apos;s shoe
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1605905337157-caf31dfaa565?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=180&h=180&q=80"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1632337948784-35863f872dc8?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">#37646</dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Green Blazer, Pink Trousers, and 15 more items
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1536992266094-82847e1fd431?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <div className="w-full h-full flex items-center justify-center border rounded-lg bg-muted/25">
                          <span className="flex items-center text-muted-foreground">
                            <Plus className="w-4 h-4" /> 15
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </div>
              </div>
            </Card>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Plus />
              New
            </Button>
          </div>
          <div className="w-72 space-y-2">
            <Card className="w-full p-1 bg-muted">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px]">Packaging</span>
                    <span className="text-[13px] text-muted-foreground">
                      / 0
                    </span>
                  </div>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Plus className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create new task</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </Card>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Plus />
              New
            </Button>
          </div>
          <div className="w-72 space-y-2">
            <Card className="w-full p-1 bg-muted">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px]">Order sent</span>
                    <span className="text-[13px] text-muted-foreground">
                      / 2
                    </span>
                  </div>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Plus className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create new task</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="space-y-1">
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #236784
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          White T-shirts, Pattern Winter Sweater, and Mango
                          Women&apos;s shoe
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1605905337157-caf31dfaa565?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=180&h=180&q=80"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1632337948784-35863f872dc8?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">#37646</dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Green Blazer, Pink Trousers, and 15 more items
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1536992266094-82847e1fd431?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <div className="w-full h-full flex items-center justify-center border rounded-lg bg-muted/25">
                          <span className="flex items-center text-muted-foreground">
                            <Plus className="w-4 h-4" /> 15
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                </div>
              </div>
            </Card>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Plus />
              New
            </Button>
          </div>
          <div className="w-72 space-y-2">
            <Card className="w-full p-1 bg-muted">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px]">Unfulfilled</span>
                    <span className="text-[13px] text-muted-foreground">
                      / 7
                    </span>
                  </div>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Plus className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Create new task</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="space-y-1">
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #236784
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          White T-shirts, Pattern Winter Sweater, and Mango
                          Women&apos;s shoe
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1605905337157-caf31dfaa565?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=180&h=180&q=80"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1632337948784-35863f872dc8?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">#37646</dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Green Blazer, Pink Trousers, and 15 more items
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1536992266094-82847e1fd431?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <div className="w-full h-full flex items-center justify-center border rounded-lg bg-muted/25">
                          <span className="flex items-center text-muted-foreground">
                            <Plus className="w-4 h-4" /> 15
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #236784
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          White T-shirts, Pattern Winter Sweater, and Mango
                          Women&apos;s shoe
                        </dd>
                      </dl>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <Image
                          src="https://images.unsplash.com/photo-1605905337157-caf31dfaa565?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=180&h=180&q=80"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                        <Image
                          src="https://images.unsplash.com/photo-1632337948784-35863f872dc8?q=80&w=180&h=180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          width={75}
                          height={75}
                          className="w-full h-full rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                  <Card className="p-2">
                    <Link href="/">
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Order:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          #823409
                        </dd>
                      </dl>
                      <dl className="flex items-center gap-1">
                        <dt className="min-w-20 text-sm text-muted-foreground">
                          Purchased:
                        </dt>
                        <dd className="truncate text-sm font-medium">
                          Keyboard Matt
                        </dd>
                      </dl>
                    </Link>
                  </Card>
                </div>
              </div>
            </Card>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Plus />
              New
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerPurchaseOrders;
