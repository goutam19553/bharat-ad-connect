const AIIndustries = () => {
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
  ];

  return (
    <section className="bg-gray-950 py-20 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-bharat-saffron mb-4">
          Every Business, Auto-Optimized
        </h2>
        <p className="text-gray-300 text-lg">
          Our AI adapts design logic for every industry vertical — from political campaigns to fashion brands,
          FMCG to tech launches. Each category gets specialized treatment.
        </p>
      </div>

      <div className="overflow-x-auto pb-6">
        <div className="flex space-x-6 min-w-max px-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-gray-900 border border-bharat-saffron rounded-xl p-6 shadow-xl transform transition-transform duration-300 hover:rotate-[-1deg] hover:scale-[1.05] hover:shadow-bharat-saffron/60"
              style={{ perspective: "1000px" }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIIndustries;
