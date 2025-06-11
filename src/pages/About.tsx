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

  const partners = [
    {
      name: "Urban Development Authority",
      type: "Government",
      description: "Collaborating on smart urban infrastructure and digital transformation of traditional ad spaces."
    },
    {
      name: "Municipal Corporations & City Councils",
      type: "Government Bodies",
      description: "Partnering with local authorities to regulate, digitize, and monetize public advertising spaces."
    },
    {
      name: "Leading Advertising Agencies",
      type: "Agency Partners",
      description: "Teaming up with top ad agencies to deliver high-impact campaigns across cities and rural regions."
    },
    {
      name: "Creative & Design Studios",
      type: "Creative Partners",
      description: "Empowering studios with tools to visualize and preview their creatives in real outdoor environments."
    },
    {
      name: "Print Shop Network",
      type: "Production Partners",
      description: "Nationwide network of verified print and fabrication units ensuring eco-friendly, high-quality ad production."
    },
    {
      name: "Media & Entertainment Companies",
      type: "Media Collaborators",
      description: "Enabling media companies to extend their promotional reach through immersive AR outdoor campaigns."
    },
    {
      name: "Retail Chains & Malls",
      type: "Private Sector",
      description: "Helping malls and retail chains monetize their spaces with premium ad placements and smart analytics."
    },
    {
      name: "Event & Sports Management Companies",
      type: "Industry Partners",
      description: "Enhancing branding visibility for large-scale events through strategic ad placements and sponsorship activations."
    },
    {
      name: "Transport Authorities",
      type: "Transit Partners",
      description: "Integrating transit spaces like buses, metros, airports, and railways into dynamic ad ecosystems."
    },
    {
      name: "Technology Startups",
      type: "Innovation Partners",
      description: "Collaborating with AI, AR, and IoT startups to co-develop futuristic features for smart ad deployments."
    },
    {
      name: "Educational & Research Institutions",
      type: "Knowledge Partners",
      description: "Engaging in research, innovation, and pilot projects to advance smart outdoor advertising technologies."
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

{/* Our Values - Detailed paragraph style */}
<section className="bg-gray-900 py-20">
<div className="container-custom max-w-4xl mx-auto">
<h2 className="text-4xl font-heading font-bold text-white mb-16 text-center animate-fade-in">
Our Core Values
</h2>

{[
{
title: "Innovation in every solution we provide",
content:
`At the heart of our company lies a relentless drive to innovate. We constantly explore emerging technologies such as Artificial Intelligence, Augmented Reality, and geospatial analytics to revolutionize outdoor advertising.
Our platform offers advertisers cutting-edge tools to create smarter, more engaging campaigns that deliver measurable impact and a competitive edge in a dynamic marketplace.`,
},
{
title: "Transparency in all our dealings and transactions",
content:
`We believe that trust and openness are fundamental to building lasting relationships with our clients and partners.
Our platform ensures clear pricing models, real-time insights into campaign performance, and full compliance with government regulations.
By maintaining complete transparency, we empower advertisers to make confident decisions and foster trust across the entire advertising ecosystem.`,
},
{
title: "Excellence in customer service and support",
content:
`Providing exceptional customer service is one of our top priorities. From onboarding to campaign execution and beyond,
our dedicated team offers personalized, responsive assistance tailored to each client's unique needs.
We are committed to ensuring a seamless experience, addressing challenges promptly, and delivering proactive support to help our customers succeed.`,
},
{
title: "Data-driven decision making for optimal results",
content:
`Our commitment to leveraging data is unwavering. Through advanced data analytics and machine learning,
we equip advertisers with actionable insights that optimize ad placements, budget allocations, and campaign strategies.
This ensures that every advertising investment is maximized to reach the right audience at the right time, driving superior business outcomes.`,
},
].map(({ title, content }, idx) => (
<div
key={idx}
className="bg-gradient-to-tr from-bharat-navy/70 to-gray-800 p-8 rounded-xl border border-bharat-teal shadow-xl mb-12 animate-slide-up hover:shadow-bharat-teal/50 transition-transform duration-300 hover:scale-105"
>
<h3 className="text-bharat-teal font-heading font-semibold text-2xl mb-4">{title}</h3>
<p className="text-gray-300 leading-relaxed whitespace-pre-line">{content}</p>
</div>
))}
</div>

{/* Glow & animation */}
<style>{`
.animate-fade-in {
animation: fadeIn 1s ease-out forwards;
opacity: 0;
}
.animate-slide-up {
animation: slideUp 1s ease-out forwards;
opacity: 0;
}
@keyframes fadeIn {
from { opacity: 0; transform: translateY(10px); }
to { opacity: 1; transform: translateY(0); }
}
@keyframes slideUp {
from { opacity: 0; transform: translateY(30px); }
to { opacity: 1; transform: translateY(0); }
}
`}</style>
</section>


{/* Collaborative Team Section (New) */}
<section className="bg-gray-800 py-20">
<div className="container-custom text-center max-w-3xl mx-auto">
<h2 className="text-4xl font-heading font-bold text-white mb-6">
We believe in collaboration over hierarchy.
</h2>
<p className="text-gray-300 text-lg leading-relaxed mb-8">
We're a small but dedicated team of creators, tech enthusiasts, and change-makers working together to redefine the outdoor advertising ecosystem.
</p>
<div className="bg-gradient-to-br from-bharat-teal to-bharat-navy p-6 rounded-2xl shadow-lg animate-glow hover:scale-105 transition-transform duration-500">
<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">JOIN THE TEAM</h3>
<p className="text-lg text-white mb-6">
This is just the beginning. If you're passionate about AI, AR, any tech related to this startup or building something futuristic for India — we're hiring and always open to new minds.
</p>
<Link to="/contact" className="btn-primary font-bold text-white">
Let’s co-build the future. [Join Us →]
</Link>
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

      {/* Partners Slider */}
      <section className="bg-gray-800 py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">Our Partners</h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 animate-scroll-x">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] bg-gradient-to-tr from-gray-700 to-gray-800 p-6 rounded-xl border border-bharat-teal shadow-xl flex-shrink-0"
                >
                  <h3 className="text-2xl font-semibold text-bharat-teal mb-2">{partner.name}</h3>
                  <p className="uppercase text-xs font-bold tracking-wider text-gray-400 mb-4">
                    {partner.type}
                  </p>
                  <p className="text-gray-300">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .animate-scroll-x {
            display: flex;
            animation: scrollX 50s linear infinite;
          }

          @keyframes scrollX {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </div>
  );
};

export default About;
