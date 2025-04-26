import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // SVG icons
import "keen-slider/keen-slider.min.css"; // Don't forget the Keen slider CSS

const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
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
  });

  const handlePrev = () => {
    slider.current?.prev();
  };

  const handleNext = () => {
    slider.current?.next();
  };

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
                className="h-12 md:h-16 object-contain transition-all duration-300 hover:scale-105" // Colorful logos + slight zoom on hover
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
