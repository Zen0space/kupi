import { LogtoNextConfig, UserScope } from "@logto/next";
import { requireEnv } from "../env";

export const logtoConfig: LogtoNextConfig = {
  appId: requireEnv("LOGTO_APP_ID"),
  appSecret: requireEnv("LOGTO_APP_SECRET"),
  endpoint: requireEnv("LOGTO_ENDPOINT"),
  baseUrl: requireEnv("NEXT_PUBLIC_BASE_URL"),
  cookieSecret: requireEnv("LOGTO_COOKIE_SECRET"),
  cookieSecure: process.env.NODE_ENV === "production",
  scopes: [UserScope.Email, UserScope.Profile],
  resources: [requireEnv("LOGTO_API_RESOURCE")],
};
