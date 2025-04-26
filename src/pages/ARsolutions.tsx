import React from 'react';
import './styles.css'; // Import your CSS file

const ARSolutions = () => {
  return (
    <div>
      <header>
        <h1>Augmented Reality (AR) Advertising Solutions</h1>
        <p>Transform your outdoor advertising with cutting-edge AR experiences. Engage your audience like never before!</p>
      </header>

      <section className="examples">
        <h2>AR Advertising Examples</h2>
        <img src="your-ar-example-image1.jpg" alt="AR Billboard Example" />
        <video src="your-ar-example-video1.mp4" controls></video>
      </section>

      <section>
        <h2>Our AR Services</h2>
        <div className="services">
          <div className="service-card">
            <h3>AR-Enhanced Billboards</h3>
            <p>Bring static billboards to life with interactive 3D elements and animations.</p>
          </div>
          <div className="service-card">
            <h3>Interactive Wall Murals</h3>
            <p>Transform public walls into immersive brand experiences using AR.</p>
          </div>
          <div className="service-card">
            <h3>WebAR Solutions</h3>
            <p>No app needed! Let users experience AR directly from their mobile browsers.</p>
          </div>
          <div className="service-card">
            <h3>Social AR Filters</h3>
            <p>Create custom Instagram and Snapchat filters for broader engagement.</p>
          </div>
          <div className="service-card">
            <h3>AR Campaign Management</h3>
            <p>From design to deployment, we handle the complete AR journey for your brand.</p>
          </div>
        </div>
      </section>

      <section className="steps">
        <h2>How It Works</h2>
        <ol>
          <li>Choose your advertising space.</li>
          <li>We design the perfect AR experience for your campaign.</li>
          <li>Launch the AR campaign with promotions and QR codes.</li>
          <li>Analyze customer engagement with detailed analytics.</li>
        </ol>
      </section>

      <section className="cta">
        <h2>Ready to Elevate Your Advertising?</h2>
        <p>Let's build unforgettable AR experiences together.</p>
        <button onClick={() => window.location.href = 'contact.html'}>Contact Us</button>
      </section>
    </div>
  );
};

export default ARSolutions;
