import {
  getLogtoContext,
  signIn,
  signOut,
} from "@logto/next/server-actions";
import { logtoConfig } from "./logto";
import LandingPage from "./landing-page";
import SupportPage from "./support";
import UserSync from "./user-sync";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  if (resolvedSearchParams?.page === "support") {
    return <SupportPage />;
  }

  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <LandingPage
      isAuthenticated={isAuthenticated}
      userClaims={
        isAuthenticated && claims
          ? {
              sub: claims.sub,
              name: claims.name as string | undefined,
              username: claims.username as string | undefined,
              picture: claims.picture as string | undefined,
              email: claims.email as string | undefined,
            }
          : undefined
      }
      signInAction={async () => {
        "use server";
        await signIn(logtoConfig);
      }}
      signOutAction={async () => {
        "use server";
        await signOut(logtoConfig);
      }}
      userSync={
        isAuthenticated && claims ? (
          <UserSync
            userInfo={{
              name: claims.name as string | undefined,
              username: claims.username as string | undefined,
              picture: claims.picture as string | undefined,
              email: claims.email as string | undefined,
            }}
          />
        ) : null
      }
    />
  );
}
