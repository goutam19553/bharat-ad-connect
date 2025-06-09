import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Fix mobile vh issue by setting CSS variable dynamically (optional)
  useEffect(() => {
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader-container fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="cube-spinner">
            <div className="front"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
      )}

      <div
        className="relative overflow-hidden flex flex-col justify-center"
        style={{
          height: "calc(var(--vh, 1vh) * 100)", // Use custom --vh variable for mobile vh fix
          minHeight: "100vh", // fallback for desktop
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-video-poster.webp"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ backgroundColor: "black" }}
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex justify-center">
          <Link
            to="/ai-analytics"
            className="btn-3d text-white font-bold py-3 px-8 rounded-lg"
          >
            👉AI & AR Experience👈
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
