"use client"

import { Card } from "@/components/ui/card"
import { Flame } from "lucide-react"
import Link from "next/link"
import { Leaderboard } from "@/components/leaderboard"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ConnectWalletDialog } from "@/components/connect-wallet-dialog"
import TrendingChallenges from "@/components/trending-challenges"  // Default import
import { QuickLinks } from "@/components/quick-links"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DollarSign, Trophy } from "lucide-react"

export function Sidebar() {
  return (
    <div className="space-y-6 sticky top-20">
      <Leaderboard /> {/* Now correctly imported */}
      <div className="text-center text-xs text-gray-500">
        {/* Footer content */}
      </div>
    </div>
  )
}
