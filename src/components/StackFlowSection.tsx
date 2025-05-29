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
        icon: '/icons/jasper.png',
        name: 'Jasper AI',
        desc: 'Writes compelling product copy and descriptions'
      },
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
      <div className="max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 shadow-[inset_10px_10px_30px_#0a0a0a,_inset_-10px_-10px_30px_#1a1a1a] bg-[#0e0e0e]">
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
            <div className="bg-gradient-to-b from-[#1b1b1b] to-[#101010] rounded-xl p-6 md:p-10 flex flex-col gap-6 items-center w-full max-w-2xl border border-white/10 relative shadow-2xl">

              {/* Toggle Switch (moved here) */}
              {/* <div className="relative flex justify-center mb-6">
                <div className="relative flex bg-white/10 rounded-full p-1 w-full max-w-xs overflow-hidden">
                  {useCases.map((useCase, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`flex-1 px-6 py-2 rounded-full text-sm font-medium transition relative z-10 ${
                        i === activeIndex ? 'text-white' : 'text-purple-300'
                      }`}
                    >
                      {useCase.name}
                    </button>
                  ))}
                  <motion.div
                    className="absolute top-1 bottom-1 left-1 w-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-0"
                    initial={false}
                    animate={{ x: `${activeIndex * 100}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
              </div> */}

              <div className="text-sm text-center bg-white/5 border border-white/10 rounded-full px-4 py-2 text-orange-300 font-medium">
                ✨ Smart AI Stack Recommendation
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm w-full">
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white-900 font-bold">🔍 Stack Analyzer</h4>
                  <p>Matches tools to your use case</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-blue-300 font-medium text-lg">⚙️ AI Workflow</h4>
                  <p>Auto-connects tool APIs</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-green-300 font-medium">🔗 Connect AI Tools Visually</h4>
                  <p>Visualize your workflow like a mind map.</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-red-300 font-medium">📦 Pre-built Stacks</h4>
                  <p>Marketing, development, design, productivity, and more.</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-purple-300 font-medium">💰 Smart Pricing Insights</h4>
                  <p>AI tools based on usage, cost, and free-tier access before adding to your stack</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-pink-300 font-medium">📈 ROI Estimation</h4>
                  <p>Insights into time saved, conversion gains, and estimated ROI for each stack suggestion.</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-cyan-300 font-medium">🔒 One-click Deploy</h4>
                  <p>Stack instantly with API keys and pre-configured automation flows.</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                  <h4 className="text-orange-300 font-medium">📊 Analytics Dashboard</h4>
                  <p>Track performance, usage stats, and team activity.</p>
                </div>
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