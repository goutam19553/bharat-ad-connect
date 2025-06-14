import { useEffect, useState, useRef } from "react";

const banners = ["/banner5.png"]; // Only use banner5 after video

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    setShowVideo(isDesktop);

    const img = new Image();
    img.src = banners[0];
    img.onload = () => setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const particleCount = 150;
    const colors = [
      'rgba(58, 97, 255, 0.6)',
      'rgba(198, 83, 255, 0.6)',
      'rgba(255, 92, 92, 0.6)',
      'rgba(255, 180, 60, 0.6)',
      'rgba(72, 255, 203, 0.6)',
      'rgba(50, 255, 126, 0.6)',
    ];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
        this.glowIntensity = Math.random() * 0.5 + 0.5;
        this.glowPulseSpeed = Math.random() * 0.02 + 0.01;
        this.glowPhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += this.speed;
        this.rotation += this.rotationSpeed;
        const xPos = Math.cos(this.angle) * this.radius;
        const yPos = Math.sin(this.angle) * this.radius;
        const scale = 1 / (2 + this.z);
        this.x = xPos * scale;
        this.y = yPos * scale;
        this.z += 0.05;
        this.glowPhase += this.glowPulseSpeed;
        this.currentGlow = this.glowIntensity * (0.5 + 0.5 * Math.sin(this.glowPhase));
        if (this.z > 2) {
          this.reset();
          this.z = -2;
        }
      }

      draw() {
        const particleSize = Math.max(0.1, this.size * (1 / (2 + this.z)));
        const glowSize = Math.max(particleSize, particleSize * (1 + this.currentGlow * 0.5));
        const centerX = canvas.width / 2 + this.x;
        const centerY = canvas.height / 2 + this.y;
        if (!isFinite(centerX) || !isFinite(centerY) || !isFinite(particleSize) || !isFinite(glowSize)) return;

        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          particleSize * 0.5,
          centerX,
          centerY,
          glowSize
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(centerX, centerY, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(centerX, centerY, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(31, 41, 55, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-gray-800 flex items-center justify-center">
          <canvas ref={canvasRef} className="absolute w-full h-full" />
        </div>
      )}

      <div className="relative w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden">
        {showVideo && !videoEnded ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          >
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={banners[0]}
            alt="Banner"
            className="w-full h-full object-cover lg:object-fill"
            draggable={false}
          />
        )}
      </div>
    </>
  );
};

export default Hero;
