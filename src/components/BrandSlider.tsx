import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const brandLogos = [
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/99-removebg-preview.png",
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/2.png",
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/3.webp",
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/4.webp",
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/6.webp",
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/7.webp",
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/8.webp",
  "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/1.webp",
];

const BrandSlider = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 2,
        },
      },
    },
    created(slider) {
      timer.current = setInterval(() => {
        slider.next();
      }, 4000); // 👈 4000ms = 4 seconds per slide
    },
    destroyed() {
      if (timer.current) clearInterval(timer.current);
    },
  });

  const handlePrev = () => {
    slider.current?.prev();
  };

  const handleNext = () => {
    slider.current?.next();
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="py-12 bg-white dark:bg-gray-900 relative">
      <div className="container-custom text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Brands Who Trust Us</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We're trusted by industry-leading companies</p>
      </div>

      <div className="relative">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {brandLogos.map((logo, index) => (
            <div key={index} className="keen-slider__slide flex items-center justify-center p-4">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-12 md:h-16 object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Custom Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition" />
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;
