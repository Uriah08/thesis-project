"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import React from 'react'

const Step1 = () => {

  return (
    <div className="flex flex-col gap-2 max-w-[500px] w-full mx-auto mt-10">
      <h1 className="text-sm">Agent Name</h1>
        <Input placeholder="Agent Alpha" className="w-full" />
      <h1 className="text-sm mt-5">Greetings</h1>
        <Textarea placeholder="Hello, I am your assistant. How can I help you?" className="w-full resize-none" />
      <Link href="/agents/create/step-2" className="w-fit self-end mt-5 cursor-pointer">
      <Button className="cursor-pointer">Next</Button>
      </Link>
    </div>
  )
}

export default Step1