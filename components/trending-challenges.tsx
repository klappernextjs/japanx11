"use client"

import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DollarSign } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ConnectWalletDialog } from "@/components/connect-wallet-dialog"

interface Challenge {
  id: number
  userA: {
    username: string
    avatar: string
    isWinning?: boolean
  }
  userB: {
    username: string
    avatar: string
    isWinning?: boolean
  }
  challengePrefix: string
  wager: number
  totalVolume: number
}

const trendingChallenges: Challenge[] = [
  {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  },

  {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  },
  {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  },
  {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  },
  {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  },
  {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  },
  {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  }, {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  }, {
    id: 1,
    userA: {
      username: "chil",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "robq",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILL_S"
    },
    challengePrefix: "BTC will hit 50k",
    wager: 14000,
    totalVolume: 28000
  },
  // ... rest of the challenges remain the same
]

export default function TrendingChallengesPage() {
  // Helper function to truncate username to 2 letters without dots
  const truncateUsername = (username: string) => {
    return username.slice(0, 2).toUpperCase();
  }

  // Helper function to format challenge prefix to two words
  const truncateChallenge = (prefix: string) => {
    const words = prefix.split(' ');
    if (words.length <= 2) return prefix;
    return `${words[0]} ${words[1]}`;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Trending Challenges Table */}
      <div className="space-y-4">
        {/* Table Header */}
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-2 mb-2 px-3 py-2 bg-[#1C1C28] rounded-lg text-sm">
          <div className="text-gray-400 font-small">🤩User</div>
          <div className="text-gray-400 font-small">🎉Events</div>
          <div className="text-gray-400 font-small">💲Volume</div>
        </div>

        {/* Table Body */}
        <div className="space-y-1">
          {trendingChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="grid grid-cols-[2fr_3fr_1fr] gap-2 px-3 py-2 bg-[#1C1C28] rounded-lg hover:bg-[#1E1E2A] transition-colors text-xs md:text-sm"
            >
              {/* Users Column */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex -space-x-4 relative">
                  <Avatar className="w-4 h-4 md:w-9 md:h-9 flex-shrink-0 border-[1.3px] border-black relative z-10">
                    <AvatarImage src={challenge.userA.avatar} alt={challenge.userA.username} />
                    <AvatarFallback>{truncateUsername(challenge.userA.username)}</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-4 h-4 md:w-9 md:h-9 flex-shrink-0 border-[1.3px] border-wh">
                    <AvatarImage src={challenge.userB.avatar} alt={challenge.userB.username} />
                    <AvatarFallback>{truncateUsername(challenge.userB.username)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Challenge Column */}
              <div className="flex items-center text-gray-300 truncate text-xs">
                <span className="hidden md:inline">{challenge.challengePrefix}</span>
                <span className="inline md:hidden">{truncateChallenge(challenge.challengePrefix)}</span>
              </div>

              {/* Volume Column */}
              <div className="flex items-center justify-end gap-1 flex-shrink-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-[9px] md:text-[10px]">
                    {challenge.wager.toLocaleString()}
                  </span>
                  <span className="text-gray-500">/</span>
                  <span className="text-green-400 font-bold text-sm">
                    {challenge.totalVolume.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500">
        <p>© 2024 Polls.bet</p>
      </div>
    </div>
  )
}