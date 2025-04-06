
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import { BarChart, IndianRupee, Shield, Clock, ArrowRight } from "lucide-react";

const AdSpaceOwners = () => {
  const benefits = [
    {
      icon: <IndianRupee className="h-10 w-10 text-bharat-navy" />,
      title: "Maximize Revenue",
      description: "Turn your unused walls, buildings, and spaces into consistent revenue streams with competitive pricing."
    },
    {
      icon: <Shield className="h-10 w-10 text-bharat-navy" />,
      title: "Quality Advertisers",
      description: "We verify all advertisers to ensure your space is used by reputable brands and businesses."
    },
    {
      icon: <BarChart className="h-10 w-10 text-bharat-navy" />,
      title: "Market Analytics",
      description: "Gain insights into the value of your ad space with our location analysis tools."
    },
    {
      icon: <Clock className="h-10 w-10 text-bharat-navy" />,
      title: "Hassle-Free Management",
      description: "We handle bookings, payments, and coordination with advertisers, making the process smooth for you."
    }
  ];

  const spaceTypes = [
    {
      title: "Billboards & Hoardings",
      description: "Large format advertising spaces on highways, buildings, and high-visibility areas.",
      image: "https://source.unsplash.com/photo-1527576539890-dfa815648363"
    },
    {
      title: "Digital Screens",
      description: "LED and LCD screens in commercial areas, malls, and high-traffic locations.",
      image: "https://source.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      title: "Building Walls & Facades",
      description: "Unused exterior walls and building facades in urban areas.",
      image: "https://source.unsplash.com/photo-1493397212122-2b85dda8106b"
    },
    {
      title: "Retail & Mall Spaces",
      description: "Ad spaces in shopping centers, retail environments, and commercial complexes.",
      image: "https://source.unsplash.com/photo-1506744038136-46273834b3fb"
    }
  ];
  
  const steps = [
    {
      number: "01",
      title: "Sign Up & List Your Space",
      description: "Register and provide details about your advertising space including location, size, and photos."
    },
    {
      number: "02",
      title: "Valuation & Verification",
      description: "Our team will evaluate your space, suggest optimal pricing, and verify the details."
    },
    {
      number: "03",
      title: "Go Live on Platform",
      description: "Once approved, your ad space becomes available to thousands of potential advertisers."
    },
    {
      number: "04",
      title: "Bookings & Payments",
      description: "Receive booking requests, approve advertisements, and get timely payments directly to your account."
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Turn Your Space into Income
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                List your advertising spaces on Bharat-Ad and connect with quality advertisers from across India.
              </p>
              <Link to="/contact" className="btn-primary">
                List Your Ad Space
              </Link>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://source.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Building with advertisement space" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why List Your Space With Bharat-Ad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform connects you with verified advertisers, maximizing the value of your space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg card-hover">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ad Space Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Types of Ad Spaces We Accept
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From traditional billboards to digital displays, we connect all types of advertising spaces with potential advertisers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spaceTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5">
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-heading font-semibold mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes listing and managing your ad spaces simple and hassle-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md relative z-10 h-full card-hover">
                  <div className="text-5xl font-bold text-bharat-navy opacity-20 absolute top-2 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                    <ArrowRight className="h-8 w-8 text-bharat-navy" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-secondary">
              Start Listing Your Ad Space
            </Link>
          </div>
        </div>
      </section>
      
      {/* Pricing & Commission */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Transparent Pricing & Commission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in fair and transparent pricing that benefits ad space owners
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover lg:col-span-2">
              <h3 className="text-2xl font-heading font-semibold mb-4">Commission Structure</h3>
              <p className="text-gray-600 mb-6">
                We charge a simple, transparent commission on successful bookings. You always know exactly what you'll earn.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-heading font-medium">Standard Commission</h4>
                    <span className="text-xl font-bold text-bharat-navy">15%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    For all standard ad space bookings, we charge a 15% commission on the total booking amount.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-heading font-medium">Premium Spaces</h4>
                    <span className="text-xl font-bold text-bharat-navy">12%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    High-value premium spaces qualify for our reduced 12% commission rate.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-heading font-medium">Long-term Bookings</h4>
                    <span className="text-xl font-bold text-bharat-navy">10%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Bookings of 6+ months qualify for our reduced 10% commission rate.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-heading font-medium">Payment Schedule</h4>
                    <span className="text-md font-bold text-bharat-teal">Monthly</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Receive your payments monthly, directly to your bank account.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-bharat-navy text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-semibold mb-4">Earnings Potential</h3>
              <p className="text-gray-300 mb-6">
                Here's what you could earn by listing your space on Bharat-Ad:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-heading font-medium mb-1">Small Billboard</h4>
                  <p className="text-sm text-gray-300 mb-2">10x15 feet in Tier 2 City</p>
                  <p className="text-2xl font-bold text-bharat-saffron">₹15,000-25,000 <span className="text-sm font-normal text-gray-300">/month</span></p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-heading font-medium mb-1">Medium Billboard</h4>
                  <p className="text-sm text-gray-300 mb-2">20x30 feet in Tier 1 City</p>
                  <p className="text-2xl font-bold text-bharat-saffron">₹35,000-60,000 <span className="text-sm font-normal text-gray-300">/month</span></p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-heading font-medium mb-1">Digital Display</h4>
                  <p className="text-sm text-gray-300 mb-2">LED Screen in Metro City Mall</p>
                  <p className="text-2xl font-bold text-bharat-saffron">₹45,000-80,000 <span className="text-sm font-normal text-gray-300">/month</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about listing your ad space with Bharat-Ad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">What types of spaces can I list?</h3>
              <p className="text-gray-600">
                You can list any type of outdoor advertising space including billboards, building walls, 
                digital screens, transit spaces, mall advertising spaces, and more. If it can be used for 
                advertising, we're interested!
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">How do I determine the right price?</h3>
              <p className="text-gray-600">
                Our team will help you set the optimal price based on location, size, visibility, 
                and market rates. We provide a free valuation for all new listings.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">Do I need any special permits?</h3>
              <p className="text-gray-600">
                Legal requirements vary by location. We can guide you through any permits or documentation 
                needed, but space owners are responsible for ensuring their spaces comply with local regulations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">How do payments work?</h3>
              <p className="text-gray-600">
                We collect payment from advertisers and transfer your share directly to your bank account 
                on a monthly basis. Our commission is automatically deducted, making the process seamless.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">Can I reject certain advertisements?</h3>
              <p className="text-gray-600">
                Yes, you have the final approval on all advertisements that will be displayed on your space. 
                You can set content guidelines for your space during the listing process.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">How long are typical booking periods?</h3>
              <p className="text-gray-600">
                Booking periods vary from 1 month to 1 year, with most advertisers preferring 3-6 month 
                contracts. Longer bookings typically offer more stability for space owners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to List Your Ad Space?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get in touch with our team to start the process of listing your advertising space on Bharat-Ad. 
                We'll guide you through every step of the way.
              </p>
              
              <div className="bg-bharat-navy text-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Why Thousands of Space Owners Trust Us:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Simple and hassle-free listing process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to thousands of verified advertisers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent pricing and commission structure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reliable monthly payments directly to your account</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-bharat-saffron mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated support team for all your needs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm 
                title="List Your Ad Space"
                subtitle="Fill out this form and our team will contact you to discuss listing your space on our platform."
                buttonText="Submit Ad Space"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdSpaceOwners;
