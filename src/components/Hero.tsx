import { useEffect, useState } from "react";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return (
    <>
      {/* Spinner Overlay Until Video/Image Loads */}
      {!isReady && (
        <div className="fixed inset-0 z-50 bg-gray-950 flex items-center justify-center">
          {/* Fast & Stylish 3D Ring Spinner */}
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin shadow-[0_0_30px_#22d3ee50]" />
        </div>
      )}

      {/* Hero Section with Video or Fallback Image */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden">
        {isDesktop && !videoEnded ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            poster="/banner5.png"
            onEnded={() => setVideoEnded(true)}
            onCanPlayThrough={() => setIsReady(true)}
          >
            <source src="/heroai.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="/banner5.png"
            alt="Banner"
            className="w-full h-full object-cover lg:object-fill"
            draggable={false}
            onLoad={() => setIsReady(true)}
          />
        )}
      </div>
    </>
  );
};

export default Hero;
