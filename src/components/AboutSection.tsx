'use client';

import Image from 'next/image';


export default function AboutSection() {
  return (
    <section className="relative  py-20 px-6 sm:px-16 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <div className="z-10 w-80 h-80 flex items-center justify-center">
            <Image
              src="/images/about.png"
              alt="StackGenie Logo"
              width={580}
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
            StackAIGenie is an intelligent platform that helps you build the perfect AI tool stack for any use case—whether it is marketing, development, research, or automation. With a drag-and-drop interface and smart recommendations, StackGenie makes it effortless to visualize, customize, and connect AI tools tailored to your specific workflow.
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Designed for both individuals and teams, our platform simplifies complex decisions by comparing features, pricing, and integrations—helping you go from idea to implementation in minutes.
          </p>

          <button className="mt-4 px-6 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
}