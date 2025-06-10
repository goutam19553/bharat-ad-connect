const AIDesignDemo = () => {
  const categories = [
    {
      emoji: "👗",
      title: "Fashion & Retail",
      description: "Seasonal trends, style preferences, demographic targeting",
    },
    {
      emoji: "📱",
      title: "Technology",
      description: "Innovation focus, tech-savvy audience, feature highlights",
    },
    {
      emoji: "🛒",
      title: "FMCG Products",
      description: "Daily essentials, family-oriented messaging, value proposition",
    },
    {
      emoji: "🗳️",
      title: "Political Campaigns",
      description: "Regional messaging, voter demographics, issue-based content",
    },
    {
      emoji: "🏢",
      title: "Small Businesses & SMEs",
      description: "Localized outreach, cost-efficient branding, growth-oriented design",
    },
    {
      emoji: "🌆",
      title: "Real Estate & Construction",
      description: "High-impact visual storytelling for space, trust & locality",
    }
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

      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-6 min-w-max px-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-gray-900 border border-bharat-saffron rounded-xl p-6 shadow-lg hover:shadow-bharat-saffron/50 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-400 mb-4">{cat.description}</p>
              <ul className="text-sm text-gray-300 space-y-1 pl-4 list-disc">
                <li>Smart audience targeting</li>
                <li>Industry-specific templates</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDesignDemo;
