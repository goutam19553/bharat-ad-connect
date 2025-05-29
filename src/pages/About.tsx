import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with real data fetch if needed)
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // 3D rotating cube spinner — looks cool and modern
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

      {/* Tailwind doesn't support 3D cube by default, so add styles below */}
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
          border: 2px solid #14b8a6; /* bharat-teal */
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
    {
      name: "Zeeshan M",
      position: "Co-founder",
      bio: "Ads Specialist with previous experience leading tech teams at major Indian startups.",
      image:""
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
    <div className="bg-gray-900 text-white">
      {/* About Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our Mission & Vision
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Revolutionizing outdoor advertising in India through technology, data, and innovation
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Startup-India-Logo1-02.png" 
                alt="Team collaboration" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  The Ad-Project was founded in 2024 with a simple mission: to transform the fragmented outdoor 
                  advertising industry in India through digital innovation and technology.
                </p>
                <p>
                  Our founders spent 15 years in traditional outdoor advertising and saw firsthand 
                  the inefficiencies and missed opportunities in the market. Advertisers struggled to find and 
                  evaluate ad spaces, while property owners had no reliable way to monetize their valuable spaces.
                </p>
                <p>
                  By bringing together a team of experts in technology, marketing, and government relations, 
                  The Ad-Project was born as a comprehensive solution connecting advertisers with premium ad spaces 
                  across India.
                </p>
                <p>
                  Today, we're proud to offer innovative tools like AR preview technology and AI-powered design 
                  recommendations that are transforming the industry, while creating value for both advertisers 
                  and ad space owners.
                </p>
              </div>
              
              <div className="mt-6">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  To create India's most efficient and innovative outdoor advertising marketplace, connecting 
                  advertisers with prime spaces through cutting-edge technology and data-driven insights.
                </p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-300">
                  To be the definitive platform for outdoor advertising in India, transforming how businesses 
                  connect with their audiences in the physical world through smart, data-driven solutions.
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
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-gray-800 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-white mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm uppercase tracking-wide text-bharat-teal font-bold mb-2">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
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
