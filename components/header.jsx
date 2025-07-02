import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Layout, LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-1 flex items-center justify-between">
        <Link href="/" prefetch={false}>
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
    
    <div className="flex items-center space-x-2"> 

     <SignedIn>
      <Link href={"/dashboard"} prefetch={false} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
<Button variant="outline">
<LayoutDashboard size={18}/>
<span className="hidden md:inline">Dashboard</span>

</Button>

      </Link>
<Link href={"/transaction/create"} prefetch={false}>
<Button className="flex items-center gap-2">
<PenBox size={18}/>
<span className="hidden md:inline">Add Transaction</span>

</Button>

      </Link>

     </SignedIn>

       <SignedOut>
            {/* <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="outline">Login</Button>
            </SignInButton> */}
                  <Link href="/sign-in" >
                   <Button variant="outline">Login</Button>
                </Link>   
            </SignedOut>

  
            <SignedIn>
           
               <UserButton appearance={{elements:{
              avatarBox: "w-full h-full",

              }}}/>
            
            </SignedIn>

    </div>

              </nav>
    </div>
  )
}

export default Header
