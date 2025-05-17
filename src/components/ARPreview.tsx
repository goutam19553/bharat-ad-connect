import React from "react";

interface ARPreviewProps {
  onClose: () => void;
}

const ARPreview: React.FC<ARPreviewProps> = ({ onClose }) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[300px] space-y-8 bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out">
      {/* Spinner Loader */}
      <div className="w-12 h-12 border-4 border-bharat-teal border-t-transparent border-solid rounded-full animate-spin"></div>

      {/* Message */}
      <p className="text-lg font-semibold text-gray-700 text-center">
        AR Preview is currently <span className="text-bharat-teal">under construction</span>.<br />
        Please check back soon!
      </p>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="mt-2 px-6 py-2 bg-bharat-teal text-white rounded-md shadow hover:bg-teal-700 focus:outline-none transition-all duration-300"
      >
        Close
      </button>
    </div>
  );
};

export default ARPreview;
