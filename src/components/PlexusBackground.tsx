import React, { useRef, useEffect } from "react";

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight * 2; // allow scroll

    const dots: { x: number; y: number }[] = [];
    const spacing = 100;

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        dots.push({ x, y });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(0, 255, 200, 0.15)";
      ctx.lineWidth = 0.5;

      dots.forEach(dot => {
        // glowing dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,200,0.3)";
        ctx.fill();

        // connect nearby
        dots.forEach(other => {
          const dist = Math.hypot(dot.x - other.x, dot.y - other.y);
          if (dist > 0 && dist < spacing + 30) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });
    };

    draw();
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight * 2;
      draw();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

export default PlexusBackground;
