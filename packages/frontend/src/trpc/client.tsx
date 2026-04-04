"use client";

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { useState } from "react";
import { makeQueryClient } from "./query-client";
import { JotaiProvider } from "@/store";
import type { AppRouter } from "@kupi/backend/src/trpc/routers/_app";

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

function getUrl() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!backendUrl) {
    throw new Error("Missing required environment variable: NEXT_PUBLIC_BACKEND_URL");
  }
  return `${backendUrl}/trpc`;
}

export function TRPCReactProvider({
  children,
  getToken,
}: Readonly<{
  children: React.ReactNode;
  getToken: () => Promise<string | undefined>;
}>) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: getUrl(),
          async headers() {
            const token = await getToken();
            if (token) {
              return { Authorization: `Bearer ${token}` };
            }
            return {};
          },
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider queryClient={queryClient}>
        <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
          {children}
        </TRPCProvider>
      </JotaiProvider>
    </QueryClientProvider>
  );
}
