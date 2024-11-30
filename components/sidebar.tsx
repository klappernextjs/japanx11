"use client"

import { Card } from "@/components/ui/card"
import { Flame } from "lucide-react"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ConnectWalletDialog } from "@/components/connect-wallet-dialog"
import { TrendingChallenges } from "@/components/trending-challenges"
import { QuickLinks } from "@/components/quick-links"

export function Sidebar() {
  return (
    <div className="space-y-6 sticky top-20">
      <Card className="bg-[#121212] border-gray-800 p-4">
        <h2 className="text-lg font-semibold mb-2">Welcome to Polls.bet</h2>
        <p className="text-gray-400 text-sm mb-4">
          Connect your wallet to start creating challenges and participating in predictions
        </p>
        <ConnectWalletDialog />
      </Card>

      <TrendingChallenges />
      <QuickLinks />

      <div className="text-center text-xs text-gray-500">
        <p>© 2024 Polls.bet</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}