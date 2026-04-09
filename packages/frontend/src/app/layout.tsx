import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/client";
import { getToken } from "./actions/auth";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const headlineFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Kupi - Your Sensory Coffee Journal",
  description: "Discover cafes, log brews, and build a sensory coffee journal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headlineFont.variable}`}>
        <TRPCReactProvider getToken={getToken}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
