import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/support") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = search ? `${search}&page=support` : "?page=support";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/support"],
};
