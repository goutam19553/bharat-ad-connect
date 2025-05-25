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
    <section className="relative py-24 px-4 md:px-16 bg-gray-900 text-white overflow-hidden backdrop-blur-xl">
      {/* 3D Orbital Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: '#0f172a' },
          particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 120,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: { default: 'bounce' },
              random: true,
              straight: false,
            },
            size: { value: 1.5 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 z-10 relative"
      >
        How It Works
      </motion.h2>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="space-y-48 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className={cn(
                'group transition-all duration-300 backdrop-blur-md bg-white/10 ring-1 ring-white/10 shadow-xl rounded-2xl transform-gpu hover:scale-[1.02]',
                'flex flex-col md:flex-row items-center md:items-start gap-8 px-6 py-10',
                index % 2 === 0
                  ? 'md:flex-row-reverse text-right'
                  : 'md:flex-row text-left'
              )}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 px-2 md:px-6">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  {step.description}
                </p>
              </div>

              {/* Circle Step Icon */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative w-16 h-16 flex items-center justify-center text-white text-xl font-bold rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 shadow-2xl"
              >
                <div className="z-10">{index + 1}</div>
              </motion.div>

              {/* Scroll-triggered Nebula Aura */}
              <motion.div
                className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
