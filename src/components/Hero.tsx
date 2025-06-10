import { useEffect, useState } from "react";

const banners = [
  "/banner5.png",
];

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <>
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

      {/* Responsive Hero Container */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden">
        {/* Banner Image */}
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="w-full h-full object-cover lg:object-fill"
          loading="eager"
          draggable={false}
        />

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          aria-label="Next Slide"
        >
          &#8594;
        </button>

        {/* Optional Hero Content */}
        <div className="container-custom relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Hero text or buttons go here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
