import { useEffect, useState, useRef } from "react";

const banners = [
  "/banner5.png", // Default banner (fixed idle)
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
];

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Always starts at banner5
  const canvasRef = useRef(null);

  // Preload all banners
  useEffect(() => {
    banners.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded((prev) => prev + 1);
      };
    });
  }, []);

  // Hide loading screen once all banners load
  useEffect(() => {
    if (imagesLoaded === banners.length) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Smooth fade
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  // 3D Particle Spinner Effect
  useEffect(() => {
    if (!isLoading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const particleCount = 150;
    const colors = ['#FF9933', '#FFFFFF', '#138808']; // Saffron, White, Green

    // Set canvas size
    canvas.width = 300;
    canvas.height = 300;

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.z = Math.random() * 4 - 2;
      }

      reset() {
        this.x = 0;
        this.y = 0;
        this.z = Math.random() * 4 - 2;
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 0.02 + 0.01;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 50 + Math.random() * 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.01 + 0.005;
      }

      update() {
        this.angle += this.speed;
        this.rotation += this.rotationSpeed;
        
        // 3D position
        const xPos = Math.cos(this.angle) * this.radius;
        const yPos = Math.sin(this.angle) * this.radius;
        
        // Apply 3D perspective
        const scale = 1 / (2 + this.z);
        this.x = xPos * scale;
        this.y = yPos * scale;
        
        // Z movement
        this.z += 0.05;
        if (this.z > 2) {
          this.reset();
          this.z = -2;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2 + this.x, 
          canvas.height / 2 + this.y, 
          this.size * (1 / (2 + this.z)), 
          0, 
          Math.PI * 2
        );
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoading]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? banners.length - 1 : (prev - 1) % banners.length
    );
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
          <canvas 
            ref={canvasRef} 
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          />
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden">
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="w-full h-full object-cover lg:object-fill transition-opacity duration-500"
          loading="eager"
          draggable={false}
        />

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          aria-label="Next Slide"
        >
          &#8594;
        </button>

        {/* Optional Hero Content */}
        <div className="container-custom relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Add your hero content here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
