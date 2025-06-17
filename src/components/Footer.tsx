import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bharat-navy text-white relative overflow-hidden pt-0">
      {/* Top Wave Curve */}
      <svg
        className="w-full -mb-1"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Light mode (white) */}
        <path
          className="dark:hidden"
          fill="#ffffff"
          d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,122.7C672,139,768,117,864,117.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        {/* Dark mode (gray/navy) */}
        <path
          className="hidden dark:block"
          fill="#0f172a"
          d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,122.7C672,139,768,117,864,117.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              The Ad<span className="text-bharat-saffron">-Project</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Connecting advertisers with ad space owners across India through our innovative digital marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bharat-saffron"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/the-adz-project/" className="text-gray-300 hover:text-bharat-saffron"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-bharat-saffron">Home</Link></li>
              <li><Link to="/ad-spaces" className="text-gray-300 hover:text-bharat-saffron">Ad Spaces</Link></li>
              <li><Link to="/advertisers" className="text-gray-300 hover:text-bharat-saffron">Advertisers</Link></li>
              <li><Link to="/ad-space-owners" className="text-gray-300 hover:text-bharat-saffron">Ad Space Owners</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-bharat-saffron">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-bharat-saffron">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ad-spaces" className="text-gray-300 hover:text-bharat-saffron">Find Ad Spaces</Link></li>
              <li><Link to="/ai-analytics" className="text-gray-300 hover:text-bharat-saffron">AI Design Recommendations</Link></li>
              <li><Link to="/advertisers" className="text-gray-300 hover:text-bharat-saffron">Foot Traffic Analysis</Link></li>
              <li><Link to="/ad-space-owners" className="text-gray-300 hover:text-bharat-saffron">List Your Ad Space</Link></li>
              <li>
                <a
                  href="https://aiadplanner.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-bharat-saffron"
                >
                  AI Ad Planner
                </a>
              </li>
              <li>
                <a
                  href="https://droneads.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-bharat-saffron"
                >
                  Drone Advertisement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-bharat-saffron mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Innovation Park, <br />
                  Bengaluru, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-bharat-saffron mr-2" />
                <a href="tel:+918050853225" className="text-gray-300 hover:text-bharat-saffron">
                  +91 80508 53225
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-bharat-saffron mr-2" />
                <a href="mailto:info@aura-ad.com" className="text-gray-300 hover:text-bharat-saffron">
                  Theadproject01@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} The Ad-Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
