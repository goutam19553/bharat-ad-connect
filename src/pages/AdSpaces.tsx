import { useState, useEffect } from "react";
import SearchFilter from "@/components/SearchFilter";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import { MapPin } from "lucide-react";

const AdSpaces = () => {
  const [filters, setFilters] = useState({});
  const [view, setView] = useState<"grid" | "map">("grid");
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const adSpacesData: AdSpaceProps[] = [
    {
      id: 1,
      title: "Prime Billboard - MG Road",
      location: "MG Road",
      city: "Bengaluru",
      type: "Billboard",
      size: "30 x 15 feet",
      price: 45000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/092bfbdd-50d2-411b-9914-d2734e65ebb3.jpg",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: "Auto Rickshaw Ad",
      location: "Anywhere",
      city: "Anywhere",
      type: "Rickshaw Full Wrap and screen",
      size: "10 x 10 feet",
      price: 1000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/auto.png",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: "Drone Advertising",
      location: "Anywhere",
      city: "Anywhere",
      type: "Digital LED Flying Drones",
      size: "20 x 10 feet",
      price: 8000,
      image: "",
      rating: 4,
      featured: true
    },
    {
      id: 3,
      title: "Metro Station Panels",
      location: "Rajiv Chowk Metro",
      city: "New Delhi",
      type: "Transit",
      size: "15 x 8 feet",
      price: 25000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Annotation%202025-04-24%20171619.png",
      rating: 4,
      featured: true
    },
    {
      id: 4,
      title: "Mall Entrance Display",
      location: "Phoenix Marketcity",
      city: "Mumbai",
      type: "Mall",
      size: "12 x 8 feet",
      price: 32000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ad%20space%201_4_11zon.jpg",
      rating: 4
    },
    {
      id: 5,
      title: "Highway Billboard",
      location: "NH-8",
      city: "Jaipur",
      type: "Billboard",
      size: "40 x 20 feet",
      price: 35000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ad%20space%202_8_11zon.jpg",
      rating: 3
    },
    {
      id: 6,
      title: "Bus Shelter Ad Space",
      location: "Anna Salai",
      city: "Chennai",
      type: "Street Furniture",
      size: "8 x 4 feet",
      price: 15000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ad%20space%203_7_11zon.jpg",
      rating: 4
    },
    {
      id: 7,
      title: "Shopping District LED",
      location: "Commercial Street",
      city: "Bengaluru",
      type: "Digital Screen",
      size: "15 x 10 feet",
      price: 28000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ad%20space%204_3_11zon.jpg",
      rating: 5
    },
    {
      id: 8,
      title: "Airport Terminal Display",
      location: "T3 Terminal",
      city: "New Delhi",
      type: "Digital Screen",
      size: "18 x 12 feet",
      price: 55000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ad%20space%205_6_11zon.jpg",
      rating: 5
    },
    {
      id: 9,
      title: "Railway Station Billboard",
      location: "Howrah Station",
      city: "Kolkata",
      type: "Billboard",
      size: "25 x 15 feet",
      price: 30000,
      image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/ad%20space%206_5_11zon.jpg",
      rating: 3
    },
   {
    id: 10,
    title: "Building Wrap - Connaught Place",
    location: "Connaught Place",
    city: "Delhi",
    type: "Building Wrap",
    size: "60 x 40 feet",
    price: 60000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/10.png",
    rating: 4,
    featured: true
  },
  {
    id: 11,
    title: "Office Elevator Screen - Manyata Tech Park",
    location: "Manyata Tech Park",
    city: "Bengaluru",
    type: "Digital Screen",
    size: "2 x 3 feet",
    price: 5000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/11.png",
    rating: 4
  },

  // 🚗 Vehicle Branding
  {
    id: 12,
    title: "Cab Wrap Advertising - Mumbai",
    location: "Mumbai",
    city: "Mumbai",
    type: "Vehicle",
    size: "Full Wrap",
    price: 7000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/12.png",
    rating: 5,
    featured: true
  },
  {
    id: 13,
    title: "Delivery Van Branding - Delhi",
    location: "Delhi",
    city: "Delhi",
    type: "Vehicle",
    size: "Side Panels",
    price: 8000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/13.png",
    rating: 4
  },

  // 🏬 Retail & Point of Sale
  {
    id: 14,
    title: "In-Store Digital Kiosk - Big Bazaar",
    location: "Koramangala",
    city: "Bengaluru",
    type: "Retail",
    size: "6 x 4 feet",
    price: 10000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/14.png",
    rating: 4
  },
  {
    id: 15,
    title: "Supermarket Checkout Display - Reliance Fresh",
    location: "Andheri",
    city: "Mumbai",
    type: "Retail",
    size: "3 x 2 feet",
    price: 5000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/15.png",
    rating: 3
  },

  // 🏥 Institutional Ads
  {
    id: 16,
    title: "Hospital Waiting Area Screen - Apollo Hospitals",
    location: "Greams Road",
    city: "Chennai",
    type: "Institutional",
    size: "5 x 3 feet",
    price: 12000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/16.png",
    rating: 4
  },
  {
    id: 17,
    title: "University Campus Billboard - Delhi University",
    location: "North Campus",
    city: "Delhi",
    type: "Institutional",
    size: "20 x 10 feet",
    price: 20000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/17.png",
    rating: 4
  },

  // 🏟️ Event & Experience Based
  {
    id: 18,
    title: "Stadium LED Screen - Eden Gardens",
    location: "Eden Gardens",
    city: "Kolkata",
    type: "Event-Based",
    size: "40 x 20 feet",
    price: 75000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/18.png",
    rating: 5,
    featured: true
  },
  {
    id: 19,
    title: "Cinema Pre-Roll Ad - PVR Cinemas",
    location: "Phoenix Marketcity",
    city: "Bengaluru",
    type: "Event-Based",
    size: "Full Screen",
    price: 15000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/19.png",
    rating: 4
  },

  // 🏖️ Tourism & Crowd Hotspots
  {
    id: 20,
    title: "Beachside Hoarding - Juhu Beach",
    location: "Juhu Beach",
    city: "Mumbai",
    type: "Tourism",
    size: "30 x 15 feet",
    price: 25000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/20.png",
    rating: 4
  },
  {
    id: 21,
    title: "Pilgrimage Center Wall Wrap - Varanasi",
    location: "Kashi Vishwanath Temple",
    city: "Varanasi",
    type: "Tourism",
    size: "25 x 10 feet",
    price: 20000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/21.png",
    rating: 4
  },

  // 🏙️ Smart City & Digital Infra
  {
    id: 22,
    title: "Smart Pole Digital Banner - Chennai",
    location: "Anna Salai",
    city: "Chennai",
    type: "Smart City",
    size: "10 x 5 feet",
    price: 18000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/22.png",
    rating: 5,
    featured: true
  },
  {
    id: 23,
    title: "Digital Bus Queue Shelter - Nagpur",
    location: "Beltarodi",
    city: "Nagpur",
    type: "Smart City",
    size: "12 x 6 feet",
    price: 15000,
    image: "https://timesofindia.indiatimes.com/photo/121556072.cms",
    rating: 4
  },

  // ✈️ Transit Ad Variants
  {
    id: 24,
    title: "Airport Conveyor Belt Ad - IGI Airport",
    location: "Terminal 3",
    city: "Delhi",
    type: "Transit",
    size: "20 x 2 feet",
    price: 22000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/24.png",
    rating: 4
  },
  {
    id: 25,
    title: "Luggage Trolley Branding - Chhatrapati Shivaji Airport",
    location: "Terminal 2",
    city: "Mumbai",
    type: "Transit",
    size: "3 x 2 feet",
    price: 5000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/25.png",
    rating: 3
  },

  // 🧠 Future-Ready & Niche Formats
  {
    id: 26,
    title: "AR-Enabled Wall Ad - Cyber Hub",
    location: "Cyber Hub",
    city: "Gurgaon",
    type: "AR",
    size: "15 x 10 feet",
    price: 30000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/26.webp",
    rating: 5,
    featured: true
  },
  {
    id: 27,
    title: "Eco-Friendly Fabric Banner - Cubbon Park",
    location: "Cubbon Park",
    city: "Bengaluru",
    type: "Eco-Friendly",
    size: "10 x 5 feet",
    price: 8000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/27.png",
    rating: 4
  },
  {
    id: 28,
    title: "Holographic Display Ad - Select Citywalk",
    location: "Select Citywalk",
    city: "Delhi",
    type: "Premium",
    size: "6 x 4 feet",
    price: 40000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/28.png",
    rating: 5
  },
  {
    id: 29,
    title: "Interactive Touch Display - Phoenix Marketcity",
    location: "Phoenix Marketcity",
    city: "Mumbai",
    type: "Premium",
    size: "5 x 3 feet",
    price: 25000,
    image: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/29.png",
    rating: 4
  }
];

  const filterAdSpaces = (filters: any) => {
    setFilters(filters);
    console.log("Applying filters:", filters);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-t-transparent border-b-transparent border-bharat-saffron rounded-full animate-spin" />
          <div className="absolute top-1 left-1 right-1 bottom-1 border-4 border-t-transparent border-b-transparent border-bharat-teal rounded-full animate-spin-slow" />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Ad Spaces Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Find the Perfect Ad Space
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through our extensive collection of premium advertising spaces across India
          </p>
        </div>
      </div>

{showPopup && (
  <div className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded shadow-md z-50 animate-fade-in">
    🔔 More Ad Spaces Loaded!
  </div>
)}
      
      {/* Search and Filters Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container-custom">
          <SearchFilter onSearch={filterAdSpaces} />
          
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <MapPin className="h-5 w-5 text-bharat-teal mr-2" />
              <span className="font-medium text-gray-800 dark:text-gray-100">Popular cities:</span>
              <div className="ml-2 space-x-2">
                {["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai"].map((city) => (
                  <button 
                    key={city}
                    className="text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-bharat-saffron hover:text-white hover:border-bharat-saffron transition-colors"
                    onClick={() => filterAdSpaces({ location: city })}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 dark:text-gray-300">View:</span>
              <div className="flex border rounded-md overflow-hidden">
                <button 
                  className={`px-3 py-1 ${view === "grid" ? "bg-bharat-navy text-white" : "bg-white dark:bg-gray-700"}`}
                  onClick={() => setView("grid")}
                >
                  Grid
                </button>
                <button 
                  className={`px-3 py-1 ${view === "map" ? "bg-bharat-navy text-white" : "bg-white dark:bg-gray-700"}`}
                  onClick={() => setView("map")}
                >
                  Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ad Spaces Listing */}
      <section className="section">
        <div className="container-custom">
          {view === "grid" ? (
            <>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-heading font-semibold text-gray-800 dark:text-white">
                  {adSpacesData.length} Ad Spaces Available
                </h2>
                <div>
                  <select className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
                    <option>Sort by: Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adSpacesData.map((adSpace) => (
                  <AdSpaceCard key={adSpace.id} adSpace={adSpace} />
                ))}
              </div>
              
             <div className="mt-8 flex justify-center">
  <button
    className="btn-accent"
    onClick={() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // hides after 3 seconds
    }}
  >
    Load More Ad Spaces
  </button>
</div>

            </>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <p className="text-lg text-center py-12 text-gray-800 dark:text-gray-300">
                Map view is under development. Please use the grid view to explore ad spaces.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdSpaces;
