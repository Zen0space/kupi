import {
  getLogtoContext,
  signIn,
  signOut,
} from "@logto/next/server-actions";
import { logtoConfig } from "./logto";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import UserSync from "./user-sync";

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Kupi</h1>
      {isAuthenticated ? (
        <div className="flex flex-col items-center gap-2">
          <p>Hello, {claims?.sub}</p>
          <UserSync
            userInfo={{
              name: claims?.name as string | undefined,
              username: claims?.username as string | undefined,
              picture: claims?.picture as string | undefined,
              email: claims?.email as string | undefined,
            }}
          />
          <SignOut
            onSignOut={async () => {
              "use server";
              await signOut(logtoConfig);
            }}
          />
        </div>
      ) : (
        <SignIn
          onSignIn={async () => {
            "use server";
            await signIn(logtoConfig);
          }}
        />
      )}
    </main>
  );
}
