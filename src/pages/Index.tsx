'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AdSpaceCard } from '@/components/ad-space-card';
import { adSpaces } from '@/data/adSpaces';
import { benefits } from '@/data/benefits';
import { useEffect, useState } from 'react';

const heading = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const thrownCard = {
  hidden: {
    opacity: 0,
    x: () => Math.random() * 400 - 200,
    y: () => Math.random() * 400 - 200,
    rotate: () => Math.random() * 60 - 30,
    scale: 0.5,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  const [shuffledBenefits, setShuffledBenefits] = useState<typeof benefits>([]);

  useEffect(() => {
    // Shuffle the benefits array once on mount
    const shuffled = [...benefits].sort(() => 0.5 - Math.random());
    setShuffledBenefits(shuffled);
  }, []);

  return (
    <main className="p-6">
      <motion.h1
        variants={heading}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold mb-6 text-center"
      >
        Discover Ad Spaces Across India
      </motion.h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {adSpaces.map((adSpace, index) => (
          <motion.div
            key={adSpace.id}
            custom={index}
            variants={thrownCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AdSpaceCard adSpace={adSpace} />
          </motion.div>
        ))}
      </section>

      <motion.h2
        variants={heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-4 text-center"
      >
        Why Choose Our Platform?
      </motion.h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {shuffledBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={thrownCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </section>

      <motion.div
        variants={heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/explore">
          <Button size="lg" className="text-white bg-blue-600 hover:bg-blue-700">
            Explore More <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
