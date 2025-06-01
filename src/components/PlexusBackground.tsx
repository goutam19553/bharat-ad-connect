// components/PlexusBackground.tsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Configuration
    const config = {
      particleCount: 35,
      maxDistance: 120,
      particleSize: 1,
      lineOpacity: 0.15,
      baseColor: "rgba(100, 200, 255, 0.8)",
      movementFactor: 0.2
    };

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * config.movementFactor;
        this.vy = (Math.random() - 0.5) * config.movementFactor;
        this.size = config.particleSize;
      }
      
      update() {
        // Boundary check with gentle bounce
        if (this.x < 0 || this.x > width) this.vx *= -0.8;
        if (this.y < 0 || this.y > height) this.vy *= -0.8;
        
        this.x += this.vx;
        this.y += this.vy;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.baseColor;
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.update();
        p.draw(ctx);
        
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${config.lineOpacity * (1 - distance/config.maxDistance)})`;
            ctx.lineWidth = 0.5;
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
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default PlexusBackground;
