import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const Spinner3D = () => (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 z-50">
      <div className="w-20 h-20 perspective">
        <div className="cube">
          <div className="face front bg-bharat-teal" />
          <div className="face back bg-bharat-navy" />
          <div className="face right bg-bharat-teal/80" />
          <div className="face left bg-bharat-teal/80" />
          <div className="face top bg-bharat-teal/60" />
          <div className="face bottom bg-bharat-teal/60" />
        </div>
      </div>
      <style>{`
        .perspective {
          perspective: 800px;
        }
        .cube {
          width: 80px;
          height: 80px;
          position: relative;
          transform-style: preserve-3d;
          animation: spinCube 1.8s linear infinite;
        }
        .face {
          position: absolute;
          width: 80px;
          height: 80px;
          opacity: 0.9;
          border: 2px solid #14b8a6;
        }
        .front  { transform: translateZ(40px); }
        .back   { transform: rotateY(180deg) translateZ(40px); }
        .right  { transform: rotateY(90deg) translateZ(40px); }
        .left   { transform: rotateY(-90deg) translateZ(40px); }
        .top    { transform: rotateX(90deg) translateZ(40px); }
        .bottom { transform: rotateX(-90deg) translateZ(40px); }

        @keyframes spinCube {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );

  if (loading) return <Spinner3D />;

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About The Ad Project
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We're on a mission to revolutionize outdoor advertising in India through technology, transparency, and sustainable practices.
          </p>
        </div>
      </div>

      {/* Info Boxes */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-gray-900 border border-bharat-teal p-8 rounded-xl shadow-lg hover:shadow-bharat-teal/30 transition duration-300">
            <h3 className="text-2xl font-bold text-bharat-teal mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To create India's most comprehensive and transparent outdoor advertising platform that empowers businesses to reach their audiences effectively while supporting government initiatives for smart city development and revenue optimization.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900 border border-bharat-teal p-8 rounded-xl shadow-lg hover:shadow-bharat-teal/30 transition duration-300">
            <h3 className="text-2xl font-bold text-bharat-teal mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To become the backbone of India's outdoor advertising ecosystem, enabling eco-friendly advertising at scale while fostering collaboration between private enterprises and government bodies for sustainable urban development.
            </p>
          </div>

          {/* Eco-Friendly */}
          <div className="bg-gray-900 border border-bharat-teal p-8 rounded-xl shadow-lg hover:shadow-bharat-teal/30 transition duration-300">
            <h3 className="text-2xl font-bold text-bharat-teal mb-4">Eco-Friendly</h3>
            <p className="text-gray-300">
              Promoting sustainable advertising practices that reduce environmental impact while maximizing reach.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-gray-900 border border-bharat-teal p-8 rounded-xl shadow-lg hover:shadow-bharat-teal/30 transition duration-300">
            <h3 className="text-2xl font-bold text-bharat-teal mb-4">Innovation</h3>
            <p className="text-gray-300">
              Leveraging cutting-edge AI, AR, and geospatial technologies to revolutionize outdoor advertising.
            </p>
          </div>

          {/* Transparency */}
          <div className="bg-gray-900 border border-bharat-teal p-8 rounded-xl shadow-lg hover:shadow-bharat-teal/30 transition duration-300">
            <h3 className="text-2xl font-bold text-bharat-teal mb-4">Transparency</h3>
            <p className="text-gray-300">
              Building trust through transparent processes for both advertisers and government partners.
            </p>
          </div>

          {/* Scale */}
          <div className="bg-gray-900 border border-bharat-teal p-8 rounded-xl shadow-lg hover:shadow-bharat-teal/30 transition duration-300">
            <h3 className="text-2xl font-bold text-bharat-teal mb-4">Scale</h3>
            <p className="text-gray-300">
              Creating solutions that work across India's diverse urban and rural landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="bg-bharat-navy/90 py-12 text-center">
        <h3 className="text-2xl font-heading font-bold text-white mb-4">
          Want to work with us or have a question?
        </h3>
        <Link to="/contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
