'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const tools = [
  { icon: '/icons/whatsapp.png', x: -120, y: -80 },
  { icon: '/icons/zoom.png', x: -140, y: 0 },
  { icon: '/icons/slack.png', x: -120, y: 80 },
  { icon: '/icons/hubspot.png', x: 120, y: -80 },
  { icon: '/icons/notion.png', x: 140, y: 0 },
  { icon: '/icons/salesforce.png', x: 120, y: 80 }
];

export default function IntegrationMapSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ff00cc';
    ctx.lineWidth = 1.5;
    tools.forEach((tool) => {
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(canvas.width / 2 + tool.x, canvas.height / 2 + tool.y);
      ctx.stroke();
    });
  }, []);

  return (
    <section className="relative px-4 py-32 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-sm text-purple-400 uppercase mb-2">AI Integrations</p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Connect Your <span className="text-pink-400">Stack</span> with Your Favorite <span className="text-purple-300">Tools</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Our AI stack integrates seamlessly with your existing platforms — enabling smarter workflows with drag-and-drop ease.
        </p>
      </div>

      <div className="relative h-[400px] w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        {/* Central Node */}
        <div className="z-10 w-20 h-20 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
          <Image src="/icons/genie-core.png" alt="Core" width={40} height={40} />
        </div>

        {/* Surrounding Nodes */}
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="absolute w-14 h-14 bg-[#121212] border border-white/10 rounded-full flex items-center justify-center shadow-md"
            style={{
              left: `calc(50% + ${tool.x}px)`,
              top: `calc(50% + ${tool.y}px)`
            }}
          >
            <Image src={tool.icon} alt={`Tool ${idx}`} width={24} height={24} />
          </div>
        ))}
      </div>
    </section>
  );
}
