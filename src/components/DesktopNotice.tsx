import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DesktopNotice = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] w-[92%] max-w-sm"
    >
      <div className="relative bg-gradient-to-br from-[#1f2937]/80 to-[#111827]/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl px-5 py-4 text-white animate-pulse-fast overflow-hidden">
        <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm z-[-1] pointer-events-none" />

        <div className="flex flex-col items-center space-y-2">
          <p className="text-base font-semibold text-center leading-relaxed tracking-wide text-white drop-shadow-sm">
            🌟 For a <span className="text-blue-300 font-bold">stellar</span> experience,
            tap <span className="text-pink-300 font-bold">⋮</span> and choose{" "}
            <span className="text-green-300 font-bold">"Desktop site"</span>
            in your browser!
          </p>
          <p className="text-xs text-gray-300">Optimized for large screen view ✨</p>
        </div>

        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-3 text-white hover:text-red-400 transition-colors duration-200 text-sm font-bold"
        >
          ✖
        </button>

        {/* Animated glow ring */}
        <div className="absolute -inset-[2px] rounded-2xl pointer-events-none z-[-2] animate-glow-ring" />
      </div>

      {/* Custom Tailwind-style animation */}
      <style>{`
        @keyframes glow-ring {
          0%, 100% {
            box-shadow: 0 0 8px #4f46e5, 0 0 16px #ec4899;
          }
          50% {
            box-shadow: 0 0 16px #4f46e5, 0 0 24px #ec4899;
          }
        }
        .animate-glow-ring {
          animation: glow-ring 2.5s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default DesktopNotice;
