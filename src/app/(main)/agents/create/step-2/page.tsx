import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React from 'react'

const Step2 = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[500px] w-full mx-auto mt-10">
        {/* <h1 className="text-sm">Name</h1>
        <Input readOnly placeholder="Agent Alpha" className="w-full text-sm" />
        <h1 className="text-sm mt-5">Greetings</h1>
        <Textarea readOnly placeholder="Hello, I am your assistant. How can I help you?" className="text-sm w-full resize-none" /> */}
        
        <div className='flex justify-between mt-5'>
        <Link href="/agents/create/step-1" className="w-fit self-start cursor-pointer">
        <Button className="cursor-pointer">Previous</Button>
        </Link>

        <Link href="/agents" className="w-fit self-end cursor-pointer">
        <Button className="cursor-pointer">Create</Button>
        </Link>
        </div>
    </div>
  )
}

export default Step2