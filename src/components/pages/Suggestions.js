import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "@/styles/Suggestions.css";


const suggestions = [
  {
    title: "Optimize Page (Reduce Load & Emissions)",
    points: [
      "Optimize images: Reduces size by 30%-80%",
      "Minify CSS & JavaScript: Remove unused code & compress files",
      "Use lazy loading: Load images/videos only when needed",
      "Reduce third-party scripts: Too many tracking codes slow down your site",
    ],
  },
  {
    title: "Improve UX Design (Better Experience, Less Waste)",
    points: [
      "Use clean, minimal design: Less clutter = faster performance",
      "Efficient navigation: Reduce unnecessary clicks & page loads",
      "Mobile-first optimization: 70% of traffic is mobile—make it smooth & fast",
    ],
  },
 
];

export default function SiteImprovementSuggestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col space-y-4">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="border rounded-xl p-4 shadow-md bg-white w-full">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-semibold text-lg">{suggestion.title}</h3>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openIndex === index && (
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
              {suggestion.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
