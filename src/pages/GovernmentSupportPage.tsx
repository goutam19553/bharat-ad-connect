import React from "react";

const GovernmentSupportPage = () => {
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

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {/* Issue 1 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">🚫 Curbing Illegal Hoardings</h2>
          <p>
            Cities lose crores each year due to unauthorized hoardings that clutter skylines and evade government revenue.
            Our AI tools detect unregistered ad spaces in real-time, using geolocation, image analysis, and violation tagging.
            Municipal bodies get instant alerts, ensuring swift action and improved urban aesthetics.
          </p>
        </div>

        {/* Issue 2 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">💸 Plugging Tax Leakages</h2>
          <p>
            Lack of ad tracking means tax evasion runs unchecked. Our platform automatically logs every transaction —
            from wall ownership to ad duration and location — helping local governments generate accurate GST and municipal tax invoices.
            Full transparency. No revenue loss.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">📊 Unified Monitoring Dashboard</h2>
          <p>
            Our government dashboard provides real-time visualizations: live ad locations, campaign durations, expected revenue,
            unauthorized ad alerts, and heatmaps. Perfect for Smart Cities, District Collectors, and Municipal Commissioners.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">🏙️ Urban Planning Intelligence</h2>
          <p>
            Use ad data to understand urban movement. Our platform maps crowd density, high-footfall zones,
            and ad engagement — helping Smart City teams and urban developers create pedestrian-friendly zones
            and profitable ad corridors.
          </p>
        </div>

        {/* Collaboration */}
        <div className="bg-[#1B3A4B] text-white rounded-xl p-8 shadow-lg md:col-span-2">
          <h2 className="text-2xl font-bold text-[#FDCB6E] mb-4">🤝 Central & State-Level Collaboration</h2>
          <p>
            Whether it’s a municipal council, smart city mission, or a central urban ministry — we adapt our platform
            for your needs. Governments can integrate our system via APIs, white-label it, or run it as part of PPP models.
            <br />
            We also support digital infrastructure development under Digital India and Smart City initiatives.
          </p>
        </div>
      </div>

      {/* Graphical placeholder */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          Visualizing Government Impact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
          Below are data-driven insights for better decision-making. (Note: these charts can be dynamically connected to dashboards.)
        </p>

        {/* Placeholder: You can replace this with actual charts (Chart.js / Recharts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-2 text-lg text-gray-800 dark:text-gray-100">🧾 Monthly Revenue Recovery</h3>
            <div className="h-48 bg-gradient-to-r from-green-300 to-green-500 rounded-lg animate-pulse" />
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-2 text-lg text-gray-800 dark:text-gray-100">📍 Illegal Hoardings Detected</h3>
            <div className="h-48 bg-gradient-to-r from-red-300 to-red-500 rounded-lg animate-pulse" />
          </div>
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
