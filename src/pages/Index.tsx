import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import Particles from "@/components/Particles";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { 
  MapPin, Zap, TrendingUp, Eye, Award, Building, 
  Users, BarChart2, Shield, Clock, Globe, 
  Smartphone, Sun, Moon, ArrowRight, Satellite
} from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import HolographicCard from "@/components/HolographicCard";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import CyberButton from "@/components/CyberButton";

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

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Theme management
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!('darkMode' in localStorage) && 
                  window.matchMedia('(prefers-color-scheme: dark)').matches;
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
    // ... (other ad spaces with added impressions data)
  ];

  // Benefits data
  const advertiserBenefits = [
    { 
      icon: <MapPin className="h-8 w-8" />, 
      title: "Prime Locations", 
      description: "Access to exclusive premium ad spaces across major Indian cities.",
      gradient: "from-purple-500 to-blue-500"
    },
    // ... (other benefits)
  ];

  // Features data
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Nationwide Coverage",
      description: "Access ad spaces across all major Indian cities and towns",
      tech: "Real-time geospatial mapping"
    },
    // ... (other features)
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

      {/* Neural Network Background */}
      <NeuralNetworkBackground />

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
        <Particles />
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

      {/* Ad Spaces Showcase */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl animate-float1"></div>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Premium Ad Spaces
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Curated selection of high-impact advertising locations
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
                className="group"
              >
                <AdSpaceCard 
                  adSpace={adSpace} 
                  className="transform group-hover:-translate-y-2 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <CyberButton>
              Explore All Spaces <ArrowRight className="ml-2" />
            </CyberButton>
          </motion.div>
        </div>
      </section>

      {/* AI/AR Demos */}
      <AIDesignDemo />
      <FootTrafficDemo />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
                Trusted By Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What our partners say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-white mix-blend-overlay filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-white mix-blend-overlay filter blur-3xl animate-float2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to Transform Your Advertising?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Join the future of outdoor advertising today
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Index;
