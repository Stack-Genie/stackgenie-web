'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PoweredByCircuit({ className = '' }: { className?: string }) {

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const animatedPaths = svg.querySelectorAll('.glow-path');
    animatedPaths.forEach((path) => path.classList.add('animate-glow'));
  }, []);

  return (
   <div className={`relative w-full bg-black py-32 min-h-[500px] flex justify-center items-center overflow-hidden ${className}`}>


      <Image
        src="/images/chip.png"
        alt="Chip"
        width={320}
        height={160}
        className="relative z-10"
      />

      <svg
        ref={svgRef}
        viewBox="0 0 1000 400"
        className="absolute w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LEFT PATH */}
 {/* LEFT PATH 1 (rounded bend) */}
<path
  d="M180 270 V200 Q180 190 190 190 H450"
  stroke="#333"
  strokeWidth="2"
  fill="none"
  strokeLinejoin="round"
/>
<path
  d="M180 270 V200 Q180 190 190 190 H450"
  className="glow-path"
  stroke="url(#charge1)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>

{/* LEFT PATH 2 (rounded bend) */}
<path
  d="M200 290 V230 Q200 220 210 220 H450"
  stroke="#333"
  strokeWidth="3"
  fill="none"
  strokeLinejoin="round"
/>
<path
  d="M200 290 V230 Q200 220 210 220 H450"
  className="glow-path"
  stroke="url(#charge1b)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>




        {/* RIGHT PATH */}
 <path
  d="M800 310 V200 Q800 190 790 190 H550"
  stroke="#333"
  strokeWidth="2"
  fill="none"
  strokeLinejoin="round"
/>
<path
  d="M800 310 V200 Q800 190 790 190 H550"
  className="glow-path"
  stroke="url(#charge2)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>




        {/* TOP PATH */}
      <path
  d="M480 0 V90 Q480 100 490 100 H540 V180"
  stroke="#333"
  strokeWidth="2"
  fill="none"
  strokeLinejoin="round"
/>
<path
  d="M480 0 V90 Q480 100 490 100 H540 V180"
  className="glow-path"
  stroke="url(#charge3)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>


        {/* BOTTOM PATH */}
        {/* BOTTOM PATH (center-left, was x=500 → now 480) */}
<path
  d="M500 410 V310 H510 V250"
  stroke="#333"
  strokeWidth="2"
  fill="none"
  strokeLinejoin="round"
/>
<path
   d="M500 410 V310 H510 V250"
  className="glow-path"
  stroke="url(#charge4)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>

{/* BOTTOM PATH 2 (far-left, was x=460 → now 440) */}
<path
  d="M455 455 V55"
  stroke="#333"
  strokeWidth="2"
  fill="none"
  strokeLinejoin="round"
/>
<path
  d="M455 455 V55"
  className="glow-path"
  stroke="url(#charge4a)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>

{/* NEW BOTTOM PATH 3 (further left) */}
<path
  d="M425 425 V45"
  stroke="#333"
  strokeWidth="2"
  fill="none"
  strokeLinejoin="round"
/>
<path
 d="M425 425 V45"
  className="glow-path"
  stroke="url(#charge4b)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>


{/* NEW BOTTOM PATH 4 (right of original) */}
<path
    d="M530 450 V340 H570 V100"
  stroke="#333"
  strokeWidth="2"
  fill="none"
  strokeLinejoin="round"
/>
<path
    d="M530 450 V340 H570 V100"
  className="glow-path"
  stroke="url(#charge4c)"
  strokeWidth="2"
  strokeDasharray="40 260"
  strokeDashoffset="0"
  fill="none"
  strokeLinejoin="round"
/>


        <defs>
            <linearGradient id="charge4b" x1="420" y1="400" x2="440" y2="240" gradientUnits="userSpaceOnUse">
  <stop stopColor="#ff0" />
  <stop offset="1" stopColor="#f80" />
</linearGradient>
<linearGradient id="charge4c" x1="540" y1="400" x2="520" y2="240" gradientUnits="userSpaceOnUse">
  <stop stopColor="#0f0" />
  <stop offset="1" stopColor="#0ff" />
</linearGradient>
          <linearGradient id="charge1" x1="100" y1="0" x2="450" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00f" />
            <stop offset="1" stopColor="#0ff" />
          </linearGradient>
          <linearGradient id="charge1b" x1="100" y1="0" x2="450" y2="0" gradientUnits="userSpaceOnUse">
  <stop stopColor="#ff5f6d" />
  <stop offset="1" stopColor="#ffc371" />
</linearGradient>
          <linearGradient id="charge2" x1="900" y1="0" x2="550" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f80" />
            <stop offset="1" stopColor="#ff0" />
          </linearGradient>
          <linearGradient id="charge3" x1="0" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#aaf" />
            <stop offset="1" stopColor="#00f" />
          </linearGradient>
          <linearGradient id="charge4" x1="0" y1="240" x2="0" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f0f" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="charge4a" x1="0" y1="240" x2="0" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0f0" />
            <stop offset="1" stopColor="#0ff" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        .glow-path {
          animation: dashMove 2s linear infinite;
        }

        @keyframes dashMove {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
