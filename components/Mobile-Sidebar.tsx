'use client';

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from './Sidebar'


interface MobileSidebarProps {
    ApiLimitCount: number;
}


const MobileSidebar = ({
    ApiLimitCount
}:MobileSidebarProps) => {
    const [isMounted, setIsmounted]= useState(false)
    useEffect(()=>{
        setIsmounted(true)
    },[])

    if(!isMounted) return null
  
  return (
        <Sheet>
            <SheetTrigger>
                <Button variant='ghost' size='icon' className='md:hidden' >
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <Sidebar ApiLimitCount={ApiLimitCount}/>
            </SheetContent>
        </Sheet>
  )
}

export default MobileSidebar
