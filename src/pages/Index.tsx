import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { 
  MapPin, Zap, TrendingUp, Eye, Award, Building, 
  Users, BarChart2, Shield, Clock, Globe, 
  Smartphone, Sun, Moon, ArrowRight
} from "lucide-react";
import HowItWorks from "@/components/HowItWorks";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number = 0) => ({
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

interface HolographicCardProps {
  children: React.ReactNode;
  index?: number;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ children, index = 0 }) => (
  <motion.div
    custom={index}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative p-6 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-600/20 shadow-lg overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Theme management
  useEffect(() => {
    const isDark =
      localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  // Featured ad spaces data
  const featuredAdSpaces: AdSpaceProps[] = [
    {
      id: 1,
      title: "Indian Cricket Stadium",
      location: "M.Chinnaswamy Stadium",
      city: "Bengaluru",
      type: "Stadium",
      size: "60 x 20 feet",
      price: 250000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/ps%2022.jpg",
      rating: 4.8,
      impressions: "2M+/month",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/ps%201.avif",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/ps3.avif",
      rating: 4,
      featured: true,
    },
  ];

  // Benefits data
  const advertiserBenefits = [
    { 
      icon: <MapPin className="h-8 w-8" />, 
      title: "Prime Locations", 
      description: "Access to exclusive premium ad spaces across major Indian cities.",
      gradient: "from-purple-500 to-blue-500"
    },
    { 
      icon: <Eye className="h-8 w-8" />, 
      title: "AR Preview", 
      description: "See exactly how your ad will look before making an investment.",
      gradient: "from-blue-500 to-green-500"
    },
    { 
      icon: <Zap className="h-8 w-8" />, 
      title: "AI-Powered Design", 
      description: "Get intelligent design recommendations based on location and audience.",
      gradient: "from-green-500 to-yellow-500"
    },
    { 
      icon: <TrendingUp className="h-8 w-8" />, 
      title: "Traffic Analysis", 
      description: "Make data-driven decisions with our foot traffic analysis.",
      gradient: "from-yellow-500 to-red-500"
    },
  ];

  const ownerBenefits = [
    { 
      icon: <Building className="h-8 w-8" />, 
      title: "Maximize Revenue", 
      description: "List your ad spaces and connect with quality advertisers.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Award className="h-8 w-8" />, 
      title: "Verified Advertisers", 
      description: "We verify all advertisers to ensure quality partnerships.",
      gradient: "from-pink-500 to-red-500"
    },
    { 
      icon: <TrendingUp className="h-8 w-8" />, 
      title: "Data Insights", 
      description: "Access analytics about your space's performance and value.",
      gradient: "from-red-500 to-orange-500"
    },
    { 
      icon: <Zap className="h-8 w-8" />, 
      title: "Seamless Management", 
      description: "Easy-to-use platform for managing your ad inventory.",
      gradient: "from-orange-500 to-yellow-500"
    },
  ];

  // Features data
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Nationwide Coverage",
      description: "Access ad spaces across all major Indian cities and towns",
      tech: "Real-time geospatial mapping"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Integration",
      description: "Manage your campaigns on-the-go with our mobile app",
      tech: "Cross-platform compatibility"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "End-to-end encrypted payments and contracts",
      tech: "Blockchain verification"
    }
  ];

  const testimonials = [
    {
      quote: "The Ad-Project helped us find the perfect ad spaces for our national campaign. The AI recommendations saved us weeks of research!",
      author: "Rahul Sharma",
      company: "Marketing Director, UrbanClap",
      rating: 5
    },
    {
      quote: "As a small business owner, I never thought I could afford premium ad spaces. The Ad-Project made it possible with their affordable options.",
      author: "Priya Patel",
      company: "Founder, SpiceCraft",
      rating: 4
    },
    {
      quote: "The AR preview feature is revolutionary. We could visualize our ads before booking, eliminating all guesswork.",
      author: "Vikram Mehta",
      company: "CMO, Kudio",
      rating: 5
    }
  ];

  return (
    <div className={`overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
      {/* 3D Animated Background */}
      <div className="fixed inset-0 -z-10 opacity-20 dark:opacity-40">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh>
              <icosahedronGeometry args={[2, 1]} />
              <meshStandardMaterial color="#3b82f6" wireframe />
            </mesh>
          </Float>
        </Canvas>
      </div>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed z-50 top-6 right-6 p-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-lg border border-white/20 dark:border-gray-600/20"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-indigo-800" />
        )}
      </motion.button>

      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-purple-600 mix-blend-overlay filter blur-3xl animate-float2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Transform Your Advertising
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI and spatial computing to revolutionize your outdoor campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Advertisers Column */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                variants={fadeInUp}
                className="text-3xl font-bold mb-8 text-center lg:text-left flex items-center gap-3"
              >
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Zap className="h-8 w-8 text-white" />
                </span>
                For Advertisers
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advertiserBenefits.map((benefit, index) => (
                  <HolographicCard key={index} index={index}>
                    <div className={`p-1 rounded-full bg-gradient-to-r ${benefit.gradient} w-fit mb-4`}>
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </HolographicCard>
                ))}
              </div>
            </motion.div>

            {/* Space Owners Column */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                variants={fadeInUp}
                className="text-3xl font-bold mb-8 text-center lg:text-left flex items-center gap-3"
              >
                <span className="bg-gradient-to-r from-green-500 to-teal-600 p-2 rounded-lg">
                  <Building className="h-8 w-8 text-white" />
                </span>
                For Space Owners
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ownerBenefits.map((benefit, index) => (
                  <HolographicCard key={index} index={index + 4}>
                    <div className={`p-1 rounded-full bg-gradient-to-r ${benefit.gradient} w-fit mb-4`}>
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </HolographicCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-purple-600 mix-blend-overlay filter blur-3xl animate-float2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Cutting-Edge Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI and immersive technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8 h-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full w-fit mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                      {feature.tech}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad
