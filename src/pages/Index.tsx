import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import HowItWorks from "@/components/HowItWorks";
import { 
  MapPin, Zap, TrendingUp, Eye, Award, Building,
  ArrowRight, Star, Globe, Smartphone, Shield
} from "lucide-react";

const HeroHeading = () => {
  return (
    <h2
      className="text-2xl md:text-5xl font-bold mb-6 px-4 pt-4 pb-3 text-center
                 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400
                 bg-[length:200%_200%] bg-clip-text text-transparent
                 animate-gradient-x drop-shadow-md tracking-tight leading-tight"
    >
      Building the Next-Gen Ad Infrastructure for India
    </h2>
  );
};
  
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/ps%2022.jpg",
      rating: 4.8,
      impressions: "2M+ monthly impressions",
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
      rating: 4.2,
      impressions: "500K+ monthly impressions",
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
      rating: 4.5,
      impressions: "1.2M+ daily impressions",
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
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/waterdemo.png", // ← Replace with your image later
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/Annotation%202025-04-24%20164050.png",
      rating: 4.3,
      impressions: "Custom audience targeting",
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
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/Annotation%202025-04-24%20171619.png",
      rating: 4.6,
      impressions: "1.5M+ daily impressions",
      featured: true,
    },
  ];

  const advertiserBenefits = [
    { 
      icon: <MapPin className="h-8 w-8 text-orange-500" />, 
      title: "Prime Locations", 
      description: "Access to exclusive premium ad spaces across major Indian cities.",
      gradient: "from-orange-500 to-amber-500"
    },
    { 
      icon: <Eye className="h-8 w-8 text-blue-500" />, 
      title: "AR Preview", 
      description: "See exactly how your ad will look before making an investment.",
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      icon: <Zap className="h-8 w-8 text-purple-500" />, 
      title: "AI-Powered Design", 
      description: "Get intelligent design recommendations based on location and audience.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <TrendingUp className="h-8 w-8 text-green-500" />, 
      title: "Traffic Analysis", 
      description: "Make data-driven decisions with our foot traffic analysis.",
      gradient: "from-green-500 to-teal-500"
    },
  ];

  const ownerBenefits = [
    { 
      icon: <Building className="h-8 w-8 text-indigo-500" />, 
      title: "Maximize Revenue", 
      description: "List your ad spaces and connect with quality advertisers.",
      gradient: "from-indigo-500 to-blue-500"
    },
    { 
      icon: <Award className="h-8 w-8 text-amber-500" />, 
      title: "Verified Advertisers", 
      description: "We verify all advertisers to ensure quality partnerships.",
      gradient: "from-amber-500 to-yellow-500"
    },
    { 
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />, 
      title: "Data Insights", 
      description: "Access analytics about your space's performance and value.",
      gradient: "from-teal-500 to-emerald-500"
    },
    { 
      icon: <Zap className="h-8 w-8 text-pink-500" />, 
      title: "Seamless Management", 
      description: "Easy-to-use platform for managing your ad inventory.",
      gradient: "from-pink-500 to-rose-500"
    },
  ];

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
    <div className="overflow-hidden">
      {/* 3D Animated Background */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh>
              <icosahedronGeometry args={[2, 1]} />
              <meshStandardMaterial color="#3b82f6" wireframe />
            </mesh>
          </Float>
        </Canvas>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-500 to-blue-800 text-white">
        <Hero />
      </div>

      {/* Benefits Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500 mix-blend-overlay filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-blue-600 mix-blend-overlay filter blur-3xl animate-float2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <HeroHeading />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bharat-Ad connects advertisers with ad space owners through our innovative digital marketplace powered by AI and AR technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Advertisers Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.h3 
                variants={fadeInUp}
                className="text-3xl font-bold mb-8 text-center lg:text-left flex items-center gap-3 text-white"
              >
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                  <Zap className="h-8 w-8 text-white" />
                </span>
                For Advertisers
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advertiserBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative bg-gray-800/80 p-6 rounded-xl backdrop-blur-md border border-gray-700 group overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${benefit.gradient} w-fit mb-4`}>
                        {benefit.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link 
                  to="/advertisers" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  For Advertisers <ArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Space Owners Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.h3 
                variants={fadeInUp}
                className="text-3xl font-bold mb-8 text-center lg:text-left flex items-center gap-3 text-white"
              >
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                  <Building className="h-8 w-8 text-white" />
                </span>
                For Space Owners
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ownerBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    custom={index + 4}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative bg-gray-800/80 p-6 rounded-xl backdrop-blur-md border border-gray-700 group overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${benefit.gradient} w-fit mb-4`}>
                        {benefit.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link 
                  to="/ad-space-owners" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  For Space Owners <ArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Ad Spaces */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500 mix-blend-overlay filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-blue-600 mix-blend-overlay filter blur-3xl animate-float2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Advanced OOH Campaign Planner
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
            <Link 
              to="/ad-spaces" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all"
            >
              View All Ad Spaces <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-normal md:leading-snug bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
  Cutting-Edge Technology
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
                className="group relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8 h-full">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full w-fit mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                      {feature.tech}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI/AR Demos */}
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

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ContactForm />
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
