import LandingPage from "./landing-page";
import SupportPage from "./support";

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

  return (
    <LandingPage />
  );
}
