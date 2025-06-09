const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ Fullscreen Background Image (No Crop) */}
      <img
        src="https://www.adinnoutdoors.com/wp-content/uploads/2024/04/banner-outdoor1.jpg"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover"
      />
    </section>
  );
};

export default Hero; 
