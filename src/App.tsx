import { useState } from "react";
import { Toaster } from "@/components/ui/sonner"; // ✅ Use only Sonner (better notifications)
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdSpaces from "./pages/AdSpaces";
import Advertisers from "./pages/Advertisers";
import AdSpaceOwners from "./pages/AdSpaceOwners";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WallSpaceOwnerSection from "./components/WallSpaceOwnerSection";
import "keen-slider/keen-slider.min.css";
import ARSolutions from "./pages/ARSolutions";
import WallUpload from "./pages/WallUpload";

const queryClient = new QueryClient();

const App = () => {
  const [showWallUpload, setShowWallUpload] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Index />
                      {/* New Section Below Hero */}
                      <section className="earn-money-section text-center my-8 bg-gray-100 p-8">
                        <div className="content max-w-3xl mx-auto">
                          <h2 className="text-3xl font-semibold mb-4">
                            Earn Passive Income from Your Walls
                          </h2>
                          <p className="text-lg text-gray-700 mb-6">
                            You can earn money by simply uploading your wall
                            spaces. Advertisers will pay to place ads on your
                            walls, allowing you to earn a passive income from your
                            property. It's that simple!
                          </p>
                          <button
                            onClick={() => setShowWallUpload((prev) => !prev)}
                            className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
                          >
                            {showWallUpload ? "Hide Upload Form" : "Upload Your Wall"}
                          </button>
                        </div>
                      </section>

                      {/* Display Upload Form if Active */}
                      {showWallUpload && <WallUpload />}
                    </>
                  }
                />
                <Route path="/ad-space-owners" element={<AdSpaceOwners />} />
                <Route path="/ad-spaces" element={<AdSpaces />} />
                <Route path="/advertisers" element={<Advertisers />} />
                <Route path="/list-wall-space" element={<WallSpaceOwnerSection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ar-solutions" element={<ARSolutions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
