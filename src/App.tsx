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
import ARsolutions from "./pages/ARsolutions";  // Import the new ARsolution component
import "keen-slider/keen-slider.min.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* ✅ only one Toaster */}
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/ad-space-owners" element={<AdSpaceOwners />} />
              <Route path="/" element={<Index />} />
              <Route path="/ad-spaces" element={<AdSpaces />} />
              <Route path="/advertisers" element={<Advertisers />} />
              <Route path="/list-wall-space" element={<WallSpaceOwnerSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ar-solutions" element={<ARsolutions />} /> {/* Add the AR solutions page route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
