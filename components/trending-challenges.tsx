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
    id: 2,
    userA: {
      username: "MERRY",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MERRY",
      isWinning: true
    },
    userB: {
      username: "Merry_Paw",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Merry_Paw"
    },
    challengePrefix: "ETH will drop to 3k",
    wager: 13000,
    totalVolume: 26000
  },
  {
    id: 3,
    userA: {
      username: "ET",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ET"
    },
    userB: {
      username: "ET_Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ET_Trader",
      isWinning: true
    },
    challengePrefix: "SOL breaks 100",
    wager: 5000,
    totalVolume: 10000
  },
  {
    id: 4,
    userA: {
      username: "HESOLD",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HESOLD",
      isWinning: true
    },
    userB: {
      username: "Christmas",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Christmas"
    },
    challengePrefix: "DOGE reaches 1$",
    wager: 4500,
    totalVolume: 9000
  },
  {
    id: 5,
    userA: {
      username: "morty",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=morty"
    },
    userB: {
      username: "Morty_Rick",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morty_Rick",
      isWinning: true
    },
    challengePrefix: "BNB above 300",
    wager: 1000,
    totalVolume: 2000
  },
  {
    id: 6,
    userA: {
      username: "XSCRAT",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=XSCRAT",
      isWinning: true
    },
    userB: {
      username: "Xmas_Scrat",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Xmas_Scrat"
    },
    challengePrefix: "MATIC hits 2$",
    wager: 4500,
    totalVolume: 9000
  },
  {
    id: 7,
    userA: {
      username: "YETI",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=YETI"
    },
    userB: {
      username: "Yeti_Trade",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yeti_Trade",
      isWinning: true
    },
    challengePrefix: "AVAX drops to 40",
    wager: 2000,
    totalVolume: 4000
  },
  {
    id: 8,
    userA: {
      username: "KABOSU",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=KABOSU",
      isWinning: true
    },
    userB: {
      username: "Kabosu_Doge",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabosu_Doge"
    },
    challengePrefix: "LINK above 20",
    wager: 510,
    totalVolume: 1020
  },
  {
    id: 9,
    userA: {
      username: "WIC",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=WIC"
    },
    userB: {
      username: "Winter_Comes",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Winter_Comes",
      isWinning: true
    },
    challengePrefix: "DOT breaks 10",
    wager: 2000,
    totalVolume: 4000
  },
  {
    id: 10,
    userA: {
      username: "OnlyChills",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=OnlyChills",
      isWinning: true
    },
    userB: {
      username: "ChillMaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChillMaster"
    },
    challengePrefix: "ADA under 0.5",
    wager: 3510,
    totalVolume: 7020
  }
]

export default function TrendingChallengesPage() {
  // Helper function to truncate username to 3 letters without dots
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
        <div className="grid grid-cols-3 gap-2 mb-2 px-3 py-2 bg-[#1C1C28] rounded-lg text-xs md:text-sm">
          <div className="text-gray-400 font-small"> 🤩 User</div>
          <div className="text-gray-400 font-small">🎉 Events</div>
          <div className="text-gray-400 font-small text-right">💲 Volume</div>
        </div>

        {/* Table Body */}
        <div className="space-y-1">
          {trendingChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="grid grid-cols-3 gap-2 px-3 py-2 bg-[#1C1C28] rounded-lg hover:bg-[#1E1E2A] transition-colors text-xs md:text-sm"
            >
              {/* Users Column */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex -space-x-4 relative"> {/* Increased overlap */}
                  <Avatar className="w-4 h-4 md:w-9 md:h-9 flex-shrink-0 border-[1.3px] border-wh relative z-10">
                    <AvatarImage src={challenge.userA.avatar} alt={challenge.userA.username} />
                  </Avatar>
                </div>
                <div className="flex items-center min-w-0 gap-1">
                  <div className="flex items-center gap-1 min-w-0">
                    <span className="text-orange-400 font-medium">
                      <span className="hidden md:inline">{challenge.userA.username}</span>
                      <span className="inline md:hidden">{truncateUsername(challenge.userA.username)}</span>
                    </span>
                  </div>
                  <span className="text-gray-400 mx-0.5 flex-shrink-0">/</span>
                  <span className="text-white">
                    <span className="hidden md:inline">{challenge.userB.username}</span>
                    <span className="inline md:hidden">{truncateUsername(challenge.userB.username)}</span>
                  </span>
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
