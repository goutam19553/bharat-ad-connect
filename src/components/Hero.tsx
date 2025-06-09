const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ Fullscreen Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://www.adinnoutdoors.com/wp-content/uploads/2024/04/banner-outdoor1.jpg')",
        }}
      >
        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
    </section>
  );
};

export default Hero;
