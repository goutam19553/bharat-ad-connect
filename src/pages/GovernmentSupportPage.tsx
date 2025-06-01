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

  const cityTaxRecoveryData = {
    labels: ["Mumbai", "Delhi", "Bangalore", "Ahmedabad", "Chennai"],
    datasets: [
      {
        label: "Recovered Tax (₹ Cr)",
        data: [22, 18, 25, 12, 15],
        backgroundColor: "#FDCB6E",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-6 pt-36 pb-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Digitizing Outdoor Advertising for a Smarter Bharat
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We're transforming public advertising into a powerful tool for governance. Our AI-powered platform helps city bodies track, tax, and manage ad spaces with real-time dashboards — reducing illegal ads, increasing civic revenue, and aligning with Smart City and Digital India missions.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {[
          {
            title: "🚫 Stop Illegal Hoardings",
            desc: "AI detects and reports unauthorized ads across cities — reducing visual clutter, political misuse, and tax leakage.",
          },
          {
            title: "💰 Increase Municipal Revenue",
            desc: "Our billing engine automates ad fee calculations based on verified durations, sizes, and city zones. Every rupee is accounted for.",
          },
          {
            title: "📊 Real-Time Visibility",
            desc: "Administrators can track all campaigns, locations, and ad vendors on a live map with tax status and expiry alerts.",
          },
          {
            title: "📍 Geo-Fenced Planning",
            desc: "Allocate permitted ad zones, enforce rules, and plan smarter placements based on footfall and traffic data.",
          },
          {
            title: "🤝 Fully Integratable",
            desc: "White-label dashboards can plug directly into Smart City portals, state ad departments, or municipal revenue systems.",
          },
        ].map((feature, i) => (
          <div key={i} className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-[#FDCB6E] mb-2">{feature.title}</h2>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Collaboration Steps */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          🛠️ How Government Will Work With Us
        </h2>
        <div className="grid gap-8 md:grid-cols-4 text-left">
          {[
            { title: "1. MoU & Onboarding", desc: "We sign a mutual agreement and onboard your municipality or smart city team." },
            { title: "2. Survey & Map", desc: "We help you map existing ad locations using AI, drones, or physical data." },
            { title: "3. AI Dashboard Access", desc: "Your admin team gets access to live data, violations, and billing tools." },
            { title: "4. Monitor & Collect", desc: "You monitor compliance, manage zones, and automatically collect ad taxes via our engine." },
          ].map((step, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-[#FDCB6E] text-lg mb-2">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-5xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          📈 Unlock ₹2,000+ Crores in Lost Revenue
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Cities like Bangalore have lost over ₹2,000 Cr to unauthorized hoardings in the past decade. Our technology ensures such revenue doesn’t slip through the cracks again.
        </p>
      </div>

      {/* Data Visualization */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 mt-16">
        {[
          { title: "📅 Monthly Revenue Trends", data: monthlyRevenueData },
          { title: "📊 Yearly Tax Uplift", data: annualRevenueData },
          { title: "💡 Ad-Wise Tax Intelligence", data: taxCollectionHelpData },
          { title: "🏙️ City-Wise Recovery Boost", data: cityTaxRecoveryData },
        ].map((chart, i) => (
          <div
            key={i}
            className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-xl backdrop-blur-md"
            style={{ height: "350px" }}
          >
            <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">{chart.title}</h2>
            <Bar data={chart.data} options={chartOptions} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Join Us in Transforming Urban Governance
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Partner with us to digitize your city's ad infrastructure, increase civic trust, and enable data-driven governance.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#FDCB6E] text-[#1B3A4B] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          Contact Government Team →
        </a>
      </div>
    </div>
  );
};

export default GovernmentSupportPage;
