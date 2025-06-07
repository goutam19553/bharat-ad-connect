// Keep all chart imports the same
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
  const taxRecoveryData = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Recovered Tax (₹ Cr)",
        data: [85, 120, 200],
        borderColor: "#00cec9",
        backgroundColor: "rgba(0, 206, 201, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-6 pt-36 pb-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          The Ad Project – India's First B2G AdTech Platform
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We're not just modernizing outdoor advertising — we're building a direct digital bridge between government bodies and the physical ad economy. Our platform empowers municipalities to track, regulate, and tax outdoor ads with never-before-seen precision.
        </p>
      </div>

      {/* Why B2G Model */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Why a B2G Model is Essential
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Governments lose hundreds of crores yearly due to unregistered hoardings, illegal flex banners, and lack of real-time data.",
            "There is no unified platform today that enables local bodies to digitally manage their ad inventories.",
            "The Ad Project is the first of its kind to offer tax automation, geo-tagged tracking, campaign monitoring, and public-facing ad transparency — all in one system.",
            "We integrate directly with Smart City portals, municipal billing engines, and urban planning systems.",
          ].map((point, i) => (
            <div key={i} className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#FDCB6E] mb-2">✅ Key Insight</h3>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Impact */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          📉 ₹2,000+ Crores Lost in Bangalore Alone
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Bangalore has suffered over ₹2,000 Cr in lost tax revenue due to outdoor ad mismanagement in the past decade. The Ad Project stops this hemorrhage by introducing end-to-end visibility and accountability.
        </p>
      </div>

      {/* Charts Section */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">📈 Tax Recovery Over Time</h2>
          <Line data={taxRecoveryData} options={barOptions} />
        </div>

        <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">💼 Platform Adoption by Cities</h2>
          <Bar
            data={{
              labels: ["Pilot Phase", "Expansion", "Nationwide"],
              datasets: [
                {
                  label: "Cities Onboarded",
                  data: [5, 25, 150],
                  backgroundColor: "#FDCB6E",
                },
              ],
            }}
            options={barOptions}
          />
        </div>
      </div>

      {/* Platform Benefits */}
      <div className="max-w-6xl mx-auto mt-20 grid gap-10 md:grid-cols-2">
        {[
          "Real-time tracking of every hoarding",
          "Automated tax billing & receipts",
          "Transparent vendor registry",
          "Public dashboard for citizen complaints",
          "Data-backed policy making",
          "Zero leakage in ad tax collection",
        ].map((benefit, i) => (
          <div key={i} className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#FDCB6E] mb-2">✅ {benefit}</h2>
            <p>Part of our integrated B2G toolkit that ensures city-wide transparency and governance compliance.</p>
          </div>
        ))}
      </div>

      {/* Feature Boxes */}
      <div className="max-w-6xl mx-auto mt-24 grid gap-10 md:grid-cols-3">
        {[
          {
            title: "Digital Transparency",
            desc: "Track all outdoor advertising transactions in real-time with complete transparency and accountability.",
          },
          {
            title: "Revenue Analytics",
            desc: "Comprehensive analytics on city-wide advertising revenue, trends, and optimization opportunities.",
          },
          {
            title: "Compliance Monitoring",
            desc: "Automated detection of unauthorized advertisements and compliance violations.",
          },
          {
            title: "Real-time Tax Collection",
            desc: "Streamlined tax and fee collection with automated billing and payment processing.",
          },
          {
            title: "Government Dashboard",
            desc: "Comprehensive control panel for municipal authorities with permit management, compliance tracking and real-time reporting.",
          },
          {
            title: "White-label Solution",
            desc: "Custom-branded, multi-language supported platform tailored for municipalities with scalable infra.",
          },
        ].map((box, i) => (
          <div key={i} className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#FDCB6E] mb-2">{box.title}</h3>
            <p>{box.desc}</p>
          </div>
        ))}
      </div>

      {/* Government Use Cases */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Government Use Cases
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {[
            {
              title: "Revenue Optimization",
              desc: "Identify high-value ad locations and optimize pricing strategies using real-time data.",
            },
            {
              title: "Illegal Advertisement Detection",
              desc: "AI-powered system flags unauthorized ads and alerts enforcement teams.",
            },
            {
              title: "Urban Planning",
              desc: "Use density heatmaps of ad placements to influence infrastructure decisions.",
            },
            {
              title: "Digital Tax Collection",
              desc: "Automated billing systems reduce manual intervention and boost tax compliance.",
            },
            {
              title: "Permit Management",
              desc: "Digitized permits with workflow automation and compliance logs.",
            },
            {
              title: "Public-Private Partnerships",
              desc: "Enable trust-based collaboration with clear revenue-sharing models.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#FDCB6E] mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
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
