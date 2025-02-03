"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Plus, RefreshCcw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { generateCouponCode } from "@/utils/generateCoupon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dummyProducts } from "@/components/data/productsData";
import Image from "next/image";

const discountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  product: z.string().min(1, "Product is required"),
  code: z.string().min(1, "Code is required"),
  amount: z
    .number()
    .min(1, "Amount must be at least 1")
    .max(100, "Amount cannot exceed 100"),
  startDate: z.date({ required_error: "A start date is required." }),
  endDate: z.date({ required_error: "An end date is required." }),
  redemptionLimit: z.string().optional(),
});

const DiscountCreateForm = () => {
  const form = useForm<z.infer<typeof discountSchema>>({
    resolver: zodResolver(discountSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      product: "",
      code: "",
      amount: 1,
      startDate: undefined,
      endDate: undefined,
      redemptionLimit: "",
    },
  });

  const [coupon, setCoupon] = useState<string>();

  function onSubmit(data: z.infer<typeof discountSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  useEffect(() => {
    if (coupon) {
      form.setValue("code", coupon);
    }
  }, [coupon, form]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          New discount
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[500px] p-0 gap-0 rounded-lg">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Add discount</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="p-4 max-h-[calc(80vh-6rem)] overflow-y-auto whisper-scroll">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription className="text-xs">
                        This will appear on your customer’s invoice.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code</FormLabel>
                      <div className="relative">
                        <span
                          className="cursor-pointer"
                          title="Generate code"
                          onClick={(e) => {
                            e.preventDefault();
                            setCoupon(generateCouponCode());
                          }}
                        >
                          <RefreshCcw className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </span>
                        <FormControl>
                          <Input {...field} className="pr-8" />
                        </FormControl>
                      </div>
                      <FormDescription className="text-xs">
                        The code your customers will enter during checkout.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="product"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-72">
                          <SelectItem value="all">All</SelectItem>
                          {dummyProducts.map((item, index) => (
                            <SelectItem value={item.sku} key={index}>
                              <div className="flex items-center gap-x-2">
                                <Image
                                  src={item.img.src}
                                  alt={item.img.alt}
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 rounded-md object-cover"
                                  priority
                                />
                                <span>{item.item}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-xs">
                        Select the product to apply the discount. Choose
                        &quot;All Products&quot; to apply the discount
                        universally.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Start date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>End date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="redemptionLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Limit the number of redemptions?</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription className="text-xs">
                        Limit applies across all customers, not per customer.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="p-4">
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountCreateForm;
