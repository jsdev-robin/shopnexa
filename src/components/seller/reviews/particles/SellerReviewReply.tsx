"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Reply } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const productSchema = z.object({
  headline: z
    .string()
    .min(5, "Headline must be at least 5 characters long")
    .max(100, "Headline cannot exceed 100 characters"),
  description: z
    .string()
    .min(10, "Reply must be at least 10 characters long")
    .max(1000, "Reply cannot exceed 1000 characters"),
});

const SellerReviewReply = () => {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: {
      headline: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof productSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 text-xs font-medium">
          <Reply size={16} />
          Reply
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] w-[90vw] max-w-[500px] p-0 gap-0 rounded-lg whisper-scroll">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Reply to Customer Review</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="headline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Headline</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seller&apos;s Reply</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit" size="sm">
                Submit Reply
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SellerReviewReply;
