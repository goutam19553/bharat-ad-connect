import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading time for the effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 3D Cube Spinner */}
      {isLoading && (
        <div className="loader-container">
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

      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" style={{ height: "500px" }}>
        {/* 🔥 Video Background with Poster */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-video-poster.webp"
          className="absolute top-0 left-0 w-full h-full object-contain z-0 transition-opacity duration-1000 ease-in"
          style={{ backgroundColor: "black" }}
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔲 Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* ✅ "AI & AR Experience" Button Positioned Below All Content */}
        <div className="mt-12 flex justify-center relative z-10">
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
