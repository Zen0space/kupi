"use server";

import { getAccessToken } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";

export async function getToken(): Promise<string | undefined> {
  try {
    const token = await getAccessToken(
      logtoConfig,
      process.env.LOGTO_API_RESOURCE!
    );
    return token ?? undefined;
  } catch {
    return undefined;
  }
}
