import { useEffect } from 'react';

const AIAnalytics = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://neww-coral.vercel.app/';
    }, 2000); // 2 seconds for smooth transition

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
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="spinner-3d" />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>Redirecting to AI Analytics...</p>

      <style>
        {`
        .spinner-3d {
          width: 60px;
          height: 60px;
          border: 6px solid transparent;
          border-top: 6px solid #4ade80;
          border-bottom: 6px solid #4ade80;
          border-radius: 50%;
          animation: spin3D 1s linear infinite;
        }

        @keyframes spin3D {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        `}
      </style>
    </div>
  );
};

export default AIAnalytics;
