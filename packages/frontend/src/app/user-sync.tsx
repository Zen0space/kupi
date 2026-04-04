"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useAtom, useSetAtom, useAtomValue } from "jotai";
import {
  userInfoAtom,
  userSyncStatusAtom,
  shouldSyncUserAtom,
  retryUserSyncAtom,
  type UserInfo,
} from "@/store/atoms";

type UserSyncProps = {
  userInfo: UserInfo;
};

export default function UserSync({ userInfo }: UserSyncProps) {
  const trpc = useTRPC();

  // Jotai state
  const setUserInfo = useSetAtom(userInfoAtom);
  const [syncStatus, setSyncStatus] = useAtom(userSyncStatusAtom);
  const shouldSync = useAtomValue(shouldSyncUserAtom);
  const retry = useSetAtom(retryUserSyncAtom);

  // tRPC mutation with Jotai state callbacks
  const syncUser = useMutation(
    trpc.syncUser.mutationOptions({
      onMutate: () => {
        setSyncStatus({ state: "syncing" });
      },
      onSuccess: (data) => {
        setSyncStatus({ state: "success", user: data.user });
      },
      onError: (error) => {
        setSyncStatus({ state: "error", error: error.message });
      },
    })
  );

  // Trigger sync if needed (replaces useEffect)
  // This is safe because shouldSync is derived from atom state
  // and will only be true once until retry is called
  if (shouldSync) {
    setUserInfo(userInfo);
    syncUser.mutate(userInfo);
  }

  // Render based on atom state
  if (syncStatus.state === "syncing") {
    return <p className="text-sm text-gray-500">Syncing user...</p>;
  }

  if (syncStatus.state === "error") {
    return (
      <div className="flex flex-col items-center gap-1 text-sm">
        <p className="text-red-500">Sync failed: {syncStatus.error}</p>
        <button
          onClick={() => retry()}
          className="text-blue-500 hover:underline"
        >
          Retry
        </button>
      </div>
    );
  }

  if (syncStatus.state === "success") {
    const { user } = syncStatus;
    return (
      <div className="flex flex-col items-center gap-1 text-sm">
        <p>{user.name ?? user.username ?? user.id}</p>
      </div>
    );
  }

  return null;
}
