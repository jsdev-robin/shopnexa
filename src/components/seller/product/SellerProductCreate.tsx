"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import QuillEditor from "@/components/ui/QuillEditor";
import { useMuntahaDrop } from "react-muntaha-uploader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleHelp, ImagePlus, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import Combobox from "@/components/ui/combobox";
import { Separator } from "@/components/ui/separator";
import TagInput from "@/components/ui/tag-input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { generateSKU } from "@/utils/generateSKU";
import { categoriesData } from "@/components/data/categories";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  SKU: z.string().min(1, "SKU is required"),
  weight: z.string().min(1, "Weight is required"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description cannot exceed 1000 characters"),
  variants: z.array(
    z.object({
      size: z.string().min(1, "Size is required"),
      color: z.string().min(1, "Color is required"),
      price: z.string().min(1, "Price is required"),
      quantity: z.string().min(1, "Quantity is required"),
    })
  ),
  vendor: z.string().min(1, "Vendor is required"),
  category: z.string().min(1, "Category is required"),
  collections: z.string().min(1, "Collection is required"),
  tags: z.array(z.string()).optional(),
});

const SellerProductCreate = () => {
  const [dragging, setDragging] = useState(false);
  const [categories] = useState<
    {
      label: string;
      value: string;
      subcategories?: {
        label: string;
        value: string;
      }[];
    }[]
  >(categoriesData);
  const [subCategories, setSubCategories] = useState<
    { label: string; value: string }[]
  >([]);

  const {
    error,
    handleFileChange,
    previewUrls,
    // binaryData,
    removeFile,
    inputRef,
    onUploadTrigger,
    onDropTrigger,
  } = useMuntahaDrop({
    multiple: true,
    allowedTypes: ["image/jpg", "image/png", "image/jpeg", "image/webp"],
  });

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      SKU: "",
      weight: "",
      description: "",
      variants: [{ size: "", color: "", price: "", quantity: "" }],
      vendor: "",
      category: "",
      collections: "",
      tags: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "variants",
    control: form.control,
  });

  function onSubmit(data: z.infer<typeof productSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  useEffect(() => {
    if (form.watch("category")) {
      console.log(form.watch("category"));

      const subCategory = categories.filter(
        (category) => category.value === form.watch("category")
      );
      setSubCategories(subCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("category")]);

  return (
    <section>
      <div className="container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-[#292524] z-50 px-4 py-1 rounded-full shadow-4 w-96 fixed bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="link"
                  className="text-red-500 px-0"
                  type="button"
                >
                  Delete
                </Button>
                <div className="flex items-center gap-x-2">
                  <Button
                    variant="link"
                    className="text-muted-foreground px-0"
                    type="button"
                  >
                    Cancel
                  </Button>
                  <Separator
                    orientation="vertical"
                    className="h-4 bg-muted-foreground"
                  />
                  <Button
                    variant="link"
                    className="text-primary px-0"
                    type="submit"
                  >
                    Save changes
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary px-0 size-5 rounded-full"
                    type="button"
                  >
                    <X />
                  </Button>
                </div>
              </div>
            </div>
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
                    <BreadcrumbLink asChild>
                      <Link href="/seller/dashboard/product/list">
                        Products
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Create</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
                <div className="lg:col-span-2">
                  <div className="space-y-4 lg:space-y-6">
                    <Card>
                      <CardHeader className="border-b p-4">
                        <CardTitle className="text-xl">Product info</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
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
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid gap-4 lg:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="SKU"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>SKU</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="weight"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Weight</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormDescription className="text-xs">
                                    Used to calculate shipping rates at checkout
                                    and label prices during fulfillment.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                  <QuillEditor {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="border-b p-4">
                        <CardTitle className="text-xl">
                          Pricing & others
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-4 gap-4">
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Unit price</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    Set the selling price for each unit of this
                                    product. This Unit Price section would not
                                    be applied if you set a variation wise
                                    price.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Minimum order qty</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    Set the minimum order quantity that
                                    customers must choose. Otherwise the
                                    checkout process would not start.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Current stock qty</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    Add the Stock Quantity of this product that
                                    will be visible to customers.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Discount Type</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    If Flat discount amount will be set as fixed
                                    amount. If Percentage discount amount will
                                    be set as percentage.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Discount amount</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    Add the discount amount in percentage or a
                                    fixed value here.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Tax amount(%)</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>Set the Tax Amount in percentage here</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Tax calculation</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    Set the tax calculation method from here.
                                    Select Include with product to combine
                                    product price and tax on the checkout. Pick
                                    Exclude from product to display product
                                    price and tax amount separately.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center gap-x-1">
                              <FormLabel>Shipping cost</FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    Set the shipping cost for this product here.
                                    Shipping cost will only be applicable if
                                    product-wise shipping is enabled.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 col-span-2">
                            <div className="flex items-center gap-x-1">
                              <FormLabel>
                                Shipping cost multiply with quantity
                              </FormLabel>
                              <Tooltip delayDuration={10}>
                                <TooltipTrigger asChild>
                                  <CircleHelp className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  align="start"
                                  className="py-1 w-[90vw] max-w-xs text-xs"
                                >
                                  <p>
                                    If enabled the shipping charge will increase
                                    with the product quantity
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <FormControl>
                              <Switch />
                            </FormControl>
                          </FormItem>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="border-b p-4">
                        <CardTitle className="text-xl">Media</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          {previewUrls && previewUrls?.length > 0 && (
                            <div className="grid gap-4 grid-cols-4">
                              {previewUrls.map((url, index) => (
                                <div
                                  className="h-44 relative rounded-lg w-full overflow-hidden"
                                  key={index}
                                >
                                  <Button
                                    className="absolute top-2 right-2 rounded-full size-6 z-10"
                                    type="button"
                                    size="icon"
                                    variant="secondary"
                                    onClick={() => removeFile(index)}
                                  >
                                    <X />
                                  </Button>
                                  <Image
                                    src={url}
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="w-full h-full rounded-lg object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                          <Card
                            className={cn(
                              "border-dashed p-12 flex flex-col items-center justify-center",
                              dragging ? "border-primary" : "border-border"
                            )}
                            onDragOver={(e) => {
                              e.preventDefault();
                              setDragging(true);
                            }}
                            onDragLeave={(e) => {
                              e.preventDefault();
                              setDragging(false);
                            }}
                            onDrop={(e) => {
                              setDragging(false);
                              onDropTrigger(e);
                            }}
                            onClick={onUploadTrigger}
                          >
                            <ImagePlus className="w-16 h-16 stroke-muted-foreground stroke-1 mb-4" />
                            <div className="flex items-center gap-1 mb-1">
                              <Typography variant="subtitle2">
                                Drop your files here or
                              </Typography>
                              <input
                                title="Upload product img"
                                type="file"
                                onChange={handleFileChange}
                                ref={inputRef}
                                className="hidden"
                                accept="image/jpg, image/png, image/jpeg, image/webp"
                                multiple
                              />
                              <Label className="text-primary">browse</Label>
                            </div>
                            {error ? (
                              <Typography
                                variant="caption"
                                className="text-red-500"
                              >
                                {error}
                              </Typography>
                            ) : (
                              <Typography
                                variant="caption"
                                className="text-muted-foreground"
                              >
                                JPG, PNG, JPEG, WEBP
                              </Typography>
                            )}
                          </Card>
                          <Typography
                            variant="caption"
                            className="text-muted-foreground"
                          >
                            Add up to 10 images to your product.
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="border-b p-4">
                        <CardTitle className="text-xl">Variants</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="grid gap-4 grid-cols-12">
                              <div className="col-span-2">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground uppercase"
                                >
                                  Size
                                </Typography>
                              </div>
                              <div className="col-span-2">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground uppercase"
                                >
                                  Color
                                </Typography>
                              </div>
                              <div className="col-span-3">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground uppercase"
                                >
                                  Price
                                </Typography>
                              </div>
                              <div className="col-span-2">
                                <Typography
                                  variant="caption"
                                  className="text-muted-foreground uppercase"
                                >
                                  Quantity
                                </Typography>
                              </div>
                            </div>
                            {fields.map((field, index) => (
                              <div
                                key={field.id}
                                className="grid gap-4 grid-cols-12"
                              >
                                <FormField
                                  control={form.control}
                                  key={field.id}
                                  name={`variants.${index}.size`}
                                  render={({ field }) => (
                                    <div className="col-span-2">
                                      <FormItem>
                                        <FormControl>
                                          <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    </div>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.color`}
                                  render={({ field }) => (
                                    <div className="col-span-2">
                                      <FormItem>
                                        <FormControl>
                                          <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    </div>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.price`}
                                  render={({ field }) => (
                                    <div className="col-span-3">
                                      <FormItem>
                                        <FormControl>
                                          <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    </div>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`variants.${index}.quantity`}
                                  render={({ field }) => (
                                    <div className="col-span-4">
                                      <FormItem>
                                        <FormControl>
                                          <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    </div>
                                  )}
                                />
                                <div className="col-span-1">
                                  <Button
                                    variant="secondary"
                                    size="icon"
                                    type="button"
                                    onClick={() => remove(index)}
                                    disabled={fields.length === 1}
                                  >
                                    <X />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 text-xs font-medium rounded-full"
                            type="button"
                            onClick={() =>
                              append({
                                size: "",
                                color: "",
                                price: "",
                                quantity: "",
                              })
                            }
                          >
                            <Plus /> Add Variant
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-4 sticky top-4">
                    <Card>
                      <CardHeader className="border-b p-4">
                        <CardTitle className="text-xl">Organization</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="vendor"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Vendor</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Combobox
                                  options={categories}
                                  placeholder="Select category"
                                  {...field}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Sub Category</FormLabel>
                                <Combobox
                                  isSearch={false}
                                  options={subCategories}
                                  placeholder="Select category"
                                  {...field}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Brand</FormLabel>
                                <Combobox
                                  isSearch={false}
                                  options={[
                                    { label: "Clothing", value: "Clothing" },
                                    { label: "Shoes", value: "Shoes" },
                                    {
                                      label: "Electronics",
                                      value: "Electronics",
                                    },
                                    { label: "Others", value: "Others" },
                                  ]}
                                  placeholder="Select category"
                                  {...field}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Product type</FormLabel>
                                <Combobox
                                  isSearch={false}
                                  options={[
                                    { label: "Clothing", value: "Clothing" },
                                    { label: "Shoes", value: "Shoes" },
                                    {
                                      label: "Electronics",
                                      value: "Electronics",
                                    },
                                    { label: "Others", value: "Others" },
                                  ]}
                                  placeholder="Select category"
                                  {...field}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="collections"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Collections</FormLabel>
                                <Combobox
                                  isSearch={false}
                                  options={[
                                    { label: "Spring", value: "Spring" },
                                    { label: "Summer", value: "Summer" },
                                    { label: "Autumn", value: "Autumn" },
                                    { label: "Winter", value: "Winter" },
                                  ]}
                                  placeholder="Select collections"
                                  {...field}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormItem>
                            <FormLabel>Unit</FormLabel>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormItem>
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-x-1">
                                <FormLabel>Product SKU</FormLabel>
                                <Tooltip delayDuration={10}>
                                  <TooltipTrigger asChild>
                                    <CircleHelp className="w-4 h-4" />
                                  </TooltipTrigger>
                                  <TooltipContent
                                    side="bottom"
                                    align="start"
                                    className="py-1 w-[90vw] max-w-xs text-xs"
                                  >
                                    <p>
                                      Create a unique product code by clicking
                                      on the Generate Code button
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                              <span
                                className="text-sm font-medium text-primary cursor-pointer"
                                role="button"
                                onClick={() => {
                                  const product = {
                                    category: "Electronics",
                                    productName: "Smartphone",
                                  };

                                  const sku = generateSKU(product);
                                  console.log(sku);
                                }}
                              >
                                Generate code
                              </span>
                            </div>
                            <FormControl>
                              <Input />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                          <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                  <TagInput
                                    value={field.value}
                                    onChange={field.onChange}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SellerProductCreate;
