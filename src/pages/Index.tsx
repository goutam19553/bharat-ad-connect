import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { MapPin, Zap, TrendingUp, Eye, Award, Building, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";

// Animation variants
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

// Testimonials data
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

// Ad spaces data
const featuredAdSpaces: AdSpaceProps[] = [
  {
    id: 1,
    title: "Indian Cricket Stadium",
    location: "M.Chinnaswamy Stadium",
    city: "Bengaluru",
    type: "Stadium",
    size: "60 x 20 feet",
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
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20171619.png",
    rating: 4,
    featured: true,
  },
];

// Benefits data
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

const Index = () => {
  // Typing animation state
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  // 3D Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  const texts = [
    "The AdTech Engine of New India",
    "India's Ad Future, Now Live",
    "India's First Future-Ready AdTech Grid"
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenLoops = 2000;

  // Auto-play interval (5 seconds)
  const autoPlayInterval = 5000;

  // Typing animation effect
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

  // Auto-play slider effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev === featuredAdSpaces.length - 1 ? 0 : prev + 1));
      }, autoPlayInterval);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Toggle popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Navigate slides
  const nextSlide = () => {
    setIsPlaying(false);
    setCurrentSlide(prev => (prev === featuredAdSpaces.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsPlaying(true), autoPlayInterval * 2);
  };

  const prevSlide = () => {
    setIsPlaying(false);
    setCurrentSlide(prev => (prev === 0 ? featuredAdSpaces.length - 1 : prev - 1));
    setTimeout(() => setIsPlaying(true), autoPlayInterval * 2);
  };

  const goToSlide = (index: number) => {
    setIsPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsPlaying(true), autoPlayInterval * 2);
  };

  // Calculate 3D curved positions
  const getCurvedPosition = (index: number) => {
    const totalItems = featuredAdSpaces.length;
    const centerIndex = currentSlide;
    const distanceFromCenter = (index - centerIndex + totalItems) % totalItems;
    
    // Calculate angle based on position relative to center
    const angle = ((distanceFromCenter - Math.floor(totalItems / 2)) * 15;
    
    // Calculate 3D transform values
    const translateZ = -Math.abs(distanceFromCenter - Math.floor(totalItems / 2)) * 50;
    const scale = 1 - Math.abs(distanceFromCenter - Math.floor(totalItems / 2)) * 0.15;
    const opacity = 1 - Math.abs(distanceFromCenter - Math.floor(totalItems / 2)) * 0.3;
    
    return { angle, translateZ, scale, opacity, distanceFromCenter };
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white">
        <Hero />
      </div>
 
      {/* Benefits Section */}
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
 
      {/* Featured Ad Spaces - Futuristic 3D Curved Carousel */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-200/10 to-transparent dark:via-gray-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Premium Ad Spaces Collection
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our exclusive inventory of high-impact advertising locations across India
            </p>
          </motion.div>

          {/* Futuristic 3D Curved Carousel */}
          <div className="relative h-[600px] w-full perspective-1000 overflow-visible" ref={sliderRef}>
            {/* Carousel track with curved layout */}
            <div className="absolute inset-0 flex items-center justify-center">
              {featuredAdSpaces.map((adSpace, index) => {
                const { angle, translateZ, scale, opacity, distanceFromCenter } = getCurvedPosition(index);
                const isCenter = distanceFromCenter === 0;
                
                return (
                  <motion.div
                    key={adSpace.id}
                    className={`absolute w-72 h-96 rounded-2xl shadow-2xl overflow-hidden border-2 ${
                      isCenter 
                        ? 'border-amber-500/50 dark:border-amber-400/50' 
                        : 'border-gray-200/30 dark:border-gray-700/50'
                    }`}
                    initial={false}
                    animate={{
                      x: angle * 20, // Horizontal position based on angle
                      y: Math.abs(angle) * 0.5, // Slight vertical offset
                      z: translateZ,
                      scale,
                      opacity,
                      rotateY: angle,
                      filter: isCenter ? 'brightness(1.1)' : 'brightness(0.8)',
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }}
                    whileHover={{
                      scale: scale * 1.05,
                      z: translateZ + 20,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <div className="relative h-full group">
                      {/* Holographic effect */}
                      <div className={`absolute inset-0 ${
                        isCenter 
                          ? 'bg-gradient-to-br from-amber-500/10 to-blue-500/10' 
                          : 'bg-gradient-to-br from-gray-500/5 to-gray-700/5'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      {/* Glow effect for center card */}
                      {isCenter && (
                        <div className="absolute inset-0 rounded-2xl pointer-events-none">
                          <div className="absolute inset-0 rounded-2xl bg-amber-500/10 blur-md animate-pulse"></div>
                          <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_5px_rgba(245,158,11,0.3)]"></div>
                        </div>
                      )}
                      
                      {/* Image with gradient overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={adSpace.image} 
                          alt={adSpace.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          Featured
                        </div>
                      </div>
                      
                      {/* Card content */}
                      <div className="p-6 h-[calc(100%-12rem)] flex flex-col bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">{adSpace.title}</h3>
                          <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                            {adSpace.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3 text-sm">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="line-clamp-1">{adSpace.location}, {adSpace.city}</span>
                        </div>
                        
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <p className="font-medium">Size: <span className="font-normal">{adSpace.size}</span></p>
                          {adSpace.impressions && (
                            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">{adSpace.impressions}</p>
                          )}
                        </div>
                        
                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(adSpace.rating) ? 'text-amber-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({adSpace.rating})</span>
                          </div>
                          <button 
                            onClick={togglePopup}
                            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
                          >
                            Enquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation controls - Futuristic style */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
              <button 
                onClick={prevSlide}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-700 group"
                aria-label="Previous slide"
              >
                <div className="relative">
                  <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <div className="absolute inset-0 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
              
              <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                {featuredAdSpaces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-6 scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-700 group"
                aria-label="Next slide"
              >
                <div className="relative">
                  <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <div className="absolute inset-0 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            </div>
          </div>

          {/* View All Button - Futuristic style */}
          <div className="mt-16 text-center">
            <Link 
              to="/ad-spaces" 
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 group-hover:from-blue-700 group-hover:via-blue-600 group-hover:to-indigo-700 transition-all duration-500"></span>
              <span className="absolute bottom-0 right-0 w-8 h-8 -mb-8 -mr-8 transition-all duration-500 ease-out transform translate-x-0 translate-y-0 bg-blue-800 rounded-full group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
              <span className="absolute top-0 left-0 w-8 h-8 -mt-8 -ml-8 transition-all duration-500 ease-out transform -translate-x-0 -translate-y-0 bg-indigo-800 rounded-full group-hover:translate-x-1 group-hover:translate-y-1"></span>
              <span className="relative z-20 flex items-center text-sm md:text-base">
                <span className="mr-2">Explore All Ad Spaces</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enquire Popup */}
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
