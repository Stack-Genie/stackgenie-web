'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#0d0d0d] via-[#1c0f2e] to-[#09042b] text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
      {/* Floating Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/bg-grid.svg')] bg-cover opacity-10"></div>

      {/* Gradient glow layer */}
      <div className="absolute top-[-200px] left-[50%] w-[800px] h-[800px] bg-purple-500 opacity-30 blur-3xl rounded-full -translate-x-1/2 z-0" />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          className="text-sm font-medium tracking-wider text-purple-400 uppercase mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🧞 Powered by AI
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Build Smart AI Stacks<br />with <span className="text-purple-400">StackGenie.ai</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Unlock your workflow potential with intelligent AI tool recommendations and integrations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
            Learn More
          </button> */}
        </motion.div>
      </div>

{/* Spacer for overlap */}
<div className="-mb-32 h-32" />
    </section>
  );
}
