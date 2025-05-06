import React from 'react';

const AIAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          AI Analytics in Ad Placements
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Why AI in Ad Placements?
          </h2>
          <p className="leading-relaxed text-lg">
            AI helps us analyze massive amounts of data—from foot traffic patterns to demographics—
            to determine which wall, billboard, or screen will generate the most impressions and engagement.
          </p>
        </section>

        <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Key AI Features
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Foot traffic heatmaps from satellite and mobile sensor data</li>
            <li>Ad performance prediction using historical data</li>
            <li>Real-time suggestion engine for optimal ad location</li>
            <li>Visual wall detection and AR ad fitting</li>
            <li>Sentiment analysis on audience response</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Real Impact
          </h2>
          <p className="leading-relaxed text-lg">
            Our AI modules have increased advertiser ROI by up to <span className="font-bold text-green-600 dark:text-green-400">38%</span> in urban campaigns and reduced ad waste in rural zones by <span className="font-bold text-red-500 dark:text-red-400">60%</span>.
          </p>
        </section>

        <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
            Future of AI in Ads
          </h2>
          <p className="leading-relaxed text-lg mb-4">
            We’re currently integrating more AI capabilities:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Drone-based ad space mapping</li>
            <li>Predictive footfall trends using event schedules</li>
            <li>AI-powered fraud detection for ad displays</li>
          </ul>
        </section>

        <div className="text-center mt-16">
          <p className="text-lg">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              The Ad-Project
            </span>{' '}
            is revolutionizing outdoor advertising using smart, sustainable, and AI-driven solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
