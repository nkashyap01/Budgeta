import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
        <Image src={"/logo.png"} alt="Budgeta" height={60} width={200} className="h-24 w-auto object-contain" />
        </Link>
    
     <SignedOut>
              <SignInButton />
             
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

              </nav>
    </div>
  )
}

export default Header
