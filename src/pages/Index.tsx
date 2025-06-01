import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { MapPin, Zap, TrendingUp, Eye, Award, Building } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import PlexusBackground from "@/components/PlexusBackground";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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
    { icon: <MapPin className="h-8 w-8 text-bharat-saffron" />, title: "Prime Locations", description: "Access to exclusive premium ad spaces across major Indian cities." },
    { icon: <Eye className="h-8 w-8 text-bharat-saffron" />, title: "AR Preview", description: "See exactly how your ad will look before making an investment." },
    { icon: <Zap className="h-8 w-8 text-bharat-saffron" />, title: "AI-Powered Design", description: "Get intelligent design recommendations based on location and audience." },
    { icon: <TrendingUp className="h-8 w-8 text-bharat-saffron" />, title: "Traffic Analysis", description: "Make data-driven decisions with our foot traffic analysis." },
  ];

  const ownerBenefits = [
    { icon: <Building className="h-8 w-8 text-bharat-navy" />, title: "Maximize Revenue", description: "List your ad spaces and connect with quality advertisers." },
    { icon: <Award className="h-8 w-8 text-bharat-navy" />, title: "Verified Advertisers", description: "We verify all advertisers to ensure quality partnerships." },
    { icon: <TrendingUp className="h-8 w-8 text-bharat-navy" />, title: "Data Insights", description: "Access analytics about your space's performance and value." },
    { icon: <Zap className="h-8 w-8 text-bharat-navy" />, title: "Seamless Management", description: "Easy-to-use platform for managing your ad inventory." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white">
        <Hero />
      </div>
  
     {/* Benefits */}
<div className="relative z-0 bg-gray-800">
  {/* Plexus background placed absolutely behind content */}
  <PlexusBackground className="absolute inset-0 -z-10 opacity-60" />

  <section className="section bg-transparent">
    <div className="container-custom relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transforming Outdoor Advertising in India</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Bharat-Ad connects advertisers with ad space owners across India through our innovative digital marketplace powered by AI and AR technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Advertisers */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-white">For Advertisers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advertiserBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900 bg-opacity-70 p-5 rounded-lg"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center md:text-left">
            <Link to="/advertisers" className="btn-primary">For Advertisers</Link>
          </div>
        </div>

        {/* Ad Space Owners */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-white">For Ad Space Owners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ownerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900 bg-opacity-70 p-5 rounded-lg"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center md:text-left">
            <Link to="/ad-space-owners" className="btn-secondary">For Ad Space Owners</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  
      {/* Featured Ad Spaces */}
<section className="section relative bg-gray-50 dark:bg-gray-800">
  {/* PlexusBackground canvas is assumed outside or above this section with z-index -1 or 0 */}

  <div className="container-custom relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced OOH Campaign Planner</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        We help streamline OOH Ad-campaign planning with advanced tools and proprietary data insights for precise media placement.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredAdSpaces.map((adSpace, index) => (
        <motion.div
          key={adSpace.id}
          custom={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
          // solid background, no transparency
        >
          <AdSpaceCard adSpace={adSpace} />
        </motion.div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Link to="/ad-spaces" className="btn-primary">
        View All Ad Spaces
      </Link>
    </div>
  </div>
</section>

      
  {/* Political Campaign Support Button */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center py-10">
          <a href="https://political-campaign-rose.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="relative px-10 py-5 my-6 rounded-xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white font-semibold text-xl overflow-hidden group hover:scale-105 transition-transform duration-300 ease-in-out shadow-[0_0_25px_#00fff5aa]">
              <span className="absolute inset-0 bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></span>
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-swipe-glow pointer-events-none rounded-xl"></span>
              <span className="absolute inset-0 bg-gradient-to-br from-[#ffffff08] via-[#00fff51a] to-[#00fff509] pointer-events-none rounded-xl"></span>
              <span className="absolute inset-0 w-full h-full overflow-hidden rounded-xl pointer-events-none">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#00fff580] to-transparent opacity-0 group-hover:opacity-20 animate-glitch-horizontal"></span>
                <span className="absolute top-1/2 left-0 w-full h-px bg-[#00fff5] opacity-0 group-hover:opacity-60 animate-glitch-line"></span>
              </span>
              <span className="relative z-10 overflow-hidden">
                <span className="relative">🚀 Political Campaign Support</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></span>
              </span>
            </button>
          </a>
        </div>
      </section>

      {/* AI/AR Design Demos */}
      <AIDesignDemo />
      <FootTrafficDemo />

         {/* How It Works Section - ADDED */}
<div className="relative z-0 bg-gray-800">
  {/* Plexus background placed absolutely behind content */}
  <PlexusBackground className="absolute inset-0 -z-10 opacity-60" />

  <section className="section bg-transparent">
    <div className="container-custom relative z-10">
      <HowItWorks />
    </div>
  </section>
</div>
     
      {/* Brands Slider */}
      <BrandSlider />

      {/* Contact Form */}
      <section className="section bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
