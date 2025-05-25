'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { FaUserPlus, FaMapMarkedAlt, FaUpload, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import './howitworks.css';

const steps = [
  {
    title: 'Sign Up & Set Goals',
    description:
      'Create an advertiser account, choose ad type (wall, hoarding, transit, drone, etc.), and define your goals like location, budget & duration.',
    icon: <FaUserPlus className="text-indigo-400 text-5xl" />,
  },
  {
    title: 'Browse & Select Ad Spaces',
    description:
      'Explore ad spaces on an interactive map. Filter by city, foot traffic, ratings. Preview in AR or 360° before booking.',
    icon: <FaMapMarkedAlt className="text-indigo-400 text-5xl" />,
  },
  {
    title: 'Upload Your Ad Creatives',
    description:
      'Upload image/video creatives. Use our Ad Preview Tool to simulate your ad in real-world formats, walls, hoardings, and vehicles.',
    icon: <FaUpload className="text-indigo-400 text-5xl" />,
  },
  {
    title: 'Confirm & Pay',
    description:
      'Get a clear summary, projected reach, and make secure payments. Instantly receive invoice & campaign dashboard access.',
    icon: <FaCheckCircle className="text-indigo-400 text-5xl" />,
  },
  {
    title: 'Track, Analyze & Optimize',
    description:
      'Use heatmaps & AI analytics to monitor performance. Pause/edit campaigns, download reports, and boost ROI with AI suggestions.',
    icon: <FaChartLine className="text-indigo-400 text-5xl" />,
  },
];

export default function HowItWorks() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="how-it-works-container relative overflow-hidden bg-gray-900 py-32 px-6 sm:px-12 lg:px-24">
      {/* Stars & Parallax Floating Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: '#111827' },
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
              straight: false,
              trail: { enable: false },
            },
            orbit: {
              enable: true,
              rotation: { value: 0.3 },
              radius: 30,
              animation: { enable: true, speed: 1, sync: false },
            },
          },
        }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-32 z-10 relative bg-gradient-to-r from-indigo-400 to-fuchsia-500 text-transparent bg-clip-text"
      >
        How It Works
      </motion.h2>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="space-y-32 md:space-y-48 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={cn(
                  'group transition-transform duration-300 transform-gpu hover:scale-[1.02] hover:rotate-1 rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/10 backdrop-blur-xl',
                  'flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 bg-gradient-to-br from-white/10 via-white/5 to-white/10',
                  index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'md:flex-row text-left'
                )}
              >
                <div className="w-full md:w-1/2 px-2 sm:px-4">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 text-white">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300">{step.description}</p>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-4xl sm:text-5xl font-bold text-indigo-400"
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
