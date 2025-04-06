
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute right-0 -top-32 w-96 h-96 rounded-full bg-bharat-saffron/80 blur-3xl"></div>
        <div className="absolute left-0 top-64 w-96 h-96 rounded-full bg-bharat-teal/80 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Revolutionizing <span className="text-bharat-saffron">Outdoor Advertising</span> Across India
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Bharat-Ad connects advertisers with prime ad spaces nationwide through an AI-powered marketplace, making outdoor advertising smarter, simpler, and more effective.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/ad-spaces" className="btn-primary">
                Explore Ad Spaces
              </Link>
              <Link to="/about" className="bg-white text-bharat-navy hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-all duration-200">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-2 rounded-xl shadow-xl rotate-2 transform transition-transform hover:rotate-0">
              <img 
                src="https://source.unsplash.com/photo-1527576539890-dfa815648363" 
                alt="Billboard on a building" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-1 rounded-lg shadow-lg">
              <div className="bg-bharat-saffron p-3 rounded">
                <p className="text-white font-bold">AI-Powered</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-1 rounded-lg shadow-lg">
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
