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
     {/* Hero Section (no Plexus) */}
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
{/* Featured Ad Spaces */}
<section className="section relative bg-gray-50 dark:bg-gray-800">
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
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl hover:ring-2 hover:ring-purple-400/50 transition duration-300 p-6"
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

      
<style jsx>{`
  @keyframes glowCycle {
    0% {
      box-shadow: 0 0 12px 4px #FF9933;
    }
    33% {
      box-shadow: 0 0 12px 4px #ffffff;
    }
    66% {
      box-shadow: 0 0 12px 4px #138808;
    }
    100% {
      box-shadow: 0 0 12px 4px #FF9933;
    }
  }

  @keyframes wordEnter {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .film-text span {
    display: inline-block;
    opacity: 0;
    animation: wordEnter 0.6s ease-out forwards;
  }

  .film-text span:nth-child(1) {
    animation-delay: 0.2s;
  }
  .film-text span:nth-child(2) {
    animation-delay: 0.5s;
  }
  .film-text span:nth-child(3) {
    animation-delay: 0.8s;
  }
  .film-text span:nth-child(4) {
    animation-delay: 1.1s;
  }
  .film-text span:nth-child(5) {
    animation-delay: 1.4s;
  }
  .film-text span:nth-child(6) {
    animation-delay: 1.7s;
  }
  .film-text span:nth-child(7) {
    animation-delay: 2s;
  }
`}</style>

<section className="section bg-white dark:bg-gray-800">
  <div className="flex flex-col justify-center items-center py-10 space-y-8">
    {/* Glowing Indian Flag Border Image */}
    <div
      className="relative border-4 rounded-2xl p-1 animate-[glowCycle_3s_linear_infinite]"
      style={{
        borderImage:
          'linear-gradient(to right, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%) 1',
        borderImageSlice: 1,
        maxWidth: '600px',
      }}
    >
      <img
        src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/BPAC_Main.png"
        alt="Political Campaign Visual"
        className="rounded-xl w-full h-auto object-cover"
      />

      {/* Animated Slogan Text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 backdrop-blur-md bg-white/30 dark:bg-black/40 text-black dark:text-white rounded-full shadow-lg text-center font-semibold text-sm sm:text-base whitespace-nowrap overflow-hidden">
        <span className="film-text tracking-wide">
          <span>Scan.</span>{" "}
          <span>See.</span>{" "}
          <span>Support</span>{" "}
          <span>–</span>{" "}
          <span>Ads</span>{" "}
          <span>that</span>{" "}
          <span>Speak</span>{" "}
          <span>to</span>{" "}
          <span>Every</span>{" "}
          <span>Indian.</span>
        </span>
      </div>
    </div>

    {/* Button */}
    <a
      href="https://political-campaign-rose.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="relative px-10 py-5 rounded-xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white font-semibold text-xl overflow-hidden group hover:scale-105 transition-transform duration-300 ease-in-out shadow-[0_0_25px_#00fff5aa]">
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
     );
};

export default Index;
