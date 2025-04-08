import supabase from "@/lib/supabaseClient";

// ✅ Format timestamp for display
export const formatTimestamp = (timestamp) => {
  if (!timestamp) return "Never";
  
  return new Date(timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata", // GMT+5:30 (IST)
  });
};

// ✅ Retrieve last visit timestamp
export const getLastVisit = async (url) => {
  if (!url) return "Never";

  try {
    console.log(`📡 Checking last visit in localStorage for: ${url}`);

    // Check local storage first
    const localVisit = localStorage.getItem(`lastVisit-${url}`);
    if (localVisit) return ` ${formatTimestamp(localVisit)} GMT+5:30`;

    console.log("🔍 No local data found, checking Supabase...");

    // Fetch last seen data from Supabase
    const { data, error } = await supabase
      .from("timestamp")
      .select("last_viewed ,website_url,first_viewed")
      .eq("website_url", url)
      .order("last_viewed", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error("❌ Supabase Error:", error.message || error);
      return "Never scanned";
    }

    if (!data || !data.last_viewed) {
      console.warn("⚠️ No timestamp found for this URL in Supabase.");
      return "Never scanned";
    }

    return `Scanned ${formatTimestamp(data.last_viewed)} GMT+5:30`;
  } catch (error) {
    console.error("❌ Unexpected Error fetching last visit:", error.message || error);
    return "Error retrieving scan data";
  }
};

export const saveLastVisit = async (url) => {
    if (!url) return;
  
    const timestamp = new Date().toISOString();
    localStorage.setItem(`lastVisit-${url}`, timestamp);
  
    try {
      console.log(`📡 Saving last visit for: ${url}`);
  
      // ✅ Ensure ON CONFLICT works
      const { data, error } = await supabase
        .from("timestamp")
        .upsert([{ 
          website_url: url, 
          last_viewed: timestamp 
        }], { onConflict: "website_url" });  // ✅ Fix ON CONFLICT issue
  
      if (error) {
        console.error("❌ Supabase Error:", error.message || error);
      } else {
        console.log("✅ Supabase Update Successful:", data);
      }
    } catch (err) {
      console.error("❌ Unexpected Error saving last visit:", err.message || err);
    }
  };