import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  includeSubject?: boolean;
}

const ContactForm = ({
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
  buttonText = "Send Message",
  includeSubject = true,
}: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        subject: includeSubject ? subject : null,
        message,
      },
    ]);

    if (error) {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Message sent!",
        description: "We’ll get back to you shortly.",
      });

      setShowThankYou(true); // Show popup

      // Reset the form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    if (showThankYou) {
      const timeout = setTimeout(() => setShowThankYou(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [showThankYou]);

  return (
    <>
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 relative">
        {title && <h3 className="text-2xl font-semibold text-bharat-navy mb-2">{title}</h3>}
        {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bharat-teal"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bharat-teal"
            />
          </div>

          {includeSubject && (
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What is this regarding?"
                required
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bharat-teal"
              />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              rows={5}
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bharat-teal"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex justify-center items-center rounded-lg px-6 py-2 transition bg-bharat-teal text-white hover:bg-bharat-teal/90 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>

      {/* ✅ Thank You Popup */}
      {showThankYou && (
        <div
          onClick={() => setShowThankYou(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div className="bg-white text-center px-6 py-8 rounded-xl shadow-xl max-w-sm mx-auto animate-fadeIn">
            <h2 className="text-xl font-semibold text-bharat-navy mb-2">Thank You!</h2>
            <p className="text-gray-600">We’ve received your message and will contact you soon.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
