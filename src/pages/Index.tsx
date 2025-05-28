import React from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import BrandSlider from "@/components/BrandSlider";
import { MapPin, Zap, TrendingUp, Eye, Award, Building } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";  // <-- Added import
import { motion } from "framer-motion";

const featuredAdSpaces: AdSpaceProps[] = [
  {
    id: 1,
    title: "Indian Cricket Stadium",
    location: "M.Chinnaswamy Stadium",
    city: "Bengaluru",
    type: "Stadium",
    size: "60 x 20 feet",
    price: 250000,
    image:
      "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%2022.jpg",
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
    image:
      "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps%201.avif",
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
    image:
      "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ps3.avif",
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
    image:
      "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/092bfbdd-50d2-411b-9914-d2734e65ebb3.jpg",
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
    image:
      "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20164050.png",
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
    image:
      "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20171619.png",
    rating: 4,
    featured: true,
  },
];

const advertiserBenefits = [
  {
    icon: <MapPin className="h-8 w-8 text-bharat-saffron" />,
    title: "Prime Locations",
    description: "Access to exclusive premium ad spaces across major Indian cities.",
  },
  {
    icon: <Eye className="h-8 w-8 text-bharat-saffron" />,
    title: "AR Preview",
    description: "See exactly how your ad will look before making an investment.",
  },
  {
    icon: <Zap className="h-8 w-8 text-bharat-saffron" />,
    title: "AI-Powered Design",
    description: "Get intelligent design recommendations based on location and audience.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-bharat-saffron" />,
    title: "Traffic Analysis",
    description: "Make data-driven decisions with our foot traffic analysis.",
  },
];

const ownerBenefits = [
  {
    icon: <Building className="h-8 w-8 text-bharat-navy" />,
    title: "Maximize Revenue",
    description: "List your ad spaces and connect with quality advertisers.",
  },
  {
    icon: <Award className="h-8 w-8 text-bharat-navy" />,
    title: "Verified Advertisers",
    description: "We verify all advertisers to ensure quality partnerships.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-bharat-navy" />,
    title: "Data Insights",
    description: "Access analytics about your space's performance and value.",
  },
  {
    icon: <Zap className="h-8 w-8 text-bharat-navy" />,
    title: "Seamless Management",
    description: "Easy-to-use platform for managing your ad inventory.",
  },
];

const cardFlyInVariants = {
  initial: (custom: { x: number; y: number; rotate: number }) => ({
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    scale: 0.8,
    opacity: 0,
  }),
  animate: {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
      mass: 1,
    },
  },
};

const randomPositions = [
  { x: -300, y: -200, rotate: -30 },
  { x: 300, y: -150, rotate: 25 },
  { x: -250, y: 200, rotate: 40 },
  { x: 250, y: 250, rotate: -35 },
];

// AnimatedCards Component
function AnimatedCards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {advertiserBenefits.map((benefit, i) => (
        <motion.div
          key={benefit.title}
          className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full cursor-pointer"
          custom={randomPositions[i % randomPositions.length]}
          variants={cardFlyInVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div>{benefit.icon}</div>
          <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>
          <p className="text-gray-600 mt-2">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Main page component
export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bharat-saffron to-bharat-navy/90 text-white">
        <Hero />
      </div>

      {/* Benefits */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming Outdoor Advertising in India
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bharat-Ad connects advertisers with ad space owners across India
              through our innovative digital marketplace powered by AI and AR
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                For Advertisers
              </h3>
              {/* Replace static grid with animated cards here */}
              <AnimatedCards />
              <div className="mt-6 text-center md:text-left">
                <Link to="/advertisers" className="btn-primary">
                  For Advertisers
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                For Ad Space Owners
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ownerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg"
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center md:text-left">
                <Link to="/ad-space-owners" className="btn-secondary">
                  For Owners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ad Spaces */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Ad Spaces
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredAdSpaces.map((ad) => (
              <AdSpaceCard key={ad.id} {...ad} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <HowItWorks />
        </div>
      </section>

      {/* Demos */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Experience Our Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AIDesignDemo />
            <FootTrafficDemo />
          </div>
        </div>
      </section>

      {/* Brand Slider */}
      <section className="section bg-white dark:bg-gray-800">
        <BrandSlider />
      </section>

      {/* Contact Form */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <ContactForm />
      </section>
    </div>
  );
}
