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

    // Configuration - adjust these to control the appearance
    const config = {
      particleCount: 50, // Reduced from original for better performance
      particleSize: 1.5,
      lineColor: "rgba(0, 255, 245, 0.3)", // Cyan color with transparency
      lineWidth: 0.7,
      maxDistance: 100, // How far apart particles connect
      movementSpeed: 0.5, // Slower movement than original
      mouseRadius: 150, // Area where mouse affects particles
      mouseStrength: 0.3 // How strongly mouse affects particles
    };

    // Particle storage
    const particles = Array.from({ length: config.particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * config.movementSpeed,
      vy: (Math.random() - 0.5) * config.movementSpeed
    }));

    // Mouse position tracking
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, width);

      // Update particles
      particles.forEach((p) => {
        // Mouse interaction (gentle repulsion)
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.mouseRadius) {
          const force = config.mouseStrength * (1 - distance / config.mouseRadius);
          p.vx += (dx / distance) * force * 0.1;
          p.vy += (dy / distance) * force * 0.1;
        }

        // Update position with boundary check
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, config.particleSize, 0, Math.PI * 2);
        ctx.fillStyle = config.lineColor;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            const opacity = 1 - distance / config.maxDistance;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 245, ${opacity * 0.5})`;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }} // Slightly more visible than before
      transition={{ duration: 2 }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default PlexusBackground;
