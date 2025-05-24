'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: 'Sign Up & Set Goals',
    description:
      'Create an advertiser account, choose ad type (wall, hoarding, transit, drone, etc.), and define your goals like location, budget & duration.',
  },
  {
    title: 'Browse & Select Ad Spaces',
    description:
      'Explore ad spaces on an interactive map. Filter by city, foot traffic, ratings. Preview in AR or 360° before booking.',
  },
  {
    title: 'Upload Your Ad Creatives',
    description:
      'Upload image/video creatives. Use our Ad Preview Tool to simulate your ad in real-world formats, walls, hoardings, and vehicles.',
  },
  {
    title: 'Confirm & Pay',
    description:
      'Get a clear summary, projected reach, and make secure payments. Instantly receive invoice & campaign dashboard access.',
  },
  {
    title: 'Track, Analyze & Optimize',
    description:
      'Use heatmaps & AI analytics to monitor performance. Pause/edit campaigns, download reports, and boost ROI with AI suggestions.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 px-4 md:px-16 bg-[#0f0f0f] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        How It Works
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 z-0" />

        <div className="space-y-28 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                'flex flex-col md:flex-row items-center md:items-start gap-8',
                index % 2 === 0
                  ? 'md:flex-row-reverse text-right'
                  : 'md:flex-row text-left'
              )}
            >
              <div className="w-full md:w-1/2 px-4">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  {step.description}
                </p>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold flex items-center justify-center shadow-xl transform scale-110">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
