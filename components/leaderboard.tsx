"use client"

import { Trophy } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TimeframeSelector } from "@/components/ui/timeframe-selector"
import { LeaderboardEntry } from "@/components/leaderboard-entry"
import { useTimeframe } from "@/lib/hooks/use-timeframe"
import { LeaderboardEntry as LeaderboardEntryType } from "@/lib/types"

const leaderboardData: LeaderboardEntryType[] = [
  {
    rank: 1,
    user: {
      username: "CHILLSNT",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      address: "0x1234...5678",
      isVerified: true
    },
    stats: {
      percentage: 75.5,
      eth: 45.5,
      points: 2500
    }
  },
  {
    rank: 2,
    user: {
      username: "ETH_KING",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ETH_KING",
      address: "0x8765...4321",
      isVerified: false
    },
    stats: {
      percentage: 71.2,
      eth: 38.2,
      points: 2350
    }
  },
  {
    rank: 3,
    user: {
      username: "CRYPTO_PRO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CRYPTO_PRO",
      address: "0x9876...5432",
      isVerified: true
    },
    stats: {
      percentage: 68.9,
      eth: 32.7,
      points: 2200
    }
  },
  // ... more entries with the same structure
]

export function Leaderboard() {
  const { timeframe, setTimeframe, timeframes } = useTimeframe()

  return (
    <div className="bg-[#1C1C28] rounded-lg p-4 sticky top-20">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-yellow-400" />
        <h2 className="text-lg font-semibold">Leaderboard</h2>
      </div>

      <TimeframeSelector
        timeframe={timeframe}
        timeframes={timeframes}
        onChange={setTimeframe}
        className="mb-4"
      />

      <ScrollArea className="h-[calc(100vh-300px)] pr-4">
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <LeaderboardEntry key={entry.rank} entry={entry} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}