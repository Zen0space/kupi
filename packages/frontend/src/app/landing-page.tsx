type FeatureCard = {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
  elevated?: boolean;
};

/* eslint-disable @next/next/no-img-element */

const featureCards: FeatureCard[] = [
  {
    icon: "explore",
    iconClass: "bg-[#d7e5bb] text-[#5a6745]",
    title: "Discover",
    description:
      "Find hidden gems and aesthetic spots with curated recommendations based on your taste profile.",
  },
  {
    icon: "edit_note",
    iconClass: "bg-[#33210d] text-[#ffffff]",
    title: "Journal",
    description:
      "Capture every sip. Track tasting notes, origin stories, and the memories shared over every cup.",
    elevated: true,
  },
  {
    icon: "local_fire_department",
    iconClass: "bg-[#54330c] text-[#ffdcbd]",
    title: "Streak",
    description:
      "Stay motivated with gamified visits and earn exclusive rewards from your favorite local roasters.",
  },
];

const communityAvatars = [
  {
    alt: "Portrait of a smiling young woman with curly hair in a vibrant cafe setting",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACTF8aQaJbtZMoQMQYZbBjMvLxhrpLFCFVfPFpZ4I_J_WDormr2fzgFnKDFZfE8WjjgiNVQELg_W5XauhtvHgMB2UbbvJBMth_5cdeQCEiUdikCFuoa-lQ_UsYv4EpdXRaNYVVU5IIskDH3qWnnHh6w97YregP_c00T-xv_Tk72aIykIzLvAULRr46-ygUbT8o_auo64_VWayXnDCBZR0OnXlAd5Sft3R382KFSahC6cDORwv29nwvW-v2PLBh0Ltz01VJv3L3_EQ",
  },
  {
    alt: "Portrait of a man with glasses smiling warmly in soft indoor lighting",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYNXKmCUSIGgWiHCHS0qVujCDA8_ZUka-j3Fr6ytfaDszZJMG0jWmkhhfdV55jSnrg2b8FrRVas6Ywd6PMcW1TyLcRbUB8NaOPKxcUwoOzqDiKbMaZDx6PnE1d8W2uiZaWBvvJNXhMtY9xD_6oL6vxK159ZBCIRm-F_fpLn5hDkJa74juL_sVjdG0-2Y62NZM87pG4hZSqdUeVMf-iFTsp-PIO0kHqEN7VeuUdNwPFB8Jg-6Ba0-fUH9_OauTNHS_QqhPyI-snorw",
  },
  {
    alt: "Candid portrait of a young man laughing in an urban environment",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMBGr6pCCEsnxWMn-5jkX1hBz2IkYBmlSU6PeqYW0i20fEhwPQ725dHOhXIyKrRhxDqmhimP5n56w9iLb9hY700yxBTNa-IzCDr9EEq6gtXEx0toq71p6uGFa-HEtaVfsy-0jESKQkzOqMpFBl801ajiwHkkPWGt4vvKutW0RTKrfcdr3Pj-ydyAkZRDUHCwvnhYdB0vc9pDt73XTOKHJG3G7ysEIzUMNtT0Av3iLW8jEcjRz2_PjPxhlf9K9kO6AEO1q3BaBN6V4",
  },
];

