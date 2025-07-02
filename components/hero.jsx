"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="pb-40 px-4">
        <div>
            <h1>Manage Your Finances <br/> with Intelligence
            </h1>
            <p>An intelligent platform that watches your expenses and helps you make smarter financial choices instantly.</p>
            <div>
              <Link href="/dashboard" >
              <Button size="lg" className="px-8">
                Get Started
              </Button>
              
              </Link>
               <Link href="https://www.youtube.com/watch?v=PiN5Op_Lnmw" >
              <Button size="lg" variant="outline" className="px-8">
               Watch Demo
              </Button>
              
              </Link>
            </div>
            <div>
              <div>
                <Image src="/banner.jpg" width={1180} height={720} alt="Dashboard Preview"
                className="rounded-lg shadow-2xl border mx-auto" priority
                />
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
