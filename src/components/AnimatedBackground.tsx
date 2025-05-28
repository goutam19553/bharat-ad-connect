import React from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { MapPin, Zap, TrendingUp, Eye, Award, Building } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import AnimatedBackground from "@/components/AnimatedBackground"; // ✅ Import the AnimatedBackground component

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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%2022.jpg",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%201.avif",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps3.avif",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/092bfbdd-50d2-411b-9914-d2734e65ebb3.jpg",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20164050.png",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20171619.png",
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
    // The main container for the Index page
    // `relative` is needed for `absolute` children
    // `overflow-hidden` to prevent scrollbars from background animation
    // `min-h-screen` to ensure it always takes full height
    // `text-white` to make sure all text is visible on dark background
    <div className="relative overflow-hidden min-h-screen text-white">
      {/* The animated background component, fixed to the viewport */}
      {/* `absolute inset-0` makes it cover the entire parent container */}
      {/* `-z-10` places it behind all other content */}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>

      {/* Hero Section */}
      {/* `relative` ensures Hero content stacks above the background */}
      <div className="relative z-0"> {/* Adjusted z-index for clarity, though -10 will still be behind */}
        <Hero />
      </div>

      {/* Benefits Section */}
      <section className="section py-16"> {/* Add padding for spacing */}
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming Outdoor Advertising in India
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              Bharat-Ad connects advertisers with ad space owners across India
              through our innovative digital marketplace powered by AI and AR
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                For Advertisers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advertiserBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    // Added semi-transparent background with blur for better readability
                    className="bg-white/10 p-5 rounded-lg backdrop-blur-sm"
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link to="/advertisers" className="btn-primary">
                  For Advertisers
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                For Ad Space Owners
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ownerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    // Added semi-transparent background with blur for better readability
                    className="bg-white/10 p-5 rounded-lg backdrop-blur-sm"
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-white/80">{benefit.description}</p>
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
      <section className="section py-16">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced OOH Campaign Planner
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              We help streamline OOH Ad-campaign planning with advanced tools and
              proprietary data insights for precise media placement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAdSpaces.map((adSpace) => (
              // Ensuring AdSpaceCard also has a suitable background or is designed for dark theme
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

      {/* Political Campaign Button - no bg changes needed, keep as is */}
      {/* Assuming this section has its own styling that works with the dark theme */}
      <section className="section">
        <div className="flex justify-center items-center py-10">
          {/* Your button content here */}
          <Link
            to="/government-support"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            Political Campaigns and Government Support
          </Link>
        </div>
      </section>

      {/* AI/AR Demos */}
      {/* Ensure these components handle their own backgrounds or are transparent */}
      <AIDesignDemo />
      <FootTrafficDemo />

      {/* How It Works */}
      <section className="section py-16">
        <HowItWorks />
      </section>

      {/* Brand Slider */}
      {/* Ensure this component handles its own backgrounds or is transparent */}
      <BrandSlider />

      {/* Contact Form */}
      <section className="section py-16">
        <div className="container-custom mx-auto px-4">
          {/* Ensure ContactForm has appropriate styling for dark theme */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
