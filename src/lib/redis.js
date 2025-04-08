import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

export async function getCachedResult(key) {
  const result = await redis.get(key);
  return result ? JSON.parse(result) : null;
}

export async function setCachedResult(key, value, ttl = 3600) {
  await redis.set(key, JSON.stringify(value), "EX", ttl); // Cache for 1 hour
}
export default redis;