
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from './ui/progress';
import { Zap } from 'lucide-react';
import ProModel from './ProModel';
import { useProModal } from '@/hooks/use-pro-model';


interface FreeCounterProps{
    ApiLimitCount: number;
}
const FreeCounter = ({
    ApiLimitCount = 0
}: FreeCounterProps) => {
    const proModal = useProModal();
    const [isMounted, setIsmounted] = useState(false)

    useEffect(()=>{
        setIsmounted(true)
    },[])

    if(!isMounted) return null

  return (

    <div className="px-3">
    <Card className="bg-white/10 border-0">
      <CardContent className="py-6">
        <div className="text-center text-sm text-white mb-4 space-y-2">
          <p>
            {ApiLimitCount} / {MAX_FREE_COUNTS} Free Generations
          </p>
          <Progress className="h-3" value={(ApiLimitCount / MAX_FREE_COUNTS) * 100} />
        </div>
        <Button className="w-full" variant='premium'
         onClick={proModal.onOpen}>
          Upgrade
          <Zap className="w-4 h-4 ml-2 fill-white" />
        </Button>
      </CardContent>
    </Card>
  </div>
  )
}

export default FreeCounter
