import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bharat-navy text-white overflow-hidden">
      {/* SVG Wave Top */}
      <div className="absolute top-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-24">
          <path fill="#0a192f" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,181.3C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold font-heading mb-4"
            >
              The Ad<span className="text-bharat-saffron">-Project</span>
            </motion.h3>
            <p className="text-gray-300 mb-4">
              India’s 1st PAN-India AdTech platform connecting advertisers and ad space owners across all formats.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{
                    rotateX: 15,
                    rotateY: -15,
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 200 }
                  }}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { to: "/", label: "Home" },
                { to: "/ad-spaces", label: "Ad Spaces" },
                { to: "/advertisers", label: "Advertisers" },
                { to: "/ad-space-owners", label: "Ad Space Owners" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <motion.li
                  key={item.to}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="transition-all"
                >
                  <Link to={item.to} className="hover:text-bharat-saffron">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { to: "/ad-spaces", label: "Find Ad Spaces" },
                { to: "/ai-analytics", label: "AI Planner" },
                { to: "/advertisers", label: "Foot Traffic Analysis" },
                { to: "/ad-space-owners", label: "List Your Space" },
                { to: "/contact", label: "Custom Solutions" },
              ].map((item) => (
                <motion.li
                  key={item.to}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="transition-all"
                >
                  <Link to={item.to} className="hover:text-bharat-saffron">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-bharat-saffron mr-2 mt-1" />
                Innovation Park, Belagavi, Karnataka 590001
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-bharat-saffron mr-2" />
                <a href="tel:+918050853225" className="hover:text-bharat-saffron">
                  +91 80508 53225
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-bharat-saffron mr-2" />
                <a href="mailto:info@aura-ad.com" className="hover:text-bharat-saffron">
                  info@aura-ad.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} The Ad-Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
