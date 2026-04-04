import { atom } from "jotai";
import { atomWithStorage, atomWithReset } from "jotai/utils";

/**
 * UI State Atoms
 *
 * These atoms manage UI-related state that doesn't need to be persisted
 * to the server. Use Jotai's prebuilt functions for common patterns.
 */

// ============================================================================
// Sidebar State
// ============================================================================

/** Whether the sidebar is currently open */
export const sidebarOpenAtom = atom(true);

/** Toggle sidebar open/closed - derived atom with write function */
export const toggleSidebarAtom = atom(
  (get) => get(sidebarOpenAtom),
  (get, set) => set(sidebarOpenAtom, !get(sidebarOpenAtom))
);

// ============================================================================
// Theme State (persisted to localStorage)
// ============================================================================

export type Theme = "light" | "dark" | "system";

/** User's preferred theme - persisted to localStorage */
export const themeAtom = atomWithStorage<Theme>("kupi-theme", "system");

// ============================================================================
// Modal State
// ============================================================================

export type ModalType = "settings" | "profile" | "confirm" | null;

/** Currently open modal (null = no modal open) - resettable */
export const activeModalAtom = atomWithReset<ModalType>(null);

/** Modal data payload for dynamic content */
export const modalDataAtom = atomWithReset<Record<string, unknown> | null>(
  null
);

// ============================================================================
// Loading / UI Feedback State
// ============================================================================

/** Global loading state for blocking operations */
export const globalLoadingAtom = atom(false);

/** Toast notifications queue */
export interface Toast {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
}

export const toastsAtom = atom<Toast[]>([]);

/** Add a toast notification */
export const addToastAtom = atom(null, (get, set, toast: Omit<Toast, "id">) => {
  const id = crypto.randomUUID();
  set(toastsAtom, [...get(toastsAtom), { ...toast, id }]);

  // Auto-remove after duration (default 5s)
  const duration = toast.duration ?? 5000;
  if (duration > 0) {
    setTimeout(() => {
      set(toastsAtom, (toasts) => toasts.filter((t) => t.id !== id));
    }, duration);
  }
});

/** Remove a specific toast */
export const removeToastAtom = atom(null, (get, set, id: string) => {
  set(toastsAtom, (toasts) => toasts.filter((t) => t.id !== id));
});
