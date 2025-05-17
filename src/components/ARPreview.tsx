<div className="p-4 flex flex-col items-center justify-center min-h-[300px] space-y-6">
  {/* Bouncing Dots Loader */}
  <div className="flex space-x-2">
    <div className="w-4 h-4 bg-bharat-teal rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-4 h-4 bg-bharat-teal rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-4 h-4 bg-bharat-teal rounded-full animate-bounce"></div>
  </div>

  {/* Message */}
  <p className="text-lg font-semibold text-gray-700 text-center">
    AR Preview is currently <span className="text-bharat-teal">under construction</span>.<br />
    Please check back soon!
  </p>

  {/* Close Button */}
  <button
    onClick={onClose}
    className="mt-4 px-5 py-2 bg-bharat-teal text-white rounded-md shadow-md hover:bg-teal-700 transition-all"
  >
    Close
  </button>
</div>
