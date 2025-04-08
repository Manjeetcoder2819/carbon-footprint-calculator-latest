import { getCachedResult, setCachedResult } from "@/lib/redis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    // Check Redis cache
    const cachedData = await getCachedResult(url);
    if (cachedData) {
      return res.status(200).json({ ...cachedData, cached: true }); // Return cached data
    }

    // Simulate carbon footprint calculation (Replace with actual logic)
    const result = {
      url,
      carbonFootprint: (Math.random() * 10).toFixed(2), // Replace with real calculation
      message: "New calculation performed",
    };

    // Store result in Redis (cache for 1 hour)
    await setCachedResult(url, result, 3600);

    res.status(200).json({ ...result, cached: false });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
