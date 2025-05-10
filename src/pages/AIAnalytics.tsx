import { useEffect } from 'react';

const AIAnalytics = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace('https://neww-coral.vercel.app/');
    }, 3000); // 3s to let animation shine
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0f0f0f',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="cube-loader">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      <p style={{ marginTop: '30px', fontSize: '18px' }}>Redirecting to AI Analytics...</p>

      <style>{`
        .cube-loader {
          perspective: 800px;
        }

        .cube {
          position: relative;
          width: 80px;
          height: 80px;
          transform-style: preserve-3d;
          animation: spinCube 3s infinite ease-in-out;
        }

        .face {
          position: absolute;
          width: 80px;
          height: 80px;
          background: linear-gradient(145deg, #4ade80, #22d3ee);
          border: 2px solid rgba(255, 255, 255, 0.1);
          opacity: 0.9;
          box-shadow: 0 0 12px #22d3ee;
        }

        .front  { transform: translateZ(40px); }
        .back   { transform: rotateY(180deg) translateZ(40px); }
        .left   { transform: rotateY(-90deg) translateZ(40px); }
        .right  { transform: rotateY(90deg) translateZ(40px); }
        .top    { transform: rotateX(90deg) translateZ(40px); }
        .bottom { transform: rotateX(-90deg) translateZ(40px); }

        @keyframes spinCube {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          50%  { transform: rotateX(180deg) rotateY(180deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AIAnalytics;
