import React from "react";

const nodes = [
  { name: "Government Bodies", icon: "🏛️", x: "15%", y: "10%" },
  { name: "Ad Agencies", icon: "📢", x: "85%", y: "20%" },
  { name: "Printing Press Network", icon: "🖨️", x: "10%", y: "40%" },
  { name: "AI Analytics Dashboard", icon: "📊", x: "45%", y: "5%" },
  { name: "Media Companies", icon: "🗞️", x: "90%", y: "60%" },
  { name: "Research Orgs", icon: "🧪", x: "15%", y: "80%" },
  { name: "CMS Platform", icon: "🖥️", x: "85%", y: "85%" },
];

export default function NeonNetwork() {
  const center = { x: "50%", y: "50%" };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden font-sans">
      {/* Center Circle */}
      <div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 
        flex items-center justify-center text-3xl font-bold shadow-[0_0_60px_#00ffc3] border-4 border-cyan-400 z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        bb
      </div>

      {/* Branch Nodes */}
      {nodes.map((node, index) => (
        <div
          key={index}
          className="absolute text-xs md:text-sm text-white bg-gray-800/90 px-3 py-2 rounded-md shadow-md 
          border border-cyan-400 backdrop-blur-md transition-all duration-300 hover:scale-105 z-10"
          style={{
            top: node.y,
            left: node.x,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-green-300 mr-1">{node.icon}</span>
          {node.name}
        </div>
      ))}

      {/* SVG Lines */}
      <svg
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00ffc3" />
            <stop offset="100%" stopColor="#00ff88" />
          </linearGradient>
        </defs>
        {nodes.map((node, index) => {
          const fromX = 50;
          const fromY = 50;
          const toX = parseFloat(node.x);
          const toY = parseFloat(node.y);

          return (
            <line
              key={index}
              x1={`${fromX}`}
              y1={`${fromY}`}
              x2={`${toX}`}
              y2={`${toY}`}
              stroke="url(#glow)"
              strokeWidth="0.5"
              className="animate-pulse"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
    </div>
  );
}
