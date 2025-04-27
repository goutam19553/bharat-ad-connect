import { Link } from "react-router-dom";

const ARSolutions = () => {
  return (
    <div className="bg-gray-900 text-white dark:bg-white dark:text-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white dark:text-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Augmented Reality (AR) Advertising Solutions
              </h1>
              <p className="text-gray-300 dark:text-black mb-8">
                Transform your outdoor advertising with cutting-edge AR experiences. Engage your audience like never before!
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://your-image-source-here.jpg" 
                alt="AR Example" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AR Advertising Examples */}
      <section className="section bg-gray-800 dark:bg-gray-100">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-white dark:text-black">AR Advertising Examples</h2>
            <div className="flex flex-col items-center gap-6">
              <img 
                src="your-ar-example-image1.jpg" 
                alt="AR Billboard Example" 
                className="w-full max-w-3xl rounded-lg shadow-lg"
              />
              <video 
                src="your-ar-example-video1.mp4" 
                controls 
                className="w-full max-w-3xl rounded-lg shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* AR Services */}
      <section className="bg-gray-800 dark:bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8 text-white dark:text-black">Our AR Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: "AR-Enhanced Billboards",
              description: "Bring static billboards to life with interactive 3D elements and animations.",
            }, {
              title: "Interactive Wall Murals",
              description: "Transform public walls into immersive brand experiences using AR.",
            }, {
              title: "WebAR Solutions",
              description: "No app needed! Let users experience AR directly from their mobile browsers.",
            }, {
              title: "Social AR Filters",
              description: "Create custom Instagram and Snapchat filters for broader engagement.",
            }, {
              title: "AR Campaign Management",
              description: "From design to deployment, we handle the complete AR journey for your brand.",
            }].map(service => (
              <div key={service.title} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-gray-700 dark:bg-gray-300">
                <h3 className="text-xl font-heading font-bold mb-2 text-bharat-saffron">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-800 dark:bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8 text-white dark:text-black">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3 max-w-2xl mx-auto">
            <li>Choose your advertising space.</li>
            <li>We design the perfect AR experience for your campaign.</li>
            <li>Launch the AR campaign with promotions and QR codes.</li>
            <li>Analyze customer engagement with detailed analytics.</li>
          </ol>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta text-center py-16 bg-gray-800 dark:bg-gray-100">
        <h2 className="text-3xl font-heading font-bold mb-4 text-bharat-green">
          Ready to Elevate Your Advertising?
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Let's build unforgettable AR experiences together.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-bharat-saffron hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ARSolutions;
