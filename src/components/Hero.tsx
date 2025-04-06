
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.3) 0%, rgba(0, 0, 128, 0.6) 50%, rgba(0, 0, 128, 0.8) 100%)"
      }}
    >
      {/* 3D advertising GIFs positioned as floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-[5%] top-[15%] w-32 h-32 floating-shape">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHNreTdkbWdmenczaXNrcGd0eHRnYjdxanV2bHVqeGEzeXZvb3RybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hsDkGbPvTwfks/giphy.gif" 
            alt="3D Billboard Animation" 
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute left-[10%] top-[40%] w-40 h-40 delay-1">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG1xeWYzdXdzdDVrZWVpYTZqdTdydnN4amdyYnkzdGJ3MGlzZHJnbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btQsLqXMJAPu6Na/giphy.gif" 
            alt="Digital Marketing Animation" 
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute right-[15%] bottom-[10%] w-36 h-36 delay-2">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTF1Y2VzYzg0cGpjNHhsbXIxc3ZvZTdkZzU5NmFrZTc0MzA3c3Z6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgpernHG70HVA76/giphy.gif" 
            alt="3D Statistics Graph" 
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight backdrop-blur-sm">
              Revolutionizing <span className="text-bharat-saffron">Outdoor Advertising</span> Across India
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 backdrop-blur-sm">
              Bharat-Ad connects advertisers with prime ad spaces nationwide through an AI-powered marketplace, making outdoor advertising smarter, simpler, and more effective.
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
                src="https://source.unsplash.com/photo-1527576539890-dfa815648363" 
                alt="Billboard on a building" 
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
      
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes float-delay-1 {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes float-delay-2 {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        .floating-shape {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-1 {
          animation: float-delay-1 8s ease-in-out infinite;
        }
        
        .delay-2 {
          animation: float-delay-2 10s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Hero;
