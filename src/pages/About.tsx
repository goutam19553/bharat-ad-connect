import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Goutam N P",
      position: "Founder & CTO",
      bio: "Former marketing executive with 5 years experience in outdoor & tech advertising across major Indian markets.",
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/IMG_20241203_093333%7E2.jpg"
    },
    {
      name: "Zeeshan M",
      position: "CEO & head of Partnerships",
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
    <div className="bg-gray-900 text-white dark:bg-white dark:text-black">
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
      
      {/* Our Story */}
      <section className="section bg-gray-800 dark:bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-white dark:text-black">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400 dark:text-gray-800">
                <p>
                  Aura-Ad was founded in 2023 with a simple mission: to transform the fragmented outdoor 
                  advertising industry in India through digital innovation and technology.
                </p>
                <p>
                  Our founders, Goutam P & Zeeshan M, spent 15 years in traditional outdoor advertising and saw firsthand 
                  the inefficiencies and missed opportunities in the market. Advertisers struggled to find and 
                  evaluate ad spaces, while property owners had no reliable way to monetize their valuable spaces.
                </p>
                <p>
                  By bringing together a team of experts in technology, marketing, and government relations, 
                  Aura-Ad was born as a comprehensive solution connecting advertisers with premium ad spaces 
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
              <div className="bg-gray-700 dark:bg-gray-300 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-300 dark:text-gray-700">
                  To create India's most efficient and innovative outdoor advertising marketplace, connecting 
                  advertisers with prime spaces through cutting-edge technology and data-driven insights.
                </p>
              </div>
              
              <div className="bg-gray-700 dark:bg-gray-300 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-300 dark:text-gray-700">
                  To be the definitive platform for outdoor advertising in India, transforming how businesses 
                  connect with their audiences in the physical world through smart, data-driven solutions.
                </p>
              </div>
              
              <div className="bg-gray-700 dark:bg-gray-300 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Values</h3>
                <ul className="space-y-2 text-gray-300 dark:text-gray-700">
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

      {/* Rest of the sections remain unchanged, but ensure they follow similar dark mode adjustments */}
    </div>
  );
};

export default About;
