'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

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
    <section className="relative py-20 px-4 md:px-16 bg-gray-800 text-white overflow-visible">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: '#1e293b' }, // gray-800 hex code
          particles: {
            number: { value: 70 },
            color: { value: '#ffffff' },
            opacity: { value: 0.15 },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: 'out',
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 z-10 relative"
      >
        How It Works
      </motion.h2>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="space-y-48 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
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
                  'group transition-transform duration-300 ease-in-out transform-gpu hover:scale-[1.04] hover:rotate-1 perspective-[1000px]',
                  'flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-6 rounded-3xl bg-gradient-to-br from-gray-700/80 to-gray-800/70 shadow-xl backdrop-blur-md',
                  index % 2 === 0
                    ? 'md:flex-row-reverse text-right'
                    : 'md:flex-row text-left'
                )}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-4">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white drop-shadow-lg">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Animated Circle */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                  className="relative w-16 h-16 flex items-center justify-center text-white text-xl font-bold rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl"
                >
                  <div className="absolute animate-pulse w-20 h-20 rounded-full bg-purple-600 opacity-40 z-0 blur-xl" />
                  <div className="relative z-10">{index + 1}</div>
                </motion.div>
              </motion.div>

              {/* Dotted Line Connectors */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.3, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2 w-[320px] h-10 flex items-center justify-center',
                    index % 2 === 0 ? 'top-full translate-y-3' : 'top-full -translate-y-3'
                  )}
                >
                  <svg
                    width="320"
                    height="20"
                    viewBox="0 0 320 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="dottedPattern"
                        x="0"
                        y="0"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="5" r="1.5" fill="#8b5cf6" />
                      </pattern>
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
                      strokeLinecap="round"
                      strokeDasharray="5 15"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                    />
                    {/* Glowing dots on start and end */}
                    <circle cx="0" cy="10" r="5" fill="#8b5cf6" opacity="0.4">
                      <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="320" cy="10" r="5" fill="#3b82f6" opacity="0.4">
                      <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
