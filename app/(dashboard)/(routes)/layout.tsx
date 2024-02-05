import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import React from "react"
import { getApiLimitCount } from "@/lib/api-limit"


const DashboardLayout = async ({
    children
}:{
    children:React.ReactNode
}) => {
    const ApiLimitCount = await getApiLimitCount();
  return (
    <div className="h-full relative">
        <div className="hidden md:flex h-full md:flex-col md:w-72 md:fixed md:inset-y-0 bg-gray-800 ">
            <Sidebar ApiLimitCount={ApiLimitCount}/>
        </div>
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
    </div>
  )
}


export default DashboardLayout
