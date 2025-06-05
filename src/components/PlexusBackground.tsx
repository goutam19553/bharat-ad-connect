import React, { useEffect, useRef } from "react";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const columns = Math.floor(width / 20);
    const drops = new Array(columns).fill(0);

    const colors = [
      "#00ffea", // electric cyan
      "#00ffa0", // neon green
      "#00b3ff", // bright blue
    ];

    let animationFrameId: number;

    function draw() {
      if (!ctx) return;

      // Gray-700 background with slight transparency for fade effect
      ctx.fillStyle = "rgba(55, 65, 81, 0.15)"; // #374151 with 15% opacity
      ctx.fillRect(0, 0, width, height);

      ctx.font = "18px monospace";

      for (let i = 0; i < drops.length; i++) {
        const chars = "01ABCDEF";
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;

        const x = i * 20;
        const y = drops[i] * 20;

        ctx.fillText(text, x, y);

        // Slow down the speed: increment drops less often
        if (y > height && Math.random() > 0.985) drops[i] = 0;
        else if (Math.random() > 0.7) drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        backgroundColor: "#374151", // Tailwind gray-700
      }}
    />
  );
};


export default PlexusBackground;
