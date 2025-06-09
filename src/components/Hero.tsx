import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      // Optional: Log current slide
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Optional loader */}
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

      <div id="hero-section" className="relative w-full overflow-hidden">
        <div ref={sliderRef} className="keen-slider h-full">
          <div className="keen-slider__slide number-slide1">
            <img
              src="/banner1.png"
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img
              src="/banner2.png"
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img
              src="/banner3.png"
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
