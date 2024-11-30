"use client"

import { Home, Trophy, Activity, Info } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function MobileNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-gray-800 md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center flex-1 py-2 ${
            isActive('/') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Explore</span>
        </Link>

        <Link
          href="/activities"
          className={`flex flex-col items-center justify-center flex-1 py-2 ${
            isActive('/activities') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs mt-1">Activities</span>
        </Link>

        <Link
          href="/leaderboard"
          className={`flex flex-col items-center justify-center flex-1 py-2 ${
            isActive('/leaderboard') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Activity className="h-5 w-5" />
          <span className="text-xs mt-1">Leaderboard</span>
        </Link>

        <Link
          href="/about"
          className={`flex flex-col items-center justify-center flex-1 py-2 ${
            isActive('/about') ? 'text-white' : 'text-gray-400'
          }`}
        >
          <Info className="h-5 w-5" />
          <span className="text-xs mt-1">Notification</span>
        </Link>
      </div>
    </div>
  )
}