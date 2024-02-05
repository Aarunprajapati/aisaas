'use client'
import {Heading} from '@/components/Heading'
import { Code } from 'lucide-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useChat } from 'ai/react';
import { cn } from '@/lib/utils'
import { UserAvatar } from '@/components/user-avatar'
import { BotAvatar } from '@/components/Bot-avatar'
import { Empty } from '@/components/ui/empty'


const CodePage = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
        <Heading
        title="Code"
        description="Our most advanced Code model with reactMarkdown"
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className='px-4 lg:px-8'>
      <div className=" flex flex-col w-full mx-auto stretch my-5 ring-1 ring-blue-500  rounded-lg">
            <form onSubmit={handleSubmit}
            className='
                rounded-lg 
                border
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-xl
                grid
                grid-cols-12
                gap-2
              '
      >
        <div className='col-span-12 lg:col-span-10 w-full '>
          <div className='m-0 p-0'>
              <Input
                className=" border-1 border-blue-500 text-lg w-full py-6 rounded-lg  outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
              />
          </div>
        </div>
        <Button className="col-span-12 lg:col-span-2 w-full" type="submit" size="icon">
                Generate
        </Button>         
      </form>
          </div>
          <div className=" flex flex-col-reverse gap-y-4 space-y-2">
          <div className="space-y-4 mt-4">

           {messages.length === 0 && (
            <Empty label="No conversation started." />
          )}   
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "p-4 w-full flex items-center gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-gray-300 border border-black/10 text-gray-900 font-semibold text-md" : "bg-gray-300 text-gray-900 font-semibold text-md",
                )}
              >
                {message.role === "user" ? <UserAvatar/> : <BotAvatar/>}
                <p className={cn("p-4 w-full items-center gap-x-8 rounded-lg bg-gray-600",
                message.role === "user" ? "bg-white border border-black/10" : "bg-muted")}>
                <ReactMarkdown components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-black/10 rounded-lg p-1" {...props} />
                  )
                }} className="text-sm overflow-hidden leading-7">
                  {message.content || ""}
                </ReactMarkdown>
                </p>
              </div>
            ))}
          </div>
         </div>
      </div>    
    </div>
  )
}

export default CodePage
