'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import './howitworks.css';

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
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-16 bg-gray-800 text-white overflow-hidden">
      {/* 3D Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: '#1f2937' },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              random: false,
              straight: false,
              outModes: 'out',
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 z-10 relative">
        How It Works
      </h2>

      <div className="relative max-w-6xl mx-auto z-10 how-it-works-container">
        <div className="space-y-36 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  `how-it-works-step delay-${index + 1}`,
                  'flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-4',
                  'transform-gpu perspective-[1000px]',
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
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold flex items-center justify-center shadow-xl scale-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-shadow duration-300">
                  {index + 1}
                </div>
              </motion.div>

              {/* Curved SVG connector */}
              {index < steps.length - 1 && (
                <svg
                  viewBox="0 0 300 200"
                  className="how-it-works-connector"
                  style={{ top: `100%`, marginTop: '10px' }}
                >
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 0 Q 150 200 300 0"
                    className="curve-path"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
