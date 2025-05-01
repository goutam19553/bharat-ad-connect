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
                      <div className="text-center my-8">
                        <button
                          onClick={() => setShowWallUpload((prev) => !prev)}
                          className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
                        >
                          {showWallUpload ? "Hide Upload Form" : "List Your Wall Space"}
                        </button>
                      </div>
                      {showWallUpload && <WallUpload />}
                    </>
                  }
                />
                <Route path="/ad-space-owners" element={<AdSpaceOwners />} />
                <Route path="/ad-spaces" element={<Ad
