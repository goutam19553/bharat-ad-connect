import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const AdSpaces = lazy(() => import("./pages/AdSpaces"));
const Advertisers = lazy(() => import("./pages/Advertisers"));
const AdSpaceOwners = lazy(() => import("./pages/AdSpaceOwners"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WallUpload = lazy(() => import("./pages/WallUpload"));
const ARSolutions = lazy(() => import("./pages/ARSolutions"));

const queryClient = new QueryClient();

const App = () => {
  return (

 return (
    <>
      <Index />
      <section className="earn-money-section text-center my-8 bg-gray-100 p-8">
        <div className="content max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Earn Passive Income from Your Walls
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You can earn money by simply uploading your wall spaces. Advertisers will pay to place ads on your walls, allowing you to earn a passive income from your property. It's that simple!
          </p>
          <button
            onClick={() => navigate("/list-wall-space")}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Upload Your Wall
          </button>
        </div>
      </section>
    </>
  );
};
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/ad-space-owners" element={<AdSpaceOwners />} />
                  <Route path="/ad-spaces" element={<AdSpaces />} />
                  <Route path="/advertisers" element={<Advertisers />} />
                  <Route path="/wall-upload" element={<WallUpload />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/ar-solutions" element={<ARSolutions />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
