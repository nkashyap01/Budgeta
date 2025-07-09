 import React from 'react';
import {  ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
      
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-black text-white/10 animate-pulse">
            404
          </div>
          <div className="absolute inset-0 text-8xl md:text-9xl font-black text-purple-400/30 animate-bounce">
            404
          </div>
        </div>

       
        <div className="bg-slate-800 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-purple-600/20 shadow-2xl hover:border-purple-500 transition-colors duration-300">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Oops! Lost in Space
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
              Don't worry, even the best <span className="text-purple-300 font-semibold">financial explorers</span> sometimes lose their way!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
            <button className="group bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <span>Go Home</span>
            </button>
        </Link>
         
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
}