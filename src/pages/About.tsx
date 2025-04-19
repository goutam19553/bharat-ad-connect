
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Goutam N P",
      position: "Founder & CTO",
      bio: "Former marketing executive with 5 years experience in outdoor & tech advertising across major Indian markets.",
      image: "https://source.unsplash.com/photo-1519085360753-af0119f7cbe7"
    },
    {
      name: "Zeeshan M",
      position: "CEO & head of Partnerships",
      bio: "Ads Specialist with previous experience leading tech teams at major Indian startups.",
      image: "https://source.unsplash.com/photo-1580489944761-15a19d654956"
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
    <div>
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
                src="https://source.unsplash.com/photo-1483058712412-4245e9b90334" 
                alt="Team collaboration" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bharat-Ad was founded in 2023 with a simple mission: to transform the fragmented outdoor 
                  advertising industry in India through digital innovation and technology.
                </p>
                <p>
                  Our founder, Arjun Sharma, spent 15 years in traditional outdoor advertising and saw firsthand 
                  the inefficiencies and missed opportunities in the market. Advertisers struggled to find and 
                  evaluate ad spaces, while property owners had no reliable way to monetize their valuable spaces.
                </p>
                <p>
                  By bringing together a team of experts in technology, marketing, and government relations, 
                  Bharat-Ad was born as a comprehensive solution connecting advertisers with premium ad spaces 
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
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To create India's most efficient and innovative outdoor advertising marketplace, connecting 
                  advertisers with prime spaces through cutting-edge technology and data-driven insights.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the definitive platform for outdoor advertising in India, transforming how businesses 
                  connect with their audiences in the physical world through smart, data-driven solutions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-semibold mb-3">Our Values</h3>
                <ul className="space-y-2 text-gray-600">
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
      
      {/* Our Team */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The experienced professionals behind Bharat-Ad's innovation and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold">{member.name}</h3>
                  <p className="text-bharat-teal font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partnerships */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Partnerships & Collaborations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Working together with government agencies and industry leaders to transform outdoor advertising
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md card-hover">
                <div className="mb-4 inline-flex items-center justify-center bg-bharat-navy/10 w-16 h-16 rounded-full">
                  <svg className="h-8 w-8 text-bharat-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-1">{partner.name}</h3>
                <p className="text-bharat-teal font-medium mb-3">{partner.type}</p>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
          
          {/* Impact Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-bharat-navy text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p>Ad Spaces Listed</p>
            </div>
            <div className="bg-bharat-navy text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Active Advertisers</p>
            </div>
            <div className="bg-bharat-navy text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p>Cities Covered</p>
            </div>
            <div className="bg-bharat-navy text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">85%</div>
              <p>Booking Success Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Our Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At the heart of Bharat-Ad is our commitment to innovation through technology. We've developed 
                proprietary tools that transform how outdoor advertising is bought, sold, and optimized.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-heading font-semibold mb-2">AR Preview Technology</h3>
                  <p className="text-gray-600">
                    Our augmented reality tool allows advertisers to see exactly how their ads will look in any 
                    given space before making a purchase decision.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-heading font-semibold mb-2">AI-Powered Design Recommendations</h3>
                  <p className="text-gray-600">
                    Our proprietary AI algorithms analyze location data, audience demographics, and environmental 
                    factors to suggest optimal ad designs for maximum impact.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-heading font-semibold mb-2">Foot Traffic Analysis</h3>
                  <p className="text-gray-600">
                    Using aggregated mobile data and advanced analytics, we provide detailed insights into 
                    pedestrian and vehicle traffic patterns around any ad space.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://source.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Technology" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://source.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Code" 
                className="rounded-lg shadow-lg mt-6"
              />
              <img 
                src="https://source.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Circuit Board" 
                className="rounded-lg shadow-lg mt-6"
              />
              <img 
                src="https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Laptop" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section bg-gradient-to-r from-bharat-navy to-bharat-navy/90 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Join the Outdoor Advertising Revolution?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you're looking to advertise or list your ad space, Bharat-Ad is your partner in success
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/ad-spaces" className="btn-primary">
              Find Ad Spaces
            </Link>
            <Link to="/ad-space-owners" className="bg-white text-bharat-navy hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-all duration-200">
              List Your Space
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
