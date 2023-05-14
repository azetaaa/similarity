import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Similarity API",
  description: "Free & open-source text similarity API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Provider>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}

          {/* Allow more height for mobile menu on mobile */}
          <div className="h-40 md:hidden" />
        </Provider>
      </body>
    </html>
  );
}
