import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, TrendingUp, Eye, Award, Building, Star, X } from "lucide-react";

// Placeholder components - you should replace these with your actual components
const Hero = () => (
  <div className="container mx-auto px-4 py-32 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      Revolutionizing <span className="text-amber-400">Outdoor</span> Advertising
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
    >
      India's first AI-powered marketplace connecting advertisers with premium ad spaces
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row justify-center gap-4"
    >
      <Link 
        to="/advertisers" 
        className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
      >
        For Advertisers
      </Link>
      <Link 
        to="/space-owners" 
        className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
      >
        For Space Owners
      </Link>
    </motion.div>
  </div>
);

const ContactForm = () => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
    <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
    <form className="space-y-4">
      <div>
        <label className="block mb-2">Name</label>
        <input type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700" />
      </div>
      <div>
        <label className="block mb-2">Email</label>
        <input type="email" className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700" />
      </div>
      <div>
        <label className="block mb-2">Message</label>
        <textarea className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700 h-32"></textarea>
      </div>
      <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
        Submit
      </button>
    </form>
  </div>
);

interface AdSpaceProps {
  id: number;
  title: string;
  location: string;
  city: string;
  type: string;
  size: string;
  price: number;
  image: string;
  rating: number;
  featured?: boolean;
  impressions?: string;
}

