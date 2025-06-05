import React, { useEffect, useRef } from "react";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Data stream columns
    const columns = Math.floor(width / 20);
    const drops = new Array(columns).fill(0);

    // Colors for neon effect
    const colors = [
      "#00ffea", // electric cyan
      "#00ffa0", // neon green
      "#00b3ff", // bright blue
    ];

    let animationFrameId: number;

    function draw() {
      if (!ctx) return;

      // Semi-transparent background to create fade effect
      ctx.fillStyle = "rgba(10, 10, 18, 0.1)"; 
      ctx.fillRect(0, 0, width, height);

      ctx.font = "18px monospace";

      for (let i = 0; i < drops.length; i++) {
        // Random glowing data bit (0 or 1 or hex char)
        const chars = "01ABCDEF";
        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Choose neon color with some random highlight
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        const x = i * 20;
        const y = drops[i] * 20;

        // Draw character with glow effect by shadow
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fillText(text, x, y);

        // Random speed and reset to top
        if (y > height && Math.random() > 0.975) drops[i] = 0;

        drops[i]++;
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
        backgroundColor: "#0a0a12",
      }}
    />
  );
};


export default PlexusBackground;
