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
    icon: <Star className="w-10 h-10 text-white" />,
    title: "Discover Unique Ad Spaces",
    description:
      "Choose from a wide range of wall spaces across India using our real-time map. Filter by location, visibility, foot traffic & more.",
  },
  {
    icon: <Newspaper className="w-10 h-10 text-white" />,
    title: "Upload Your Campaign",
    description:
      "Upload your ad image or video and preview it directly on the wall using our AI + AR tools. No graphic designer required!",
  },
  {
    icon: <Sliders className="w-10 h-10 text-white" />,
    title: "Customize Your Ad Settings",
    description:
      "Select duration, start/end dates, and budgets. Our platform helps optimize your ad placement using AI analytics.",
  },
  {
    icon: <Globe className="w-10 h-10 text-white" />,
    title: "Connect with Local Partners",
    description:
      "We connect you with verified wall owners, local print & install partners, and handle government permissions if required.",
  },
  {
    icon: <PlayCircle className="w-10 h-10 text-white" />,
    title: "Launch and Monitor",
    description:
      "Track your ad campaign in real-time with analytics, reach estimates, and visual proof. No more blind spending!",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full px-6 py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          How It Works
        </h2>

        <div className="flex flex-col items-center gap-20 relative">
          {steps.map((step, index) => {
            const isUp = index % 2 === 0;

            return (
              <div key={index} className="w-full flex justify-center relative">
                {/* Step Content */}
                <div
                  className={`flex flex-col items-center text-center max-w-md ${
                    isUp ? "mt-0 mb-20" : "mt-20 mb-0"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full p-6 border-4 bg-gradient-to-br from-black via-gray-900 to-black shadow-xl border-gradient-to-r from-pink-500 to-purple-600"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="font-bold text-xl mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`absolute left-1/2 w-1 bg-gradient-to-b from-pink-500 to-purple-600 ${
                      isUp ? "top-full" : "bottom-full"
                    }`}
                  />
                )}
              </div>
            );
          })}

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-10 text-center"
          >
            YOUR AD IS READY!
          </motion.div>
        </div>
      </div>
    </section>
  );
}
