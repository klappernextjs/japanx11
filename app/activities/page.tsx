"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Zap } from "lucide-react"

interface Challenge {
  rank: number
  challenger: {
    name: string
    avatar: string
    isVerified: boolean
  }
  challengedUser: {
    name: string
    avatar: string
    isVerified: boolean
  }
  wager: number
  chain: 'SOL' | 'ETH' // Add more chains as needed
}

const trendingChallenges: Challenge[] = [
  {
    rank: 1,
    challenger: {
      name: "CHILLSNT",
      avatar: "/avatars/chillsnt.png",
      isVerified: true
    },
    challengedUser: {
      name: "CHILL S",
      avatar: "/avatars/chill-s.png",
      isVerified: true
    },
    wager: 14000,
    chain: 'SOL'
  },
  // Add more challenges...
]

export default function Activities() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Activities</h1>
      
      <div className="space-y-2">
        {trendingChallenges.map((challenge) => (
          <Card 
            key={challenge.rank}
            className="bg-[#1C1C28] border-[#2D2D3D] p-4 hover:bg-[#1E1E2A] transition-colors"
          >
            <div className="flex items-center gap-4">
              {/* Rank */}
              <span className="text-gray-500 min-w-[2rem]">
                #{challenge.rank}
              </span>

              {/* Chain Icons (you can replace with actual icons) */}
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-[#2D2D3D] rounded-full" />
                <div className="w-6 h-6 bg-[#2D2D3D] rounded-full" />
              </div>

              {/* Challenger */}
              <div className="flex items-center gap-2 flex-1">
                <Avatar className="w-8 h-8">
                  <img src={challenge.challenger.avatar} alt="" />
                </Avatar>
                <span className="font-bold text-orange-400">
                  {challenge.challenger.name}
                </span>
                <span className="text-gray-400">/{challenge.chain}</span>
              </div>

              {/* Challenged User & Wager */}
              <div className="flex items-center gap-2">
                <span className="text-white">
                  {challenge.challengedUser.name}
                </span>
                <Badge 
                  variant="outline" 
                  className="bg-transparent border-yellow-600/20 text-yellow-400 flex items-center gap-1"
                >
                  <Zap className="w-3 h-3" />
                  {challenge.wager}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}