"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function Home() {
  const trpc = useTRPC();
  const hello = useQuery(trpc.hello.queryOptions({ name: "Kupi" }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        {hello.data?.greeting ?? "Loading..."}
      </h1>
    </main>
  );
}
