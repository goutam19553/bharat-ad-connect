import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
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

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="relative bg-gray-900 text-white dark:bg-white dark:text-black">
      {/* 3D Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent"
            }
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#00FFFF" },
            links: {
              color: "#00FFFF",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" }
            },
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800
              }
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } }
          },
          detectRetina: true
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* -- All Your About Page Content Remains UNCHANGED Below This -- */}
        {/* About Header */}
        <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white dark:text-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
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
