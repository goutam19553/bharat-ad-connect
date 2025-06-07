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
        .perspective { perspective: 800px; }
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
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );

  if (loading) return <Spinner3D />;

  const partners = [
    {
      name: "Urban Development Authority",
      type: "Government",
      description: "Working together on Smart City initiatives for better urban advertising infrastructure."
    },
    {
      name: "Leading Advertising Agencies",
      type: "Agency Partners",
      description: "Collaborating with top agencies to bring their clients premium outdoor advertising opportunities."
    },
    {
      name: "Print Shop Network",
      type: "Service Providers",
      description: "Nationwide network of verified print shops for high-quality, reliable ad production."
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our Mission & Vision
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Revolutionizing outdoor advertising in India through AI, AR, data, and immersive technology.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Startup-India-Logo1-02.png" 
                alt="Startup logo" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  To build India’s smartest and most accessible outdoor advertising platform that bridges the gap 
                  between advertisers and physical spaces using real-time data, immersive AR previews, and smart campaign tools.
                </p>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-300">
                  To become the digital backbone of India's OOH advertising ecosystem—empowering agencies, 
                  governments, and businesses to plan, preview, and launch campaigns seamlessly across the country.
                </p>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Values</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-teal mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Innovation in every solution we provide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-teal mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparency in all our dealings and transactions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-teal mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Excellence in customer service and support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-teal mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data-driven decision making for optimal results</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <img
                src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/IMG_20241203_093333~2.jpg"
                alt="Director"
                className="rounded-xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-white mb-16 text-center">
            Meet Our Director
          </h2>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-bharat-navy via-gray-900 to-bharat-teal p-1 rounded-2xl animate-glow border-4 border-bharat-teal shadow-lg transition-transform duration-500 hover:scale-105 group">
              <div className="bg-gray-900 p-8 rounded-2xl text-center max-w-3xl">
                <img
                  src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/IMG_20241203_093333~2.jpg"
                  alt="Goutam N P"
                  className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-bharat-teal shadow-md transition-all duration-500 group-hover:rotate-3"
                />
                <h3 className="text-3xl font-bold text-white mb-2">Goutam N P</h3>
                <p className="text-sm uppercase tracking-wider text-bharat-teal font-semibold mb-4">Director</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Former marketing executive with 5 years of experience in outdoor & tech advertising across major Indian markets.
                  A visionary leader driving digital transformation in traditional advertising.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .animate-glow {
            box-shadow: 0 0 20px #14b8a6, 0 0 40px #14b8a6aa;
            transition: box-shadow 0.4s ease-in-out;
          }
          .animate-glow:hover {
            box-shadow: 0 0 30px #14b8a6, 0 0 60px #14b8a6cc;
          }
        `}</style>
      </section>

      <section className="bg-gray-700 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Our Partners
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-bharat-teal mb-2">{partner.name}</h3>
                <p className="uppercase text-xs font-bold tracking-wider text-gray-400 mb-4">{partner.type}</p>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-bharat-navy/90 py-12 text-center">
        <h3 className="text-2xl font-heading font-bold text-white mb-4">
          Interested in partnering with us?
        </h3>
        <Link to="/contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
