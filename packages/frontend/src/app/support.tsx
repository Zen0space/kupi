import Link from "next/link";
import type { Metadata } from "next";

type SupportCategory = {
  icon: "account" | "streaks" | "rewards";
  title: string;
  subtitle: string;
  accent?: boolean;
};

const categories: SupportCategory[] = [
  {
    icon: "account",
    title: "Account",
    subtitle: "Profile & Security",
  },
  {
    icon: "streaks",
    title: "Streaks",
    subtitle: "Ritual Stats",
  },
  {
    icon: "rewards",
    title: "Rewards",
    subtitle: "Redeem Points",
    accent: true,
  },
];

const faqs = [
  "How do I log a visit?",
  "Why isn't my streak updating?",
  "How to find halal cafes?",
  "Can I share my rewards?",
];

export const metadata: Metadata = {
  title: "Support | Kupi",
  description: "Find answers, browse FAQs, and contact Kupi support.",
};

function Icon({
  name,
  className = "",
  filled = false,
}: {
  name: SupportCategory["icon"] | "back" | "search" | "chevron" | "chat" | "mail";
  className?: string;
  filled?: boolean;
}) {
  const strokeWidth = filled ? 0 : 1.75;

  switch (name) {
    case "back":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M15 6.5 9.5 12 15 17.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "search":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <circle
            cx="11"
            cy="11"
            r="6.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m16.5 16.5 3 3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "chevron":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="m9 6.75 5.5 5.25L9 17.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "chat":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M6.5 6.75h11A2.25 2.25 0 0 1 19.75 9v4A2.25 2.25 0 0 1 17.5 15.25H11l-4.25 3.25V15.25H6.5A2.25 2.25 0 0 1 4.25 13V9A2.25 2.25 0 0 1 6.5 6.75Z"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "mail":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <rect
            height="13.5"
            rx="2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            width="15.5"
            x="4.25"
            y="5.25"
          />
          <path
            d="m5.5 7.75 6.5 5.25 6.5-5.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "account":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="9" r="3.25" stroke="currentColor" strokeWidth={strokeWidth} />
          <path
            d="M6.5 19c.8-3 3.1-4.75 5.5-4.75S16.7 16 17.5 19"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "streaks":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M12 20c3.5 0 6-2.7 6-6 0-2.1-1.1-3.7-2.6-5.3-.9-1-.8-2.1-.8-3.2-1.3.5-2.5 1.6-3.2 3.1-.8-1.1-1.2-2.3-1.2-3.8-2 1.2-4.2 3.7-4.2 7.2 0 4 2.8 8 6 8Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 16.75c1.5 0 2.5-1.1 2.5-2.5 0-.8-.3-1.5-.9-2.2-.3 1-.9 1.4-1.6 2-.6-.6-1-1.2-1-2.1-1 .6-1.8 1.7-1.8 3 0 1.2.8 1.8 2.8 1.8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "rewards":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M8 7.25h8a2 2 0 0 1 2 2v1.25a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V9.25a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9.25 7.25c0-1.1.9-2 2-2S13.25 6.15 13.25 7.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 13.75v5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9.25 13.75c0 1.5-1.5 2.25-3 2.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14.75 13.75c0 1.5 1.5 2.25 3 2.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#1f1b14] antialiased">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#fff8f3]/80 backdrop-blur-xl dark:bg-[#1a120b]/80">
        <div className="flex h-16 w-full items-center justify-between px-6">
          <Link
            aria-label="Go back to home"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#33210d] transition-all hover:bg-[#f6ece1] active:scale-90"
            href="/"
          >
            <Icon className="h-6 w-6" name="back" />
          </Link>
          <h1 className="font-headline text-lg font-bold tracking-tight text-[#33210d]">Support</h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="mx-auto min-h-screen max-w-2xl space-y-12 px-6 pb-16 pt-24">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-[#33210d]">
              How can we help?
            </h2>
            <p className="font-medium text-[#4e453d] opacity-80">
              Find answers about your Kupi ritual.
            </p>
          </div>

          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-[#33210d]/40 transition-colors group-focus-within:text-[#33210d]">
              <Icon className="h-6 w-6" name="search" />
            </div>
            <input
              className="w-full rounded-2xl border border-transparent bg-[#fcf2e7] py-5 pl-14 pr-6 font-medium text-[#33210d] shadow-sm placeholder:text-[#4e453d]/40 transition-all focus:border-[#33210d]/10 focus:ring-4 focus:ring-[#33210d]/5"
              placeholder="Search FAQs..."
              type="text"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.title}
              className={`relative overflow-hidden rounded-2xl border border-white/50 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_20px_-8px_rgba(51,33,13,0.08)] ${
                category.accent ? "bg-[#fedcbe]/30" : "bg-[#fcf2e7]"
              }`}
              type="button"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(51,33,13,0.02)_1px,transparent_0)] bg-[length:24px_24px] opacity-50" />
              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/60 shadow-[0_4px_10px_-2px_rgba(51,33,13,0.05)] backdrop-blur-md ${
                  category.icon === "rewards"
                    ? "text-[#59422c]"
                    : category.icon === "streaks"
                      ? "text-[#5a6745]"
                      : "text-[#566342]"
                }`}
              >
                <Icon
                  className="h-6 w-6"
                  filled={category.icon === "streaks"}
                  name={category.icon}
                />
              </div>

              <div className="mt-4 space-y-1">
                <p className="font-headline text-xl font-extrabold tracking-tight text-[#33210d]">
                  {category.title}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4e453d]/50">
                  {category.subtitle}
                </p>
              </div>
            </button>
          ))}
        </section>

        <section className="space-y-6">
          <h3 className="font-headline mb-4 px-1 text-3xl font-bold tracking-tight text-[#33210d]">
            Popular FAQs
          </h3>

          <div className="space-y-3">
            {faqs.map((question) => (
              <button
                key={question}
                className="group flex w-full items-center justify-between rounded-2xl border border-white/40 bg-[#fcf2e7]/40 p-5 text-left shadow-sm transition-all hover:bg-[#f1e7dc]/60 active:scale-[0.99]"
                type="button"
              >
                <span className="font-semibold tracking-tight text-[#33210d]">{question}</span>
                <Icon
                  className="h-6 w-6 text-[#33210d]/30 transition-all group-hover:translate-x-1"
                  name="chevron"
                />
              </button>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              className="text-xs font-bold uppercase tracking-widest text-[#566342] transition-opacity hover:opacity-70"
              type="button"
            >
              View all questions
            </button>
          </div>
        </section>

        <section className="space-y-4 pt-6">
          <button
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#33210d] py-5 font-headline text-lg font-bold text-white shadow-[0_8px_30px_rgba(51,33,13,0.12)] transition-all hover:shadow-[0_12px_40px_rgba(51,33,13,0.18)] active:scale-95"
            type="button"
          >
            <Icon className="h-6 w-6" filled name="chat" />
            Chat with us
          </button>

          <button
            className="flex w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-[#f1e7dc]/50 py-5 font-headline text-lg font-bold text-[#33210d] backdrop-blur-md transition-all hover:bg-[#f1e7dc]/80 active:scale-95"
            type="button"
          >
            <Icon className="h-6 w-6" name="mail" />
            Email Support
          </button>
        </section>
      </div>
    </main>
  );
}
