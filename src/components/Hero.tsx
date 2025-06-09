import { useEffect, useState } from "react";

const bannerImages = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {bannerImages.map((img, i) => {
        // calculate if slide is active, previous or next for slide effect
        let className =
          "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out";

        if (i === current) {
          className += " opacity-100 z-20";
        } else if (
          i === (current - 1 + bannerImages.length) % bannerImages.length
        ) {
          // previous slide, slide out left
          className += " opacity-0 -translate-x-full z-10";
        } else if (
          i === (current + 1) % bannerImages.length
        ) {
          // next slide, slide in from right but invisible
          className += " opacity-0 translate-x-full z-10";
        } else {
          className += " opacity-0 z-0";
        }

        return (
          <img
            key={i}
            src={img}
            alt={`banner-${i}`}
            className={className}
            style={{ willChange: "transform, opacity" }}
          />
        );
      })}
    </section>
  );
};

export default Hero;
