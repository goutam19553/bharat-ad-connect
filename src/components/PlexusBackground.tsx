import React, { useEffect, useRef } from "react";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = document.body.scrollHeight);

    const numDots = 140;
    const maxDist = 120;
    let hue = 180; // Start with cyan-blue
    const dots = Array.from({ length: numDots }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(10,10,20,0.1)";
      ctx.fillRect(0, 0, width, height);

      hue = (hue + 0.5) % 360; // Cycle hue for neon effect

      // Draw lines
      for (let i = 0; i < numDots; i++) {
        for (let j = i + 1; j < numDots; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${1 - dist / maxDist})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (let dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${(hue + 180) % 360}, 100%, 60%, 0.8)`;
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 4;
        ctx.fill();

        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x <= 0 || dot.x >= width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= height) dot.vy *= -1;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.body.scrollHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default PlexusBackground;
