
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AIDesignDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfter = [
    {
      title: "Urban Billboard Design",
      description: "AI optimized design for high traffic areas with improved visibility and brand recall.",
      before: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Add%20a%20heading%20(1).jpg",
      after: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Add%20a%20heading%20(2).jpg",
      improvements: [
        "Enhanced contrast for better visibility from a distance",
        "Strategic color palette based on surrounding environment",
        "Optimized text size for readability at traffic speeds",
        "Brand colors adapted for maximum impact"
      ]
    },
    {
      title: "Mall Advertisement Panel",
      description: "Location-aware design tailored for indoor mall environment and target demographics.",
      before: "https://source.unsplash.com/photo-1499951360447-b19be8fe80f5",
      after: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b",
      improvements: [
        "Visual elements optimized for mall shoppers' eye level",
        "Engagement features tailored to target demographic",
        "Color scheme complementary to mall interior design",
        "QR code placement for maximum scan conversion"
      ]
    },
    {
      title: "Transport Hub Display",
      description: "AI optimized for high footfall areas with quick message comprehension.",
      before: "https://source.unsplash.com/photo-1483058712412-4245e9b90334",
      after: "https://source.unsplash.com/photo-1581091226825-a6a2a5aee158",
      improvements: [
        "Simplified message for quick comprehension while in transit",
        "High contrast colors for visibility in varying light conditions",
        "Strategic visual hierarchy for information retention",
        "Motion elements optimized for attention capture"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfter.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfter.length) % beforeAfter.length);
  };

  const current = beforeAfter[currentSlide];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-bharat-navy text-white p-6">
        <h3 className="text-2xl font-heading font-bold">AI-Powered Design Recommendations</h3>
        <p className="mt-2">Our AI analyzes location, audience, and environment to create high-impact ad designs.</p>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-2/3">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <div className="relative">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="bg-bharat-lightgray py-2 text-center font-medium text-gray-600">Before</div>
                    <img 
                      src={current.before} 
                      alt="Before AI optimization" 
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div>
                    <div className="bg-bharat-saffron py-2 text-center font-medium text-white">After AI Optimization</div>
                    <img 
                      src={current.after} 
                      alt="After AI optimization" 
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 left-0 right-0 px-2">
                  <button 
                    onClick={prevSlide}
                    className="bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
                  >
                    <ChevronLeft className="h-8 w-8 text-bharat-navy" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="bg-white/80 hover:bg-white rounded-full p-1 shadow-md"
                  >
                    <ChevronRight className="h-8 w-8 text-bharat-navy" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-heading font-bold text-xl mb-2">{current.title}</h4>
                <p className="text-gray-600">{current.description}</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-4 h-full">
              <h4 className="font-heading font-semibold text-bharat-navy mb-3">AI-Powered Improvements</h4>
              <ul className="space-y-2">
                {current.improvements.map((improvement, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-bharat-teal mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 border-t pt-4">
                <p className="text-sm text-gray-500 italic">
                  Our AI analyzes over 50 data points including location, time of day, weather patterns, and 
                  demographic data to create designs that maximize engagement and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDesignDemo;
