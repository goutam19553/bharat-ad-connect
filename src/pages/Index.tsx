import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { MapPin, Zap, TrendingUp, Eye, Award, Building, Users, BarChart2, Shield, Clock, Globe, Smartphone } from "lucide-react";
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

  const stats = [
    { value: "10,000+", label: "Ad Spaces Available", icon: <MapPin className="h-6 w-6" /> },
    { value: "5,000+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { value: "85%", label: "Increase in Engagement", icon: <BarChart2 className="h-6 w-6" /> },
    { value: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> },
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8 text-bharat-saffron" />,
      title: "Nationwide Coverage",
      description: "Access ad spaces across all major Indian cities and towns"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-bharat-saffron" />,
      title: "Mobile Integration",
      description: "Manage your campaigns on-the-go with our mobile app"
    },
    {
      icon: <Shield className="h-8 w-8 text-bharat-saffron" />,
      title: "Secure Transactions",
      description: "End-to-end encrypted payments and contracts"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white mix-blend-overlay filter blur-3xl animate-float1"></div>
            <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-bharat-green mix-blend-overlay filter blur-3xl animate-float2"></div>
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-bharat-saffron mix-blend-overlay filter blur-3xl animate-float3"></div>
          </div>
        </div>
        <Hero />
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className="bg-gradient-to-br from-bharat-navy/5 to-bharat-saffron/5 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="flex justify-center mb-3 text-bharat-saffron">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-bharat-navy dark:text-white mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <div className="relative z-0 bg-gray-800">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-bharat-saffron mix-blend-overlay filter blur-3xl animate-float1"></div>
            <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-bharat-green mix-blend-overlay filter blur-3xl animate-float2"></div>
          </div>
        </div>
        <section className="section bg-transparent">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Transforming Outdoor Advertising in India
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-200 max-w-3xl mx-auto"
              >
                Bharat-Ad connects advertisers with ad space owners across India through our innovative digital marketplace powered by AI and AR technology.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Advertisers */}
              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-6 text-center md:text-left text-white"
                >
                  For Advertisers
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {advertiserBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-gray-900 bg-opacity-70 p-5 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="mb-4">{benefit.icon}</div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-6 text-center md:text-left"
                >
                  <Link to="/advertisers" className="btn-primary hover:shadow-lg hover:shadow-bharat-saffron/30 transition-all">
                    For Advertisers
                  </Link>
                </motion.div>
              </div>

              {/* Ad Space Owners */}
              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-6 text-center md:text-left text-white"
                >
                  For Ad Space Owners
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {ownerBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-gray-900 bg-opacity-70 p-5 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="mb-4">{benefit.icon}</div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-6 text-center md:text-left"
                >
                  <Link to="/ad-space-owners" className="btn-secondary hover:shadow-lg hover:shadow-bharat-navy/30 transition-all">
                    For Ad Space Owners
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Key Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bharat-navy dark:text-white">
              Why Choose Bharat-Ad?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform offers unique advantages that set us apart in the outdoor advertising industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-bharat-saffron/10 dark:bg-bharat-saffron/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-bharat-navy dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ad Spaces */}
      <section className="section relative bg-gray-50 dark:bg-gray-800 py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-bharat-saffron mix-blend-multiply filter blur-3xl animate-float1"></div>
          <div className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full bg-bharat-navy mix-blend-multiply filter blur-3xl animate-float2"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-bharat-navy dark:text-white"
            >
              Advanced OOH Campaign Planner
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We help streamline OOH Ad-campaign planning with advanced tools and proprietary data insights for precise media placement.
            </motion.p>
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

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link to="/ad-spaces" className="btn-primary hover:shadow-lg hover:shadow-bharat-saffron/30 transition-all">
              View All Ad Spaces
            </Link>
          </motion.div>
        </div>
      </section>

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

      <section className="section bg-white dark:bg-gray-800 py-16">
        <div className="flex flex-col justify-center items-center py-10 space-y-8">
          {/* Glowing Indian Flag Border Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
          </motion.div>

          {/* Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
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
          </motion.a>
        </div>
      </section>

      {/* AI/AR Design Demos */}
      <AIDesignDemo />
      <FootTrafficDemo />

      {/* How It Works Section */}
      <div className="relative z-0 bg-gray-800 py-16">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-bharat-saffron mix-blend-overlay filter blur-3xl animate-float3"></div>
          </div>
        </div>
        <section className="section bg-transparent">
          <div className="container-custom relative z-10">
            <HowItWorks />
          </div>
        </section>
      </div>
     
      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bharat-navy dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by leading brands and businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Bharat-Ad helped us find the perfect ad spaces for our national campaign. The AI recommendations saved us weeks of research!",
                author: "Rahul Sharma",
                company: "Marketing Director, UrbanClap",
                rating: 5
              },
              {
                quote: "As a small business owner, I never thought I could afford premium ad spaces. Bharat-Ad made it possible with their affordable options.",
                author: "Priya Patel",
                company: "Founder, SpiceCraft",
                rating: 4
              },
              {
                quote: "The AR preview feature is revolutionary. We could visualize our ads before booking, eliminating all guesswork.",
                author: "Vikram Mehta",
                company: "CMO, Paytm",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-bharat-navy dark:text-white">{testimonial.author}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Slider */}
      <BrandSlider />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bharat-navy to-bharat-saffron text-white">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Advertising Strategy?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Join thousands of businesses already using Bharat-Ad to reach their target audience effectively.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/get-started" 
              className="inline-block px-8 py-4 bg-white text-bharat-navy font-bold rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>

      {/* Global Styles */}
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
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-glitch-horizontal {
          animation: glitchHorizontal 5s infinite linear;
        }
        @keyframes glitchHorizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-glitch-line {
          animation: glitchLine 3s infinite ease-in-out;
        }
        @keyframes glitchLine {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 0.6; transform: translateX(100%); }
        }
        .animate-swipe-glow {
          animation: swipeGlow 4s infinite ease-in-out;
        }
        @keyframes swipeGlow {
          0% { opacity: 0; transform: translateX(-100%) rotate(-45deg); }
          20% { opacity: 0.8; }
          100% { opacity: 0; transform: translateX(100%) rotate(-45deg); }
        }
      `}</style>
    </div>
  );
};

export default Index;
