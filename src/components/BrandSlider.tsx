import { useKeenSlider } from "keen-slider/react";

const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Spotify_logo_with_text.svg",
];

const BrandSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
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
    created(s) {
      s.moveToIdx(0, true);
    },
  });

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="container-custom text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Brands Who Trust Us</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We're trusted by industry-leading companies</p>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {brandLogos.map((logo, index) => (
          <div key={index} className="keen-slider__slide flex items-center justify-center p-4">
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
