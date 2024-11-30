"use client"

import Link from "next/link"
import { ConnectWalletDialog } from "@/components/connect-wallet-dialog"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/50 backdrop-blur-sm hidden md:block"> {/* Added hidden md:block */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold text-purple-500">
              Polls.bet
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/activities" className="text-gray-300 hover:text-white">
              Activities
            </Link>
            <Link href="/trending" className="text-gray-300 hover:text-white">
              Trending
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </div>
        </div>
        <ConnectWalletDialog />
      </div>
    </nav>
  )
}