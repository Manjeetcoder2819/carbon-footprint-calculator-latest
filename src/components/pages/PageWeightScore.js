// import React from "react";
// import "@/styles/PageWeightScore.css";

// const PageWeightScore = ({ pageWeight = 0 }) => {
//   const weightValue = parseFloat(pageWeight) || 0;

//   // ✅ Dynamic scoring without a hard limit
//   const calculatePageWeightScore = (pageWeight) => {
//     if (pageWeight <= 1) return 100; // Perfect score for <1MB
//     return Math.max(0, Math.round(100 - (14 * Math.log2(pageWeight + 1))));
//   };

//   const score = calculatePageWeightScore(weightValue);

//   return (
//     <div className="page-weight-score">
//       <h3>Page Weight Score</h3>
//       <div className="score-container">
//         <p><strong>📦 Page Weight:</strong> {weightValue.toFixed(2)} MB</p>
//         <p><strong>📊 Score:</strong> {score}/100</p>
//       </div>
//       <div className="explanation">
//         <h4>What is Page Weight?</h4>
//         <p>
//           Page weight refers to the total size of a webpage, including HTML, CSS, JavaScript, images, and other assets.
//           A <strong>lighter page</strong> improves <strong>SEO, user experience</strong>, and <strong>reduces carbon footprint</strong>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PageWeightScore;