"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='h-full w-full flex justify-center'>
        <div className='max-w-[1200px] h-screen w-full flex items-center justify-center'>
          <Button>Sign In</Button>
        </div>
    </div>
  );
}
