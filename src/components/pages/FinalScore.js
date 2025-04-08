import React, { useMemo } from "react";
import "@/styles/ResultsPage.css";

const FinalScore = ({ pageWeight = 0 }) => {
  // Calculate Final Score with a limit of 20MB
  const finalScore = useMemo(() => {
    if (pageWeight <= 0) return 100; // Full score for 0 MB
    if (pageWeight >= 20) return 0;  // Score is 0 for 20MB and above

    const score = 100 - ((pageWeight * 100) / 20); // Linear decrease
    return Math.round(score); // Round for cleaner UI
  }, [pageWeight]);

  // Set the color based on the final score
  const color = useMemo(() => {
    if (finalScore > 70) return "#00843d"; // Green for high score
    if (finalScore > 40) return "rgb(255, 165, 0)"; // Yellow for medium score
    return "#e53935"; // Red for low score
  }, [finalScore]);

  return (
        <div
        role="progressbar"
        aria-valuenow={finalScore}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          "--value": finalScore,
          color,
        }}
      >  
      </div>
      
  
  );
};

export default FinalScore;
