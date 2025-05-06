import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bharat-navy text-white">
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
              <a href="#" className="text-gray-300 hover:text-bharat-saffron">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bharat-saffron">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bharat-saffron">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bharat-saffron">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-bharat-saffron">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ad-spaces" className="text-gray-300 hover:text-bharat-saffron">
                  Ad Spaces
                </Link>
              </li>
              <li>
                <Link to="/advertisers" className="text-gray-300 hover:text-bharat-saffron">
                  Advertisers
                </Link>
              </li>
              <li>
                <Link to="/ad-space-owners" className="text-gray-300 hover:text-bharat-saffron">
                  Ad Space Owners
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-bharat-saffron">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-bharat-saffron">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ad-spaces" className="text-gray-300 hover:text-bharat-saffron">
                  Find Ad Spaces
                </Link>
              </li>
              <li>
                <Link to="/ai-analytics" className="text-gray-300 hover:text-bharat-saffron">
                  AI Design Recommendations
                </Link>
              </li>
              <li>
                <Link to="/advertisers" className="text-gray-300 hover:text-bharat-saffron">
                  Foot Traffic Analysis
                </Link>
              </li>
              <li>
                <Link to="/ad-space-owners" className="text-gray-300 hover:text-bharat-saffron">
                  List Your Ad Space
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-bharat-saffron">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-bharat-saffron mr-2 mt-0.5" />
                <span className="text-gray-300">
                  123 Innovation Park, <br />
                  Belagavi, Karnataka 590001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-bharat-saffron mr-2" />
                <a href="tel:+918050853225, +919008404456" className="text-gray-300 hover:text-bharat-saffron">
                  +91 80508 53225 +91 90084 04456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-bharat-saffron mr-2" />
                <a href="mailto:info@aura-ad.com" className="text-gray-300 hover:text-bharat-saffron">
                  info@aura-ad.com
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
