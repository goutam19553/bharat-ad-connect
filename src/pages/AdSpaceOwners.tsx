import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import { BarChart, IndianRupee, Shield, Clock, ArrowRight } from "lucide-react";

const AdSpaceOwners = () => {
  const benefits = [
    {
      icon: <IndianRupee className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />,
      title: "Maximize Revenue",
      description: "Turn your unused walls, buildings, and spaces into consistent revenue streams with competitive pricing."
    },
    {
      icon: <Shield className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />,
      title: "Quality Advertisers",
      description: "We verify all advertisers to ensure your space is used by reputable brands and businesses."
    },
    {
      icon: <BarChart className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />,
      title: "Market Analytics",
      description: "Gain insights into the value of your ad space with our location analysis tools."
    },
    {
      icon: <Clock className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />,
      title: "Hassle-Free Management",
      description: "We handle bookings, payments, and coordination with advertisers, making the process smooth for you."
    }
  ];

  const spaceTypes = [
    {
      title: "Billboards & Hoardings",
      description: "Large format advertising spaces on highways, buildings, and high-visibility areas.",
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/1ad.png"
    },
    {
      title: "Digital Screens",
      description: "LED and LCD screens in commercial areas, malls, and high-traffic locations.",
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/2ad.png"
    },
    {
      title: "Building Walls & Facades",
      description: "Unused exterior walls and building facades in urban areas.",
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/3ad.png"
    },
    {
      title: "Retail & Mall Spaces",
      description: "Ad spaces in shopping centers, retail environments, and commercial complexes.",
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/4ad.png"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & List Your Space",
      description: "Register and provide details about your advertising space including location, size, and photos."
    },
    {
      number: "02",
      title: "Valuation & Verification",
      description: "Our team will evaluate your space, suggest optimal pricing, and verify the details."
    },
    {
      number: "03",
      title: "Go Live on Platform",
      description: "Once approved, your ad space becomes available to thousands of potential advertisers."
    },
    {
      number: "04",
      title: "Bookings & Payments",
      description: "Receive booking requests, approve advertisements, and get timely payments directly to your account."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Turn Your Space into Income
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                List your advertising spaces on Bharat-Ad and connect with quality advertisers from across India.
              </p>
              <Link to="/contact" className="btn-primary">
                List Your Ad Space
              </Link>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://source.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Building with advertisement space" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why List Your Space With Bharat-Ad
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform connects you with verified advertisers, maximizing the value of your space
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg card-hover">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space Types */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Types of Ad Spaces We Accept
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From traditional billboards to digital displays, we connect all types of advertising spaces with potential advertisers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spaceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md card-hover">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5">
                    <img src={type.image} alt={type.title} className="w-full h-48 md:h-full object-cover" />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-heading font-semibold mb-2">{type.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes listing and managing your ad spaces simple and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md relative z-10 h-full card-hover">
                  <div className="text-5xl font-bold text-bharat-navy opacity-20 absolute top-2 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                    <ArrowRight className="h-8 w-8 text-bharat-navy dark:text-bharat-saffron" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-secondary">
              Start Listing Your Ad Space
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing, FAQ, and Contact sections continue similarly... */}
    </div>
  );
};

export default AdSpaceOwners;
