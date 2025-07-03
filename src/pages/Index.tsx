import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Hero from "@/components/Hero";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { Sparkles, BarChart, Radar, Eye, Move3D, MapPin, Zap, TrendingUp, Award, Building, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";

// Animation variants
const fadeInUp: Variants = {
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
    type: "Stadium",
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%2022.jpg",
    rating: 4,
    featured: true,
  },
  {
    id: 2,
    title: "Promotional Space",
    type: "Space Ad",
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%201.avif",
    rating: 4,
    featured: true,
  },
  {
    id: 3,
    title: "Exterior Train Branding",
    type: "Transit",
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps3.avif",
    rating: 4,
    featured: true,
  },
  {
    id: 4,
    title: "Water Bottle Ads",
    type: "Product Branding",
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/waterdemo.png",
    rating: 4.7,
    featured: true,
  },
  {
    id: 5,
    title: "Drone Advertising",
    type: "Digital LED Flying Drones",
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20164050.png",
    rating: 4,
    featured: true,
  },
  {
    id: 6,
    title: "Metro Station Panels",
    type: "Transit",
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20171619.png",
    rating: 4,
    featured: true,
  },
];

const Index = () => {
  // [Previous state and effect hooks remain exactly the same...]

  return (
    <div className="bg-gray-900 overflow-x-hidden">
      {/* All your existing sections remain exactly the same until the Political Campaign Section */}

      {/* Political Campaign Section - Fixed */}
      <div className="section bg-white dark:bg-gray-800">
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

            {/* Slogan Text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 backdrop-blur-md bg-white/30 dark:bg-black/40 text-black dark:text-white rounded-full shadow-lg text-center font-semibold text-sm sm:text-base">
              Scan. See. Support – Ads that Speak to Every Indian.
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
      </div>

      {/* AI/AR Design Demos */}
      <AIDesignDemo />
      <FootTrafficDemo />

      {/* How It Works */}
      <div className="relative bg-gray-900 py-20">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <HowItWorks />
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Testimonials content remains exactly the same */}
      </section>

      {/* Brands Slider */}
      <BrandSlider />
    </div>
  );
};

export default Index;