const gallery = [
  {
    alt: "Top down view of a ceramic coffee cup with latte art on a marble table with a journal",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH6qUfSigYcpqTi2MRvldoiZF5hDBLgjn5wA2vkjpvQ25cpT06W3asldkYnzTLgBwwFTMInU1-Hzv2wJHYzD6aMe-mvcZ3J8voFVrBjizzIikgC9f8gw9ks3ITe9Le2xie0piFpgnTLUO_joXbykaG0TSY-jln1nWSda1CoEJXyN70wLitcVGpVVpVkPqQV4de3XXOVOq6C6AZi4iuqfI9Y20y2roeD89yywjHsHm6V2I2XAg7hKSifKCswX68rkyfD9CnMM-x8zw",
    offsetClass: "mt-12",
  },
  {
    alt: "Close up of a barista preparing a pour over coffee in a high-end specialty coffee shop",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyHQWWUG1noCcL3ru4CASysK72VDXxh7cvW89L8IouQ4v3NH-pO7m-Mb_YQBfpuIlv9X_wMtdebWC1ZOd9v2pVgs5kqeUlho-HsYU7ZpSSAQEUogjDg4GO5CgJnlvxcJfePdHLT4iR1Y9QKGaB27zrMisRhUWZjZJk025r3AqC5ZmfgheWdEZ-ijmXutkYR7kNjyT6bAyMNqL-5tvfw-GQ3xJxbMGsriyy58xwaoWxrfxT_aBJSoJX9_ATnsdJcYzRL_iZ3XKBRs",
    offsetClass: "",
  },
  {
    alt: "Macro photo of coffee beans roasting with steam and rich textures",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn6ImKyXdycjNOOzA7-pExng5jjjpbgmBNJQsUUqosmZ-HUH43pc0nbXI0AyjxVD6VpzjanR26FeqIq7PYyIzFm9pRMxNuBWSxmOi3SVqWPktzzpryuRwxTFGrmRxVuC5dJ32u11eErf6l6oVt2W5UoXypCyNyCWOsuyb6Ew5mKA2-bBxP1Rr6HlndeexOrtq2nOSNhj5pBZ-ioiV2qlwTfhY3HKSEiiryxHbgZ6fKNYmuMpBmOXEWGOWML-VyC4uWMv3rKg06QYY",
    offsetClass: "-mt-12",
  },
  {
    alt: "Sunlight hitting a glass of iced coffee on a minimalist wooden table",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlRWqxoDUWA18Jr2PrIhKXCYfBHDL9x3Wyb3XVVskjWxOmGM3S64_kEfR9RvenwUwvpa4Zw1kivet_Lpkl7vwSOFHMrjt3GmDqzpnW2bv4waT4ydBqwJmSrj9ve04oRkE5pyR601-Uv9R_0Lxnt8r-0fg1681T2UT-pA8ptKkKx4Eqc3CYrBd-tB9e6TYQh-nXJ-xSvolLWYiZrhGl9U7whTdJQdFoB66KtzqLkZnlQtUa2eKtrdlZ1ao7PeIDeTfVGtDtHmTXdl8",
    offsetClass: "",
  },
];

function MaterialIcon({
  name,
  className = "",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  const strokeWidth = filled ? 0 : 1.75;

  switch (name) {
    case "coffee":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10.5h11.5a3 3 0 0 1 0 6H7.5A3.5 3.5 0 0 1 4 13V10.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15.5 12.5h1.25a2.25 2.25 0 0 1 0 4.5H15.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M7 4.5c0 1 .75 1.25.75 2.25S7 8 7 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11 4.5c0 1 .75 1.25.75 2.25S11 8 11 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 4.5c0 1 .75 1.25.75 2.25S15 8 15 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "explore":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="8.25"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="m14.75 9.25-1.4 4.4-4.4 1.4 1.4-4.4 4.4-1.4Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "edit_note":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 4.75h7.75L18 8.5v10.75a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14.25 4.75V8.5H18"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8.5 11.5h5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8.5 14h7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="m10.25 18-1.5-.75 4.75-4.75 1.5 1.5-4.75 4Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "local_fire_department":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21c3.5 0 6-2.7 6-6 0-2.1-1.1-3.7-2.6-5.3-.9-1-.8-2.1-.8-3.2-1.3.5-2.5 1.6-3.2 3.1-.8-1.1-1.2-2.3-1.2-3.8-2 1.2-4.2 3.7-4.2 7.2 0 4 2.8 8 6 8Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 17.5c1.5 0 2.5-1.1 2.5-2.5 0-.8-.3-1.5-.9-2.2-.3 1-.9 1.4-1.6 2-.6-.6-1-1.2-1-2.1-1 .6-1.8 1.7-1.8 3 0 1.2.8 1.8 2.8 1.8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill={filled ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 4.75 1.96 4.09 4.54.66-3.28 3.2.77 4.52L12 15.09l-4.03 2.13.77-4.52-3.28-3.2 4.54-.66L12 4.75Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "format_quote":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 10.25A2.75 2.75 0 0 1 10.25 7.5H11v2.5h-.75A.75.75 0 0 0 9.5 10.75V12h-2v-1.75ZM14.75 10.25A2.75 2.75 0 0 1 17.5 7.5h.75v2.5h-.75a.75.75 0 0 0-.75.75V12h-2v-1.75Z"
            fill="currentColor"
          />
        </svg>
      );
    case "ios":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.9 13.2c0-2.7 2.2-4 2.3-4.1-1.2-1.7-3.1-1.9-3.8-1.9-1.6-.2-3 .9-3.8.9-.8 0-1.9-.9-3.2-.8-1.7 0-3.2 1-4.1 2.5-1.8 3.2-.5 7.8 1.3 10.4.8 1.2 1.8 2.5 3.1 2.4 1.2-.1 1.6-.8 3.1-.8s1.8.8 3.2.8c1.4 0 2.2-1.2 3-2.5.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.4-.9-2.4-4.1ZM14.6 5.8c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.9-1.1 3.1 1.1.1 2.1-.5 2.8-1.3Z" />
        </svg>
      );
    default:
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </svg>
      );
  }
}

