import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Ad Spaces", href: "/ad-spaces" },
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "Advertisers", href: "/advertisers" },
    { name: "Ad Space Owners", href: "/ad-space-owners" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Animated Logo */}
        <Link to="/" className="relative overflow-hidden whitespace-nowrap">
          <h1 className="logo-animate">The Ad-Project</h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-bharat-saffron font-semibold"
                  : "text-white hover:text-bharat-saffron"
              }`}
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.7)" }}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-white" style={{ textShadow: "0 0 6px rgba(0,0,0,0.6)" }} />
            ) : (
              <Sun className="h-5 w-5 text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-white" style={{ textShadow: "0 0 6px rgba(0,0,0,0.6)" }} />
            ) : (
              <Sun className="h-5 w-5 text-yellow-400" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-white hover:text-bharat-saffron focus:outline-none"
            style={{ textShadow: "0 0 6px rgba(0,0,0,0.6)" }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 dark:bg-black dark:bg-opacity-90 shadow-lg animate-fade-in">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? "bg-bharat-saffron text-white"
                    : "text-white hover:bg-bharat-saffron hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
