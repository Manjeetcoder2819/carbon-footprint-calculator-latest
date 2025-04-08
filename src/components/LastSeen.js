import React, { useEffect, useState } from "react";
import { getLastVisit, saveLastVisit } from "@/utils/LastSeen";


const LastSeen = ({ url }) => {
  const [lastViewed, setLastViewed] = useState("Never scanned");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLastSeen = async () => {
      setLoading(true);
      if (!url) {
        setLastViewed("Invalid URL");
        setLoading(false);
        return;
      }

      try {
        console.log(`🔍 Fetching last visit for: ${url}`);

        // ✅ Get last visit time
        const lastVisit = await getLastVisit(url);
        setLastViewed(lastVisit);

        // ✅ Save current visit time
        await saveLastVisit(url);
      } catch (error) {
        console.error("❌ Error fetching last visit:", error.message || error);
        setLastViewed("Failed to load scan data");
      } finally {
        setLoading(false);
      }
    };

    fetchLastSeen();
  }, [url]);

  return <p>{loading ? "⏳ Loading last scan..." : lastViewed}</p>;
};

export default LastSeen;
