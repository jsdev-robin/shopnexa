"use client";

import React, { useEffect } from "react";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message:
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character",
      })
      .nonempty({ message: "Password is required" }),
    passwordConfirm: z
      .string()
      .nonempty({ message: "Please confirm your password" }),
    token: z.string().nonempty("Token is required"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        path: ["passwordConfirm"],
        message: "Passwords do not match",
        code: "custom",
      });
    }
  });

interface SellerResetPasswordProps {
  token?: string;
}

const SellerResetPassword: React.FC<SellerResetPasswordProps> = ({ token }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
      token: "",
    },
  });

  useEffect(() => {
    if (token) {
      form.setValue("token", token);
    }
  }, [token, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <section className="min-h-svh bg-muted py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="container">
        <div className="w-full max-w-sm mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Reset Your Password</CardTitle>
              <CardDescription>
                Enter a new password to regain access to your seller account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm new password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">
                        Change password
                      </Button>
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

export default SellerResetPassword;
