"use client"

import { useState } from "react"
import { Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<"Daily" | "Weekly" | "Monthly">("Daily")
  
  const leaderboardData = [
    { rank: 1, username: "E", address: "0x1234...5678", percentage: 75.5, eth: 45.5, points: 2500 },
    { rank: 2, username: "E", address: "0x8765...4321", percentage: 71.2, eth: 38.2, points: 2350 },
    { rank: 3, username: "P", address: "0x9876...5432", percentage: 68.9, eth: 32.7, points: 2200 },
    { rank: 4, username: "C", address: "0x3456...7890", percentage: 65.5, eth: 28.4, points: 2100 },
    { rank: 5, username: "B", address: "0x2345...6789", percentage: 63.2, eth: 25.8, points: 1950 },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#121212] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <h2 className="text-lg font-semibold">Leaderboard</h2>
        </div>
        
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
          {["Daily", "Weekly", "Monthly"].map((period) => (
            <Button
              key={period}
              variant={timeframe === period ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setTimeframe(period as typeof timeframe)}
              className={`${timeframe === period ? "bg-purple-500 text-white" : "text-gray-400"} shrink-0`}
            >
              {period}
            </Button>
          ))}
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-3">
            {leaderboardData.map((item) => (
              <div key={item.rank} className="flex items-center justify-between p-2 rounded hover:bg-gray-800/50">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-gray-500 w-4 shrink-0">{item.rank}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium truncate">{item.username}</span>
                    <span className="text-sm text-gray-500 truncate">{item.address}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">↗ {item.percentage}%</span>
                  <div className="flex flex-col items-end">
                    <span className="font-medium">{item.points}</span>
                    <span className="text-sm text-gray-500">{item.eth} ETH</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}