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

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-6 pt-36 pb-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          The Ad Project: India's First B2G AdTech Infrastructure
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We're pioneering a nation-wide government-first platform for regulating, managing, and monetizing physical advertisement spaces. Our system empowers civic bodies to eliminate illegal ads, automate tax collection, and track city-wide ad campaigns through a unified, AI-powered dashboard — all while promoting green materials and transparency.
        </p>
      </div>

      {/* Why It Matters */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why This Platform is Critical</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Currently, India lacks a digital infrastructure that bridges municipal governance with traditional ad spaces. Hoardings, wall ads, kiosks, and flex boards operate with minimal oversight — leading to lost taxes, public clutter, and misuse during elections. The Ad Project is the first digital backbone for cities to plan, approve, tax, and audit all outdoor ads in one place.
        </p>
      </div>

      {/* Key Government Benefits */}
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {[
          {
            title: "🎯 Centralized Ad Visibility",
            desc: "Every approved ad — location, vendor, duration — tracked in real-time on a centralized government dashboard.",
          },
          {
            title: "📜 Automated Tax Collection",
            desc: "Our AI engine calculates tax and license fees dynamically based on size, duration, and geo-zones.",
          },
          {
            title: "🚫 Eliminate Illegal Hoardings",
            desc: "AI + Image recognition flags unauthorized ads with GPS-tagged proof and enforcement alerts.",
          },
          {
            title: "📍 Smart City Integration",
            desc: "Seamless integration into Smart City portals and municipal ERP systems, customized per region.",
          },
          {
            title: "🧾 Real-Time Reports & Audits",
            desc: "City administrators receive downloadable reports for tax collection, zone utilization, and vendor activity.",
          },
          {
            title: "🌱 Eco-Friendly Mandates",
            desc: "Mandate fabric-based ad materials. Monitor adoption rates to enforce green city campaigns.",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#FDCB6E] mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tax and Revenue Section */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          ₹2,000+ Cr Revenue Potential — Reclaim What's Lost
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Bangalore alone has lost over ₹2,000 Crores in outdoor advertising revenue due to unregulated system and unauthorized placements. The Ad Project puts an end to this leakage with full AI-powered oversight and digital tax intelligence.
        </p>
      </div>

      {/* Charts Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-20">
        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 h-[350px] shadow-lg">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">📅 Monthly Revenue Trends</h2>
          <Line data={monthlyRevenueData} options={barOptions} />
        </div>
        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 h-[350px] shadow-lg">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">📊 Annual Tax Collection Growth</h2>
          <Bar data={annualRevenueData} options={barOptions} />
        </div>
      </div>

      {/* How It Works for Governments */}
      <div className="mt-28 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">🛠️ How Governments Use The Platform</h2>
        <div className="grid gap-6 text-left md:grid-cols-3">
          {[
            "1. Government signs up and verifies city jurisdiction.",
            "2. Geo-zones and permissions are uploaded for all ad locations.",
            "3. Vendors submit ad requests with duration, size, type.",
            "4. AI engine calculates fees + flags non-compliance.",
            "5. Campaigns go live with tracking & expiry monitoring.",
            "6. Real-time tax reports and auto-audits are shared with authorities.",
          ].map((step, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <p className="font-medium text-gray-700 dark:text-gray-200">{step}</p>
            </div>
          ))}
        </div>
      </div>

  {/* Final CTA */}
<div className="mt-24 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
    Digitize Your City's Ad Infrastructure Today
  </h2>
  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
    Partner with The Ad Project to bring full transparency, revenue assurance, and digital intelligence to your municipality's outdoor advertising strategy.
  </p>
  <a
    href="/contact"
    className="inline-block bg-[#FDCB6E] text-[#1B3A4B] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
  >
    Contact our Government Team →
  </a>
</div>
    </div>
  );
};

export default GovernmentSupportPage;
