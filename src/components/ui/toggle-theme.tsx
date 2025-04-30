"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme()
  return (
    <button className='p-1 rounded-full cursor-pointer border-2 dark:border-zinc-300 border-zinc-800'>
        {theme === 'dark' ? (
            <span onClick={() => setTheme('light')}>
                <Sun size={20}/>
            </span>
        ) : (
            <span onClick={() => setTheme('dark')}>
                <Moon size={20}/>
            </span>
        )}
    </button>
  )
}

export default ToggleTheme