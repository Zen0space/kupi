import type { Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/client";
import { getToken } from "./actions/auth";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kupi",
  description: "Kupi — Full-stack TypeScript application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider getToken={getToken}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
