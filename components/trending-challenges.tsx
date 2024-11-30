"use client"

import { Card } from "@/components/ui/card"
import { Flame } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TrendingChallenges() {
  const challenges = [
    { title: "ETH will break $3000 by end of January", votes: 390, token: "ETH", time: "2m ago" },
    { title: "SOL will flip ETH in market cap", votes: 156, token: "SOL", time: "5m ago" },
    { title: "BTC reaches 100k this year", votes: 245, token: "BTC", time: "10m ago" },
    { title: "DOGE to hit $1", votes: 89, token: "DOGE", time: "15m ago" },
  ]

  return (
    <Card className="bg-[#121212] border-gray-800 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="h-5 w-5 text-orange-500" />
        <h2 className="text-lg font-semibold">Trending Challenges</h2>
      </div>
      
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {challenges.map((challenge, i) => (
            <div key={i} className="flex items-center justify-between hover:bg-gray-800/50 p-2 rounded">
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-sm truncate">{challenge.title}</span>
                <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                  <span>{challenge.votes} votes</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{challenge.token}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{challenge.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}