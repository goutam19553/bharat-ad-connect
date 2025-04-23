
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import { MapPin, Zap, TrendingUp, Eye, Award, Building } from "lucide-react";

const Index = () => {
  // Featured Ad Spaces data
  const featuredAdSpaces: AdSpaceProps[] = [
    {
      id: 1,
      title: "Prime Billboard - MG Road",
      location: "MG Road",
      city: "Bengaluru",
      type: "Billboard",
      size: "30 x 15 feet",
      price: 45000,
      image: "
import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import { MapPin } from "lucide-react";

const AdSpaces = () => {
  const [filters, setFilters] = useState({});
  const [view, setView] = useState<"grid" | "map">("grid");
  
  const adSpacesData: AdSpaceProps[] = [
    {
      id: 1,
      title: "Prime Billboard - MG Road",
      location: "MG Road",
      city: "Bengaluru",
      type: "Billboard",
      size: "30 x 15 feet",
      price: 45000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/092bfbdd-50d2-411b-9914-d2734e65ebb3.jpg",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: "Digital Display - Cyber Hub",
      location: "Cyber Hub",
      city: "Gurugram",
      type: "Digital Screen",
      size: "20 x 10 feet",
      price: 38000,
      image: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      rating: 4,
      featured: true
    },
    {
      id: 3,
      title: "Metro Station Panels",
      location: "Rajiv Chowk Metro",
      city: "New Delhi",
      type: "Transit",
      size: "15 x 8 feet",
      price: 25000,
      image: "https://source.unsplash.com/photo-1506744038136-46273834b3fb",
      rating: 4,
      featured: true
    },
    {
      id: 4,
      title: "Mall Entrance Display",
      location: "Phoenix Marketcity",
      city: "Mumbai",
      type: "Mall",
      size: "12 x 8 feet",
      price: 32000,
      image: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
      rating: 4
    },
    {
      id: 5,
      title: "Highway Billboard",
      location: "NH-8",
      city: "Jaipur",
      type: "Billboard",
      size: "40 x 20 feet",
      price: 35000,
      image: "https://source.unsplash.com/photo-1501854140801-50d01698950b",
      rating: 3
    },
    {
      id: 6,
      title: "Bus Shelter Ad Space",
      location: "Anna Salai",
      city: "Chennai",
      type: "Street Furniture",
      size: "8 x 4 feet",
      price: 15000,
      image: "https://source.unsplash.com/photo-1460925895917-afdab827c52f",
      rating: 4
    },
    {
      id: 7,
      title: "Shopping District LED",
      location: "Commercial Street",
      city: "Bengaluru",
      type: "Digital Screen",
      size: "15 x 10 feet",
      price: 28000,
      image: "https://source.unsplash.com/photo-1498050108023-c5249f4df085",
      rating: 5
    },
    {
      id: 8,
      title: "Airport Terminal Display",
      location: "T3 Terminal",
      city: "New Delhi",
      type: "Digital Screen",
      size: "18 x 12 feet",
      price: 55000,
      image: "https://source.unsplash.com/photo-1483058712412-4245e9b90334",
      rating: 5
    },
    {
      id: 9,
      title: "Railway Station Billboard",
      location: "Howrah Station",
      city: "Kolkata",
      type: "Billboard",
      size: "25 x 15 feet",
      price: 30000,
      image: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      rating: 3
    }
  ];

  const filterAdSpaces = (filters: any) => {
    setFilters(filters);
    // In a real application, this would filter the data based on the selected filters
    // For this demo, we're just setting the filters state
    console.log("Applying filters:", filters);
  };

  return (
    <div>
      {/* Ad Spaces Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Find the Perfect Ad Space
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through our extensive collection of premium advertising spaces across India
          </p>
        </div>
      </div>
      
      {/* Search and Filters Section */}
      <div className="bg-gray-100 py-6">
        <div className="container-custom">
          <SearchFilter onSearch={filterAdSpaces} />
          
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <MapPin className="h-5 w-5 text-bharat-teal mr-2" />
              <span className="font-medium">Popular cities:</span>
              <div className="ml-2 space-x-2">
                {["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai"].map((city) => (
                  <button 
                    key={city}
                    className="text-sm bg-white px-3 py-1 rounded-full border hover:bg-bharat-saffron hover:text-white hover:border-bharat-saffron transition-colors"
                    onClick={() => filterAdSpaces({ location: city })}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">View:</span>
              <div className="flex border rounded-md overflow-hidden">
                <button 
                  className={`px-3 py-1 ${view === "grid" ? "bg-bharat-navy text-white" : "bg-white"}`}
                  onClick={() => setView("grid")}
                >
                  Grid
                </button>
                <button 
                  className={`px-3 py-1 ${view === "map" ? "bg-bharat-navy text-white" : "bg-white"}`}
                  onClick={() => setView("map")}
                >
                  Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ad Spaces Listing */}
      <section className="section">
        <div className="container-custom">
          {view === "grid" ? (
            <>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-heading font-semibold">
                  {adSpacesData.length} Ad Spaces Available
                </h2>
                <div>
                  <select className="border rounded-md px-3 py-2">
                    <option>Sort by: Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adSpacesData.map((adSpace) => (
                  <AdSpaceCard key={adSpace.id} adSpace={adSpace} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="btn-accent">
                  Load More Ad Spaces
                </button>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-lg text-center py-12">
                Map view is under development. Please use the grid view to explore ad spaces.
              </p>
              {/* In a real application, we would integrate a map here */}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdSpaces;
",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: "Digital Display - Cyber Hub",
      location: "Cyber Hub",
      city: "Gurugram",
      type: "Digital Screen",
      size: "20 x 10 feet",
      price: 38000,
      image: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      rating: 4,
      featured: true
    },
    {
      id: 3,
      title: "Metro Station Panels",
      location: "Rajiv Chowk Metro",
      city: "New Delhi",
      type: "Transit",
      size: "15 x 8 feet",
      price: 25000,
      image: "https://source.unsplash.com/photo-1506744038136-46273834b3fb",
      rating: 4,
      featured: true
    }
  ];

  // Benefits data
  const advertiserBenefits = [
    {
      icon: <MapPin className="h-8 w-8 text-bharat-saffron" />,
      title: "Prime Locations",
      description: "Access to exclusive premium ad spaces across major Indian cities."
    },
    {
      icon: <Eye className="h-8 w-8 text-bharat-saffron" />,
      title: "AR Preview",
      description: "See exactly how your ad will look before making an investment."
    },
    {
      icon: <Zap className="h-8 w-8 text-bharat-saffron" />,
      title: "AI-Powered Design",
      description: "Get intelligent design recommendations based on location and audience."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-bharat-saffron" />,
      title: "Traffic Analysis",
      description: "Make data-driven decisions with our foot traffic analysis."
    }
  ];

  const ownerBenefits = [
    {
      icon: <Building className="h-8 w-8 text-bharat-navy" />,
      title: "Maximize Revenue",
      description: "List your ad spaces and connect with quality advertisers."
    },
    {
      icon: <Award className="h-8 w-8 text-bharat-navy" />,
      title: "Verified Advertisers",
      description: "We verify all advertisers to ensure quality partnerships."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-bharat-navy" />,
      title: "Data Insights",
      description: "Access analytics about your space's performance and value."
    },
    {
      icon: <Zap className="h-8 w-8 text-bharat-navy" />,
      title: "Seamless Management",
      description: "Easy-to-use platform for managing your ad inventory."
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Transforming Outdoor Advertising in India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bharat-Ad connects advertisers with ad space owners across India through our 
              innovative digital marketplace powered by AI and AR technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Advertisers Benefits */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-center md:text-left">
                For Advertisers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advertiserBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg card-hover">
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-heading font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link to="/advertisers" className="btn-primary">
                  For Advertisers
                </Link>
              </div>
            </div>
            
            {/* Ad Space Owners Benefits */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-center md:text-left">
                For Ad Space Owners
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ownerBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg card-hover">
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-heading font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link to="/ad-space-owners" className="btn-secondary">
                  For Ad Space Owners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Ad Spaces */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Ad Spaces
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover prime advertising locations in major cities across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAdSpaces.map((adSpace) => (
              <AdSpaceCard key={adSpace.id} adSpace={adSpace} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/ad-spaces" className="btn-primary">
              View All Ad Spaces
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI Powered Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI and AR technology to revolutionize 
              outdoor advertising effectiveness and ROI
            </p>
          </div>
          
          <div className="space-y-12">
            {/* AI Design Demo */}
            <AIDesignDemo />
            
            {/* Foot Traffic Analysis */}
            <div className="mt-12">
              <FootTrafficDemo />
            </div>
          </div>
        </div>
      </section>
      
      {/* Government & Industry Partnerships */}
      <section className="section bg-gradient-to-r from-bharat-navy to-bharat-navy/90 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Partnerships & Collaborations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with government bodies and industry leaders to transform the outdoor advertising landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="mb-4">
                <img 
                  src="https://source.unsplash.com/photo-1501854140801-50d01698950b" 
                  alt="Government Partnership" 
                  className="h-16 w-auto mx-auto opacity-80"
                />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Government Collaboration</h3>
              <p className="text-gray-300">
                Working with urban development authorities to create Smart City advertising solutions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="mb-4">
                <img 
                  src="https://source.unsplash.com/photo-1493397212122-2b85dda8106b" 
                  alt="Agency Partnership" 
                  className="h-16 w-auto mx-auto opacity-80"
                />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Agency Partnerships</h3>
              <p className="text-gray-300">
                Collaborating with advertising agencies to enhance campaign effectiveness
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="mb-4">
                <img 
                  src="https://source.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Print Shop Partnerships" 
                  className="h-16 w-auto mx-auto opacity-80"
                />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Print Shop Network</h3>
              <p className="text-gray-300">
                Nationwide network of quality-verified print shops for seamless production
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Transform Your Advertising Strategy?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get in touch with our team to learn more about how Aura-Brand can help you find the perfect 
                advertising spaces or maximize the revenue from your ad inventory.
              </p>
              
              <div className="bg-bharat-navy text-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Why Choose Aura Brand-Ad?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pan-India network of premium ad spaces</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced AI-powered recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AR technology for realistic ad previews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data-driven decision making tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Government and industry partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
