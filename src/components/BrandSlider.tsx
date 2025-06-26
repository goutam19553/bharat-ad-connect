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
  return (
    <div className="py-12 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Brands Who Trust Us</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          We're trusted by industry-leading companies
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-10 whitespace-nowrap">
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center p-4"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-12 md:h-16 object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
