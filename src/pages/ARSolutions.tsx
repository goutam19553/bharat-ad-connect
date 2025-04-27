import React from 'react';
import { Link } from "react-router-dom";

const ARSolutions = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-bharat-green mb-4">
          Augmented Reality (AR) Advertising Solutions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Transform your outdoor advertising with cutting-edge AR experiences. Engage your audience like never before!
        </p>
      </header>

      {/* AR Advertising Examples */}
      <section className="examples mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">AR Advertising Examples</h2>
        <div className="flex flex-col items-center gap-6">
          <img 
            src="your-ar-example-image1.jpg" 
            alt="AR Billboard Example" 
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
          <video 
            src="your-ar-example-video1.mp4" 
            controls 
            className="w-full max-w-3xl rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* AR Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Our AR Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AR-Enhanced Billboards",
              description: "Bring static billboards to life with interactive 3D elements and animations.",
            },
            {
              title: "Interactive Wall Murals",
              description: "Transform public walls into immersive brand experiences using AR.",
            },
            {
              title: "WebAR Solutions",
              description: "No app needed! Let users experience AR directly from their mobile browsers.",
            },
            {
              title: "Social AR Filters",
              description: "Create custom Instagram and Snapchat filters for broader engagement.",
            },
            {
              title: "AR Campaign Management",
              description: "From design to deployment, we handle the complete AR journey for your brand.",
            },
          ].map((service) => (
            <div key={service.title} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-bharat-saffron">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="steps mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3 max-w-2xl mx-auto">
          <li>Choose your advertising space.</li>
          <li>We design the perfect AR experience for your campaign.</li>
          <li>Launch the AR campaign with promotions and QR codes.</li>
          <li>Analyze customer engagement with detailed analytics.</li>
        </ol>
      </section>

      {/* Call To Action */}
      <section className="cta text-center">
        <h2 className="text-3xl font-bold mb-4 text-bharat-green">
          Ready to Elevate Your Advertising?
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Let's build unforgettable AR experiences together.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-bharat-saffron hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ARSolutions;
