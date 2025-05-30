'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="absolute top-0 w-full px-6 sm:px-12 py-4 z-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          StackGenie<span className="text-purple-400">.ai</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-white space-x-6 text-sm border border-white/10">
          <Link href="#features" className="hover:text-purple-300 transition">Features</Link>
          <Link href="#assets" className="hover:text-purple-300 transition">Assets</Link>
          <Link href="#pricing" className="hover:text-purple-300 transition">Pricing</Link>
          <Link href="#faq" className="hover:text-purple-300 transition">FAQ</Link>
          <Link href="#protection" className="hover:text-purple-300 transition">Protection</Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
         <Link href="/api/auth/login">
  <button className="px-4 py-1.5 rounded-full text-sm border border-white/30 text-white bg-white/10 hover:bg-white/20 transition">
    Log In
  </button>
</Link>
          <button className="px-4 py-1.5 rounded-full text-sm bg-white text-black font-semibold hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
