import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { DATA } from "@/data/resume";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Nafis Reza - Software Engineer",
    template: `%s | ${DATA.name}`,
  },
  description: "I am a fullstack engineer focused on building modern, accessible, human-centered products. Softwares I architect, drive businesses forward.",
  keywords:  ["Nafis Reza", "Nafis", "nafisreza", "fullstack engineer", "software engineer", "web development"],
  openGraph: {
    title: `${DATA.name}`,
    description: "I am a fullstack engineer focused on building modern, accessible, human-centered products. Softwares I architect, drive businesses forward.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.nafisreza.com/Portfolio.png",
        width: 1200,
        height: 630,
        alt: "Nafis Reza - Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
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
          "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto py-12 sm:py-24 px-6 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
