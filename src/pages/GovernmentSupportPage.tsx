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
  Filler,
} from "chart.js";

// Register necessary chart elements
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
  // Chart data
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

  // Chart animation config
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 1200,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-20">
      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Empowering Governments with Transparent Outdoor Advertising
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          The Ad Project helps State and Central governments digitize ad monitoring and tax collection. Our platform eliminates illegal hoardings, boosts tax revenue, and provides real-time campaign visibility — building smarter, cleaner cities.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-2">🚫 Stop Illegal Ads</h2>
          <p>
            AI scans walls and hoardings to detect unauthorized ads. Authorities receive alerts with location and proof, helping reduce visual pollution and black-market hoardings.
          </p>
        </div>

        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-2">💰 Boost Tax Collection</h2>
          <p>
            Every campaign is digitally recorded — from size to duration. Municipalities can verify, bill, and collect ad taxes with transparency and zero manual paperwork.
          </p>
        </div>

        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-2">📡 Live Dashboard</h2>
          <p>
            Real-time dashboard shows all live ads on a map, campaign status, heatmaps, and revenue analytics for better planning and governance.
          </p>
        </div>

        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-2">🌆 Smarter Urban Planning</h2>
          <p>
            AI insights like footfall data, demographic reach, and ad impact help governments optimize public spaces and commercial zones for better engagement.
          </p>
        </div>

        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md md:col-span-2">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-2">🤝 Seamless Government Integration</h2>
          <p>
            We work directly with smart city missions, local bodies, and government agencies — offering white-label solutions or deep integration with existing governance systems.
          </p>
        </div>
      </div>

      {/* Charts with animation */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 mt-16">
        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">📈 Monthly Revenue</h2>
          <Line data={monthlyRevenueData} options={lineOptions} />
        </div>

        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">📊 Annual Revenue</h2>
          <Bar data={annualRevenueData} options={barOptions} />
        </div>

        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg md:col-span-2">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">💡 Tax Collection Support</h2>
          <Bar data={taxCollectionHelpData} options={barOptions} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Ready to Partner for a Smarter India?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          We're already in talks with several governments. If you represent a civic body, let's collaborate and digitize your city’s outdoor ad ecosystem.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#FDCB6E] text-[#1B3A4B] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          Talk to Our Team →
        </a>
      </div>
    </div>
  );
};

export default GovernmentSupportPage;
