"use client"

import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { CustomConnectButton } from "@/components/connect-button"
import { usePathname } from 'next/navigation'
import { Bell } from "lucide-react"

// Add NotificationBadge component inline
function NotificationBadge({ count }: { count: number }) {
  if (count === 0) return null;
  
  return (
    <div className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
      {count > 9 ? '9+' : count}
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            <MobileNav />
            <Link href="/" className="text-xl font-bold text-purple-500">
              Polls.bet
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`${
                isActive('/') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Explore
            </Link>
            <Link 
              href="/activities" 
              className={`${
                isActive('/activities') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Activities
            </Link>
            <Link 
              href="/leaderboard" 
              className={`${
                isActive('/leaderboard') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Leaderboard
            </Link>
            <Link 
              href="/notifications" 
              className={`relative ${
                isActive('/notifications') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Bell className="h-5 w-5" />
              <NotificationBadge count={3} />
            </Link>
          </div>
        </div>
        <ConnectWalletDialog />
      </div>
    </nav>
  )
}