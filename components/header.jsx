import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Layout, LayoutDashboard } from 'lucide-react'

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-1 flex items-center justify-between">
        <Link href="/">
   <div className="h-[60px] overflow-hidden flex items-center">
  <Image
    src="/logo.png"
    alt="Budgeta"
    width={500}    
    height={100}
    className="h-[100px] w-auto object-contain"
  />
</div>

        </Link>
    
    <div> 

     <SignedIn>
      <Link href={"/dashboard"}>
<Button variant="outline">
<LayoutDashboard size={18}/>
<span>Dashboard</span>

</Button>

      </Link>
     </SignedIn>
       <SignedOut>

            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="outline">Login</Button>
            </SignInButton>
             
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>

              </nav>
    </div>
  )
}

export default Header
