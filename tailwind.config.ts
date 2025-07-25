import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindForm from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        merriweather: ["var(--font-merriweather)"],
      },
      boxShadow: {
        "1": "0px 1px 2px 0px #0000004d, 0px 1px 3px 1px #00000026",
        "2": "0px 1px 2px 0px #0000004d, 0px 2px 6px 2px #00000026",
        "3": "0px 1px 3px 0px #0000004d, 0px 4px 8px 3px #00000026",
        "4": "0px 1px 5px 0px #0000004d, 0px 5px 20px 6px #00000026",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    tailwindForm,
    plugin(function ({ addComponents }) {
      addComponents({
        ".scrollbar": {
          height: "80vh",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
          borderLeftWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderColor: "hsl(var(--border))",
          "&::-webkit-scrollbar": {
            width: "12px",
            height: "12px",
          },
          "&::-webkit-scrollbar-track": {
            background: "hsl(var(--muted) / 0.8)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "hsl(var(--muted-foreground) / 0.3)",
          },
          "&::-webkit-scrollbar-corner": {
            backgroundColor: "hsl(var(--muted) / 0.5)",
          },
        },
        ".whisper-scroll": {
          scrollBehavior: "smooth",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "hsl(var(--muted) / 0.8)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "hsl(var(--muted-foreground) / 0.3)",
            borderRadius: "9999px",
          },
          "&::-webkit-scrollbar-corner": {
            backgroundColor: "hsl(var(--muted) / 0.5)",
          },
        },
        ".poem": {
          height: "80vh",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
          borderLeftWidth: "1px",
          borderBottomWidth: "1px",
          borderColor: "hsl(var(--border))",
          scrollbarColor:
            "hsl(var(--muted-foreground) / 0.3) hsl(var(--muted) / 0.8)",
          // scrollbarWidth: "thin",
        },
        ".whisper-poem": {
          scrollBehavior: "smooth",
          scrollbarColor:
            "hsl(var(--muted-foreground) / 0.3) hsl(var(--muted) / 0.8)",
        },
        ".sticky-top": {
          position: "sticky",
          top: "0",
          background: "hsl(var(--muted))",
          zIndex: "10",
        },
        ".border-overlay": {
          position: "relative",
          border: "none",

          "&::after": {
            content: '""',
            position: "absolute",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderColor: "hsl(var(--primary) / 0.1)",
            height: "100%",
            top: "0",
            left: "0",
            bottom: "0",
            right: "-0.5px",
            zIndex: "-10",

            "&:last-child": {
              borderRightWidth: "0",
              right: "0",
            },
          },
        },
      });
    }),
  ],
} satisfies Config;
