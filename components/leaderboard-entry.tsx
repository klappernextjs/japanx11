"use client"

import { LeaderboardEntry as LeaderboardEntryType } from "@/lib/types"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { BadgeCheck } from "lucide-react"

interface LeaderboardEntryProps {
  entry: LeaderboardEntryType
}

export function LeaderboardEntry({ entry }: LeaderboardEntryProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-[#1E1E2A] transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <span className={`text-sm font-medium w-5 shrink-0 ${
          entry.rank === 1 ? 'text-yellow-400' :
          entry.rank === 2 ? 'text-gray-300' :
          entry.rank === 3 ? 'text-orange-400' :
          'text-gray-500'
        }`}>
          #{entry.rank}
        </span>
        <Avatar className="w-8 h-8 border border-gray-800">
          <AvatarImage src={entry.user.avatar} alt={entry.user.username} />
          <AvatarFallback>{entry.user.username[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-medium text-orange-400 truncate">
              @{entry.user.username}
            </span>
            {entry.user.isVerified && (
              <BadgeCheck className="w-4 h-4 text-blue-400 shrink-0" />
            )}
          </div>
          <span className="text-xs text-gray-500 truncate">
            {entry.user.address}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-green-400 text-sm hidden sm:inline">
          ↗ {entry.stats.percentage}%
        </span>
        <div className="flex flex-col items-end">
          <span className="font-medium">{entry.stats.points}</span>
          <span className="text-sm text-gray-500">
            {entry.stats.eth} ETH
          </span>
        </div>
      </div>
    </div>
  )
}