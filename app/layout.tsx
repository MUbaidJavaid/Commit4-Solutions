import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { RootLayoutClient } from "@/components/layout/RootLayoutClient";

export const metadata: Metadata = {
  title: "Commit4Solutions",
  description: "Commit4Solutions - Commit to better software solutions.",
  metadataBase: new URL("https://www.commit4solutions.com"),
  openGraph: {
    title: "Commit4Solutions",
    description: "Commit to better software solutions.",
    type: "website",
    images: ["/commit4solutions-log.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Commit4Solutions",
    images: ["/commit4solutions-log.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}

