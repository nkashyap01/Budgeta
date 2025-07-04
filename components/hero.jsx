"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-slate-900 text-white pt-10 pb-16 px-4">
      <div className={`max-w-6xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        
       
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-1">
          Manage Your Finances <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            with Intelligence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Track your expenses and get real-time insights to make
          <span className="text-purple-300 font-semibold"> smarter financial decisions</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link href="/dashboard">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full transition">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=PiN5Op_Lnmw" target="_blank">
            <Button variant="outline" size="lg" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3 text-lg rounded-full transition">
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Preview Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <Image
            src="/banner.webp"
            width={1180}
            height={100}
            alt="AI Finance Dashboard Preview"
            className="rounded-xl w-full shadow-md"
            priority
          />
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Smart Analytics",
              desc: "AI-powered insights that track spending patterns.",
              icon: (
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              ),
            },
            {
              title: "Bank-Level Security",
              desc: "Advanced encryption for your financial data.",
              icon: (
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              ),
            },
            {
              title: "Real-Time Alerts",
              desc: "Get notified of unusual spending instantly.",
              icon: (
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-purple-600/20 hover:border-purple-500 transition"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
