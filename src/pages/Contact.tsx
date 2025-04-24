import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Contact Header */}
      <div className="bg-gradient-to-r from-bharat-navy to-bharat-navy/90 pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out for any questions, partnerships, or support.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm 
                title="" 
                subtitle="Fill out the form below and our team will get back to you as soon as possible."
              />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-bharat-navy" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Our Office</h3>
                    <p className="text-gray-600">
                      Innovation Park, <br />
                     Belagavi, Karnataka 590001 <br />
                    India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-bharat-navy" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+918050853225" className="hover:text-bharat-saffron">+91 80508 53225</a><br />
                      <a href="tel:+919008404456" className="hover:text-bharat-saffron">+91 9008404456</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-bharat-navy" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@the-ad-project.com" className="hover:text-bharat-saffron">info@the-ad-project.com</a><br />
                      <a href="mailto:support@the-ad-project.com" className="hover:text-bharat-saffron">support@the-ad-project.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bharat-navy/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-bharat-navy" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-heading font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-bharat-navy text-white p-3 rounded-full hover:bg-bharat-saffron transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-bharat-navy text-white p-3 rounded-full hover:bg-bharat-saffron transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-bharat-navy text-white p-3 rounded-full hover:bg-bharat-saffron transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-bharat-navy text-white p-3 rounded-full hover:bg-bharat-saffron transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.54 0h-15.08c-2.48 0-4.46 2.08-4.46 4.46v15.07c0 2.47 2.08 4.47 4.46 4.47h15.07c2.47 0 4.47-2.08 4.47-4.46v-15.08c0-2.48-2.08-4.46-4.46-4.46zm-11.45 19.54h-3.08v-9.87h3.08v9.87zm-1.54-11.23c-1 0-1.84-.82-1.84-1.84 0-1.01.83-1.84 1.84-1.84s1.84.83 1.84 1.84c0 1.02-.83 1.84-1.84 1.84zm12.99 11.23h-3.08v-4.81c0-1.15-.02-2.64-1.61-2.64-1.6 0-1.85 1.26-1.85 2.56v4.89h-3.08v-9.87h2.96v1.36h.04c.41-.78 1.41-1.61 2.91-1.61 3.12 0 3.69 2.05 3.69 4.71v5.41z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gray-50 pb-0">
        <div className="container-custom mb-8">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Our Location
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visit our office in Belagavi's tech hub, 
          </p>
        </div>
        
        {/* Map Placeholder - In a real application, this would be a Google Map or similar */}
        <div className="h-[400px] bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-medium text-gray-600 mb-2">Google Map Integration</p>
            <p className="text-gray-500">
              In a production environment, this would be an interactive map showing our office location.
            </p>
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
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, 
                please call our office directly.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">Do you have offices in other cities?</h3>
              <p className="text-gray-600">
                Currently, our main office is in Belagavi & Bengaluru, but we have representative partners 
                in Mumbai, Delhi, Hyderabad, and Chennai.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">Can I schedule a demo?</h3>
              <p className="text-gray-600">
                Absolutely! You can request a demo of our platform through the contact form or 
                by calling our office directly.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-heading font-semibold mb-3">How do I report technical issues?</h3>
              <p className="text-gray-600">
                For technical support, please email support@The Ad-Project.com with details of the issue 
                you're experiencing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
