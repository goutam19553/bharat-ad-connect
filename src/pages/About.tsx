import { Loader2 } from "lucide-react";
import { Suspense, lazy } from "react";

const DirectorImage = lazy(() => import("@/components/DirectorImage"));

export default function About() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-teal to-gray-800 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">About Us</h1>
        <p className="text-lg mt-4 text-gray-200">
          Revolutionizing outdoor advertising with innovation and impact.
        </p>
      </div>

      {/* Content Container */}
      <section className="py-20 px-4 max-w-6xl mx-auto space-y-16">
        {/* About The Ad Project */}
        <div className="bg-gray-800 rounded-xl p-10 shadow-lg border border-bharat-teal">
          <h2 className="text-3xl font-heading font-bold mb-4 text-bharat-teal">About The Ad Project</h2>
          <p className="text-gray-300 text-lg">
            We're on a mission to revolutionize outdoor advertising in India through technology,
            transparency, and sustainable practices.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-800 rounded-xl p-10 shadow-lg border-l-4 border-bharat-teal">
          <h2 className="text-2xl font-heading font-semibold text-white mb-3">Our Mission</h2>
          <p className="text-gray-300">
            To create India's most comprehensive and transparent outdoor advertising platform that empowers
            businesses to reach their audiences effectively while supporting government initiatives for smart
            city development and revenue optimization.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-800 rounded-xl p-10 shadow-lg border-l-4 border-bharat-teal">
          <h2 className="text-2xl font-heading font-semibold text-white mb-3">Our Vision</h2>
          <p className="text-gray-300">
            To become the backbone of India's outdoor advertising ecosystem, enabling eco-friendly advertising
            at scale while fostering collaboration between private enterprises and government bodies for
            sustainable urban development.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-gray-800 rounded-xl p-10 shadow-lg border-l-4 border-bharat-teal">
          <h2 className="text-2xl font-heading font-semibold text-white mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eco-Friendly */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-bharat-teal mb-2">Eco-Friendly</h3>
              <p className="text-gray-300">
                Promoting sustainable advertising practices that reduce environmental impact while maximizing reach.
              </p>
            </div>
            {/* Innovation */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-bharat-teal mb-2">Innovation</h3>
              <p className="text-gray-300">
                Leveraging cutting-edge AI, AR, and geospatial technologies to revolutionize outdoor advertising.
              </p>
            </div>
            {/* Transparency */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-bharat-teal mb-2">Transparency</h3>
              <p className="text-gray-300">
                Building trust through transparent processes for both advertisers and government partners.
              </p>
            </div>
            {/* Scale */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-bharat-teal mb-2">Scale</h3>
              <p className="text-gray-300">
                Creating solutions that work across India's diverse urban and rural landscapes.
              </p>
            </div>
          </div>
        </div>

        {/* Director Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-16 bg-gray-800 rounded-xl p-10 shadow-xl border border-bharat-teal">
          <div className="w-full md:w-1/3">
            <Suspense fallback={<Loader2 className="animate-spin text-bharat-teal w-10 h-10" />}>
              <DirectorImage />
            </Suspense>
          </div>
          <div className="w-full md:w-2/3 text-gray-300">
            <h3 className="text-3xl font-bold mb-2 text-bharat-teal">Meet Our Director – Goutam N P</h3>
            <p className="text-lg">
              Goutam is a digital visionary with over 3 years of experience collaborating with government bodies,
              political organizations, and private companies. With a strong foundation in web development,
              digital marketing, and public outreach, he's the driving force behind The Ad Project's mission to
              digitize and democratize outdoor advertising in India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
