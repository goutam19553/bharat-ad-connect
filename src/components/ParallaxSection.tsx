import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-black to-gray-900 text-white">
      <motion.div
        style={{ y, opacity }}
        className="text-center max-w-2xl px-6"
      >
        <h2 className="text-5xl font-bold mb-4">Next-Gen Advertising</h2>
        <p className="text-lg text-gray-300">
          Immerse users in futuristic outdoor ad-tech with AI + AR experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
