'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // 4 sec delay
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
  <div className="relative">
    <Image
      src="/images/genie1.webp"
      alt="Loading"
      width={420}
      height={420}
      className="animate-pulse mix-blend-screen"
    />
    <div className="absolute inset-0"></div>
  </div>
 {/* <p className="-mt-[50px] text-purple-300 text-3xl font-bold tracking-wide">
  <span className="text-3xl">Stack</span>{' '}
  <span className="text-5xl text-purple-700 animate-pulse drop-shadow-md">AI</span>{' '}
  <span className="text-3xl">Genie</span>
</p> */}

</div>

  );
}
