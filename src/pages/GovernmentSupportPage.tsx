import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GovernmentSupportPage = () => {
  // Sample data for the charts
  const monthlyRevenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue in ₹ Crores",
        data: [5, 10, 8, 12, 14, 16, 18, 20, 25, 30, 35, 40],
        borderColor: "#FDCB6E",
        backgroundColor: "rgba(253, 203, 110, 0.3)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const annualRevenueData = {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Annual Revenue in ₹ Crores",
        data: [50, 70, 85, 100, 130],
        backgroundColor: "#1B3A4B",
        borderColor: "#FDCB6E",
        borderWidth: 1,
        hoverBackgroundColor: "#FDCB6E",
      },
    ],
  };

  const taxCollectionHelpData = {
    labels: ["Ad Space A", "Ad Space B", "Ad Space C", "Ad Space D", "Ad Space E"],
    datasets: [
      {
        label: "Tax Recovery in ₹ Crores",
        data: [5, 12, 8, 15, 18],
        backgroundColor: "#FDCB6E",
        borderColor: "#FDCB6E",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Empowering Governments with Transparent Outdoor Advertising
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          The Ad Project transforms outdoor advertising into a digitized, accountable, and tax-transparent ecosystem.
          We partner with State and Central governments to solve long-standing issues like illegal hoardings,
          tax leakages, and opaque media contracts — building a smarter India.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-3">🚫 Curbing Illegal Advertisements</h2>
          <p>
            Our AI-based wall and hoarding detection tools help local authorities identify unauthorized ads in real-time. These tools track geolocations, detect visual anomalies, and alert officials for action — helping to reduce visual clutter, maintain city aesthetics, and eliminate black-market outdoor advertising.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-3">💰 Transparent Tax Collection</h2>
          <p>
            Every transaction on our platform is digitally logged, including ad size, duration, location, and advertiser identity. Governments can use this data to automate billing, verify compliance, and collect rightful advertising taxes — reducing corruption and leakage in the system.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-3">📊 Real-Time Monitoring Dashboard</h2>
          <p>
            We provide an integrated control panel where municipal officers can view live advertisements on a map-based interface. The dashboard includes campaign durations, location heatmaps, revenue stats, and alerts — making citywide monitoring simpler and smarter.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-3">🌆 Support for Urban Planning</h2>
          <p>
            Our AI analytics layer provides footfall heatmaps, demographic targeting, and location performance — helping urban planners make informed decisions about commercial zones, pedestrian movement, and ad placement standards.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-3">🤝 Government Partnerships & Compliance</h2>
          <p>
            We actively collaborate with municipal corporations, smart city councils, and local authorities to ensure legal compliance and shared governance. Our platform can be customized to integrate with government portals or operate as a white-label solution under government schemes.
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 mt-16">
        {/* Chart 1: Monthly Revenue */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">📈 Monthly Revenue Growth</h2>
          <Line data={monthlyRevenueData} options={{ responsive: true, maintainAspectRatio: true }} height={200} />
        </div>

        {/* Chart 2: Annual Revenue */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">📊 Annual Revenue Overview</h2>
          <Bar data={annualRevenueData} options={{ responsive: true, maintainAspectRatio: true }} height={200} />
        </div>

        {/* Chart 3: Tax Collection Help */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg md:col-span-2">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">💡 Tax Recovery Assistance</h2>
          <Bar data={taxCollectionHelpData} options={{ responsive: true, maintainAspectRatio: true }} height={200} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Ready to Partner for a Cleaner, Smarter India?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          We’re already in talks with local and regional governments. If you represent a civic body or ministry,
          let’s connect to bring this solution to your city or state.
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
