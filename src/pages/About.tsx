// Keep imports the same
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
          width: 80px; height: 80px;
          position: relative;
          transform-style: preserve-3d;
          animation: spinCube 1.8s linear infinite;
        }
        .face {
          position: absolute;
          width: 80px; height: 80px;
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

  const teamMembers = [
    {
      name: "Goutam N P",
      position: "DIRECTOR",
      bio: "Former marketing executive with 5 years experience in outdoor & tech advertising across major Indian markets.",
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/IMG_20241203_093333%7E2.jpg"
    },
  ];

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
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Mission & Vision</h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionizing outdoor advertising in India through technology, data, and innovation
            </p>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Startup-India-Logo1-02.png" 
              alt="Mission Visual" 
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <section className="bg-gray-800 py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg border-l-4 border-bharat-teal">
            <h3 className="text-2xl font-heading font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              To create India’s most efficient and innovative outdoor advertising marketplace, connecting advertisers with prime spaces using cutting-edge tech and AI.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg border-l-4 border-bharat-teal">
            <h3 className="text-2xl font-heading font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-300">
              To be the definitive outdoor advertising platform in India — transforming how businesses connect with audiences through smart, data-driven solutions.
            </p>
          </div>
        </div>
      </section>

     {/* Our Core Values - Animated Branch Tree */}
<section className="bg-gray-900 py-28 relative overflow-hidden">
  <div className="container-custom relative z-10">
    <h2 className="text-5xl font-heading font-bold text-white mb-20 text-center animate-fade-in">
      Our Core Values
    </h2>

    {/* Central Core - Why We’re Unique */}
    <div className="relative w-full flex justify-center">
      <div className="relative">
        <div className="rounded-full w-32 h-32 bg-bharat-teal flex items-center justify-center text-center text-white font-bold text-lg shadow-lg glow-core">
          Why We’re<br />Unique
        </div>

        {/* Connector lines */}
        <div className="absolute top-1/2 left-1/2 w-[2px] h-60 bg-bharat-teal -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-[2px] bg-bharat-teal -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[2px] h-60 bg-bharat-teal rotate-45 origin-top"></div>
        <div className="absolute top-1/2 left-1/2 w-[2px] h-60 bg-bharat-teal -rotate-45 origin-top"></div>
      </div>
    </div>

    {/* Branch Nodes */}
    <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-4 animate-slide-up">
      {[
        {
          title: "Innovation First",
          description:
            "We blend AR, AI, geospatial tools, and real-world data to give advertisers cutting-edge campaign control no other OOH platform in India currently offers."
        },
        {
          title: "Radical Transparency",
          description:
            "From pricing and visibility reports to government-compliant tax tracking, we ensure complete clarity for advertisers and authorities alike."
        },
        {
          title: "Eco-Driven Campaigns",
          description:
            "We promote biodegradable, fabric-based ad materials and tree-safe installations to align with green India goals."
        },
        {
          title: "Hyperlocal to PAN-India",
          description:
            "Plan and launch your outdoor ads in multiple cities remotely — whether it’s a rural wall painting or a top mall LED, we’ve mapped it."
        },
        {
          title: "Tech-Powered Storytelling",
          description:
            "QR-powered AR experiences turn passive viewers into engaged consumers by unlocking digital content behind every printed ad."
        },
        {
          title: "AI Ad Planner",
          description:
            "Our intelligent system helps advertisers predict best locations using foot traffic heatmaps, past performance, and demographic fit."
        },
      ].map((value, index) => (
        <div
          key={index}
          className="relative bg-gradient-to-tr from-bharat-navy/70 to-gray-800 p-6 rounded-xl border border-bharat-teal shadow-xl hover:shadow-bharat-teal/50 transition-all duration-300 group"
        >
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bharat-teal">{value.title}</h3>
          <p className="text-gray-300 text-sm">{value.description}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Glow Background Effect */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-bharat-teal/20 rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-bharat-teal/20 rounded-full blur-2xl animate-pulse-slow"></div>

  {/* Animations */}
  <style>{`
    .glow-core {
      animation: glowPulse 2s infinite ease-in-out;
      box-shadow: 0 0 20px #14b8a6, 0 0 60px #14b8a6aa;
    }

    @keyframes glowPulse {
      0%, 100% {
        box-shadow: 0 0 20px #14b8a6, 0 0 60px #14b8a6aa;
      }
      50% {
        box-shadow: 0 0 40px #14b8a6, 0 0 80px #14b8a6cc;
      }
    }

    .animate-fade-in {
      opacity: 0;
      animation: fadeIn 1.2s ease forwards;
    }

    .animate-slide-up {
      opacity: 0;
      animation: slideUp 1.4s ease-out forwards;
    }

    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .animate-pulse-slow {
      animation: pulseSlow 6s infinite alternate;
    }

    @keyframes pulseSlow {
      0% { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(1.1); opacity: 1; }
    }
  `}</style>
</section>

      {/* Team */}
      <section className="bg-gray-800 py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-16">Meet Our Director</h2>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-bharat-navy via-gray-900 to-bharat-teal p-1 rounded-2xl animate-glow border-4 border-bharat-teal shadow-lg hover:scale-105 transition-transform duration-500">
              <div className="bg-gray-900 p-8 rounded-2xl max-w-3xl">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-bharat-teal shadow-md"
                />
                <h3 className="text-3xl font-bold text-white mb-2">{teamMembers[0].name}</h3>
                <p className="text-sm uppercase tracking-wider text-bharat-teal font-semibold mb-4">
                  {teamMembers[0].position}
                </p>
                <p className="text-gray-300 text-lg">{teamMembers[0].bio}</p>
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

      {/* Partners */}
      <section className="bg-gray-700 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Our Partners
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-bharat-teal mb-2">{partner.name}</h3>
                <p className="uppercase text-xs font-bold tracking-wider text-gray-400 mb-4">
                  {partner.type}
                </p>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
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
