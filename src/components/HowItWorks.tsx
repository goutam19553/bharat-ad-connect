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
    <section className="how-it-works-container relative overflow-hidden">
      {/* Stars & Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: '#1f2937' },
          particles: {
            number: { value: 120 },
            size: { value: 1.5 },
            color: { value: '#ffffff' },
            opacity: { value: 0.15 },
            move: {
              enable: true,
              speed: 0.3,
              direction: 'none',
              outModes: 'out',
            },
          },
        }}
      />

      {/* Orbital nebula layers */}
      <div className="orbital-glow orbital-glow-1" />
      <div className="orbital-glow orbital-glow-2" />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 z-10 relative text-white"
      >
        How It Works
      </motion.h2>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="space-y-48 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className={cn(
                  'group step-glass transition-transform duration-300 transform-gpu hover:scale-[1.02] hover:rotate-1',
                  'flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-8 rounded-2xl',
                  index % 2 === 0
                    ? 'md:flex-row-reverse text-right'
                    : 'md:flex-row text-left'
                )}
              >
                {/* Text */}
                <div className="w-full md:w-1/2 px-4">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Circle */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="step-number"
                >
                  {index + 1}
                </motion.div>
              </motion.div>

              {/* SVG Constellation Line */}
              {index < steps.length - 1 && (
                <motion.svg
                  width="320"
                  height="20"
                  viewBox="0 0 320 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'absolute left-1/2 transform -translate-x-1/2',
                    index % 2 === 0
                      ? 'top-full translate-y-6'
                      : 'top-full -translate-y-6'
                  )}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                >
                  <defs>
                    <linearGradient id={`lineGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <motion.line
                    x1="0"
                    y1="10"
                    x2="320"
                    y2="10"
                    stroke={`url(#lineGradient${index})`}
                    strokeWidth="3"
                    strokeDasharray="4 8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                  />
                </motion.svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
