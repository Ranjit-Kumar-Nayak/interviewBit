import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='m-10'>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  )
}

export default page