
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
      
      // Update the gradient position based on mouse movement
      hero.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%, 
          rgba(255, 153, 51, 0.3) 0%, 
          rgba(0, 0, 128, 0.6) 50%, 
          rgba(0, 0, 128, 0.8) 100%
        )
      `;
      
      // 3D parallax effect for content
      const cards = hero.querySelectorAll('.parallax-card');
      const badges = hero.querySelectorAll('.badge-3d');
      
      cards.forEach((card: Element) => {
        const cardElement = card as HTMLElement;
        const moveX = (clientX - window.innerWidth / 2) / 50;
        const moveY = (clientY - window.innerHeight / 2) / 50;
        
        cardElement.style.transform = `perspective(1000px) rotateY(${moveX * 0.05}deg) rotateX(${-moveY * 0.05}deg) translateZ(10px)`;
      });
      
      badges.forEach((badge: Element, index: number) => {
        const badgeElement = badge as HTMLElement;
        const moveX = (clientX - window.innerWidth / 2) / (30 + index * 10);
        const moveY = (clientY - window.innerHeight / 2) / (30 + index * 10);
        
        badgeElement.style.transform = `perspective(1000px) rotateY(${moveX * 0.1}deg) rotateX(${-moveY * 0.1}deg) translateZ(20px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden transition-all duration-500"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(255, 153, 51, 0.3) 0%, rgba(0, 0, 128, 0.6) 50%, rgba(0, 0, 128, 0.8) 100%)"
      }}
    >
      {/* Floating 3D objects in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute right-[10%] top-[20%] w-32 h-32 bg-bharat-saffron/10 rounded-full blur-xl"></div>
        <div className="floating-shape absolute left-[15%] top-[40%] w-40 h-40 bg-bharat-teal/10 rounded-full blur-xl"></div>
        <div className="floating-shape delay-1 absolute right-[30%] bottom-[10%] w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        <div className="floating-shape delay-2 absolute left-[25%] top-[15%] w-20 h-20 bg-bharat-saffron/20 rounded-full blur-md"></div>
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
            <div className="parallax-card bg-white/90 p-2 rounded-xl shadow-xl rotate-2 transform transition-transform hover:rotate-0 backdrop-blur-sm">
              <img 
                src="https://source.unsplash.com/photo-1527576539890-dfa815648363" 
                alt="Billboard on a building" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="badge-3d absolute -bottom-4 -left-4 bg-white/90 p-1 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="bg-bharat-saffron p-3 rounded">
                <p className="text-white font-bold">AI-Powered</p>
              </div>
            </div>
            <div className="badge-3d absolute -top-4 -right-4 bg-white/90 p-1 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="bg-bharat-navy p-3 rounded">
                <p className="text-white font-bold">AR Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add floating animation styles */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Hero;
