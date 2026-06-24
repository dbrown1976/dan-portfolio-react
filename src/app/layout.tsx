import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/templates/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Brown Portfolio",
  description: "React portfolio foundation for Daniel Brown."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
