import { Link } from "react-router-dom";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import ContactForm from "@/components/ContactForm";
import {
  CheckCircle,
  BarChart,
  Lightbulb,
  Target,
  MapPin,
  User,
  ArrowRight,
} from "lucide-react";

const Advertisers = () => {
  const benefits = [
    {
      icon: <MapPin className="h-10 w-10 text-bharat-saffron" />,
      title: "Exclusive Prime Ad Spaces",
      description:
        "Unlock handpicked, ultra-premium advertising locations in India’s busiest metros and emerging hubs — where your brand gets unrivaled visibility.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-bharat-saffron" />,
      title: "Cutting-Edge Data Insights",
      description:
        "Harness deep footfall analytics and audience intelligence to laser-target your ads — maximizing impact, minimizing waste.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-bharat-saffron" />,
      title: "AI-Driven Creative Genius",
      description:
        "Experience design innovation with AI-powered recommendations personalized for every locale, audience, and campaign goal.",
    },
    {
      icon: <Target className="h-10 w-10 text-bharat-saffron" />,
      title: "Immersive AR Previews",
      description:
        "Visualize your ad in real-world settings before launch through stunning augmented reality — see success before you commit.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-bharat-saffron" />,
      title: "Verified Quality & Reliability",
      description:
        "Every ad space is vetted and maintained with strict quality checks, ensuring your brand shines on the best canvas possible.",
    },
    {
      icon: <User className="h-10 w-10 text-bharat-saffron" />,
      title: "Dedicated Campaign Support",
      description:
        "From ideation to installation, our expert team is your trusted partner — guiding you seamlessly at every step.",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Search & Refine",
      description:
        "Explore an extensive, curated marketplace — filter by city, size, budget, and demographics to find your perfect ad spot.",
    },
    {
      number: "02",
      title: "Visualize with AR",
      description:
        "Step into the future with our AR tool — see exactly how your ad looks in context, boosting confidence and creativity.",
    },
    {
      number: "03",
      title: "Leverage AI Insights",
      description:
        "Unlock powerful AI-driven design and placement suggestions, tailored to maximize engagement and brand recall.",
    },
    {
      number: "04",
      title: "Seamless Booking & Launch",
      description:
        "Book your spot in a few clicks, and collaborate with our trusted printing & installation partners for flawless execution.",
    },
  ];

  return (
    <div className="transition-colors duration-300">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/95 pt-36 pb-20 text-white">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6 drop-shadow-lg">
                Revolutionize Your Outdoor Advertising <br />
                <span className="text-bharat-saffron">with Bharat-Ad</span>
              </h1>
              <p className="text-2xl md:text-2xl text-gray-300 mb-10 max-w-xl leading-relaxed tracking-wide">
                Discover a new era of advertising excellence — premium ad
                spaces, AI-powered designs, and immersive AR previews tailored
                to India’s vibrant cities and audiences.
              </p>
              <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/ad-spaces"
                  className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  aria-label="Find Ad Spaces"
                >
                  Find Your Perfect Ad Space
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-bharat-navy hover:bg-gray-100 font-semibold py-4 px-8 rounded-md shadow-md transition duration-300"
                  aria-label="Contact Us"
                >
                  Talk to Our Experts
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://source.unsplash.com/featured/?billboard,city,advertising"
                alt="Vibrant outdoor advertising in urban setting"
                className="rounded-3xl shadow-2xl object-cover max-h-[480px] w-full"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 bg-bharat-saffron/30 rounded-full p-4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="section bg-white dark:bg-gray-900 py-20">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
              Why Bharat-Ad? Unlock Game-Changing Benefits
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bharat-Ad blends cutting-edge technology with unmatched local
              expertise to put your brand in the spotlight — wherever your
              audience goes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                tabIndex={0}
                aria-label={`Benefit: ${benefit.title}`}
              >
                <div className="mb-5 text-bharat-saffron group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-bharat-saffron transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
              How Bharat-Ad Works: Your Journey to Advertising Mastery
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A seamless, intuitive process powered by smart tech and expert
              support — designed to get your message seen and remembered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg relative z-20 h-full transition-transform hover:-translate-y-2 duration-300 cursor-default">
                  <div className="text-6xl font-extrabold text-bharat-saffron opacity-15 absolute top-4 right-6 select-none pointer-events-none">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 right-[-2rem] transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-10 w-10 text-bharat-teal animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Design Section */}
      <section className="section bg-white dark:bg-gray-900 py-20">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              Next-Level AI-Powered Design Optimization
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Let Bharat-Ad’s intelligent algorithms analyze every angle — from
              location nuances to audience preferences — delivering designs
              crafted to captivate and convert.
            </p>
          </div>

          <AIDesignDemo />

          <div className="mt-14 text-center">
            <Link
              to="/ad-spaces"
              className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Ad Spaces with AI Designs
            </Link>
          </div>
        </div>
      </section>

      {/* Foot Traffic Analysis */}
      <section className="section bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              Data-Driven Foot Traffic Analysis — Precision Targeting
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Dive deep into pedestrian and vehicle flow data to uncover the
              perfect moments and places for your brand to shine brightest.
            </p>
          </div>

          <FootTrafficDemo />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white dark:bg-gray-900 py-20">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-heading font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
                Ready to Elevate Your Brand’s Presence?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
                Connect with our passionate team and discover how Bharat-Ad’s
                innovative ad platform, backed by AI and AR technology, can
                transform your advertising strategy and amplify your impact.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl mb-12 shadow-inner">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-gray-900 dark:text-white">
                  Trusted by Industry Leaders Across Sectors
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
                  {[
                    "Retail",
                    "Real Estate",
                    "Technology",
                    "Finance",
                    "Entertainment",
                    "Hospitality",
                  ].map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-3 font-medium"
                    >
                      <CheckCircle className="h-6 w-6 text-bharat-teal" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertisers;
