import { Link } from "react-router-dom";

const ARSolutions = () => {
  return (
    <div className="bg-gray-900 text-white dark:bg-white dark:text-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Augmented Reality (AR) Advertising Solutions
              </h1>
              <p className="text-gray-300 dark:text-gray-700 mb-8">
                Transform static outdoor advertising into unforgettable digital experiences. Capture attention, tell deeper stories, and engage audiences like never before — all with the magic of AR.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-400 dark:text-gray-700">
                <li>Boost engagement rates by up to 300% with interactive experiences.</li>
                <li>Stand out in crowded urban environments and high-footfall areas.</li>
                <li>Seamlessly bridge offline locations with online conversions.</li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/Augmented_reality-Image.jpg" 
                alt="AR Example" 
                className="rounded-xl shadow-xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AR Advertising Examples */}
      <section className="section bg-gray-800 dark:bg-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-white dark:text-black">
              Real-World AR Advertising Examples
            </h2>
            <p className="text-gray-400 dark:text-gray-700 mt-4">
              See how brands are turning walls, billboards, and spaces into interactive destinations.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img 
              src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/TakeATasteNow.jpg"
              alt="AR Billboard Example" 
              className="w-full max-w-3xl rounded-lg shadow-lg hover:scale-105 transition"
            />
            <img 
              src="https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/images%20(30).jpeg"
              alt="AR Billboard Example" 
              className="w-full max-w-3xl rounded-lg shadow-lg hover:scale-105 transition"
            />
            <video 
              src="your-ar-example-video1.mp4" 
              controls 
              className="w-full max-w-3xl rounded-lg shadow-lg hover:scale-105 transition"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Our AR Services */}
      <section className="bg-gray-800 dark:bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8 text-white dark:text-black">
            Our End-to-End AR Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-gray-400 dark:text-gray-800">
            {[
              {
                title: "AR-Enhanced Billboards",
                description: "Transform traditional billboards with interactive 3D animations and digital overlays.",
              },
              {
                title: "Interactive Wall Murals",
                description: "Make city walls come alive with storytelling experiences users can interact with.",
              },
              {
                title: "WebAR Campaigns",
                description: "Instant AR activation through a simple link or QR code — no app downloads needed!",
              },
              {
                title: "Custom Social AR Filters",
                description: "Launch branded AR filters across Instagram, Facebook, and Snapchat to drive viral engagement.",
              },
              {
                title: "Complete AR Campaign Management",
                description: "From ideation and creative development to deployment and tracking — we handle it all.",
              },
              {
                title: "AR Analytics & Insights",
                description: "Measure views, interactions, time spent, and geographic spread in real-time dashboards.",
              },
            ].map(service => (
              <div
                key={service.title}
                className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition bg-gray-700 dark:bg-gray-300"
              >
                <h3 className="text-xl font-heading font-bold mb-3 text-bharat-saffron">
                  {service.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-800 dark:bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12 text-white dark:text-black">
            How We Bring AR Campaigns to Life
          </h2>
          <div className="grid gap-10 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Select Your Space",
                description: "Choose a billboard, wall, or outdoor area for AR activation.",
              },
              {
                step: "2",
                title: "Design & Storyboard",
                description: "We craft a powerful interactive experience tailored to your brand goals.",
              },
              {
                step: "3",
                title: "Deploy & Promote",
                description: "Launch the AR experience using QR codes, links, or app integrations.",
              },
              {
                step: "4",
                title: "Track & Optimize",
                description: "Analyze user engagement and optimize for even greater impact.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="text-bharat-saffron font-heading text-2xl">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white dark:text-black">{item.title}</h3>
                  <p className="text-gray-400 dark:text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative bg-gradient-to-br from-bharat-green/90 to-bharat-navy/90 py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">
            Ready to Bring Magic to Your Walls and Billboards?
          </h2>
          <p className="text-lg text-white mb-8">
            Let’s design the future of outdoor marketing — interactive, unforgettable, and results-driven.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-bharat-saffron hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ARSolutions;
