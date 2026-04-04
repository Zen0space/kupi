"use client";

type Props = {
  onSignOut: () => Promise<void>;
};

export default function SignOut({ onSignOut }: Props) {
  return (
    <button
      onClick={() => onSignOut()}
      className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
    >
      Sign Out
    </button>
  );
}
