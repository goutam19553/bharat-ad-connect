import { useEffect, useState } from "react";

const banners = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
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

      {/* Fullscreen Hero Section */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Banner Image */}
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          draggable={false}
        />

        {/* Controls */}
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

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center px-6 md:px-12">
          <div className="text-white text-center md:text-left max-w-4xl">
            {/* Your content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
