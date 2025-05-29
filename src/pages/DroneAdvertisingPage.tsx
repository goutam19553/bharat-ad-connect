import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DroneAdvertisingPage(): JSX.Element {
  return (
    <div className="bg-gray-800 text-slate-200 min-h-screen">
      {/* Hero Section */}
      <section className="p-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text"
        >
          Elevate Your Brand with Drone Advertising
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Explore the power of drone technology for captivating aerial displays, smart business operations, and immersive customer engagement.
        </motion.p>
      </section>

      {/* Benefits Section */}
      <section className="p-10 max-w-5xl mx-auto grid gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✨ Why Drone Advertising?</h2>
          <ul className="list-disc list-inside mt-4 text-slate-300 space-y-2">
            <li>Memorable visual storytelling</li>
            <li>Eco-friendly alternative to fireworks</li>
            <li>Perfect for launches, weddings, national events</li>
            <li>Dynamic aerial QR codes & sky branding</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-400">🛠️ Drone Services for Businesses</h2>
          <ul className="mt-4 space-y-4 text-slate-300">
            <li>
              <strong>📸 Aerial Photography & Videography:</strong> Real estate, tourism, events, and more.
            </li>
            <li>
              <strong>🏗️ Construction & Infrastructure Inspection:</strong> Safe, detailed monitoring of hard-to-reach areas.
            </li>
            <li>
              <strong>🌾 Agriculture & Precision Farming:</strong> Crop health analysis, irrigation, yield tracking.
            </li>
            <li>
              <strong>📦 Logistics & Delivery:</strong> Last-mile delivery for remote locations.
            </li>
            <li>
              <strong>🛡️ Surveillance & Security:</strong> Real-time monitoring for events, properties, and borders.
            </li>
          </ul>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-400">🌟 Success Stories</h2>
          <ul className="list-disc list-inside mt-4 text-slate-300 space-y-2">
            <li>Mahindra Lifespaces: Aerial QR codes for Metaverse entry</li>
            <li>Mercedes Maybach, Godrej: Premium sky shows</li>
            <li>Amaravati Drone Summit 2024: 5,500 drone world record</li>
          </ul>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-400">💰 Affordable Brilliance</h2>
          <p className="mt-2 text-slate-300">
            Starting at just ₹10 lakhs for a 100-drone show, our solutions are as cost-effective as they are breathtaking.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Button className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-500 hover:to-indigo-600 text-black font-semibold shadow-lg hover:shadow-yellow-400/30 transition duration-300">
            Book a Drone Show
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
