"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Heading from "@/components/ui/heading";
import SellerStoreNavbar from "./particles/SellerStoreNavbar";
import Typography from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Combobox from "@/components/ui/combobox";
import { currencies } from "@/components/data/currencies";
import { countries } from "@/components/data/countries";

const storeSchema = z.object({
  storeName: z.string().min(1, "Store name is required"),
  storeUrl: z.string().url("Invalid store URL"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(10, "Invalid phone number"),
  currency: z.enum(["USD"], {
    errorMap: () => ({ message: "Invalid currency" }),
  }),
  country: z.string().min(1, "Country is required"),
  storeAddress: z.string().min(1, "Store address is required"),
  apartmentSuite: z.string().optional(),
  zipCode: z.string().min(1, "ZIP / Postal code is required"),
  city: z.string().min(1, "City is required"),
  acceptApplePay: z.boolean(),
  acceptGooglePay: z.boolean(),
});

const SellerStore = () => {
  const form = useForm<z.infer<typeof storeSchema>>({
    resolver: zodResolver(storeSchema),
    mode: "onChange",
    defaultValues: {
      storeName: "",
      storeUrl: "",
      contactEmail: "",
      contactPhone: "",
      currency: "USD",
      country: "",
      storeAddress: "",
      apartmentSuite: "",
      zipCode: "",
      city: "",
      acceptApplePay: false,
      acceptGooglePay: false,
    },
  });

  function onSubmit(data: z.infer<typeof storeSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <section>
      <div className="container">
        <div className="space-y-4 lg:space-y-6">
          <div className="space-y-2">
            <Heading as="h6">Store</Heading>
            <SellerStoreNavbar />
          </div>
          <div className="space-y-4 lg:space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <Typography variant="body1" className="font-medium">
                  Store Settings
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground mt-2"
                >
                  View and update your store details.
                </Typography>
              </div>
              <div className="col-span-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card className="p-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="storeName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Store name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="storeUrl"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Store URL</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="contactEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contact email</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="contactPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contact phone</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="currency"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Currency</FormLabel>
                                <Combobox
                                  options={currencies}
                                  placeholder="Select currency"
                                  {...field}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Country</FormLabel>
                                <Combobox
                                  options={countries}
                                  placeholder="Select Country"
                                  {...field}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="storeAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Store address</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="apartmentSuite"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Apartment, Suite</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="zipCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ZIP / Postal code</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </Card>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerStore;
