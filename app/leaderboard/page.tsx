"use client"

import { useState } from "react"
import { Trophy, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface LeaderboardItem {
  rank: number
  username: string
  address: string
  percentage: number
  eth: number
  points: number
  avatar: string
}

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<"Daily" | "Weekly" | "Monthly">("Daily")
  
  const leaderboardData: LeaderboardItem[] = [
    { 
      rank: 1, 
      username: "jordan23", 
      address: "0x1234...5678", 
      percentage: 75.5, 
      eth: 45.5, 
      points: 2500,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT"
    },
    { 
      rank: 2, 
      username: "Chillguy", 
      address: "0x1234...5678", 
      percentage: 75.5, 
      eth: 45.5, 
      points: 2000,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT"
    },
    { 
      rank: 3, 
      username: "CHILLSNT", 
      address: "0x1234...5678", 
      percentage: 75.5, 
      eth: 45.5, 
      points: 2500,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT"
    },
    { 
      rank: 4, 
      username: "CHILLSNT", 
      address: "0x1234...5678", 
      percentage: 75.5, 
      eth: 45.5, 
      points: 2500,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT"
    },
    { 
      rank: 5, 
      username: "CHILLSNT", 
      address: "0x1234...5678", 
      percentage: 75.5, 
      eth: 45.5, 
      points: 2500,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT"
    },
    // ... add more items with avatars
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#1C1C28] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="h-5 w-5 text-yellow-400" />
          <h2 className="text-lg font-semibold">Leaderboard</h2>
        </div>
        
        <div className="flex gap-2 mb-4">
          {["Daily", "Weekly", "Monthly"].map((period) => (
            <Button
              key={period}
              variant={timeframe === period ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setTimeframe(period as typeof timeframe)}
              className={`${
                timeframe === period 
                  ? "bg-orange-400 hover:bg-orange-500 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-[#1E1E2A]"
              } shrink-0`}
            >
              {period}
            </Button>
          ))}
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-2">
            {leaderboardData.map((item) => (
              <div 
                key={item.rank} 
                className="flex items-center justify-between p-3 rounded-lg bg-[#1C1C28] hover:bg-[#1E1E2A] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`text-sm font-medium w-5 shrink-0 ${
                    item.rank === 1 ? 'text-yellow-400' :
                    item.rank === 2 ? 'text-gray-300' :
                    item.rank === 3 ? 'text-orange-400' :
                    'text-gray-500'
                  }`}>
                    #{item.rank}
                  </span>
                  <div className="flex -space-x-4">
                    <Avatar className="w-8 h-8 border-[1.5px] border-white relative z-10">
                      <AvatarImage src={item.avatar} alt={item.username} />
                      <AvatarFallback>{item.username[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-orange-400">@{item.username}</span>
                    <span className="text-xs text-gray-500 truncate">{item.address}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-green-400 text-sm">↗ {item.percentage}%</span>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-green-400" />
                      <span className="font-bold text-green-400">{item.eth}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.points} pts</span>
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