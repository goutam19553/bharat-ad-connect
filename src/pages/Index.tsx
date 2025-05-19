import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import { MapPin, Zap, TrendingUp, Eye, Award, Building } from "lucide-react";
import BrandSlider from "@/components/BrandSlider";

const Index = () => {
  const featuredAdSpaces: AdSpaceProps[] = [
    {
      id: 1,
      title: "Indian Cricket Stadium",
      location: "M.Chinnaswamy Stadium",
      city: "Bengaluru",
      type: "Stadium",
      size: "60 x 20 feet",
      price: 250000,
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%2022.jpg",
      rating: 4,
      featured: true,
    },
    {
      id: 2,
      title: "Promotional Space",
      location: "IT Park Manyata Tech Park",
      city: "Bangalore",
      type: "Space Ad",
      size: "10 x 10 feet",
      price: 25000,
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%201.avif",
      rating: 4,
      featured: true,
    },
    {
      id: 3,
      title: "Exterior Train Branding",
      location: "Mumbai Local Train",
      city: "Mumbai",
      type: "Transit",
      size: "5 x 8 feet",
      price: 80000,
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps3.avif",
      rating: 4,
      featured: true,
    },
    {
      id: 4,
      title: "Prime Billboard - MG Road",
      location: "MG Road",
      city: "Bengaluru",
      type: "Billboard",
      size: "30 x 15 feet",
      price: 45000,
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/092bfbdd-50d2-411b-9914-d2734e65ebb3.jpg",
      rating: 5,
      featured: true,
    },
    {
      id: 5,
      title: "Drone Advertising",
      location: "Anywhere",
      city: "Anywhere",
      type: "Digital LED Flying Drones",
      size: "20 x 10 feet",
      price: 8000,
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20164050.png",
      rating: 4,
      featured: true,
    },
    {
      id: 6,
      title: "Metro Station Panels",
      location: "Rajiv Chowk Metro",
      city: "New Delhi",
      type: "Transit",
      size: "15 x 8 feet",
      price: 25000,
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20171619.png",
      rating: 4,
      featured: true,
    },
  ];

  const advertiserBenefits = [
    {
      icon: <MapPin className="h-8 w-8 text-bharat-saffron" />,
      title: "Prime Locations",
      description: "Access to exclusive premium ad spaces across major Indian cities.",
    },
    {
      icon: <Eye className="h-8 w-8 text-bharat-saffron" />,
      title: "AR Preview",
      description: "See exactly how your ad will look before making an investment.",
    },
    {
      icon: <Zap className="h-8 w-8 text-bharat-saffron" />,
      title: "AI-Powered Design",
      description: "Get intelligent design recommendations based on location and audience.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-bharat-saffron" />,
      title: "Traffic Analysis",
      description: "Make data-driven decisions with our foot traffic analysis.",
    },
  ];

  const ownerBenefits = [
    {
      icon: <Building className="h-8 w-8 text-bharat-navy" />,
      title: "Maximize Revenue",
      description: "List your ad spaces and connect with quality advertisers.",
    },
    {
      icon: <Award className="h-8 w-8 text-bharat-navy" />,
      title: "Verified Advertisers",
      description: "We verify all advertisers to ensure quality partnerships.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-bharat-navy" />,
      title: "Data Insights",
      description: "Access analytics about your space's performance and value.",
    },
    {
      icon: <Zap className="h-8 w-8 text-bharat-navy" />,
      title: "Seamless Management",
      description: "Easy-to-use platform for managing your ad inventory.",
    },
  ];

  return (
    <div>
      {/* Hero without WallUpload */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white">
        <Hero />
      </div>

      {/* Benefits Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Outdoor Advertising in India</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bharat-Ad connects advertisers with ad space owners across India through our
              innovative digital marketplace powered by AI and AR technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Advertisers */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">For Advertisers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advertiserBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link to="/advertisers" className="btn-primary">
                  For Advertisers
                </Link>
              </div>
            </div>

            {/* Owners */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">For Ad Space Owners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ownerBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced OOH Campaign Planner</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We help streamline OOH Ad-campaign planning with advanced tools and proprietary data insights for precise media placement.
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

{/* Political Campaign Button */}
<div className="w-full flex justify-center mb-10">
  <Link to="/political-campaign" className="group relative">
    <button className="relative z-10 px-10 py-4 text-white font-bold text-lg rounded-2xl border border-[#7f5af0] bg-[#1c1c1c] shadow-[0_0_10px_#7f5af0] transition-all duration-300 ease-in-out animate-neonPulse group-hover:scale-105 group-hover:shadow-[0_0_25px_#00f0ff]">
      <span className="relative z-10">🛸 Political Campaign Support</span>
      {/* Glowing Liquid Overlay */}
      <span className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-400/30 to-cyan-300/20 blur-md opacity-70 animate-liquidMove"></span>
      {/* Extra Neon Border Glow */}
      <span className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-[#7f5af0] to-[#00f0ff] opacity-20 blur-md pointer-events-none"></span>
    </button>
  </Link>
</div>



      
      {/* AI & AR Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI & AR-Powered Ad Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Preview your ads with AR technology and let AI suggest the best designs based on audience and location data.
            </p>
          </div>

          <AIDesignDemo />
          <FootTrafficDemo />
        </div>
      </section>

       {/* Brand Partnerships */}
      <section className="section bg-gray-100 dark:bg-gray-900 py-8">
        <BrandSlider />
      </section>

      {/* Contact Section */}
      <section className="section bg-gray-50 dark:bg-gray-800 py-8">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions or need assistance? Reach out to us today!
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
