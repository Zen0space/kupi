"use client";

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { useState, useRef, useEffect } from "react";
import { makeQueryClient } from "./query-client";
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
  const tokenRef = useRef<string | undefined>(undefined);

  // Fetch the token via server action on mount
  useEffect(() => {
    getToken().then((token) => {
      tokenRef.current = token;
    });
  }, [getToken]);

  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: getUrl(),
          async headers() {
            // If we don't have a token yet, try fetching it
            if (!tokenRef.current) {
              tokenRef.current = await getToken();
            }
            if (tokenRef.current) {
              return { Authorization: `Bearer ${tokenRef.current}` };
            }
            return {};
          },
        }),
      ],
    }),
  );

  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </TRPCProvider>
  );
}
