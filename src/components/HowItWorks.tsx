import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: "/icons/",
    title: "Sign Up & Explore",
    description:
      "Create an account, browse ad spaces on the interactive map, and find locations by city, footfall, and more.",
  },
  {
    icon: "/icons/upload.gif",
    title: "Upload Ad & Details",
    description:
      "Submit your creative design, select target demographics, and input your campaign goals.",
  },
  {
    icon: "/icons/preview.gif",
    title: "Preview & Customize",
    description:
      "Use our AI & AR tools to preview your ad on walls, hoardings, and digital kiosks in real environments.",
  },
  {
    icon: "/icons/budget.gif",
    title: "Budget Campaign Suggestion",
    description:
      "Our platform provides smart package suggestions to match your budget and maximize ROI.",
  },
  {
    icon: "/icons/launch.gif",
    title: "Launch Across India",
    description:
      "Deploy your campaign across cities using our printing, installation & tracking network.",
  },
  {
    icon: "/icons/track.gif",
    title: "Track & Grow",
    description:
      "Monitor reach, engagement & foot traffic analytics on your dashboard. Optimize for better ROI.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-cover bg-center opacity-10 blur-md" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/10 to-blue-800/10 pointer-events-none" />
      <h2 className="text-white text-4xl font-bold text-center mb-16 z-10 relative">
        How It Works
      </h2>
      <div className="relative flex justify-center mb-12 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute top-[-40px] text-purple-500 animate-ping"
        >
          <Sparkles size={48} />
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex md:flex-row flex-nowrap md:justify-between md:overflow-visible overflow-x-auto gap-12 px-4 pb-6 scrollbar-thin scrollbar-thumb-purple-500">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="flex flex-col items-center text-center min-w-[250px] md:min-w-0 relative"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-1 rounded-full shadow-2xl shadow-purple-700/40"
              >
                <div className="bg-black border-4 border-dashed border-white w-24 h-24 flex items-center justify-center rounded-full">
                  <Image src={step.icon} alt={step.title} width={48} height={48} className="rounded-full animate-pulse" />
                </div>
              </motion.div>
              <h3 className="text-white text-xl font-semibold mt-6 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm max-w-xs">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="hidden md:block absolute right-[-50%] top-12 w-full border-t-2 border-dotted border-purple-500"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.h3
        className="text-4xl text-center font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mt-16 animate-bounce z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        YOUR AD IS READY!
      </motion.h3>
    </section>
  );
}
