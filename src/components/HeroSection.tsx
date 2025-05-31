'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToStackSection = () => {
    const section = document.getElementById('stack-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3f0087] via-[#14011d] to-[#000000] text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
      {/* Floating Stars Background */}
      <div className="absolute inset-0 bg-[url('/bg-stars.png')] bg-cover opacity-10 z-0" />

      {/* Glowing Top Layer */}
      <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-[#6f00ff]/50 to-transparent z-0" />

      {/* Social Proof Badge */}
      <motion.div
        className="relative z-10 flex items-center gap-3 mb-4 px-4 py-1 text-sm font-medium text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex -space-x-2">
          <Image src="/users/user1.jpg" alt="User 1" width={25} height={24} className="rounded-full border border-white" />
          <Image src="/users/user2.jpg" alt="User 2" width={25} height={24} className="rounded-full border border-white" />
          <Image src="/users/user3.jpg" alt="User 3" width={25} height={24} className="rounded-full border border-white" />
        </div>
        <span className="text-yellow-400">⭐ 13K</span>
        <span className="text-white/80">by real users who’ve gone farther, smoother, and happier</span>
      </motion.div>

      {/* Heading and Subtext */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight text-center bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Build Smart AI Stacks<br />with <span className="text-purple-400">StackAIGenie</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Unlock your workflow potential with intelligent AI tool recommendations and integrations.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={scrollToStackSection}
            className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
          >
            Try for free
          </button>
          <button className="px-6 py-3 rounded-full text-white/80 hover:text-white transition">
            Learn More →
          </button>
        </motion.div>
      </div>
  

      {/* Animated Gradient Wave Only */}
      <div className="absolute bottom-0 w-full overflow-hidden z-0">
        <div className="relative w-full h-60 bg-gradient-to-t from-[#3f0087]/60 to-transparent"></div>
      </div>
      
    </section>
  );
}
