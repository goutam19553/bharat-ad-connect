import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { MapPin, Zap, TrendingUp, Eye, Award, Building, Star, X } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";

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

const typingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const typingLetter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const testimonials = [
  {
    quote: "The Ad-Project helped us find premium ad spaces we couldn't access through traditional channels. Their AR preview feature saved us thousands in production costs.",
    author: "Rahul Sharma",
    company: "Marketing Director, UrbanClap",
    rating: 5
  },
  {
    quote: "As a small business owner, I never thought I could afford premium outdoor advertising. The Ad-Project made it accessible with their innovative solutions.",
    author: "Priya Patel",
    company: "Founder, Chai Point",
    rating: 4
  },
  {
    quote: "We've increased our venue revenue by 30% since listing our spaces on The Ad-Project. The platform connects us with serious advertisers.",
    author: "Vikram Mehta",
    company: "Operations Manager, Phoenix Marketcity",
    rating: 5
  }
];

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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
      title: "Water Bottle Ads",
      location: "Anywhere",
      city: "Anywhere",
      type: "Product Branding",
      size: "Reusable Bottle",
      price: 5000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/waterdemo.png",
      rating: 4.7,
      impressions: "High visibility in offices, gyms, and events",
      featured: true
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

  // Split text into words for typing animation
  const sloganText = "Scan. See. Support – Ads that Speak to Every Indian.".split(" ");

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white">
        <Hero />
      </div>
 
      {/* Benefits */}
      <div className="relative z-0 bg-gray-800">
        <section className="section bg-transparent">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6 px-4 pt-4 pb-3 text-center text-white tracking-tight leading-tight"
                initial="hidden"
                animate="visible"
                variants={typingAnimation}
              >
                {"The AdTech Engine of New India".split("").map((char, i) => (
                  <motion.span key={i} variants={typingLetter}>
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                The Ad-Project connects advertisers with ad space owners across India through our innovative digital marketplace powered by AI and AR technology.
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
                      className="bg-gray-900 bg-opacity-70 p-5 rounded-lg border border-gray-700 hover:border-bharat-saffron transition-colors"
                    >
                      <div className="mb-4">{benefit.icon}</div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center md:text-left">
                  <Link to="/advertisers" className="btn bg-bharat-saffron text-black px-6 py-3 rounded-lg font-bold hover:bg-amber-500 transition-colors">
                    For Advertisers
                  </Link>
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
                      className="bg-gray-900 bg-opacity-70 p-5 rounded-lg border border-gray-700 hover:border-bharat-navy transition-colors"
                    >
                      <div className="mb-4">{benefit.icon}</div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center md:text-left">
                  <Link to="/ad-space-owners" className="btn bg-bharat-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                    For Ad Space Owners
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
 
      {/* Featured Ad Spaces */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Advanced OOH Campaign Planner
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We help streamline OOH Ad-campaign planning with advanced tools and proprietary data insights for precise media placement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAdSpaces.map((adSpace, index) => (
              <motion.div
                key={adSpace.id}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-700"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={adSpace.image} 
                    alt={adSpace.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-bharat-saffron text-black px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{adSpace.title}</h3>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">
                      {adSpace.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{adSpace.location}, {adSpace.city}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Size: {adSpace.size}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(adSpace.rating) ? 'text-amber-400 fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">
                      ₹{adSpace.price.toLocaleString()}
                      <span className="text-sm font-normal text-gray-400">/month</span>
                    </span>
                    <button 
                      onClick={togglePopup}
                      className="px-4 py-2 bg-bharat-saffron text-black rounded-lg text-sm font-bold hover:bg-amber-500 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/ad-spaces" 
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-bharat-navy rounded-lg hover:bg-blue-800 transition-colors"
            >
              View All Ad Spaces
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Development Feature Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={togglePopup}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-gray-800 rounded-2xl max-w-md w-full p-8 shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-bharat-saffron mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Coming Soon!
                </h3>
                <p className="text-gray-300 mb-6">
                  This feature is currently under development in our environment.
                  We're working hard to make it available soon!
                </p>

                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden mb-6">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-bharat-saffron"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <button
                  onClick={togglePopup}
                  className="px-6 py-3 bg-bharat-saffron text-black rounded-lg font-bold hover:bg-amber-500 transition-colors w-full"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Political Campaign Section */}
      <section className="section bg-gray-800">
        <div className="flex flex-col justify-center items-center py-10 space-y-8">
          {/* Indian Flag Border Image */}
          <div
            className="relative border-4 rounded-2xl p-1"
            style={{
              borderImage: 'linear-gradient(to right, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%) 1',
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 backdrop-blur-md bg-white/30 text-black rounded-full shadow-lg text-center font-semibold text-sm sm:text-base whitespace-nowrap overflow-hidden">
              <motion.div 
                className="tracking-wide"
                initial="hidden"
                animate="visible"
                variants={typingAnimation}
              >
                {sloganText.map((word, i) => (
                  <motion.span 
                    key={i} 
                    variants={typingLetter}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://political-campaign-rose.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-10 py-5 rounded-xl bg-gray-900 border border-gray-700 text-white font-bold text-xl hover:bg-gray-800 transition-colors">
              🚀 Political Campaign Support
            </button>
          </a>
        </div>
      </section>

      {/* AI/AR Design Demos */}
      <AIDesignDemo />
      <FootTrafficDemo />

      {/* How It Works */}
      <div className="relative bg-gray-800 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <HowItWorks />
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Trusted By Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our partners say about working with us
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bharat-saffron flex items-center justify-center text-black font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Slider */}
      <BrandSlider />
    </div>
  );
};

export default Index;
