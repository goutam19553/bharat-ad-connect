import React from 'react';
import { Link } from "react-router-dom";

const ARSolutions = () => {
  const services = [
    {
      title: "AR-Enhanced Billboards",
      description: "Bring static billboards to life with interactive 3D elements and animations.",
      image: "/images/ar-billboard.jpg",
    },
    {
      title: "Interactive Wall Murals",
      description: "Transform public walls into immersive brand experiences using AR.",
      image: "/images/ar-wall-mural.jpg",
    },
    {
      title: "WebAR Solutions",
      description: "No app needed! Let users experience AR directly from their mobile browsers.",
      image: "/images/webar-demo.jpg",
    },
    {
      title: "Social AR Filters",
      description: "Create custom Instagram and Snapchat filters for broader engagement.",
      image: "/images/ar-social-filter.jpg",
    },
    {
      title: "AR Campaign Management",
      description: "From design to deployment, we handle the complete AR journey for your brand.",
      image: "/images/ar-campaign-management.jpg",
    },
  ];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-bharat-green mb-6">
          Augmented Reality (AR) Advertising Solutions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Transform your outdoor advertising with cutting-edge AR experiences. Engage your audience like never before!
        </p>
      </header>

      {/* AR Advertising Examples */}
      <section className="examples mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">AR Advertising Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="/images/example-ar1.jpg" 
            alt="AR Billboard Example" 
            className="rounded-xl shadow-md hover:shadow-2xl transition-transform hover:scale-105"
          />
          <video 
            src="/videos/example-ar1.mp4" 
            controls 
            className="rounded-xl shadow-md hover:shadow-2xl transition-transform hover:scale-105"
          >
            Your browser does not support the video tag.
          </video>
          <img 
            src="/images/example-ar2.jpg" 
            alt="Interactive Wall Mural" 
            className="rounded-xl shadow-md hover:shadow-2xl transition-transform hover:scale-105"
          />
          <video 
            src="/videos/example-ar2.mp4" 
            controls 
            className="rounded-xl shadow-md hover:shadow-2xl transition-transform hover:scale-105"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Our AR Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our AR Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-2xl transition">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-bharat-saffron mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="steps mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4 max-w-2xl mx-auto">
          <li>Choose your advertising space.</li>
          <li>We design the perfect AR experience for your campaign.</li>
          <li>Launch the AR campaign with promotions and QR codes.</li>
          <li>Analyze customer engagement with detailed analytics.</li>
        </ol>
      </section>

      {/* Call To Action */}
      <section className="cta text-center">
        <h2 className="text-4xl font-bold mb-4 text-bharat-green">
          Ready to Elevate Your Advertising?
        </h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Let's build unforgettable AR experiences together.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-bharat-saffron hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ARSolutions;
