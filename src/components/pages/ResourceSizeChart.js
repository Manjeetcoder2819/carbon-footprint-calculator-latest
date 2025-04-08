"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import "@/styles/ResourceChart.css"; // Ensure the CSS file path is correct
import "@/styles/ResultsPage.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const ResourceSizeChart = ({ data }) => {
  const defaultColors = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FFD700", // Gold
    "#FF33A8", // Pink
    "#A833FF", // Purple
  ];

  // Ensure colors are properly assigned
  const chartData = {
    labels: data.map((item) => `${item.name} (${item.value} KB)`),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item, index) => item.color || defaultColors[index % defaultColors.length]),
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#00000", // Set legend text color to black
          font: {
            size: 13, // Increase font size
            
          },
        },
      },
      tooltip: {
        backgroundColor: "#fff", // White background for contrast
        titleColor: "black", // Black title text
        bodyColor: "black", // Black body text
        titleFont: {
          weight: "bold", // Bold title
        },
        bodyFont: {
          size: 14, // Increase body font size
        },
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)} KB`,
        },
      },
    },
    cutout: "50%", // Reduces the center cutout for a bigger visual effect
  };

  return (
    <div className="chart-container">
      <h4 className="chart-title">Resource Size Distribution</h4>
      <div className="chart-wrapper">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ResourceSizeChart;
