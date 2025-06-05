import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  const [mouseNear, setMouseNear] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = document.documentElement.scrollHeight);

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

    let maxDist = 100;
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

      ctx.shadowBlur = scrollSpeed * 2 + 4; // glow effect
      ctx.shadowColor = "#00fff5";

      particles.forEach((p, i) => {
        p.x += p.vx * (1 + scrollSpeed * 0.5);
        p.y += p.vy * (1 + scrollSpeed * 0.5);
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

          const dynamicDist = mouseNear ? 150 : maxDist;
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
  }, [mouseNear, scrollSpeed]);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      const delta = Math.abs(newScrollY - lastScrollY.current);
      lastScrollY.current = newScrollY;

      setScrollSpeed(Math.min(delta / 20, 1)); // cap at 1

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setScrollSpeed(0), 150);

      // Animate canvas on scroll
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
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
  }, [controls]);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
      style={{
        filter: `blur(${scrollSpeed * 2 + 1}px)`,
      }}
    />
  );
};

export default PlexusBackground;
