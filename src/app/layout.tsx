import type { Metadata } from "next";
import { Inter, Lora, Merriweather } from "next/font/google";
import "./globals.css";
import "react-quill-new/dist/quill.snow.css";
import "./style.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

const lora = Lora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title:
    "Mun Bangladesh - Shop for Handmade, Vintage, Custom, and Unique Gifts for Everyone",
  description:
    "Discover a world of creativity at Mun Bangladesh! Explore our curated collection of handmade, vintage, and custom gifts perfect for every occasion. Find unique treasures and support talented artisans with every purchase.",

  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "text-base antialiased",
          inter.className,
          lora.variable,
          merriweather.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
