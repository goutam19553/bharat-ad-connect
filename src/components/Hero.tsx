import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      
      {/* 🔥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/19419586-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay (optional) */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 📦 Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight backdrop-blur-sm">
              Revolutionizing <span className="text-bharat-saffron">Outdoor Advertising</span> Across India
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 backdrop-blur-sm">
              Aura-Ad connects advertisers with prime ad spaces nationwide through an AI-powered marketplace, making outdoor advertising smarter, simpler, and more effective.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/ad-spaces" className="btn-primary hover:scale-105 transition-transform">
                Explore Ad Spaces
              </Link>
              <Link to="/about" className="bg-white/90 backdrop-blur-sm text-bharat-navy hover:bg-white font-bold py-3 px-6 rounded-md transition-all duration-200 hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/90 p-2 rounded-xl shadow-xl rotate-2 transform transition-transform hover:rotate-0 backdrop-blur-sm">
              <img 
                src="/images/your-image.jpg" 
                alt="Advertise Where India Lives" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/90 p-1 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="bg-bharat-saffron p-3 rounded">
                <p className="text-white font-bold">AI-Powered</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white/90 p-1 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="bg-bharat-navy p-3 rounded">
                <p className="text-white font-bold">AR Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
