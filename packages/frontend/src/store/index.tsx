"use client";

import { Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { queryClientAtom } from "jotai-tanstack-query";
import type { QueryClient } from "@tanstack/react-query";

/**
 * HydrateAtoms - Hydrates Jotai atoms with the QueryClient instance
 * This ensures jotai-tanstack-query uses the same QueryClient as tRPC
 */
export function HydrateAtoms({
  queryClient,
  children,
}: {
  queryClient: QueryClient;
  children: React.ReactNode;
}) {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
}

/**
 * JotaiProvider - Wraps children with Jotai Provider and hydrates QueryClient
 * Use this in your app layout to enable Jotai state management
 */
export function JotaiProvider({
  queryClient,
  children,
}: {
  queryClient: QueryClient;
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <HydrateAtoms queryClient={queryClient}>{children}</HydrateAtoms>
    </Provider>
  );
}

// Re-export commonly used Jotai utilities
export { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
export { atomWithStorage, atomWithReset, RESET } from "jotai/utils";
export {
  atomWithQuery,
  atomWithMutation,
  atomWithInfiniteQuery,
  atomWithSuspenseQuery,
  queryClientAtom,
} from "jotai-tanstack-query";
