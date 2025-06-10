// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

const AIDesignDemo = () => {
  const categories = [
    {
      emoji: "👗",
      title: "Fashion & Retail",
      description: "Seasonal trends, style preferences, demographic targeting",
      extras: ["Visual storytelling", "Fast seasonal turnaround", "Brand loyalty campaigns"],
    },
    {
      emoji: "📱",
      title: "Technology",
      description: "Innovation focus, tech-savvy audience, feature highlights",
      extras: ["Launch campaigns", "Product walkthroughs", "Digital-first media"],
    },
    {
      emoji: "🛒",
      title: "FMCG Products",
      description: "Daily essentials, family-oriented messaging, value proposition",
      extras: ["High-frequency impact", "Cost-effective ads", "Shelf conversion targeting"],
    },
    {
      emoji: "🗳️",
      title: "Political Campaigns",
      description: "Regional messaging, voter demographics, issue-based content",
      extras: ["Booth-level targeting", "Manifesto highlights", "Event mobilization"],
    },
    {
      emoji: "🏢",
      title: "Small Businesses & SMEs",
      description: "Localized outreach, cost-efficient branding, growth-oriented design",
      extras: ["Geo-local targeting", "QR-based promotions", "Walk-in conversion"],
    },
    {
      emoji: "🌆",
      title: "Real Estate & Construction",
      description: "High-impact visual storytelling for space, trust & locality",
      extras: ["Property walkthroughs", "Neighborhood appeal", "Investor engagement"],
    },
    {
      emoji: "🏥",
      title: "Healthcare & Clinics",
      description: "Trust-focused branding, local awareness, appointment conversions",
      extras: ["Doctor promos", "Health drives", "Wellness campaigns"],
    },
    {
      emoji: "🎓",
      title: "Education & EdTech",
      description: "Result-oriented messaging, parental appeal, career-building visuals",
      extras: ["Course highlights", "Exam season ads", "Result success stories"],
    },
    {
      emoji: "🎉",
      title: "Events & Entertainment",
      description: "Mass recall with vibrant visuals, ticketing push, live updates",
      extras: ["Pre-event buzz", "Influencer content", "Aftermovie engagement"],
    },
    {
      emoji: "✈️",
      title: "Travel & Hospitality",
      description: "Scenic storytelling, comfort-focused visuals, trust-building",
      extras: ["Destination promos", "Hotel features", "Tourist attraction highlights"],
    },
{
  emoji: "🏛️",
  title: "Government & Public Sector",
  description: "Transparent messaging, policy awareness, citizen engagement",
  extras: ["e-Governance campaigns", "Tax awareness", "Public outreach drives"],
},
{
  emoji: "🚚",
  title: "Logistics & Transportation",
  description: "Fleet visibility, timely deliveries, route branding",
  extras: ["Vehicle branding", "Transit media", "Highway billboards"],
},
{
  emoji: "🌱",
  title: "Agriculture & Rural",
  description: "Farmer-centric outreach, regional languages, seasonal updates",
  extras: ["Krishi Mela ads", "Fertilizer promotions", "Weather-aware targeting"],
},
{
  emoji: "💼",
  title: "Finance & Insurance",
  description: "Trust building, ROI messaging, secure visuals",
  extras: ["Loan schemes", "Policy comparison visuals", "Customer testimonials"],
},
{
  emoji: "🧑‍🍳",
  title: "Food & Beverages",
  description: "Taste appeal, vibrant imagery, influencer tie-ins",
  extras: ["Chef branding", "Sampling campaign", "Street food ads"],
},
{
  emoji: "🧘‍♂️",
  title: "Fitness & Wellness",
  description: "Healthy lifestyle push, transformation journeys",
  extras: ["Yoga center promos", "Nutrition campaigns", "Before-after stories"],
},
{
  emoji: "🛍️",
  title: "E-Commerce Platforms",
  description: "Rapid conversion CTAs, new user onboarding, trust badges",
  extras: ["App download push", "Cart recovery ads", "Coupon spotlight"],
},
{
  emoji: "🎮",
  title: "Gaming & Esports",
  description: "Dynamic visuals, thrill-based hooks, young audience focus",
  extras: ["Tournament promos", "Livestream ads", "In-game previews"],
},   
  ];

  return (
    <section className="bg-gray-950 py-20 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-bharat-saffron mb-4">
          Every Business, Auto-Optimized
        </h2>
        <p className="text-gray-300 text-lg">
          Built for Every Business — from local SMEs to nationwide brands. Our AI tailors powerful, performance-driven designs for all industry verticals: political campaigns, fashion, FMCG, tech, and beyond.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        slidesPerView={1.2}
        spaceBetween={20}
        navigation
        loop
        effect="coverflow"
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="max-w-6xl mx-auto"
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-900 border border-bharat-saffron rounded-xl p-6 shadow-xl hover:shadow-bharat-saffron/60 transition-all duration-300 transform hover:scale-[1.03]">
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-400 mb-4">{cat.description}</p>
              <ul className="text-sm text-gray-300 space-y-1 pl-4 list-disc">
                <li>Smart audience targeting</li>
                <li>Industry-specific templates</li>
                <li>Performance optimization</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-bharat-saffron mb-1">Special Features:</h4>
                <ul className="text-xs text-gray-400 list-disc pl-5 space-y-1">
                  {cat.extras.map((e, idx) => (
                    <li key={idx}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AIDesignDemo;
