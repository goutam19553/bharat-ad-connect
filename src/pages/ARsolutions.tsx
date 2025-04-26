import React from 'react';
import { useNavigate } from 'react-router-dom'; // for better navigation (optional)

const ARSolutions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, margin: 0, padding: 0 }}>
      <header style={{ padding: '40px' }}>
        <h1 style={{ color: '#333' }}>Augmented Reality (AR) Advertising Solutions</h1>
        <p>Transform your outdoor advertising with cutting-edge AR experiences. Engage your audience like never before!</p>
      </header>

      <section className="examples" style={{ padding: '40px' }}>
        <h2 style={{ color: '#333' }}>AR Advertising Examples</h2>
        <img 
          src="/your-ar-example-image1.jpg" 
          alt="AR Billboard Example" 
          style={{ width: '100%', marginBottom: '20px', borderRadius: '10px' }} 
        />
        <video 
          src="/your-ar-example-video1.mp4" 
          controls 
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </section>

      <section style={{ padding: '40px' }}>
        <h2 style={{ color: '#333' }}>Our AR Services</h2>
        <div 
          className="services" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}
        >
          {[
            { title: 'AR-Enhanced Billboards', description: 'Bring static billboards to life with interactive 3D elements and animations.' },
            { title: 'Interactive Wall Murals', description: 'Transform public walls into immersive brand experiences using AR.' },
            { title: 'WebAR Solutions', description: 'No app needed! Let users experience AR directly from their mobile browsers.' },
            { title: 'Social AR Filters', description: 'Create custom Instagram and Snapchat filters for broader engagement.' },
            { title: 'AR Campaign Management', description: 'From design to deployment, we handle the complete AR journey for your brand.' },
          ].map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              style={{ background: '#f5f5f5', padding: '20px', borderRadius: '10px' }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="steps" style={{ padding: '40px' }}>
        <h2 style={{ color: '#333' }}>How It Works</h2>
        <ol style={{ marginTop: '30px' }}>
          <li>Choose your advertising space.</li>
          <li>We design the perfect AR experience for your campaign.</li>
          <li>Launch the AR campaign with promotions and QR codes.</li>
          <li>Analyze customer engagement with detailed analytics.</li>
        </ol>
      </section>

      <section className="cta" style={{ textAlign: 'center', marginTop: '50px', padding: '40px' }}>
        <h2 style={{ color: '#333' }}>Ready to Elevate Your Advertising?</h2>
        <p>Let's build unforgettable AR experiences together.</p>
        <button 
          onClick={() => navigate('/contact')} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '18px', 
            backgroundColor: '#0077ff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ARSolutions;
