import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      {/* Contact Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white dark:bg-gradient-to-r dark:from-bharat-navy dark:to-bharat-navy/90">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto dark:text-gray-300">
            We'd love to hear from you. Reach out for any questions, partnerships, or support.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold mb-6 dark:text-white">
                Send Us a Message
              </h2>
              <ContactForm 
                title="" 
                subtitle="Fill out the form below and our team will get back to you as soon as possible."
              />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-700">
              <h2 className="text-2xl font-heading font-bold mb-6 dark:text-white">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-bharat-navy dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg dark:text-white">Our Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Innovation Park, <br />
                     Belagavi, Karnataka 590001 <br />
                    India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-bharat-navy dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+918050853225" className="hover:text-bharat-saffron dark:hover:text-bharat-saffron">+91 80508 53225</a><br />
                      </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-bharat-navy dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:theadproject01@gmail.com" className="hover:text-bharat-saffron dark:hover:text-bharat-saffron">info@the-ad-project.com</a><br />
                      <a href="mailto:support@the-ad-project.com" className="hover:text-bharat-saffron dark:hover:text-bharat-saffron">support@the-ad-project.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-bharat-navy dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg dark:text-white">Working Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t dark:border-gray-600">
                <h3 className="font-heading font-semibold text-lg mb-4 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-bharat-navy text-white p-3 rounded-full hover:bg-bharat-saffron transition-colors dark:bg-bharat-navy dark:hover:bg-bharat-saffron">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-bharat-navy text-white p-3 rounded-full hover:bg-bharat-saffron transition-colors dark:bg-bharat-navy dark:hover:bg-bharat-saffron">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-bharat-navy text-white p-3 rounded-full hover:bg-bharat-saffron transition-colors dark:bg-bharat-navy dark:hover:bg-bharat-saffron">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gray-50 dark:bg-gray-800 pb-0">
        <div className="container-custom mb-8">
          <h2 className="text-3xl font-heading font-bold mb-6 dark:text-white">
            Our Location
          </h2>
          <p className="text-lg text-gray-600 mb-8 dark:text-gray-300">
            Visit our office in Belagavi's tech hub, 
          </p>
        </div>
        
        {/* Map Placeholder */}
        <div className="h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-medium text-gray-600 mb-2 dark:text-gray-300">Google Map Integration</p>
            <p className="text-gray-500 dark:text-gray-400">
              In a production environment, this would be an interactive map showing our office location.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-700">
              <h3 className="text-xl font-heading font-semibold mb-3 dark:text-white">How quickly can I expect a response?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, 
                please call our office directly.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-700">
              <h3 className="text-xl font-heading font-semibold mb-3 dark:text-white">Do you have offices in other cities?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, our main office is in Belagavi & Bengaluru, but we have representative partners 
                in Mumbai, Delhi, Hyderabad, and Chennai.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-700">
              <h3 className="text-xl font-heading font-semibold mb-3 dark:text-white">Can I schedule a tour of your office?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer office tours by appointment. Please contact us to schedule a visit.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-700">
              <h3 className="text-xl font-heading font-semibold mb-3 dark:text-white">Do you offer remote services?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, our services are available remotely, including consultations, meetings, and client support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
