import { useEffect } from "react";

const ARSolutions = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://neww-coral.vercel.app/ar-working-demo";
    }, 3000); // wait for 3 seconds before redirect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="scene">
        <div className="cube">
          <div className="face front">AR</div>
          <div className="face back">🔍</div>
          <div className="face right">🚀</div>
          <div className="face left">👁️</div>
          <div className="face top">3D</div>
          <div className="face bottom">🌐</div>
        </div>
      </div>
      <style>{`
        .scene {
          width: 100px;
          height: 100px;
          perspective: 600px;
        }
        .cube {
          width: 100px;
          height: 100px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateY(20deg);
          animation: spin 3s infinite linear;
        }
        .face {
          position: absolute;
          width: 100px;
          height: 100px;
          background: #ff8c00;
          border: 2px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
        }
        .front  { transform: translateZ(50px); }
        .back   { transform: rotateY(180deg) translateZ(50px); }
        .right  { transform: rotateY(90deg) translateZ(50px); }
        .left   { transform: rotateY(-90deg) translateZ(50px); }
        .top    { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }

        @keyframes spin {
          0%   { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ARSolutions;
