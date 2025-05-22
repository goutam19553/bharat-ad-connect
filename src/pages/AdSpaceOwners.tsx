import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import { BarChart, IndianRupee, Shield, Clock, ArrowRight } from "lucide-react";

const AdSpaceOwners = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timeout);
  }, []);

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

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <div className="w-24 h-24 border-8 border-t-transparent border-b-transparent border-r-bharat-saffron border-l-bharat-navy rounded-full animate-spin-fast shadow-2xl" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      {/* Your entire JSX content goes here (same as before) */}
      {/* ... keep all your current code after this line exactly the same */}
    </div>
  );
};

export default AdSpaceOwners;
