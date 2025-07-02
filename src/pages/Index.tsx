import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { Sparkles, BarChart, Radar, Eye, Move3D, MapPin, Zap, TrendingUp, Award, Building, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [selectedAdSpace, setSelectedAdSpace] = useState<AdSpaceProps | null>(null);

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
  const togglePopup = (adSpace?: AdSpaceProps) => {
    if (adSpace) {
      setSelectedAdSpace(adSpace);
    }
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
    const angle = (distanceFromCenter - Math.floor(totalItems / 2)) * 15
    
    // Calculate 3D transform values
    const translateZ = -Math.abs(distanceFromCenter - Math.floor(totalItems / 2)) * 50
    const scale = 1 - Math.abs(distanceFromCenter - Math.floor(totalItems / 2)) * 0.15
    const opacity = 1 - Math.abs(distanceFromCenter - Math.floor(totalItems / 2)) * 0.3
    
    return { angle, translateZ, scale, opacity, distanceFromCenter }
  };

  // Feature sections data
  const featureSections = [
    {
      title: "VIDAR: AI at the Edge",
      icon: <Radar className="text-bharat-saffron" size={32} />,
      description: "Our edge AI device uses computer vision to detect impressions, dwell time, and audience patterns in real-time—without relying on cloud latency.",
      features: [
        "Real-Time Detection: VIDAR tracks footfalls, vehicles, and audience behavior live using AI and edge processing.",
        "Hyper-Accurate Tracking: Get count-level precision and behavioral heatmaps to identify where and when your ads perform best.",
        "AR Activation Ready: Trigger immersive AR experiences when people scan your hoardings or kiosks—capturing attention instantly."
      ],
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/ai-edge.jpg"
    },
    {
      title: "Campaign Analytics",
      icon: <BarChart className="text-bharat-saffron" size={32} />,
      description: "A sleek dashboard built to offer marketers a digital-level understanding of their offline campaigns.",
      features: [
        "Impression Heatmaps: Visualize crowd density, duration, and timing with stunning heatmaps.",
        "Time-Lapse Visuals: See how your site performs across dayparts, seasons, or events.",
        "Competitor Benchmarking: Understand how your ad space stacks up against others in real-world environments."
      ],
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/analytics.jpg"
    },
    {
      title: "Real-Time Optimisation",
      icon: <Eye className="text-bharat-saffron" size={32} />,
      description: "Access campaign ROI in real-time, monitor shifts in audience patterns, and adjust instantly—remotely.",
      features: [
        "Smart Spend Utilization: Know how every rupee is being used. Optimise to ensure high ROI from each campaign.",
        "Dynamic Strategy: Adapt creative placements, timing, and format based on real-time data.",
        "Remote Management: From Mumbai to Manipur—manage and modify campaigns from anywhere in the country."
      ],
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/optimization.jpg"
    },
    {
      title: "Marketing Intelligence",
      icon: <Move3D className="text-bharat-saffron" size={32} />,
      description: "Get digital-grade insights for your physical campaigns. Because outdoor deserves more than guesswork.",
      features: [
        "Actionable Metrics: Reach, impressions, dwell time, cost per impression—all in your hands.",
        "AR Scan Data: Track how many users interact with your AR-enhanced ads and what they do next.",
        "Performance Mapping: Geo-tag and analyze how regions and placements impact effectiveness."
      ],
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/intelligence.jpg"
    },
    {
      title: "Turn Ads into Experiences",
      icon: <Sparkles className="text-bharat-saffron" size={32} />,
      description: "With AR, every wall, billboard, or kiosk becomes a portal. Engage your audience like never before.",
      features: [
        "Scan-to-Engage: Users scan a QR code and instantly see 3D content, videos, or interactive brand messages.",
        "Immersive Product Previews: Display floating products, interactive animations, or gamified offers.",
        "Boost Engagement Metrics: Track time spent, interactions made, and conversions triggered from physical ads."
      ],
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/ar-experience.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white">
        <Hero />
      </div>
 
      {/* New Features Section - Alternating Layout */}
      <div className="relative z-0 bg-gray-800">
        <section className="py-20 px-4 md:px-20 text-center bg-gray-800">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-white max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Make Your Investments in the <span className="text-bharat-saffron">Physical World</span> Smarter
          </motion.h1>
        </section>

        {featureSections.map((section, index) => (
          <motion.section
            key={index}
            className={`py-16 px-4 md:px-20 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                {/* Image */}
                <motion.div 
                  className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    {section.icon}
                    <h2 className="text-3xl font-semibold text-white">{section.title}</h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">{section.description}</p>
                  <ul className="space-y-4">
                    {section.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        custom={i}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <span className="flex-shrink-0 mt-1 mr-3 text-bharat-saffron">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Featured Ad Spaces - Futuristic 3D Curved Carousel */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* ... (rest of the existing carousel code remains the same) ... */}
      </section>

      {/* Enquire Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => togglePopup()}
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
                onClick={() => togglePopup()}
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
                  Enquire About {selectedAdSpace?.title}
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
                  onClick={() => togglePopup()}
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
