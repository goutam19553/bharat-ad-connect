import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Eye,
  Zap,
  TrendingUp,
} from "react-feather"; // or your icon source

// Advertiser benefits data with icons
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

// Flying card animation variants
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

// Some random start positions for flying effect
const randomPositions = [
  { x: -300, y: -200, rotate: -30 },
  { x: 300, y: -150, rotate: 25 },
  { x: -250, y: 200, rotate: 40 },
  { x: 250, y: 250, rotate: -35 },
];

// AnimatedCards component rendering flying benefit cards
function AnimatedCards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {advertiserBenefits.map((benefit, i) => (
        <motion.div
          key={benefit.title}
          className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full cursor-pointer dark:bg-gray-700 dark:text-white"
          custom={randomPositions[i % randomPositions.length]}
          variants={cardFlyInVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div>{benefit.icon}</div>
          <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Main Index page component
export default function Index() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="section bg-white dark:bg-gray-800 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Bharat-Ad: Revolutionizing Outdoor Advertising in India
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Connecting advertisers and ad space owners across India with AI and AR technology.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Link to="/advertisers" className="btn-primary px-6 py-3 rounded-lg">
              For Advertisers
            </Link>
            <Link to="/adspaceowners" className="btn-secondary px-6 py-3 rounded-lg">
              For Owners
            </Link>
          </div>
        </div>
      </section>

      {/* Transforming Outdoor Advertising Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
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
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-gray-900 dark:text-white">
                For Advertisers
              </h3>
              <AnimatedCards />
              <div className="mt-6 text-center md:text-left">
                <Link to="/advertisers" className="btn-primary">
                  For Advertisers
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-gray-900 dark:text-white">
                For Owners
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
                Monetize your wall spaces, hoardings, and billboards by joining
                our platform and reaching thousands of advertisers nationwide.
              </p>
              <div className="text-center md:text-left">
                <Link to="/adspaceowners" className="btn-secondary">
                  For Owners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections can go here */}

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Bharat-Ad. All rights reserved.
      </footer>
    </main>
  );
}
