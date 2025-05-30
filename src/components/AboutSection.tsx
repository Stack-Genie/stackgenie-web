'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative  py-20 px-6 sm:px-16 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Logo with radial gradient circles */}
       <div className="relative flex justify-center">
  <div className="z-10 w-80 h-80 flex items-center justify-center">
    <Image
      src="/images/genie.png"
      alt="StackGenie Logo"
      width={480}
      height={480}
      className="object-contain"
    />
  </div>
</div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent">
            About StackGenie
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
           StackGenie is an intelligent platform designed to help users build the perfect AI tool stack
            for any workflow or use case. Using advanced recommendations and real-time integrations,
            StackGenie makes it effortless to choose, compare, and connect AI services tailored to your
            needs.
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Accessing services, our platform enables seamless voice commands, making your interaction with technology more intuitive and hands-free. Designed for both everyday consumers and businesses, our AI adapts to individual preferences, providing customized and efficient voice-driven experiences.
          </p>

          <button className="mt-4 px-6 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
}