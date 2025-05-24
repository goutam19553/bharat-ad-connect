import { motion } from "framer-motion";
import {
  Star,
  Newspaper,
  Sliders,
  Globe,
  PlayCircle,
} from "lucide-react";

const steps = [
  {
    icon: <Star className="w-12 h-12 text-pink-500" />,
    title: "Discover Unique Ad Spaces",
    description:
      "Choose from a wide range of wall spaces across India using our real-time map. Filter by location, visibility, foot traffic & more.",
  },
  {
    icon: <Newspaper className="w-12 h-12 text-purple-500" />,
    title: "Upload Your Campaign",
    description:
      "Upload your ad image or video and preview it directly on the wall using our AI + AR tools. No graphic designer required!",
  },
  {
    icon: <Sliders className="w-12 h-12 text-indigo-500" />,
    title: "Customize Your Ad Settings",
    description:
      "Select duration, start/end dates, and budgets. Our platform helps optimize your ad placement using AI analytics.",
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-500" />,
    title: "Connect with Local Partners",
    description:
      "We connect you with verified wall owners, local print & install partners, and handle government permissions if required.",
  },
  {
    icon: <PlayCircle className="w-12 h-12 text-teal-400" />,
    title: "Launch and Monitor",
    description:
      "Track your ad campaign in real-time with analytics, reach estimates, and visual proof. No more blind spending!",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
          How It Works
        </h2>

        <div className="flex flex-col items-center gap-28 relative">
          {steps.map((step, index) => {
            const isUp = index % 2 === 0;
            return (
              <div key={index} className="w-full flex justify-center relative">
                {/* Step Content */}
                <motion.div
                  initial={{ opacity: 0, y: isUp ? 40 : -40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.7 }}
                  className={`flex flex-col items-center text-center max-w-md px-6 py-8 rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/90 shadow-2xl border border-purple-700/40 ${
                    isUp ? "mt-0 mb-24" : "mt-24 mb-0"
                  } hover:scale-105 transition-transform duration-300`}
                >
                  <div className="rounded-full p-5 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 shadow-lg mb-5">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-2xl mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-base">{step.description}</p>
                </motion.div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 100 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className={`absolute left-1/2 w-1 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-500 rounded-full shadow-lg ${
                      isUp ? "top-full" : "bottom-full"
                    }`}
                  />
                )}
              </div>
            );
          })}

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: steps.length * 0.15 + 0.5 }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 mt-16 text-center drop-shadow-xl"
          >
            YOUR AD IS READY!
          </motion.div>
        </div>
      </div>
    </section>
  );
}
