import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import ARPreview from "./ARPreview";

export interface AdSpaceProps {
  id: number;
  title: string;
  location: string;
  city: string;
  type: string;
  size: string;
  price: number;
  image: string;
  rating: number;
  featured?: boolean;
}

const AdSpaceCard = ({ adSpace }: { adSpace: AdSpaceProps }) => {
  const [showARPreview, setShowARPreview] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden card-hover transition-colors duration-300">
      <div className="relative">
        {adSpace.type === "Digital LED Flying Drones" ? (
          <video
            src="https://github.com/goutam19553/Startup-adtech/raw/refs/heads/main/public/videoplayback~2 (1).mp4" // Replace with your actual drone ad video URL
            controls
            autoPlay
            loop
            muted
            className="w-full h-48 object-cover"
          />
        ) : (
          <img
            src={adSpace.image}
            alt={adSpace.title}
            className="w-full h-48 object-cover"
          />
        )}
        {adSpace.featured && (
          <div className="absolute top-0 right-0 bg-bharat-saffron text-white py-1 px-3 text-xs font-bold uppercase">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-heading font-semibold text-bharat-navy dark:text-white truncate">
            {adSpace.title}
          </h3>
          <div className="bg-bharat-lightgray dark:bg-gray-700 px-2 py-1 rounded text-sm font-medium text-gray-800 dark:text-gray-200">
            {adSpace.type}
          </div>
        </div>

        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
          <MapPin className="h-4 w-4 text-bharat-teal mr-1" />
          <p className="text-sm truncate">{adSpace.location}, {adSpace.city}</p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">Size: {adSpace.size}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < adSpace.rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t dark:border-gray-700 pt-4 flex items-center justify-between">
          <p className="font-heading font-bold text-lg text-bharat-navy dark:text-white">
            ₹{adSpace.price.toLocaleString('en-IN')}<span className="text-xs text-gray-500 dark:text-gray-400 font-normal">/month</span>
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowARPreview(true)}
              className="btn-accent py-1 px-3 text-sm"
            >
              AR Preview
            </button>
            <Link
              to={`/ad-spaces/${adSpace.id}`}
              className="btn-primary py-1 px-3 text-sm flex items-center"
            >
              Details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {showARPreview && (
        <ARPreview
          adSpace={adSpace}
          onClose={() => setShowARPreview(false)}
        />
      )}
    </div>
  );
};

export default AdSpaceCard;
