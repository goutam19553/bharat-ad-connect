import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AIAnalytics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Push homepage into history before redirect
    window.history.pushState(null, '', '/');
    
    const timer = setTimeout(() => {
      window.location.replace('https://neww-coral.vercel.app/');
    }, 2000);

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

      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4ade80',
          color: '#0f0f0f',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}
      >
        Back to Home
      </button>

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
