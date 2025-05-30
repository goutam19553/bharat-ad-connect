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
    let height = (canvas.height = window.innerHeight);

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const num = 120;

    for (let i = 0; i < num; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    let maxDist = 100; // default line connection distance

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00fff5";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00fff5";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          let dx = p.x - particles[j].x;
          let dy = p.y - particles[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 245, ${1 - dist / maxDist})`;
            ctx.lineWidth = 0.7;
            ctx.shadowBlur = 4;
            ctx.shadowColor = "#00fff5";
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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

        if (scrolled) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, ease: "easeOut" },
          });
        } else {
          controls.start({
            opacity: 0,
            y: 40,
            transition: { duration: 1, ease: "easeInOut" },
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientY } = e;
      if (clientY > window.innerHeight / 3) {
        setMouseNear(true); // expand mesh
      } else {
        setMouseNear(false); // return to default
      }
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
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
    />
  );
};

export default PlexusBackground;
