import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import {
  BarChart,
  IndianRupee,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";

const AdSpaceOwners = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timeout);
  }, []);

  const benefits = [
    {
      icon: (
        <IndianRupee className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />
      ),
      title: "Maximize Revenue",
      description:
        "Turn your unused walls, buildings, and spaces into consistent revenue streams with competitive pricing.",
    },
    {
      icon: (
        <Shield className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />
      ),
      title: "Quality Advertisers",
      description:
        "We verify all advertisers to ensure your space is used by reputable brands and businesses.",
    },
    {
      icon: (
        <BarChart className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />
      ),
      title: "Market Analytics",
      description:
        "Gain insights into the value of your ad space with our location analysis tools.",
    },
    {
      icon: (
        <Clock className="h-10 w-10 text-bharat-navy dark:text-bharat-saffron" />
      ),
      title: "Hassle-Free Management",
      description:
        "We handle bookings, payments, and coordination with advertisers, making the process smooth for you.",
    },
  ];

  const spaceTypes = [
    {
      title: "Billboards & Hoardings",
      description:
        "Large format advertising spaces on highways, buildings, and high-visibility areas.",
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/1ad.png",
    },
    {
      title: "Digital Screens",
      description:
        "LED and LCD screens in commercial areas, malls, and high-traffic locations.",
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/2ad.png",
    },
    {
      title: "Building Walls & Facades",
      description: "Unused exterior walls and building facades in urban areas.",
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/3ad.png",
    },
    {
      title: "Retail & Mall Spaces",
      description:
        "Ad spaces in shopping centers, retail environments, and commercial complexes.",
      image:
        "https://raw.githubusercontent.com/goutam19553/Startup-adtech/main/public/4ad.png",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & List Your Space",
      description:
        "Register and provide details about your advertising space including location, size, and photos.",
    },
    {
      number: "02",
      title: "Valuation & Verification",
      description:
        "Our team will evaluate your space, suggest optimal pricing, and verify the details.",
    },
    {
      number: "03",
      title: "Go Live on Platform",
      description:
        "Once approved, your ad space becomes available to thousands of potential advertisers.",
    },
    {
      number: "04",
      title: "Bookings & Payments",
      description:
        "Receive booking requests, approve advertisements, and get timely payments directly to your account.",
    },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <div className="w-24 h-24 border-8 border-t-transparent border-b-transparent border-r-bharat-saffron border-l-bharat-navy rounded-full animate-spin-fast shadow-2xl" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white px-4 py-10 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Partner with Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          List your property, wall, or building and start earning with India's
          most advanced physical ad network.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800"
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold mt-4">{benefit.title}</h3>
            <p className="text-sm mt-2">{benefit.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Types of Spaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spaceTypes.map((space, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
            >
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{space.title}</h3>
              <p className="text-sm mt-1">{space.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          How It Works for Owners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-bharat-green dark:text-bharat-saffron">
                {step.number}
              </div>
              <h4 className="mt-2 font-semibold text-lg">{step.title}</h4>
              <p className="text-sm mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="mb-6 text-lg">Join our platform and monetize your space effortlessly.</p>
        <Link
          to="/signup"
          className="inline-flex items-center px-6 py-3 bg-bharat-green text-white rounded-full hover:bg-bharat-saffron transition"
        >
          Get Started <ArrowRight className="ml-2" />
        </Link>
      </section>

      <ContactForm />
    </div>
  );
};

export default AdSpaceOwners;
