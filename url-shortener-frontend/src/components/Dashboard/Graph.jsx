import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
    BarElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    Legend,
    Filler
);

const Graph = ({ graphData }) => {
  // Prepare data with fallback for empty datasets
  const labels = graphData?.length > 0
      ? graphData.map((item) => item.clickDate)
      : Array(14).fill('').map((_, i) => `Day ${i + 1}`);

  const userPerDay = graphData?.length > 0
      ? graphData.map((item) => item.count)
      : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Clicks",
        data: userPerDay,
        backgroundColor: graphData?.length > 0 ? "#3b82f6" : "rgba(54, 162, 235, 0.1)",
        borderColor: "#1D2327",
        borderWidth: 1,
        borderRadius: 5,
        fill: true,
        tension: 0.4,
        barThickness: 20,
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 12,
            family: 'Arial, sans-serif'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.1)',
          borderDash: [5, 5]
        },
        ticks: {
          callback: function (value) {
            return Number.isInteger(value) ? value.toString() : "";
          },
          font: {
            size: 10
          }
        },
        title: {
          display: true,
          text: "Number of Clicks",
          font: {
            family: "Arial, sans-serif",
            size: 14,
            weight: "bold",
            color: "#1D2327"
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 10
          },
          autoSkip: true,
          maxRotation: 45,
          minRotation: 45
        },
        title: {
          display: true,
          text: "Date",
          font: {
            family: "Arial, sans-serif",
            size: 14,
            weight: "bold",
            color: "#1D2327"
          }
        }
      }
    }
  };

  return (
      <div className="w-full h-[400px] p-4 bg-white rounded-lg shadow-md">
        <Bar data={data} options={options} />
      </div>
  );
};

export default Graph;