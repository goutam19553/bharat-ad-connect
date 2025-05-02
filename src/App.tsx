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