const AdSpaceCard = ({ adSpace }: { adSpace: AdSpaceProps }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden group">
        <div className="relative overflow-hidden h-48">
          <img 
            src={adSpace.image} 
            alt={adSpace.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {adSpace.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              Featured
            </div>
          )}
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
              onClick={() => setShowPopup(true)}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
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
                onClick={() => setShowPopup(false)}
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
                  This feature is currently under development. We're working hard to make it available soon!
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
                  onClick={() => setShowPopup(false)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 w-full"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const AIDesignDemo = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            AI-Powered Design
          </span>{" "}
          Assistance
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our AI analyzes your brand and location to recommend the perfect ad design
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Design Recommendations</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Upload your logo and let our AI suggest designs optimized for your selected ad space.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-4">
                  <Zap className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Color Optimization</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">AI selects colors that stand out at your location</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-4">
                  <Eye className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Readability Analysis</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Ensures your message is clear at a distance</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-4">
                  <TrendingUp className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Performance Predictions</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Estimates engagement based on design choices</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center">
            <div className="text-center">
              <div className="w-64 h-64 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">AI Design Preview</span>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium">
                Try Design Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FootTrafficDemo = () => (
  <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Foot Traffic
          </span>{" "}
          Analytics
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Make data-driven decisions with our proprietary foot traffic analysis
        </p>
      </div>
      
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Location Insights</h3>
            <p className="text-gray-300 mb-6">
              Our platform provides detailed analytics about pedestrian and vehicle traffic patterns at each ad location.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Peak Hours</span>
                  <span className="font-semibold text-white">8-10 AM, 5-7 PM</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" 
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Daily Impressions</span>
                  <span className="font-semibold text-white">12,500+</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" 
                    style={{ width: '65%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Demographic Mix</span>
                  <span className="font-semibold text-white">18-35: 68%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" 
                    style={{ width: '68%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-8 flex items-center justify-center">
            <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-64 h-64 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Traffic Heatmap</span>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium">
                  View Demo Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BrandSlider = () => {
  const brands = [
    { name: "Ola", logo: "https://via.placeholder.com/150x60?text=Ola" },
    { name: "UrbanClap", logo: "https://via.placeholder.com/150x60?text=UrbanClap" },
    { name: "Zomato", logo: "https://via.placeholder.com/150x60?text=Zomato" },
    { name: "Swiggy", logo: "https://via.placeholder.com/150x60?text=Swiggy" },
    { name: "Paytm", logo: "https://via.placeholder.com/150x60?text=Paytm" },
    { name: "Flipkart", logo: "https://via.placeholder.com/150x60?text=Flipkart" },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-500 dark:text-gray-400 mb-8">Trusted by leading brands</h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite]">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <img src={brand.logo} alt={brand.name} className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Browse Spaces",
      description: "Explore our curated selection of premium ad spaces across India"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "AR Preview",
      description: "Visualize your ad in the actual location using augmented reality"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Design",
      description: "Get AI-powered design recommendations for your campaign"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Launch Campaign",
      description: "Book the space and launch your campaign with our support"
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        How <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">It Works</span>
      </h2>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Simple steps to launch your outdoor advertising campaign
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/10 border border-amber-500/20">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67],
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

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const testimonials = [
    {
      quote: "The Ad-Project transformed our OOH campaigns with precise targeting and stunning AR previews. Our conversion rates improved by 37%.",
      author: "Rajesh Mehta",
      company: "CMO, UrbanClap",
      rating: 5
    },
    {
      quote: "As a stadium owner, I've maximized my ad revenue by 200% using their platform. The analytics dashboard is incredibly insightful.",
      author: "Priya Singh",
      company: "VP Operations, Wankhede Stadium",
      rating: 5
    },
    {
      quote: "Their AI design recommendations helped us create our most effective campaign yet. The team understands modern advertising needs.",
      author: "Amit Patel",
      company: "Head of Marketing, Ola Cabs",
      rating: 4
    }
  ];

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
    { icon: <MapPin className="h-8 w-8 text-amber-500" />, title: "Prime Locations", description: "Access to exclusive premium ad spaces across major Indian cities." },
    { icon: <Eye className="h-8 w-8 text-amber-500" />, title: "AR Preview", description: "See exactly how your ad will look before making an investment." },
    { icon: <Zap className="h-8 w-8 text-amber-500" />, title: "AI-Powered Design", description: "Get intelligent design recommendations based on location and audience." },
    { icon: <TrendingUp className="h-8 w-8 text-amber-500" />, title: "Traffic Analysis", description: "Make data-driven decisions with our foot traffic analysis." },
  ];

  const ownerBenefits = [
    { icon: <Building className="h-8 w-8 text-blue-500" />, title: "Maximize Revenue", description: "List your ad spaces and connect with quality advertisers." },
    { icon: <Award className="h-8 w-8 text-blue-500" />, title: "Verified Advertisers", description: "We verify all advertisers to ensure quality partnerships." },
    { icon: <TrendingUp className="h-8 w-8 text-blue-500" />, title: "Data Insights", description: "Access analytics about your space's performance and value." },
    { icon: <Zap className="h-8 w-8 text-blue-500" />, title: "Seamless Management", description: "Easy-to-use platform for managing your ad inventory." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-500/90 via-amber-500/80 to-blue-900/90 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
        </div>
        <Hero />
      </div>
 
      {/* Benefits */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6"
            >
              Building the Next-Gen Ad Infrastructure for India
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-medium text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              The Ad-Project connects advertisers with ad space owners across India through our
              innovative digital marketplace powered by AI and AR technology.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Advertisers */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left text-white relative">
                <span className="relative z-10">
                  For Advertisers
                  <span className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advertiserBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                  >
                    <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/10 border border-amber-500/20">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center md:text-left">
                <Link 
                  to="/advertisers" 
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-amber-900 transition duration-300 ease-out rounded-full shadow-lg group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-amber-500 to-orange-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    For Advertisers
                  </span>
                  <span className="relative invisible">For Advertisers</span>
                </Link>
              </div>
            </motion.div>

            {/* Ad Space Owners */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-8 text-center md:text-left text-white relative">
                <span className="relative z-10">
                  For Ad Space Owners
                  <span className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ownerBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/20">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center md:text-left">
                <Link 
                  to="/ad-space-owners" 
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-blue-900 transition duration-300 ease-out rounded-full shadow-lg group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    For Ad Space Owners
                  </span>
                  <span className="relative invisible">For Ad Space Owners</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
 
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
              <AdSpaceCard key={adSpace.id} adSpace={adSpace} />
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

      {/* Political Campaign Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        
        <div className="flex flex-col justify-center items-center py-10 space-y-8 relative z-10">
          {/* Glowing Indian Flag Border Image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative border-4 rounded-2xl p-1 animate-[glowCycle_3s_linear_infinite] overflow-hidden"
            style={{
              borderImage: 'linear-gradient(to right, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%) 1',
              borderImageSlice: 1,
              maxWidth: '600px',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
            <img
              src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/BPAC_Main.png"
              alt="Political Campaign Visual"
              className="rounded-xl w-full h-auto object-cover relative z-10"
            />

            {/* Animated Slogan Text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 backdrop-blur-md bg-white/30 dark:bg-black/40 rounded-full shadow-lg text-center font-semibold text-sm sm:text-base whitespace-nowrap overflow-hidden">
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
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            href="https://political-campaign-rose.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-12 py-5 rounded-xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white font-semibold text-xl overflow-hidden group hover:scale-105 transition-transform duration-300 ease-in-out shadow-[0_0_25px_#00fff5aa]"
          >
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
          </motion.a>
        </div>
      </section>

      {/* AI/AR Design Demos */}
      <AIDesignDemo />
      <FootTrafficDemo />

      {/* How It Works */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <HowItWorks />
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Trusted By <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Industry Leaders</span>
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
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                      />
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
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Transform</span> Your Advertising?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your advertising needs
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>

      <style jsx global>{`
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes swipeGlow {
          0% {
            opacity: 0;
            transform: translateX(-100%) rotate(-45deg);
          }
          20% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
            transform: translateX(100%) rotate(-45deg);
          }
        }

        @keyframes glitchHorizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glitchLine {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }
          50% {
            opacity: 0.6;
            transform: scaleX(1);
          }
          100% {
            opacity: 0;
            transform: scaleX(0);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-gradient-x {
          animation: gradientX 6s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientX {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .film-text span {
          display: inline-block;
          opacity: 0;
          animation: wordEnter 0.6s ease-out forwards;
        }

        .film-text span:nth-child(1) { animation-delay: 0.2s; }
        .film-text span:nth-child(2) { animation-delay: 0.4s; }
        .film-text span:nth-child(3) { animation-delay: 0.6s; }
        .film-text span:nth-child(4) { animation-delay: 0.8s; }
        .film-text span:nth-child(5) { animation-delay: 1.0s; }
        .film-text span:nth-child(6) { animation-delay: 1.2s; }
        .film-text span:nth-child(7) { animation-delay: 1.4s; }
        .film-text span:nth-child(8) { animation-delay: 1.6s; }
        .film-text span:nth-child(9) { animation-delay: 1.8s; }
        .film-text span:nth-child(10) { animation-delay: 2.0s; }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }

        .animate-swipe-glow {
          animation: swipeGlow 2s infinite;
        }

        .animate-glitch-horizontal {
          animation: glitchHorizontal 3s infinite linear;
        }

        .animate-glitch-line {
          animation: glitchLine 3s infinite ease;
        }
      `}</style>
    </div>
  );
};

export default Index;
