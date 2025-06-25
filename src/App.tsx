import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import AIAnalytics from "./pages/AIAnalytics";
import DesktopNotice from "./components/DesktopNotice"; // ✅ Imported

// Lazy-loaded pages
const AdSpaces = lazy(() => import("./pages/AdSpaces"));
const Advertisers = lazy(() => import("./pages/Advertisers"));
const AdSpaceOwners = lazy(() => import("./pages/AdSpaceOwners"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdSpaceUpload = lazy(() => import("./pages/AdSpaceUpload"));
const GovernmentSupportPage = lazy(() => import("./pages/GovernmentSupportPage"));

const queryClient = new QueryClient();

// 👇 Create the "Earn Money" section as a separate component
const EarnMoneySection = () => {
  const navigate = useNavigate();

  return (
    <section className="earn-money-section text-center bg-white dark:bg-gray-900 py-20 px-6 overflow-hidden mb-0">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
          Got an Empty Wall or any other ad space? Start Earning Today
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          You can earn money by simply uploading your wall spaces. Advertisers will pay to place ads on your walls, allowing you to earn a passive income from your property. It's that simple!
        </p>
        <button
          onClick={() => navigate("/ad-space-upload")} 
          className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-lg font-semibold rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105 animate-pulse"
        >
          Upload Now
        </button>
      </div>
    </section>
  );
};

// 👇 Updated "Government Support" section
const GovernmentSupportSection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 dark:bg-gray-900 py-20 overflow-hidden mt-0">
      <div className="bg-[#1B3A4B] text-white rounded-xl shadow-lg px-6 py-10 md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FDCB6E] mb-2">
            Empowering Transparent Governance
          </h2>
          <p className="text-gray-300 max-w-xl">
            Helping local governments eliminate illegal hoardings, boost tax revenue, and plan smarter cities through our AI-powered AdTech platform.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            onClick={() => navigate("/government-support")}
            className="inline-block bg-[#FDCB6E] text-[#1B3A4B] font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
          >
            Know More →
          </button>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto rounded-xl shadow-2xl p-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Have questions, suggestions, or want to collaborate? Reach out and we’ll get back to you.
        </p>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};


const App = () => {
  // ✅ Force dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <DesktopNotice /> {/* ✅ Fancy popup here */}
          <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Routes>
                  <Route
                    path="/"
                    element={(
                      <>
                        <Index />          
                        <EarnMoneySection />
                        <GovernmentSupportSection />
                        <ContactForm />
                      </>
                    )}
                  />
                  <Route path="/ad-space-owners" element={<AdSpaceOwners />} />
                  <Route path="/ad-spaces" element={<AdSpaces />} />
                  <Route path="/ai-analytics" element={<AIAnalytics />} />
                  <Route path="/advertisers" element={<Advertisers />} />
                  <Route path="/ad-space-upload" element={<AdSpaceUpload />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/government-support" element={<GovernmentSupportPage />} />
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
