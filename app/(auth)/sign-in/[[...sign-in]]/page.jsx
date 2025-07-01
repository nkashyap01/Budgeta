// import { SignIn } from '@clerk/nextjs'
// import React from 'react'

// const Page = () => {
//   return (
//     <div>
//      <SignIn/>
//     </div>
//   )
// }

// export default Page



import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return <SignIn forceRedirectUrl="/dashboard" />
}
