import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DroneAdvertisingPage(): JSX.Element {
  return (
    <div className="bg-[#0f0f0f] text-slate-200 min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Subtle animated gradient background */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-900 via-indigo-900 to-purple-900 opacity-30 animate-gradient-background"
        style={{ backgroundSize: "400% 400%" }}
      />
      
      <header className="p-12 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text shimmer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Illuminate Your Brand with Drone Advertising
        </motion.h1>
        <motion.p
          className="text-xl leading-relaxed max-w-3xl mx-auto text-slate-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          Take your marketing to new heights with mesmerizing drone light shows that captivate audiences and create unforgettable brand experiences. Engage customers like never before with technology that blends creativity, innovation, and sustainability.
        </motion.p>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-6 space-y-16">
        {[
          {
            title: "Why Choose Drone Advertising?",
            content: (
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
                <li>Create unforgettable visual spectacles that captivate and inspire</li>
                <li>Eco-friendly and silent alternative to traditional fireworks</li>
                <li>Ideal for launches, festivals, brand activations, and celebrations</li>
                <li>Integrate interactive elements like skyborne QR codes and augmented reality</li>
              </ul>
            ),
          },
          {
            title: "Meet BotLab Dynamics — Leaders in Drone Light Innovation",
            content: (
              <p className="text-slate-300 text-lg leading-relaxed">
                BotLab Dynamics crafts breathtaking drone shows tailored for both indoor and outdoor venues. Combining cutting-edge technology with artistic storytelling, they deliver immersive experiences that spark awe and engagement.
              </p>
            ),
          },
          {
            title: "Success Stories",
            content: (
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
                <li><strong>Mahindra Lifespaces:</strong> Aerial QR codes seamlessly linking to Metaverse experiences</li>
                <li><strong>Mercedes Maybach & Godrej Properties:</strong> Customized drone shows reflecting luxury branding</li>
                <li><strong>Amaravati Drone Summit 2024:</strong> World record with 5,500 synchronized drones</li>
              </ul>
            ),
          },
          {
            title: "Affordable Brilliance",
            content: (
              <p className="text-slate-300 text-lg leading-relaxed">
                Starting at just ₹10 lakhs for a 100-drone show, our drone advertising solutions combine spectacular visual impact with cost-effective pricing — making high-tech brand experiences accessible for events of any scale.
              </p>
            ),
          },
        ].map(({ title, content }, i) => (
          <motion.section
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ delay: i * 0.3 }}
          >
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{title}</h2>
            {content}
          </motion.section>
        ))}

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Button className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-500 hover:to-indigo-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-400/40 transition duration-300 transform hover:scale-105">
            Book Your Drone Show Today
          </Button>
        </motion.section>
      </main>

      <footer className="p-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} BotLab Dynamics. All rights reserved.
      </footer>

      {/* Additional CSS animations */}
      <style jsx>{`
        .shimmer {
          background-size: 200% 200%;
          animation: shimmer 4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient-background {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-background {
          animation: gradient-background 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
