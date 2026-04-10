"use client";

type Props = {
  onSignOut: () => Promise<void>;
};

export default function SignOut({ onSignOut }: Props) {
  return (
    <button
      onClick={() => onSignOut()}
      className="rounded-full bg-[#ebe1d6] px-5 py-2 text-sm font-semibold text-[#33210d] transition-all duration-300 hover:opacity-80 active:scale-95"
    >
      Sign Out
    </button>
  );
}
