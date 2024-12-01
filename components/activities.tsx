"use client"

import { Card } from "@/components/ui/card"
import { DollarSign } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

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

const challenges: Challenge[] = [
  {
    id: 1,
    userA: {
      username: "CHILLSNT",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT",
      isWinning: true
    },
    userB: {
      username: "CHILL_S",
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
  }
]

export function Activities() {
  const truncateUsername = (username: string) => {
    return username.slice(0, 3).toUpperCase();
  }

  const truncateChallenge = (prefix: string) => {
    const words = prefix.split(' ');
    if (words.length <= 2) return prefix;
    return `${words[0]} ${words[1]}...`;
  }

  return (
    <Card className="bg-[#121212] border-gray-800 p-4">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="h-5 w-5 text-green-400" />
        <h2 className="text-lg font-semibold">Recent Activities</h2>
      </div>
      
      <ScrollArea className="h-[300px]">
        <div className="space-y-1">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id}
              className="grid grid-cols-[auto,1fr] gap-2 p-2 bg-[#1C1C28] rounded-lg hover:bg-[#1E1E2A] transition-colors text-xs"
            >
              {/* Users Column */}
              <div className="flex -space-x-2">
                <Avatar className="w-6 h-6 border-[1.5px] border-white relative z-10">
                  <AvatarImage src={challenge.userA.avatar} alt={challenge.userA.username} />
                  <AvatarFallback>{challenge.userA.username[0]}</AvatarFallback>
                </Avatar>
                <Avatar className="w-6 h-6 border-[1.5px] border-white">
                  <AvatarImage src={challenge.userB.avatar} alt={challenge.userB.username} />
                  <AvatarFallback>{challenge.userB.username[0]}</AvatarFallback>
                </Avatar>
              </div>

              {/* Challenge Info */}
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[10px]">
                  <span className="text-orange-400 font-medium truncate">
                    {truncateUsername(challenge.userA.username)}
                  </span>
                  <span className="text-gray-400">/</span>
                  <span className="text-white truncate">
                    {truncateUsername(challenge.userB.username)}
                  </span>
                </div>
                <div className="text-gray-300 truncate mt-0.5">
                  {truncateChallenge(challenge.challengePrefix)}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px]">
                  <span className="text-gray-400">
                    ${challenge.wager.toLocaleString()}
                  </span>
                  <span className="text-gray-500">/</span>
                  <span className="text-green-400 font-bold">
                    ${challenge.totalVolume.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}