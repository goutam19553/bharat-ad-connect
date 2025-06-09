import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://www.adinnoutdoors.com/wp-content/uploads/2024/04/banner-outdoor1.jpg')",
        }}
      >
        {/* Optional: Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          The Ad-Project
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-md">
          India’s First PAN-India Traditional AdTech Platform Empowering Brands with AI & AR Ad Campaigns
        </p>
        <Link
          to="/ai-analytics"
          className="mt-8 bg-white text-black font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-200 transition"
        >
          👉 Explore AI & AR Experience
        </Link>
      </div>
    </section>
  );
};

export default Hero;
