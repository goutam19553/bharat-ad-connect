import React, { useState, useEffect } from "react";
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
const floatAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
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
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const texts = [
    "The AdTech Engine of New India",
    "India's Ad Future, Now Live",
    "India's First Future-Ready AdTech Grid"
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenLoops = 2000;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentText = texts[loopNum % texts.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex === currentText.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenLoops);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum]);

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

  return (
    <div>
      {/* Hero Section (no Plexus) */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white">
        <Hero />
      </div>
 
      {/* Benefits */}
      <div className="relative z-0 bg-gray-800">
        <section className="section bg-transparent">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-5xl font-bold mb-6 px-4 pt-4 pb-3 text-center
                         bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400
                         bg-[length:200%_200%] bg-clip-text text-transparent
                         animate-gradient-x drop-shadow-md tracking-tight leading-tight"
              >
                {displayText}
                <span className="typing-cursor">|</span>
              </h2>
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
      </div>
 
       {/* Featured Ad Spaces */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Advanced OOH Campaign Planner
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={adSpace.image} 
                    alt={adSpace.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{adSpace.title}</h3>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                      {adSpace.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{adSpace.location}, {adSpace.city}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Size: {adSpace.size}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(adSpace.rating) ? 'text-amber-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ₹{adSpace.price.toLocaleString()}
                      <span className="text-sm font-normal text-gray-500">/month</span>
                    </span>
                    <button 
                      onClick={togglePopup}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10">Book Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/ad-spaces" 
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-lg group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600"></span>
              <span className="absolute bottom-0 right-0 w-8 h-8 -mb-8 -mr-8 transition-all duration-300 ease-out transform translate-x-0 translate-y-0 bg-blue-800 rounded-full group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
              <span className="absolute top-0 left-0 w-8 h-8 -mt-8 -ml-8 transition-all duration-300 ease-out transform -translate-x-0 -translate-y-0 bg-indigo-800 rounded-full group-hover:translate-x-1 group-hover:translate-y-1"></span>
              <span className="relative z-20 flex items-center text-sm md:text-base">
                View All Ad Spaces
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
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
              className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
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

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Coming Soon!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This feature is currently under development in our environment.
                  We're working hard to make it available soon!
                </p>

                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-6">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-orange-500"
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
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 w-full"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Political Campaign Section */}
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
            href="http://politicalads.adproject.in/"
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

      {/* How It Works */}
      <div className="relative bg-gray-900 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <HowItWorks />
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Trusted By Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
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
