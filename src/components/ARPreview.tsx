
import { useState } from "react";
import { X } from "lucide-react";
import { AdSpaceProps } from "./AdSpaceCard";

interface ARPreviewProps {
  adSpace: AdSpaceProps;
  onClose: () => void;
}

const ARPreview = ({ adSpace, onClose }: ARPreviewProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  
  const adTemplates = [
    "https://source.unsplash.com/photo-1460925895917-afdab827c52f",
    "https://source.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b"
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-heading font-bold">
            AR Preview: {adSpace.title}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative mb-6">
            {/* Image with AR overlay */}
            <div className="relative">
              <img
                src={adSpace.image}
                alt={adSpace.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[70%] h-[60%] transform perspective-1000 rotate-y-[-15deg] shadow-xl">
                  <img 
                    src={adTemplates[selectedTemplate]} 
                    alt="Ad Template" 
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute inset-0 border-4 border-yellow-400 rounded opacity-70"></div>
                </div>
              </div>
            </div>
            
            {/* AR controls overlay */}
            <div className="absolute top-2 left-2 bg-black/60 text-white text-sm py-1 px-3 rounded">
              AR Preview Mode
            </div>
          </div>
          
          <h4 className="font-heading font-semibold mb-2">Choose an ad template:</h4>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {adTemplates.map((template, index) => (
              <div 
                key={index}
                className={`cursor-pointer border-2 rounded-md overflow-hidden ${
                  selectedTemplate === index ? "border-bharat-teal" : "border-transparent"
                }`}
                onClick={() => setSelectedTemplate(index)}
              >
                <img 
                  src={template} 
                  alt={`Template ${index + 1}`} 
                  className="w-full h-24 object-cover" 
                />
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-heading font-semibold mb-2">Location Details</h4>
            <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Address:</span> {adSpace.location}, {adSpace.city}</p>
            <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Type:</span> {adSpace.type}</p>
            <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Size:</span> {adSpace.size}</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Monthly Rate:</span> ₹{adSpace.price.toLocaleString('en-IN')}</p>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            <button className="btn-primary">
              Book This Space
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARPreview;
