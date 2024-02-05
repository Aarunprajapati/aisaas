import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './Mobile-Sidebar'
import { getApiLimitCount } from '@/lib/api-limit'

const Navbar = async () => {

  const ApiLimitCount = await getApiLimitCount();
  return (
    <div className='flex items-center p-4'>
       <MobileSidebar ApiLimitCount={ApiLimitCount}/>
        <div className=' flex justify-end w-full'>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar
