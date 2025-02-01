"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .nonempty({ message: "Email is required" }),
});

const SellerForgotPassword = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <section className="min-h-svh bg-muted py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="container">
        <div className="w-full max-w-sm mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Forgot Password</CardTitle>
              <CardDescription>
                Enter your email to reset your password and regain access to
                your seller account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jsdev.robin@gmail.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Reset
                    </Button>
                    <div className="text-center text-sm">
                      <p>
                        Remembered your password?{" "}
                        <Link
                          href="/seller/signin"
                          className="underline underline-offset-4"
                        >
                          Sign in here
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SellerForgotPassword;
