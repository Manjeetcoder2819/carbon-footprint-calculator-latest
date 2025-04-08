"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import "@/styles/ResourceChart.css";
import "@/styles/ResultsPage.css";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const ResourceCountChart = ({ data }) => {
  const defaultColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFD700",
    "#FF33A8",
    "#A833FF",
  ];

  // ✅ Safeguard against undefined/null or empty data
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="chart-container">
        <h4 className="chart-title">Resource Type Count</h4>
        <p style={{ padding: "1rem", fontSize: "16px", color: "#666" }}>
          No data available to display.
        </p>
      </div>
    );
  }

  const chartData = {
    labels: data.map((item) => `${item.name} (${item.count} items)`),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: data.map(
          (item, index) => item.color || defaultColors[index % defaultColors.length]
        ),
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
          color: "#000000",
          font: {
            size: 13,
          },
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "black",
        bodyColor: "black",
        titleFont: {
          weight: "bold",
        },
        bodyFont: {
          size: 14,
        },
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw} items`,
        },
      },
    },
    cutout: "50%",
  };

  return (
    <div className="chart-container">
      <h4 className="chart-title">Resource Count Distribution</h4>
      <div className="chart-wrapper">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ResourceCountChart;
