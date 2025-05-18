import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#000000"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#00fff7"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    detectRetina: true
  };

  const teamMembers = [
    {
      name: "Goutam N P",
      position: "DIRECTOR",
      bio: "Former marketing executive with 5 years experience in outdoor & tech advertising across major Indian markets.",
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/IMG_20241203_093333%7E2.jpg"
    },
    {
      name: "Zeeshan M",
      position: "DIRECTOR",
      bio: "Ads Specialist with previous experience leading tech teams at major Indian startups.",
      image:"https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/WhatsApp%20Image%202025-04-21%20at%2014.18.03.jpeg"
    },
    {
      name: "Priya Patel ",
      position: "Head of Partnerships",
      bio: "Former government liaison with extensive experience in public-private partnerships across India.",
      image: "https://source.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Anjali Singh",
      position: "Chief Marketing Officer",
      bio: "Digital marketing expert specialized in building marketplaces and two-sided platforms.",
      image: "https://source.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    }
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
    <div className="relative overflow-hidden">
      <Particles className="absolute top-0 left-0 w-full h-full -z-10" init={particlesInit} options={particlesOptions} />

      <div className="bg-gray-900 text-white dark:bg-white dark:text-black">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white dark:text-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-heading font-bold mb-4">
                  Our Mission & Vision
                </h1>
                <p className="text-xl text-gray-300 dark:text-gray-700 mb-8">
                  Revolutionizing outdoor advertising in India through technology, data, and innovation
                </p>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Gov.png" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About The Ad-Project Section */}
        <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black dark:from-gray-100 dark:via-white dark:to-gray-200 py-20">
          <div className="container-custom max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-white dark:text-black mb-8">
              About The Ad-Project
            </h2>
            <div className="space-y-6 text-lg text-gray-300 dark:text-gray-800 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-bharat-teal dark:text-bharat-navy mb-2">
                  What is The Ad-Project?
                </h3>
                <p>
                  The Ad-Project is India’s first real-world AdTech platform built to transform the way outdoor advertising works...
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-bharat-teal dark:text-bharat-navy mb-2">
                  Why We Created It
                </h3>
                <p>
                  Outdoor advertising in India has long been fragmented and outdated. Booking a billboard often involves...
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-bharat-teal dark:text-bharat-navy mb-2">
                  Who We Serve
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Advertisers & Brands:</strong> Easily discover, compare, and book verified ad spaces...</li>
                  <li><strong>Property Owners:</strong> List your space, set your terms, and start earning...</li>
                  <li><strong>Agencies & Media Planners:</strong> Streamline campaign workflows...</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-800 dark:bg-gray-100 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold text-white dark:text-black mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-700 dark:bg-gray-300 p-6 rounded-lg text-center">
                  <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold text-white dark:text-black mb-2">{member.name}</h3>
                  <p className="text-gray-300 dark:text-gray-700 mb-2">{member.position}</p>
                  <p className="text-gray-400 dark:text-gray-800">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-gray-800 dark:bg-gray-100 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold text-white dark:text-black mb-12">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-700 dark:bg-gray-300 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-heading font-semibold text-white dark:text-black mb-2">{partner.name}</h3>
                  <p className="text-gray-300 dark:text-gray-700 mb-2">{partner.type}</p>
                  <p className="text-gray-400 dark:text-gray-800">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
