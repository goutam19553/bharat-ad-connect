import { X } from "lucide-react";
import { AdSpaceProps } from "./AdSpaceCard";

interface ARPreviewProps {
  adSpace: AdSpaceProps;
  onClose: () => void;
}

const ARPreview = ({ adSpace, onClose }: ARPreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 text-center relative shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Under Construction Message */}
        <h2 className="text-2xl font-bold text-bharat-teal mb-4">
          🚧 AR Preview Coming Soon
        </h2>
        <p className="text-gray-600 mb-6">
          We’re working on something amazing! The AR Preview feature for <span className="font-semibold">{adSpace.title}</span> is currently under construction.
        </p>

        {/* Bouncing Dots Loader */}
        <div className="flex justify-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-bharat-teal rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-bharat-teal rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-bharat-teal rounded-full animate-bounce"></div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 py-2 px-6 bg-bharat-teal text-white rounded-md hover:bg-teal-700 transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ARPreview;
