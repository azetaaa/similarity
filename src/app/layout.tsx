import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Provider from "@/components/provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

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
          {children}

          {/* Allow more height for mobile menu on mobile */}
          <div className="h-40 md:hidden" />
        </Provider>
      </body>
    </html>
  );
}
