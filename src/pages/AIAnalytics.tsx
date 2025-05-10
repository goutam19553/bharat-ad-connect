import { useEffect } from 'react';

const AIAnalytics = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace('https://neww-coral.vercel.app/');
    }, 2500); // 2.5 seconds for better visual experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0f0f0f',
      flexDirection: 'column',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div className="orbit-loader">
        <div className="center-dot"></div>
        <div className="orbit"></div>
      </div>
      <p style={{ marginTop: '30px', fontSize: '18px' }}>Redirecting to AI Analytics...</p>

      <style>
        {`
        .orbit-loader {
          position: relative;
          width: 80px;
          height: 80px;
        }

        .center-dot {
          position: absolute;
          width: 16px;
          height: 16px;
          background-color: #4ade80;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .orbit {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px dashed rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: orbitRotate 1.8s linear infinite;
        }

        .orbit::before {
          content: '';
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: #60a5fa;
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        @keyframes orbitRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
};

export default AIAnalytics;
