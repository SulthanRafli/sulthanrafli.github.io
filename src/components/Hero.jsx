import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero({ lang }) {
  const bio = {
    en: "Full Stack Developer with 6+ years of experience building and maintaining scalable web systems in the healthcare industry. Proficient in Angular, Node.js, and Go, with a strong track record of system migrations and microservices architecture.",
    id: "Full Stack Developer dengan lebih dari 6 tahun pengalaman membangun dan memelihara sistem web yang tangguh di industri kesehatan. Berpengalaman dalam Angular, Node.js, dan Go, dengan rekam jejak yang kuat dalam migrasi sistem dan arsitektur microservices."
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/20 dark:bg-rose-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Sulthan Rafli
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-4xl text-[var(--fg-muted)] font-light mb-8 flex items-center"
        >
          <span className="mr-3">{'>'}</span>
          <TypeAnimation
            key={lang} // forces re-render of typing animation when language changes
            sequence={[
              'Full Stack Developer',
              2000,
              'Problem Solver',
              2000,
              'System Integrator',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-l-2 border-gray-300 dark:border-gray-700 pl-4"
        >
          <p className="text-[var(--fg-muted)] max-w-2xl text-lg mt-4">
            {bio[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
