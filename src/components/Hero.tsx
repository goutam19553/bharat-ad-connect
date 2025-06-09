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

      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* 🔥 Video Background with Poster */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-video-poster.webp"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in"
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔲 Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* 📦 Main Content */}
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              

            <div className="relative">
              <div className="bg-white/90 p-2 rounded-xl shadow-xl rotate-2 transform transition-transform hover:rotate-0 backdrop-blur-sm">
                <img src="/images/your-image.jpg" alt="Discover" className="rounded-lg w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 p-1 rounded-lg shadow-lg backdrop-blur-sm">
                <div className="bg-bharat-saffron p-3 rounded">
                  <p className="text-white font-bold">AI-Powered</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white/90 p-1 rounded-lg shadow-lg backdrop-blur-sm">
                <div className="bg-bharat-navy p-3 rounded">
                  <p className="text-white font-bold">AR Preview</p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ "AI & AR Experience" Button Positioned Below All Content */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/ai-analytics"
              className="btn-3d text-white font-bold py-3 px-8 rounded-lg"
            >
             👉AI & AR Experience👈
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
