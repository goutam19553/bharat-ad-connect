// components/PlexusBackground.tsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial canvas size
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight * 2); // Double height for scrolling

    // Configuration
    const config = {
      particleCount: 60,
      particleSize: 1.5,
      lineColor: "rgba(0, 255, 245, 0.5)",
      lineWidth: 0.7,
      maxDistance: 120,
      movementSpeed: 0.3
    };

    // Create particles distributed through the extended height
    const particles = Array.from({ length: config.particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height, // Spread through extended height
      vx: (Math.random() - 0.5) * config.movementSpeed,
      vy: (Math.random() - 0.5) * config.movementSpeed,
      size: Math.random() * 1.5 + 1
    }));

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = 'rgb(31, 41, 55)';
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = config.lineColor;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            const opacity = 1 - distance / config.maxDistance;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 255, 245, ${opacity * 0.5})`;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight * 2; // Maintain extended height
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 h-[200%]">
      <motion.canvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default PlexusBackground;
