import { useEffect, useState } from "react";

const slides = ["/banner1.png", "/banner2.png", "/banner3.png"]; // Add your image paths

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
