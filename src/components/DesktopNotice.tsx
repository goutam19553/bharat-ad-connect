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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      <div className="relative bg-gradient-to-br from-[#1f2937]/80 to-[#111827]/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl w-full max-w-sm px-6 py-6 text-white animate-pulse-fast overflow-hidden">
        <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm z-[-1] pointer-events-none" />

        {/* Close icon top-right */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-3 text-white hover:text-red-400 transition-colors duration-200 text-xl font-bold"
        >
          ✖
        </button>

        {/* Content */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-base font-semibold leading-relaxed tracking-wide text-white drop-shadow-sm">
            🌟 For a <span className="text-blue-300 font-bold">stellar</span> experience,
            tap <span className="text-pink-300 font-bold">⋮</span> and enable{" "}
            <span className="text-green-300 font-bold">"Desktop site"</span> in your browser!
          </p>
          <p className="text-sm text-gray-300">Optimized for large screen view ✨</p>

          {/* Cancel Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/30 transition duration-300 text-sm"
          >
            Cancel
          </button>
        </div>

        {/* Glowing ring effect */}
        <div className="absolute -inset-[2px] rounded-2xl pointer-events-none z-[-2] animate-glow-ring" />
      </div>

      {/* Custom animations */}
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
