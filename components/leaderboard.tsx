"use client"

import { Trophy } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TimeframeSelector } from "@/components/ui/timeframe-selector"
import { LeaderboardEntry } from "@/components/leaderboard-entry"
import { useTimeframe } from "@/lib/hooks/use-timeframe"
import { LeaderboardEntry as LeaderboardEntryType } from "@/lib/types"

const leaderboardData: LeaderboardEntryType[] = [
  { rank: 1, username: "E", address: "0x1234...5678", percentage: 75.5, eth: 45.5, points: 2500 },
  { rank: 2, username: "E", address: "0x8765...4321", percentage: 71.2, eth: 38.2, points: 2350 },
  { rank: 3, username: "P", address: "0x9876...5432", percentage: 68.9, eth: 32.7, points: 2200 },
  { rank: 4, username: "C", address: "0x3456...7890", percentage: 65.5, eth: 28.4, points: 2100 },
  { rank: 5, username: "B", address: "0x2345...6789", percentage: 63.2, eth: 25.8, points: 1950 },
]

export function Leaderboard() {
  const { timeframe, setTimeframe, timeframes } = useTimeframe()

  return (
    <div className="bg-[#121212] rounded-lg p-4 sticky top-20">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-yellow-500" />
        <h2 className="text-lg font-semibold">Leaderboard</h2>
      </div>

      <TimeframeSelector
        timeframe={timeframe}
        timeframes={timeframes}
        onChange={setTimeframe}
        className="mb-4"
      />

      <ScrollArea className="h-[calc(100vh-300px)] pr-4">
        <div className="space-y-3">
          {leaderboardData.map((entry) => (
            <LeaderboardEntry key={entry.rank} entry={entry} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}