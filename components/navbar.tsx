"use client"

import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { usePathname } from 'next/navigation'
import { Bell } from "lucide-react"
import { SignInButton } from '@farcaster/auth-kit'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useFarcasterAuth } from "@/lib/hooks/UseFarcasterAuth"
import { NotificationBadge } from "./notification-badge"
function FarcasterButton() {
  const { isAuthenticated, profile, isLoading } = useFarcasterAuth()

  if (isLoading) {
    return (
      <div className="animate-pulse flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-700 rounded-full" />
        <div className="hidden lg:flex flex-col gap-1">
          <div className="h-4 w-24 bg-gray-700 rounded" />
          <div className="h-3 w-16 bg-gray-700 rounded" />
        </div>
      </div>
    )
  }

  if (isAuthenticated && profile) {
    return (
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage 
            src={profile.pfp.url} 
            alt={profile.username} 
          />
          <AvatarFallback>
            {profile.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="hidden lg:flex flex-col">
          <span className="text-sm font-medium">
            {profile.displayName}
          </span>
          <span className="text-xs text-gray-400">
            @{profile.username}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center">
      <SignInButton />
      <style jsx global>{`
        .fc-button {
          background: #8B5CF6 !important;
          color: white !important;
          padding: 0.5rem 1rem !important;
          border-radius: 0.5rem !important;
          display: flex !important;
          align-items: center !important;
          gap: 0.5rem !important;
          font-size: 0.875rem !important;
        }
        .fc-button:hover {
          background: #7C3AED !important;
        }
        .fc-button::before {
          content: '';
          width: 1rem;
          height: 1rem;
          background: url('/farcaster-logo.svg') no-repeat center;
          background-size: contain;
        }
      `}</style>
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
        <div className="flex items-center gap-4">
          <FarcasterButton />
          <Separator orientation="vertical" className="h-8" />
          <ConnectButton />
        </div>
      </div>
    </nav>
  )
}