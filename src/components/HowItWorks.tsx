import React from 'react';
import './howitworks.css';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-container">
      {/* Step 1 */}
      <div className="how-it-works-step delay-1">
        <h2 className="step-title">1. Sign Up & Set Goals</h2>
        <p className="step-description">
          Create your advertiser account in minutes. Choose the type of campaign you want to run — Wall Ads, Hoardings, Transit Ads (Auto, Metro, Bus), Drone Advertising, or Mall Screens. Define your goals: set a budget, select campaign duration, and choose target locations by city or pin code.
        </p>
      </div>

      {/* Step 2 */}
      <div className="how-it-works-step delay-2">
        <h2 className="step-title">2. Browse & Select Ad Spaces</h2>
        <p className="step-description">
          Explore hundreds of ad spaces using our interactive map with real-time filters. Sort by location, visibility, foot traffic, ad type, ratings, and pricing. Preview spaces in immersive Augmented Reality (AR) or 360° view to visualize your ad before booking. Get data-backed recommendations powered by AI.
        </p>
      </div>

      {/* Step 3 */}
      <div className="how-it-works-step delay-3">
        <h2 className="step-title">3. Upload Your Ad Creatives</h2>
        <p className="step-description">
          Upload your static or video creatives for selected spaces. Use our Ad Preview Tool to drag, scale, and position your ad directly on walls, hoardings, or vehicles. Automatically fit to dimensions and preview in real-world mockups. Need help? Get access to our local design and printing partners.
        </p>
      </div>

      {/* Step 4 */}
      <div className="how-it-works-step delay-4">
        <h2 className="step-title">4. Confirm & Pay</h2>
        <p className="step-description">
          Review your full campaign summary including placements, timelines, estimated impressions, and reach. Make secure payments through our integrated gateway. Once confirmed, receive a digital invoice, live status dashboard, and direct support access.
        </p>
      </div>

      {/* Step 5 */}
      <div className="how-it-works-step delay-5">
        <h2 className="step-title">5. Track, Analyze & Optimize</h2>
        <p className="step-description">
          Monitor your campaign in real-time via interactive heatmaps and AI-powered analytics. Track impressions, engagement, visibility zones, and more. Edit your creatives, pause/resume campaigns, or shift locations as needed. Download custom reports and receive actionable insights to maximize ROI.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
