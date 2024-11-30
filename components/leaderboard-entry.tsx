"use client"

import { LeaderboardEntry as LeaderboardEntryType } from "@/lib/types"

interface LeaderboardEntryProps {
  entry: LeaderboardEntryType
}

export function LeaderboardEntry({ entry }: LeaderboardEntryProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded hover:bg-gray-800/50">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-gray-500 w-4 shrink-0">{entry.rank}</span>
        <div className="flex flex-col min-w-0">
          <span className="font-medium truncate">{entry.username}</span>
          <span className="text-sm text-gray-500 truncate">{entry.address}</span>
        </div>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-gray-500 hidden sm:inline">↗ {entry.percentage}%</span>
        <div className="flex flex-col items-end">
          <span className="font-medium">{entry.points}</span>
          <span className="text-sm text-gray-500">{entry.eth} ETH</span>
        </div>
      </div>
    </div>
  )
}