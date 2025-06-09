import { useEffect, useState } from "react";

const slides = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-1500 ease-in-out ${
            i === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
