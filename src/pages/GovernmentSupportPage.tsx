import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Needed for 'fill' option
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GovernmentSupportPage = () => {
  // Shrunk demo data
  const monthlyRevenueData = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "₹ Crores",
        data: [5, 10, 8],
        borderColor: "#FDCB6E",
        backgroundColor: "rgba(253, 203, 110, 0.3)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const annualRevenueData = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Annual Revenue",
        data: [85, 100, 130],
        backgroundColor: "#FDCB6E",
        borderColor: "#1B3A4B",
        borderWidth: 1,
      },
    ],
  };

  const taxCollectionHelpData = {
    labels: ["Ad A", "Ad B", "Ad C"],
    datasets: [
      {
        label: "Tax in ₹ Cr",
        data: [5, 12, 8],
        backgroundColor: "#FDCB6E",
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 px-4 py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Government Support (Demo Charts)
      </h2>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {/* Monthly Revenue */}
        <div className="bg-[#1B3A4B] text-white rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#FDCB6E] mb-4">📈 Monthly Revenue</h3>
          <Line data={monthlyRevenueData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>

        {/* Annual Revenue */}
        <div className="bg-[#1B3A4B] text-white rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#FDCB6E] mb-4">📊 Annual Revenue</h3>
          <Bar data={annualRevenueData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>

        {/* Tax Collection */}
        <div className="bg-[#1B3A4B] text-white rounded-lg p-6 md:col-span-2">
          <h3 className="text-xl font-semibold text-[#FDCB6E] mb-4">💰 Tax Collection Help</h3>
          <Bar data={taxCollectionHelpData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>
    </div>
  );
};

export default GovernmentSupportPage;
