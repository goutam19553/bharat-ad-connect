import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import AdSpaceCard, { AdSpaceProps } from "@/components/AdSpaceCard";
import { MapPin } from "lucide-react";

const AdSpaces = () => {
  const [filters, setFilters] = useState({});
  const [view, setView] = useState<"grid" | "map">("grid");
  
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
    }
  ];

  const filterAdSpaces = (filters: any) => {
    setFilters(filters);
    // In a real application, this would filter the data based on the selected filters
    // For this demo, we're just setting the filters state
    console.log("Applying filters:", filters);
  };

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
                <button className="btn-accent">
                  Load More Ad Spaces
                </button>
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <p className="text-lg text-center py-12 text-gray-800 dark:text-gray-300">
                Map view is under development. Please use the grid view to explore ad spaces.
              </p>
              {/* In a real application, we would integrate a map here */}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdSpaces;
