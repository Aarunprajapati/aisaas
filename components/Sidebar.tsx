'use client'
import { cn } from '@/lib/utils'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import FreeCounter from '@/components/FreeCounter'


const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
  },
  // {
  //   label: 'Video Generation',
  //   icon: VideoIcon,
  //   color: "text-orange-700",
  //   href: '/video',
  // },
  // {
  //   label: 'Music Generation',
  //   icon: Music,
  //   color: "text-emerald-500",
  //   href: '/music',
  // },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color:'text-gray-100'
  },
];
interface ApiLimitCountProp{
  ApiLimitCount: number
}

const Sidebar = ({
  ApiLimitCount = 0
}: ApiLimitCountProp) => {
  const pathname = usePathname()
  return (
    <div className='h-full flex flex-col space-y-4  py-4 text-white bg-gray-800 '>
        <div className='px-3 py-2 flex-1'>
            <Link href='/dashboard' className=' flex items-center pl-3 mb-14'>
                <div className=' relative h-8 w-8 mr-4'>
                    <Image
                    fill
                    alt='Logo'
                    src='/logo.png'  
                    />           
                </div>            
                <h1 className=' text-2xl font-bold'>Ai-Saas</h1>
            </Link>
            <div className='space-y-1'>
            {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                 pathname === route.href ? "text-white bg-white/10": " text-zinc-400",
              )}
              >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
            </div>
                
        </div>
            <FreeCounter
              ApiLimitCount={ApiLimitCount}
            />
    </div>
  )
}

export default Sidebar
