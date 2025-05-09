"use client"

import Orb from "@/components/container/Orb";
import Loading from "@/components/ui/loading";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();
  return (
    <>
    {status === "loading" ? (
      <div className='h-screen w-full flex items-center justify-center'>
        <Loading/>
      </div>
    ) : (
      <div className='h-full w-full flex justify-center'>
        <div className='max-w-[1200px] h-screen w-full flex items-center justify-center'>
          <Orb/>
        </div>
    </div>
    )}
    </>
  );
}
