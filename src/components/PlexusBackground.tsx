// components/PlexusBackground.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mouseNear, setMouseNear] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = document.documentElement.scrollHeight); // Use scrollHeight of html root

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const num = 60;

    for (let i = 0; i < num; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let maxDist = 80;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    function draw(now: number) {
      if (!ctx) return;
      requestAnimationFrame(draw);

      const elapsed = now - lastTime;
      if (elapsed < interval) return;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#00fff5";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const dynamicDist = mouseNear ? 130 : maxDist;
          if (dist < dynamicDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 245, ${1 - dist / dynamicDist})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    }

    requestAnimationFrame(draw);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.documentElement.scrollHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [mouseNear]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 400;
      const scrolled = window.scrollY > triggerPoint;

      if (scrolled !== hasScrolled) {
        setHasScrolled(scrolled);
        controls.start({
          opacity: scrolled ? 1 : 0,
          y: scrolled ? 0 : 40,
          transition: { duration: 1.2, ease: "easeOut" },
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientY } = e;
      setMouseNear(clientY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls, hasScrolled]);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0"
      style={{ position: "absolute", top: 0 }}
    />
  );
};

export default PlexusBackground;
