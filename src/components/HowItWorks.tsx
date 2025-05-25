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
    <section className="relative py-20 px-4 md:px-16 bg-gray-900 text-white overflow-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: '#111827' },
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
                  'group transition-transform duration-300 ease-in-out transform-gpu hover:scale-[1.02] hover:rotate-1 perspective-[1000px]',
                  'flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-4 rounded-2xl',
                  index % 2 === 0
                    ? 'md:flex-row-reverse text-right'
                    : 'md:flex-row text-left'
                )}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-4">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Animated Circle */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative w-16 h-16 flex items-center justify-center text-white text-xl font-bold rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"
                >
                  <div className="absolute animate-ping-slow w-full h-full rounded-full bg-blue-500 opacity-20 z-0" />
                  <div className="relative z-10">{index + 1}</div>
                </motion.div>
              </motion.div>

              {/* SVG Connector */}
              {index < steps.length - 1 && (
                <motion.svg
                  viewBox="0 0 300 200"
                  className={cn(
                    'absolute w-[300px] h-[200px] left-1/2 -translate-x-1/2',
                    index % 2 === 0 ? 'rotate-180 top-full' : 'top-full'
                  )}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: index * 0.25 }}
                  viewport={{ once: true }}
                >
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 0 Q 150 200 300 0"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
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
