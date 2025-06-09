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
    <section className="relative w-full h-[90vh] min-h-[400px] overflow-hidden">
      {bannerImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`banner-${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{ willChange: "opacity" }}
        />
      ))}
    </section>
  );
};

export default Hero;
