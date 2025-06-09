import { useEffect, useState } from "react";

const banners = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {banners.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </section>
  );
};

export default Hero;
