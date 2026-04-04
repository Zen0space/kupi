import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

// ============================================================================
// Types
// ============================================================================

export type UserInfo = {
  name?: string;
  username?: string;
  picture?: string;
  email?: string;
};

export type SyncedUser = {
  id: string;
  name: string | null;
  username: string | null;
  picture: string | null;
  email: string | null;
};

export type UserSyncStatus =
  | { state: "idle" }
  | { state: "syncing" }
  | { state: "success"; user: SyncedUser }
  | { state: "error"; error: string };

// ============================================================================
// Storage helper for SSR safety
// ============================================================================

const sessionStorageWrapper = createJSONStorage<unknown>(() => {
  if (typeof window !== "undefined") {
    return sessionStorage;
  }
  // Return a no-op storage for SSR
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
});

// ============================================================================
// Atoms
// ============================================================================

/**
 * Holds the user info passed from server component
 * Persisted to sessionStorage so it survives client-side navigation
 */
export const userInfoAtom = atomWithStorage<UserInfo | null>(
  "kupi-user-info",
  null,
  sessionStorageWrapper as ReturnType<typeof createJSONStorage<UserInfo | null>>,
  { getOnInit: true }
);

/**
 * Tracks the sync status - persisted to sessionStorage
 * This prevents re-syncing on every page navigation
 */
export const userSyncStatusAtom = atomWithStorage<UserSyncStatus>(
  "kupi-user-sync-status",
  { state: "idle" },
  sessionStorageWrapper as ReturnType<typeof createJSONStorage<UserSyncStatus>>,
  { getOnInit: true }
);

/**
 * Derived atom to check if sync is needed
 * Only syncs if we have userInfo AND status is idle
 */
export const shouldSyncUserAtom = atom((get) => {
  const status = get(userSyncStatusAtom);
  const userInfo = get(userInfoAtom);
  return userInfo !== null && status.state === "idle";
});

/**
 * The synced user data (convenience getter)
 */
export const syncedUserAtom = atom((get) => {
  const status = get(userSyncStatusAtom);
  return status.state === "success" ? status.user : null;
});

/**
 * Write-only atom to retry user sync
 * Resets the sync status to "idle" so sync can happen again
 */
export const retryUserSyncAtom = atom(null, (_get, set) => {
  set(userSyncStatusAtom, { state: "idle" });
});

/**
 * Write-only atom to clear all user state (for logout)
 */
export const clearUserStateAtom = atom(null, (_get, set) => {
  set(userInfoAtom, null);
  set(userSyncStatusAtom, { state: "idle" });
  // Also clear from storage
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("kupi-user-info");
    sessionStorage.removeItem("kupi-user-sync-status");
  }
});
