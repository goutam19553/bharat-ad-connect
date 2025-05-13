import React from "react";

const GovernmentSupportPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Empowering Governments Through Transparent Outdoor Advertising
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Our platform bridges traditional outdoor advertising with digital governance. By partnering with government bodies, we provide a structured, accountable, and revenue-driven ecosystem for managing ad spaces across cities and towns.
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

      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
          A Smarter, Greener & Transparent Future Starts Here.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Join our mission to digitize and democratize outdoor advertising while boosting civic revenue and accountability. If you're a policymaker or officer, let’s talk and build India's future infrastructure together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#FDCB6E] text-[#1B3A4B] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          Contact Us →
        </a>
      </div>
    </div>
  );
};

export default GovernmentSupportPage;
