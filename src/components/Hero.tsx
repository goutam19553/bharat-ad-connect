import { useEffect, useState, useRef } from "react";

const banners = [
  "/banner5.png",
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
];

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null); // Better cleanup reference

  // Preload banners (with error handling)
  useEffect(() => {
    let isMounted = true;
    banners.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => isMounted && setImagesLoaded((prev) => prev + 1);
      img.onerror = () => isMounted && setImagesLoaded((prev) => prev + 1); // Fail gracefully
    });
    return () => { isMounted = false; };
  }, []);

  // Hide loader when ready (with cleanup)
  useEffect(() => {
    let timeoutId;
    if (imagesLoaded === banners.length) {
      timeoutId = setTimeout(() => setIsLoading(false), 800);
    }
    return () => clearTimeout(timeoutId);
  }, [imagesLoaded]);

  // GLOWING NEON PARTICLE EFFECT (optimized)
  useEffect(() => {
    if (!isLoading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 200;

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Neon colors
    const colors = [
      'rgba(255, 255, 255, 0.9)',
      'rgba(200, 220, 255, 0.7)',
      'rgba(180, 180, 255, 0.6)'
    ];

    class Particle {
      constructor() {
        this.reset(true);
        this.z = Math.random() * 4 - 2; // Add depth for parallax
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * canvas.width : 0;
        this.y = initial ? Math.random() * canvas.height : 0;
        this.size = Math.random() * 4 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = {
          x: (Math.random() - 0.5) * 0.5, // Slower, more elegant movement
          y: (Math.random() - 0.5) * 0.5
        };
        this.alpha = Math.random() * 0.5 + 0.5;
        this.life = Math.random() * 200 + 100; // Longer lifespan
      }

      update() {
        this.x += this.speed.x;
        this.y += this.speed.y;
        this.life--;
        
        const edgeThreshold = 100; // More generous bounds
        if (this.x < -edgeThreshold || 
            this.x > canvas.width + edgeThreshold || 
            this.y < -edgeThreshold || 
            this.y > canvas.height + edgeThreshold ||
            this.life <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Glow effect with depth scaling
        const glowSize = this.size * 3 * (1 + this.z * 0.2);
        const glow = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, glowSize
        );
        glow.addColorStop(0, this.color);
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright core
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.15)'; // More subtle trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoading]);

  // Slide controls (unchanged)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : (prev + 1) % banners.length));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? banners.length - 1 : (prev - 1) % banners.length
    );
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </div>
      )}

      <div className="relative w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden">
        <img
          src={banners[currentIndex]}
          alt="Advertisement banner"
          className="w-full h-full object-cover lg:object-fill transition-opacity duration-500"
          loading="eager"
          draggable={false}
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

export default Hero;
