import React from 'react';

import { motion } from 'framer-motion';

export default function MainPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
        className="text-gray-950"
      >
        <h1 className="text-6xl font-extrabold leading-20">Mirea Shin</h1>
        <span className="text-3xl leading-16">Frontend Developer</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <p className="text-neutral-600 text-xl">
          Balancing user-centric design, scalable structures, and meticulous
          detail.
        </p>
      </motion.div>
    </div>
  );
}
