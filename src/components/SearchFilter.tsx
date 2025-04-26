import { useState } from "react";
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react";

interface SearchFilterProps {
  onSearch: (filters: any) => void;
}

const SearchFilter = ({ onSearch }: SearchFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [size, setSize] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      type,
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      size
    });
  };

  const handleClear = () => {
    setLocation("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    setSize("");
    onSearch({});
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="flex">
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder="Search by location, city or area..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-l-md border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-bharat-teal dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-bharat-teal"
              />
            </div>
            <button 
              type="submit"
              className="bg-bharat-saffron text-white px-6 rounded-r-md hover:bg-opacity-90 flex items-center justify-center"
            >
              <Search className="h-5 w-5" />
              <span className="ml-2 hidden md:inline">Search</span>
            </button>
            <button
              type="button"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="ml-2 px-3 border border-gray-300 rounded-md flex items-center hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <SlidersHorizontal className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="ml-2 hidden md:inline">Filters</span>
            </button>
          </div>
        </div>

        {isFilterOpen && (
          <div className="mt-4 p-4 border border-gray-200 rounded-md animate-fade-in dark:bg-gray-700 dark:border-gray-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading font-semibold text-gray-900 dark:text-white">Advanced Filters</h3>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Ad Space Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bharat-teal dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-bharat-teal"
                >
                  <option value="">Any Type</option>
                  <option value="Billboard">Billboard</option>
                  <option value="Digital Screen">Digital Screen</option>
                  <option value="Transit">Transit</option>
                  <option value="Street Furniture">Street Furniture</option>
                  <option value="Mall">Mall</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bharat-teal dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-bharat-teal"
                >
                  <option value="">Any Size</option>
                  <option value="Small">Small (Under 10 sq m)</option>
                  <option value="Medium">Medium (10-30 sq m)</option>
                  <option value="Large">Large (30-100 sq m)</option>
                  <option value="Extra Large">Extra Large (100+ sq m)</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Min Price (₹)</label>
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bharat-teal dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-bharat-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Max Price (₹)</label>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bharat-teal dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-bharat-teal"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
              >
                Clear All
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilter;
