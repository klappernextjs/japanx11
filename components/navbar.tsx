"use client"

import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { ConnectWalletDialog } from "@/components/connect-wallet-dialog"
import { usePathname } from 'next/navigation' // Add this import

export function Navbar() {
  const pathname = usePathname() // Add this hook

  // Helper function to determine if link is active
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
              Home
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
              href="/trending" 
              className={`${
                isActive('/trending') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Trending
            </Link>
            <Link 
              href="/about" 
              className={`${
                isActive('/about') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
          </div>
        </div>
        <ConnectWalletDialog />
      </div>
    </nav>
  )
}