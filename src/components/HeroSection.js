"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabaseClient";

import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Typography,
  Button,
  Grid,
  LinearProgress,
} from "@mui/material";
import sendEmail from "@/lib/EmailService";
import "@/styles/HeroSection.css";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const router = useRouter();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

 
  // ✅ URL Validation & Formatting
  const formatURL = (url) => {
    try {
      let formattedUrl = url.trim();
      if (!/^https?:\/\//i.test(formattedUrl)) {
        formattedUrl = `https://${formattedUrl}`;
      }
      return new URL(formattedUrl).href;
    } catch {
      return null;
    }
  };


  // ✅ Corrected CO₂ Calculation Function
  const calculateCO2ePerVisit = (totalByteWeight) => {
    const energyConsumptionFactor = 0.81; // kWh per GB (for data centers)
    const carbonEmissionPerKWh = 442; // grams of CO₂ per kWh
    const bytesToGB = 1 / (1024 * 1024 * 1024); // Convert bytes to GB

    // Convert total byte weight to GB
    const pageSizeGB = totalByteWeight * bytesToGB;

    // Calculate CO₂ emissions per visit
    const co2Emissions = pageSizeGB * energyConsumptionFactor * carbonEmissionPerKWh;

    return co2Emissions.toFixed(2); // Return CO₂ emissions in grams (g CO₂)
  };

  // ✅ Fetch Page Data & Store in Supabase
  const fetchData = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setLoadingMessage("Fetching data...");

      const inputURL = formatURL(e.target.url.value);
      const email = e.target.email.value.trim();
      const uniqueId = uuidv4();


      if (!inputURL) {
        setLoadingMessage("Invalid URL. Please enter a valid website URL.");
        setIsLoading(false);
        return;
      }

      try {
        const apiURL = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          inputURL
        )}&strategy=mobile&key=${apiKey}`;
        const response = await fetch(apiURL);
        if (!response.ok)
          throw new Error(`API request failed with status ${response.status}`);



        const json = await response.json();
        const totalByteWeight =
          json?.lighthouseResult?.audits?.["total-byte-weight"]?.numericValue ||
          0;
        const co2ePerVisit = calculateCO2ePerVisit(totalByteWeight);
        const websiteURL = new URL(inputURL).hostname;



       
        // ✅ Get Screenshot URL
        const screenshotData =
          json?.lighthouseResult?.audits?.["final-screenshot"]?.details?.data;
        const screenshotURL = screenshotData
          ? `data:image/jpeg;base64,${screenshotData.split(",")[1]}`
          : null;

        const resources =
          json?.lighthouseResult?.audits?.["network-requests"]?.details
            ?.items || [];
        const resourceSizes = {};
        const resourceCounts = {};
       

        // ✅ Resource Type Mapping
        const typeMapping = {
          Script: "JavaScript",
          Document: "HTML",
          Stylesheet: "CSS",
          Font: "Fonts",
          Image: "Images",
          Media: "Media",
        };

        resources.forEach((resource) => {
          const type = typeMapping[resource.resourceType] || "Other";
          resourceSizes[type] =
            (resourceSizes[type] || 0) + (resource.resourceSize || 0);
          resourceCounts[type] = (resourceCounts[type] || 0) + 1;
        });

        // ✅ Format Data for Charts
        const COLORS = [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#607D8B",
        ];
        const formattedSizeData = Object.keys(resourceSizes).map(
          (key, index) => ({
            name: key,
            value: parseFloat((resourceSizes[key] / 1024).toFixed(2)),
            color: COLORS[index % COLORS.length],
          })
        );
        const formattedCountData = Object.keys(resourceCounts).map(
          (key, index) => ({
            name: key,
            count: resourceCounts[key],
            color: COLORS[index % COLORS.length],
          })
        );
       

        // ✅ Store Data in Supabase
        const { error } = await supabase.from("client").insert([
          {
            url: inputURL,
            website_url: websiteURL, // Store Website URL
            page_weight: (totalByteWeight / (1024 * 1024)).toFixed(2),
            co2e_per_visit: co2ePerVisit,
            email,
            device: "mobile",
            unique_url: `/results/${uniqueId}`,
            resource_size_data: formattedSizeData,
            resource_count_data: formattedCountData,
            screenshot_url: screenshotURL,
          },
        ]);

        if (error) throw new Error(`Supabase Insert Error: ${error.message}`);

        // ✅ Store in Local Storage
        localStorage.setItem(
          `report-${uniqueId}`,
          JSON.stringify({
            url: inputURL,
            websiteURL,
            device: "Mobile",
            MB: (totalByteWeight / (1024 * 1024)).toFixed(2),
            grams: co2ePerVisit,
            resourceSizeData: formattedSizeData || [],
            resourceCountData: formattedCountData || [],
            screenshotURL: screenshotURL || "", // Avoid null values     
          })
        );

        // ✅ Send Email
        await sendEmail({
          email,
          url: inputURL,
          websiteURL, // ✅ Also include domain
          device: "Mobile",
          MB: (totalByteWeight / (1024 * 1024)).toFixed(2),
          grams: co2ePerVisit,
          resourceSizeData: formattedSizeData,
          resourceCountData: formattedCountData,
          screenshotURL, // ✅ Attach Screenshot
          uniqueUrl: `/results/${uniqueId}`,
        });

        // ✅ Redirect to Results Page
        router.push(`/results/${uniqueId}`);
      } catch (error) {
        console.error("Data Fetch Error:", error);
        setLoadingMessage(error.message || "Something went wrong. Please try again.");
        
      }
    },
    [apiKey, router]
  );

  return (
    <section className="hero-section">
      <div className="page-width">
        <div className="hero-inner">
          <h1>
            Make your website
            <br /> eco-friendly, today.
          </h1>
        </div>

        <div className="section-home-search">
          <h3>Calculate your web page's Carbon Footprint.</h3>
          <form onSubmit={fetchData}>
            <div className="input-group">
              <div className="input-field">
                <input 
                  id="urlinput" 
                  name="url" 
                  type="text" 
                  className="input" 
                  placeholder="Enter URL" 
                  required 
                />
              </div>

              <div className="input-field">
                <input
                  id="emailinput"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email (Optional - We will email you the report.)"
                />
              </div>

              <button 
                type="submit"
                className="btn btn--primary btn--analyze"
                disabled={isLoading}
              >
                {isLoading ? "Analyzing..." : "Analyze"}
              </button>
            </div>

            <p>
              When you use this tool, you are giving us permission to submit data to our database and publish the best
              examples on our website.
              {isLoading && <span className="loading-message"> {loadingMessage}</span>}
            </p>
            {isLoading && <LinearProgress />}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;