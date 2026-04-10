"use client";

type Props = {
  onSignIn: () => Promise<void>;
};

export default function SignIn({ onSignIn }: Props) {
  return (
    <button
      onClick={() => onSignIn()}
      className="rounded-full bg-[#33210d] px-6 py-2.5 font-semibold text-[#ffffff] transition-all duration-300 hover:opacity-80 active:scale-95"
    >
      Sign In
    </button>
  );
}
