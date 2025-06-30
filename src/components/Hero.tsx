import { useEffect, useState } from "react";

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      {/* Spinner Overlay */}
      {!isReady && (
        <div className="fixed inset-0 z-50 bg-gray-950 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin shadow-[0_0_30px_#22d3ee50]" />
        </div>
      )}

      {/* Responsive Hero: full width on desktop, centered on mobile */}
      <div className="relative w-full h-[700px] overflow-hidden mx-auto lg:max-w-full max-w-[1280px]">
        {!videoEnded ? (
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
            className="w-full h-full object-cover"
            draggable={false}
            onLoad={() => setIsReady(true)}
          />
        )}
      </div>
    </>
  );
};

export default Hero;
