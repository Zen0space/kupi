"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

type UserSyncProps = {
  userInfo: {
    name?: string;
    username?: string;
    picture?: string;
    email?: string;
  };
};

export default function UserSync({ userInfo }: UserSyncProps) {
  const trpc = useTRPC();
  const syncUser = useMutation(trpc.syncUser.mutationOptions());

  useEffect(() => {
    syncUser.mutate(userInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (syncUser.isPending) {
    return <p className="text-sm text-gray-500">Syncing user...</p>;
  }

  if (syncUser.error) {
    return <p className="text-sm text-red-500">Sync failed: {syncUser.error.message}</p>;
  }

  if (syncUser.data) {
    const { user } = syncUser.data;
    return (
      <div className="flex flex-col items-center gap-1 text-sm">
        <p>{user.name ?? user.username ?? user.id}</p>
      </div>
    );
  }

  return null;
}
