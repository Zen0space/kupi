"use client";

type Props = {
  onSignIn: () => Promise<void>;
};

export default function SignIn({ onSignIn }: Props) {
  return (
    <button
      onClick={() => onSignIn()}
      className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Sign In
    </button>
  );
}