import type { ReactNode } from "react";
import SignIn from "./sign-in";
import SignOut from "./sign-out";

type LandingPageProps = {
  isAuthenticated: boolean;
  userClaims?: {
    sub: string;
    name?: string;
    username?: string;
    picture?: string;
    email?: string;
  };
  signInAction: () => Promise<void>;
  signOutAction: () => Promise<void>;
  userSync: ReactNode;
};

export default function LandingPage({
  isAuthenticated,
  userClaims,
  signInAction,
  signOutAction,
  userSync,
}: LandingPageProps) {
  return (
    <main className="min-h-[max(884px,100dvh)] bg-[#fff8f3] text-[#1f1b14] antialiased">
      <header className="fixed top-0 z-50 w-full bg-[#fff8f3]/70 backdrop-blur-xl transition-all duration-300 dark:bg-[#33210d]/70">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <MaterialIcon name="coffee" className="h-6 w-6 text-[#33210d] dark:text-[#fcf2e7]" />
            <span className="text-2xl font-bold tracking-tight text-[#33210d] dark:text-[#fcf2e7]">
              Kupi
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a className="font-bold text-[#33210d] transition-opacity hover:opacity-80" href="#discover">
              Discover
            </a>
            <a className="text-[#4e453d] transition-opacity hover:opacity-80" href="#journal">
              Journal
            </a>
            <a className="text-[#4e453d] transition-opacity hover:opacity-80" href="#rewards">
              Rewards
            </a>
          </nav>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {userSync}
              <p className="text-sm text-[#33210d]">
                {userClaims?.name ?? userClaims?.username ?? userClaims?.email ?? "User"}
              </p>
              <SignOut onSignOut={signOutAction} />
            </div>
          ) : (
            <SignIn onSignIn={signInAction} />
          )}
        </div>
      </header>

      <div className="pt-20">
        <section className="mx-auto flex max-w-screen-xl flex-col items-center gap-12 px-6 py-12 md:flex-row md:py-24">
          <div className="order-2 w-full space-y-8 md:order-1 md:w-1/2">
            <div className="space-y-4">
              <h1 className="max-w-xl text-5xl font-extrabold leading-[1.1] tracking-tight text-[#33210d] md:text-7xl">
                Your Next Coffee Ritual Starts Here.
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-[#4e453d] md:text-xl">
                Discover aesthetic cafes, log your brews, and build a journey one cup at a time.
                The companion for the modern coffee curator.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row" id="get-started">
              <button className="flex items-center justify-center gap-3 rounded-xl bg-[#33210d] px-8 py-4 text-[#ffffff] transition-all hover:opacity-90 active:scale-95">
                <MaterialIcon name="ios" className="h-5 w-5 text-[#ffffff]" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Download on</p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 rounded-xl bg-[#ebe1d6] px-8 py-4 text-[#33210d] transition-all hover:opacity-90 active:scale-95">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-wider opacity-60">Get it on</p>
                  <p className="text-lg font-bold leading-none">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="order-1 w-full md:order-2 md:w-1/2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#d7e5bb] opacity-50 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#54330c] opacity-30 blur-3xl" />
              <img
                alt="A minimalist, high-fidelity map interface for a mobile app showing coffee shop locations with custom pins in a warm neutral aesthetic."
                className="relative z-10 aspect-[4/5] w-full rounded-xl border-none object-cover shadow-2xl shadow-[#33210d]/5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLZws-0n_ii971YDZ3NLXV5wp-97n2EqqJLZxLWegcU1QwR61qW-NycewRRiRFcCm5cPvk5SSKZ8nQk1ea8KqTbCwzonAA2dqxcabviMtDRVNQofFcxA4atU01yks3cdnTkPp2RXndmCKmVJXqqEvNgmdB5zsm7qGF1EFMummiUzsmBlZDa2YThoOb0lZ5Ty0Wc0O77wV2iQGDJCReVS6S85xvg7D5FOzjtIRrnD2pFCrDY5pqsiwB07yLtaHGVQv3vBaY4yZGFvI"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#fcf2e7] px-6 py-20" id="discover">
          <div className="mx-auto max-w-screen-xl space-y-12">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold text-[#33210d] md:text-5xl">Designed for the Senses</h2>
              <p className="text-[#4e453d]">
                Every feature is crafted to elevate your daily brewing ritual and cafe explorations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className={`flex flex-col justify-between space-y-6 rounded-xl p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${
                    card.elevated ? "bg-[#ebe1d6]" : "bg-[#fff8f3]"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${card.iconClass}`}
                  >
                    <MaterialIcon name={card.icon} className="h-7 w-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#33210d]">{card.title}</h3>
                    <p className="leading-relaxed text-[#4e453d]">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-24" id="journal">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="w-full space-y-8 md:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#dae8be] px-4 py-2 text-sm font-semibold text-[#141f05]">
                <MaterialIcon name="star" className="h-4 w-4" filled />
                Community Favorite
              </div>
              <h2 className="text-4xl font-bold leading-tight text-[#33210d] md:text-5xl">
                Join 10k+ coffee lovers capturing their journeys.
              </h2>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-4">
                  {communityAvatars.map((avatar) => (
                    <img
                      key={avatar.alt}
                      alt={avatar.alt}
                      className="h-12 w-12 rounded-full border-4 border-[#fff8f3] object-cover"
                      src={avatar.src}
                    />
                  ))}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#fff8f3] bg-[#ebe1d6] text-xs font-bold text-[#33210d]">
                    +8k
                  </div>
                </div>
                <p className="font-medium text-[#4e453d]">Join our global community</p>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-[#f6ece1] p-8" id="rewards">
                <MaterialIcon
                  name="format_quote"
                  className="absolute -bottom-4 -right-4 h-20 w-20 rotate-12 text-[#33210d]/10"
                />
                <p className="relative z-10 text-xl font-medium italic text-[#33210d]">
                  &quot;Kupi changed how I explore cities. Instead of just caffeine, I look for
                  experiences. The journal is a beautiful time capsule of my travels.&quot;
                </p>
                <p className="mt-4 font-bold text-[#33210d]">- Sarah J., Digital Nomad</p>
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
              {gallery.map((item) => (
                <img
                  key={item.alt}
                  alt={item.alt}
                  className={`aspect-square w-full rounded-xl object-cover ${item.offsetClass}`}
                  src={item.src}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-24 text-center">
          <div className="relative overflow-hidden rounded-xl bg-[#33210d] px-8 py-20 text-[#ffffff]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#33210d] via-[#4b3621] to-[#33210d] opacity-50" />
            <div className="relative z-10 mx-auto max-w-3xl space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Start Your Sensory Journey Today.
              </h2>
              <p className="text-lg text-[#cb9b6c] opacity-90 md:text-xl">
                Join the thousands of curators documenting their coffee evolution. Your first
                entry is waiting.
              </p>
              <div className="flex flex-col justify-center gap-6 pt-4 sm:flex-row">
                {isAuthenticated ? (
                  <span className="rounded-full bg-[#fff8f3] px-10 py-4 text-lg font-bold text-[#33210d]">
                    Welcome back, {userClaims?.name ?? userClaims?.username ?? "Explorer"}!
                  </span>
                ) : (
                  <form action={signInAction}>
                    <button
                      type="submit"
                      className="rounded-full bg-[#fff8f3] px-10 py-4 text-lg font-bold text-[#33210d] transition-all hover:opacity-90 active:scale-95"
                    >
                      Get Kupi Free
                    </button>
                  </form>
                )}
                <button className="rounded-full border border-[#cb9b6c] px-10 py-4 text-lg font-bold text-[#ffffff] transition-all hover:bg-[#ffffff]/10">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-12 w-full rounded-t-[3rem] bg-[#fcf2e7] dark:bg-[#23180a]">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
          <div className="flex items-center gap-2">
            <MaterialIcon name="coffee" className="h-6 w-6 text-[#33210d] dark:text-[#fcf2e7]" />
            <span className="text-xl font-bold text-[#33210d] dark:text-[#fcf2e7]">Kupi</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            <a className="font-semibold text-[#33210d] transition-colors hover:text-[#33210d]" href="#discover">
              Discover
            </a>
            <a className="text-[#4e453d] transition-colors hover:text-[#33210d]" href="#journal">
              Journal
            </a>
            <a className="text-[#4e453d] transition-colors hover:text-[#33210d]" href="#rewards">
              Rewards
            </a>
            <a className="text-[#4e453d] transition-colors hover:text-[#33210d]" href="#get-started">
              Privacy
            </a>
          </nav>

          <div className="text-sm font-normal text-[#4e453d] dark:text-[#ebe1d6]">
            © 2024 Kupi. The Sensory Curator.
          </div>
        </div>
      </footer>
    </main>
  );
}
