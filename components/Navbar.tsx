import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './Mobile-Sidebar'

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
       <MobileSidebar/>
        <div className=' flex justify-end w-full'>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar
