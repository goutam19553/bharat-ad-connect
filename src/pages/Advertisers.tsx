import { Link } from "react-router-dom";
import AIDesignDemo from "@/components/AIDesignDemo";
import FootTrafficDemo from "@/components/FootTrafficDemo";
import ContactForm from "@/components/ContactForm";
import { CheckCircle, BarChart, Lightbulb, Target, MapPin, User, ArrowRight } from "lucide-react";

const Advertisers = () => {
  const benefits = [
    {
      icon: <MapPin className="h-10 w-10 text-bharat-saffron" />,
      title: "Prime Ad Spaces",
      description: "Access exclusive advertising locations in high-traffic areas across major Indian cities."
    },
    {
      icon: <BarChart className="h-10 w-10 text-bharat-saffron" />,
      title: "Data-Driven Decisions",
      description: "Leverage foot traffic analysis and audience demographics to optimize ad placement."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-bharat-saffron" />,
      title: "AI Design Recommendations",
      description: "Get intelligent design suggestions tailored to each location and target audience."
    },
    {
      icon: <Target className="h-10 w-10 text-bharat-saffron" />,
      title: "AR Preview Technology",
      description: "See exactly how your ad will look in real-world locations before committing."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-bharat-saffron" />,
      title: "Quality Guaranteed",
      description: "All ad spaces are verified and regularly maintained to ensure quality."
    },
    {
      icon: <User className="h-10 w-10 text-bharat-saffron" />,
      title: "Dedicated Support",
      description: "Get personalized assistance from our expert team throughout your campaign."
    }
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Search & Filter",
      description: "Browse our extensive database of ad spaces, filtering by location, size, budget, and more."
    },
    {
      number: "02",
      title: "Preview with AR",
      description: "Use our AR technology to visualize how your ad will look in the selected space."
    },
    {
      number: "03",
      title: "Get AI Recommendations",
      description: "Receive AI-powered design suggestions optimized for your selected location."
    },
    {
      number: "04",
      title: "Book & Deploy",
      description: "Complete your booking online and work with our partners for printing and installation."
    }
  ];

  return (
    <div className="transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Transform Your Advertising Strategy
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Access premium outdoor ad spaces across India and leverage our AI and AR technology 
                to maximize your campaign's effectiveness.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/ad-spaces" className="btn-primary">
                  Find Ad Spaces
                </Link>
                <Link to="/contact" className="bg-white text-bharat-navy hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-all duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://source.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Outdoor Advertising" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Why Advertise With Bharat-Ad
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our innovative platform gives you a competitive edge in the outdoor advertising space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg card-hover transition-all duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes finding and booking ad spaces simple and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md relative z-10 h-full card-hover transition-all duration-300">
                  <div className="text-5xl font-bold text-bharat-saffron opacity-20 absolute top-2 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                    <ArrowRight className="h-8 w-8 text-bharat-teal" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Design Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              AI-Powered Design Optimization
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our artificial intelligence analyzes locations, audiences, and environments to create ad designs
              that drive maximum engagement and brand recall
            </p>
          </div>

          <AIDesignDemo />

          <div className="mt-12 text-center">
            <Link to="/ad-spaces" className="btn-primary">
              Find Ad Spaces to Apply AI Design
            </Link>
          </div>
        </div>
      </section>

      {/* Foot Traffic Analysis */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Data-Driven Foot Traffic Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Make informed decisions based on comprehensive pedestrian and vehicle traffic patterns
            </p>
          </div>

          <FootTrafficDemo />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-bharat-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how businesses across India have transformed their outdoor advertising strategy with Bharat-Ad
            </p>
          </div>

          {/* Testimonials Content */}
          {/* ... (no change needed here, already optimized for dark bg) */}
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Transform Your Advertising?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Get in touch with our team to learn more about our premium ad spaces and how 
                our AI and AR technology can boost your advertising effectiveness.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6 transition-all duration-300">
                <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900 dark:text-white">Our Advertisers Include:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Retail", "Real Estate", "Technology", "Finance", "Entertainment", "Hospitality"].map((industry) => (
                    <div key={industry} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="h-5 w-5 text-bharat-teal mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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
