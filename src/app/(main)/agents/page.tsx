import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const AgentPage = () => {
  return (
    <div className='p-3 flex flex-col gap-3'>
        <Link href='/agents/create/step-1'>
            <Button className='cursor-pointer'>Create Agent</Button>
        </Link>
        <div className='flex flex-wrap'>
            <div className='bg-primary rounded-md p-3'>
                <h1 className='text-lg font-semibold text-primary-foreground'>Agent 1</h1>
                <p className='text-sm  text-primary-foreground'>This is a description of agent 1.</p>
            </div>
        </div>
    </div>
  )
}

export default AgentPage