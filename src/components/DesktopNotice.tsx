import { useState, useEffect } from "react";

const DesktopNotice = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("desktopNoticeShown");
    const isMobile = window.innerWidth < 768;

    if (isMobile && !alreadySeen) {
      setShowPopup(true);
      localStorage.setItem("desktopNoticeShown", "true");
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-sm">
      <div className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg p-4 text-center text-white animate-fade-in border-gradient">
        <p className="text-sm font-semibold">
          🚀 For the best experience, please use this website in{" "}
          <span className="text-blue-200 font-bold">desktop mode</span>.
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-1 right-2 text-white text-sm hover:text-red-400 transition"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default DesktopNotice;
