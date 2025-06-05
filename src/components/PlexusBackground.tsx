import React, { useEffect, useRef } from "react";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes = [
      { x: width * 0.2, y: height * 0.3 },
      { x: width * 0.5, y: height * 0.2 },
      { x: width * 0.8, y: height * 0.3 },
      { x: width * 0.3, y: height * 0.6 },
      { x: width * 0.6, y: height * 0.7 },
      { x: width * 0.85, y: height * 0.65 },
    ];

    // Each connection: from node idx to node idx
    const connections = [
      [0, 1],
      [1, 2],
      [0, 3],
      [1, 4],
      [2, 5],
      [3, 4],
      [4, 5],
    ];

    let time = 0;

    function draw() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0a0a12";
      ctx.fillRect(0, 0, width, height);

      // Draw glowing nodes
      nodes.forEach(({ x, y }) => {
        const glowRadius = 14;
        const gradient = ctx.createRadialGradient(x, y, 2, x, y, glowRadius);
        gradient.addColorStop(0, "rgba(0, 255, 230, 0.9)");
        gradient.addColorStop(1, "rgba(0, 255, 230, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#00ffe6";
        ctx.shadowColor = "#00ffe6";
        ctx.shadowBlur = 8;
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // Draw animated glowing connections
      connections.forEach(([startIdx, endIdx]) => {
        const start = nodes[startIdx];
        const end = nodes[endIdx];

        // Animate "current flow" by changing alpha along line with sine wave
        const progress = (Math.sin(time + startIdx * 1.5) + 1) / 2;

        const grad = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        grad.addColorStop(0, `rgba(0, 255, 230, 0.2)`);
        grad.addColorStop(progress, `rgba(0, 255, 230, 1)`);
        grad.addColorStop(1, `rgba(0, 255, 230, 0.2)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(0, 255, 230, 0.7)";
        ctx.shadowBlur = 8;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.shadowBlur = 0;
      });

      time += 0.02;
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default PlexusBackground;
