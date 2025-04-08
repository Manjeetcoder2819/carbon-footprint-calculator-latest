"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ResourceSizeChart from "@/components/pages/ResourceSizeChart";
import ResourceCountChart from "@/components/pages/ResourceCountChart";
import FinalScore from "@/components/pages/FinalScore";
import { generateDynamicContent } from "@/lib/content";
import supabase from "@/lib/supabaseClient";
import LastSeen from "@/components/LastSeen"; // ✅ Import the LastSeen component
import dayjs from "dayjs";
import timezone from "dayjs/plugin/utc";
dayjs.extend(timezone);
import "@/styles/ResultsPage.css";


const ResultsPage = () => {
  const params = useParams();
  const uniqueId = params?.uniqueId;
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dynamicContent, setDynamicContent] = useState(null);

  const [yearlyVisits] = useState(100000);

  useEffect(() => {

    if (!uniqueId) return;

    const fetchReport = async () => {
      setLoading(true);
      console.log("Fetching report for ID:", uniqueId);


      // Check localStorage first
      const storedData = localStorage.getItem(`report-${uniqueId}`);
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);

          if (!parsedData || typeof parsedData !== "object") {
            throw new Error("Invalid stored data format.");
          }

          const cleanedData = {
            ...parsedData,
            grams: Number(parsedData.grams) || 0,
            MB: Number(parsedData.MB) || 0,
            websiteUrl: parsedData.websiteUrl || "Unknown Website",
          };

          setResults(cleanedData);
          setDynamicContent(generateDynamicContent(cleanedData.grams, yearlyVisits));


          setLoading(false);
          return;
        } catch (error) {
          console.error("Error parsing stored data:", error);
        }
      }

      // If no data in localStorage, fetch from Supabase
      const { data, error } = await supabase
        .from("client")
        .select("'*',url, website_url, page_weight, co2e_per_visit, lighthouse_data, resource_size_data,resource_count_data,screenshot_url")
        .eq("unique_url", `/results/${uniqueId}`)
        .single();


      if (error || !data) {
        console.error("Report not found:", error);
        setResults(null);
      } else {
        const fetchedResults = {
          websiteUrl: data.website_url || "Unknown Website",
          device: "Desktop",
          MB: Number(data.page_weight) || 0,
          grams: Number(data.co2e_per_visit) || 0,
          lighthouseData: data.lighthouse_data || null,
          resourceSizeData: data.resource_size_data || [],
          screenshotURL: data.screenshot_url || "",  // ✅ Store the screenshot URL
          resourceCountData: data.resource_count_data || [],

        };

        setResults(fetchedResults);

        setDynamicContent(generateDynamicContent(fetchedResults.grams, yearlyVisits));

      }
      setLoading(false);
    };

    fetchReport();
  }, [uniqueId]);

  if (loading) return "⏳ Loading...";
  if (!results)
    return (
      <p className="error-message">
        ⚠️ No report found for this ID. Please generate a new report.
      </p>
    );

  return (
    <div className="hero-section hero-result-page">
      <div className="page-width">
        <div className="hero-inner" style={{ textAlign: "center" }}>
          <div className="heading-section">
            <div className="heading-title">
              <h1>Report Summary</h1>
            </div>

            <div className="top-starting-detail">
              <div className="topbtn-bar" style={{ textAlign: "right" }}>
                <a href="#" className="btn-rescan-page">
                  <span>
                    <svg
                      width="17.799"
                      height="14.86"
                      viewBox="0 0 17.799 14.86"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group_146" transform="translate(1 1)">
                        <path
                          d="M12.782,12.436A5.87,5.87,0,0,1,2.9,6.984"
                          transform="translate(-0.729 -1.852)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M.75,8.22,2.22,6.75l1.47,1.47"
                          transform="translate(-0.199 -1.79)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19.689,8.75l-1.47,1.47L16.75,8.75"
                          transform="translate(-4.442 -2.32)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M5.093,2.472A5.873,5.873,0,0,1,14.98,7.927"
                          transform="translate(-1.351 -0.199)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                  Rescan Page
                </a>

                <a href="#" className="btn-share-report">
                  Share Report
                </a>
              </div>
            </div>
          </div>

          <div className="report-details">
            <p >
              <a
                href={`https://${(results.url || results.websiteUrl || "").replace(/^https?:\/\//, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }} >
                {`https://${(results.url || results.websiteUrl || "").replace(/^https?:\/\//, "")}`}
              </a>
            </p>
            <div className="top-starting-detail">
              <span className="device">
                <p className="results" style={{ fontSize: "18px" }}>
                  Device: {results.device || "Unknown"}
                </p></span>
              <span className="date-info" >
                {results?.websiteUrl && <LastSeen url={results.websiteUrl} />}
              </span>

              <style>
                {`
        .top-starting-detail {gap:9px;}
 `}
              </style>
            </div>

          </div>

          <div className="result-info-layout">
            <div className="info-box-container">

              <div className="weight-emmissions">
                <div className="info-box page-weight">
                  <p className="info-title">Page Weight</p>
                  <p className="info-value">{Number(results.MB).toFixed(2)} MB</p>
                  <p className="info-description">
                    Page weight ensures faster loading times and better performance.
                  </p>
                </div>
                <div className="info-box co2-emissions">
                  <p className="info-title">CO₂ Emissions</p>
                  <p className="info-value">{Number(results.grams).toFixed(2)} g</p>
                  <p className="info-description">
                    CO₂ emissions indicate the environmental impact of a webpage.
                  </p>
                </div>
              </div>

              <div className="details-info">
                <p>
                  Your website produces more CO₂ per visit than 72% of websites analyzed.
                  Improving your score could place you among the top sustainable websites.
                </p>
              </div>
            </div>

            <div className="sites-score">
              <div className="final-score-wrapper">
                <div className="final-score-container">
                  <h3 className="final-score-title">Website Score</h3>

                  {/* Fixed progress bar issue */}

                  <FinalScore
                    pageWeight={results.MB}
                    co2Emissions={results.grams}
                    uiuxScore={results.uiuxScore}
                    finalScore={results.finalScore}
                  />

                  <div className="final-score-info">
                    A higher score indicates better performance, lower CO₂ impact, and a user-friendly design.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="section-box real-World-impact">

        <div className="page-width">
          {dynamicContent}
        </div>
      </div>

      <div className="pie-Chart">
  <div className="page-width">
    <div className="chart-flex">
      {Array.isArray(results?.resourceSizeData) && results.resourceSizeData.length > 0 ? (
        <div className="chart-box">
          <ResourceSizeChart data={results.resourceSizeData} />
        </div>
      ) : (
        <p>No resource size data available.</p>
      )}

      {Array.isArray(results?.resourceCountData) && results.resourceCountData.length > 0 ? (
        <div className="chart-box">
          <ResourceCountChart data={results.resourceCountData} />
        </div>
      ) : (
        <p>No resource count data available.</p>
      )}
    </div>
  </div>
</div>


      <div className="how-to-improve-site">
        <div className="page-width">
          <div className="improve-site">
          <h2>How to Improve Your Site</h2>

          <div className="inner-improve-list">
            <h3><span>1</span> Optimize Page (Reduce Load & Emissions)</h3>
            <ul>
              <li>
                <div className="inner-box">
                  <p><strong>Optimize images:</strong> Reduces size by 30%-80%</p>
                </div>
              </li>
              <li>
                <div className="inner-box">
                  <p><strong>Minify CSS & JavaScript:</strong> Remove unused code & compress files</p>
                </div>
              </li>
              <li>
                <div className="inner-box">
                  <p><strong>Use lazy loading:</strong> Load images/videos only when needed</p>
                </div>
              </li>
              <li>
                <div className="inner-box">
                  <p><strong>Reduce third-party scripts:</strong> Too many tracking codes slow down your site</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="inner-improve-list">
            <h3><span>2</span> Improve UX Design (Better Experience, Less Waste)</h3>
            <ul>
              <li>
                <div className="inner-box">
                  <p><strong>Use clean, minimal design:</strong> Less clutter = faster performance</p>
                </div>
              </li>
              <li>
                <div className="inner-box">
                  <p><strong>Efficient navigation:</strong> Reduce unnecessary clicks & page loads</p>
                </div>
              </li>
              <li>
                <div className="inner-box">
                  <p><strong>Mobile-first optimization:</strong> 70% of traffic is mobile—make it smooth & fast</p>
                </div>
              </li>
            </ul>
          </div>
          </div>

          <hr className="separater-line" />
        </div>
      </div>

      <div className="bottom-rich-text">
        <div className="page-width">
          <div className="rich-text-wrapper">
            <h2>Take Immediate Action for Sustainability</h2>
            <p>
              Join us in optimizing your digital footprint by visiting our website today to learn how you can effectively
              reduce your carbon footprint and contribute to a more sustainable future.
            </p>
          </div>
        </div>
      </div>

    </div>

  );
};


export default ResultsPage;



