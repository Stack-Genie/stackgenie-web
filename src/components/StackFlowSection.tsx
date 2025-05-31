'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


const useCases = [
  {
    name: 'AI Product Launch Kit',
    inputTools: [
      {
        icon: '/icons/chatgpt.png',
        name: 'ChatGPT',
        desc: 'Generates product ideas and positioning'
      },
      {
        icon: '/icons/perplexity.png',
        name: 'Perplexity AI',
        desc: 'Researches market competition and FAQs'
      },
      {
        icon: '/icons/similarweb.png',
        name: 'Similarweb API',
        desc: 'Analyzes competitor traffic and trends'
      }
    ],
    outputTools: [
     
      {
        icon: '/icons/midjourney.png',
        name: 'Midjourney',
        desc: 'Generates visual illustrations for the product'
      },
      {
        icon: '/icons/webflow.png',
        name: 'Webflow',
        desc: 'Creates a responsive landing page with generated assets'
      },
      {
        icon: '/icons/mailchimp.webp',
        name: 'Mailchimp',
        desc: 'Collects user emails and sets up automation'
      }
    ]
  },
  {
    name: 'Meeting Scheduler',
    inputTools: [
      {
        icon: '/icons/google-calendar.png',
        name: 'Google Calendar',
        desc: 'Provides existing meeting data'
      },
      {
        icon: '/icons/chatgpt.svg',
        name: 'ChatGPT',
        desc: 'Understands your time preferences'
      }
    ],
    outputTools: [
      {
        icon: '/icons/zoom.svg',
        name: 'Zoom',
        desc: 'Creates video meeting links'
      },
      {
        icon: '/icons/notion.svg',
        name: 'Notion',
        desc: 'Adds notes and agenda for the meeting'
      }
    ]
  }
];

export default function StackFlowSection() {
  const [activeIndex] = useState(0);
  const uc = useCases[activeIndex];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-12 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 shadow-[inset_10px_10px_30px_#0a0a0a,_inset_-10px_-10px_30px_#1a1a1a] bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 relative"
          >
            {/* Input Tools */}
            <div className="flex flex-col items-center gap-6 z-10">
              {uc.inputTools.map((tool, idx) => (
                <div key={idx} className="bg-[#121212] p-4 rounded-xl shadow-md w-36 text-center">
                  <Image src={tool.icon} alt={tool.name} width={40} height={40} className="mx-auto mb-2" />
                  <p className="text-sm font-semibold">{tool.name}</p>
                  <p className="text-xs text-gray-400">{tool.desc}</p>
                </div>
              ))}
            </div>

            {/* Middle Brain */}
            <div className="bg-black p-0 md:p-0 flex flex-col gap-6 items-center w-full max-w-2xl  relative ">
  {/* <div className="text-sm text-center bg-white/5 border border-white/10 rounded-full px-4 py-2 text-orange-300 font-medium">
    ✨ Smart AI Stack Recommendation
  </div> */}

  <div className="z-10 w-full max-w-[640px] aspect-[1/1] flex items-center justify-center">
    <Image
      src="/images/dashboard.png"
      alt="StackGenie Workflow"
      fill
      className="object-contain rounded-lg"
    />
  </div>
</div>

            {/* Output Tools */}
            <div className="flex flex-col items-center gap-6 z-10">
              {uc.outputTools.map((tool, idx) => (
                <div key={idx} className="bg-[#121212] p-4 rounded-xl shadow-md w-36 text-center">
                  <Image src={tool.icon} alt={tool.name} width={40} height={40} className="mx-auto mb-2" />
                  <p className="text-sm font-semibold">{tool.name}</p>
                  <p className="text-xs text-gray-400">{tool.desc}</p>
                </div>
              ))}
            </div>
  
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}