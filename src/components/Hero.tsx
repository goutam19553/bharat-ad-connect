import { useEffect, useState } from "react";

const banners = [
  "/banner5.png",
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
];

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload images
    banners.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded((prev) => prev + 1);
      };
    });
  }, []);

  useEffect(() => {
    if (imagesLoaded === banners.length) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // fade delay for smooth transition
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
          <div className="relative w-20 h-20 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border-4 border-bharat-saffron border-t-transparent"></div>
            <div className="absolute inset-2 rounded-full border-4 border-bharat-green border-r-transparent"></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden">
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

        {/* Hero Content Placeholder */}
        <div className="container-custom relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Hero text or CTA goes here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
