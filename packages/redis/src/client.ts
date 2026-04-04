import Redis from "ioredis";

let redisClient: Redis | null = null;

/**
 * Create a new Redis client instance
 */
export function createRedisClient(url?: string): Redis {
  const redisUrl = url || process.env.REDIS_URL || "redis://localhost:6379";
  return new Redis(redisUrl);
}

/**
 * Get or create a singleton Redis client
 */
export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = createRedisClient();
  }
  return redisClient;
}

/**
 * Close the singleton Redis client connection
 */
export async function closeRedisClient(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}
