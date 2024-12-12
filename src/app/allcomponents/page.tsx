import React from 'react'
import Navbar from '@/components/Navbar'
import { UsersProvider } from '@/context/ContextData'

interface NavbarProps {
    email?: string;
  }
function page({ email = '' }: NavbarProps) {
  return (
    <div>
        <UsersProvider>
            <Navbar email={email} />
        </UsersProvider>
    </div>
  )
}

export default page