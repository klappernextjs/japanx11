"use client"

import { Button } from "@/components/ui/button"
import { TimeFrame } from "@/lib/types"

interface TimeframeSelectorProps {
  timeframe: TimeFrame
  timeframes: TimeFrame[]
  onChange: (timeframe: TimeFrame) => void
  className?: string
}

export function TimeframeSelector({
  timeframe,
  timeframes,
  onChange,
  className = "",
}: TimeframeSelectorProps) {
  return (
    <div className={`flex gap-2 overflow-x-auto pb-2 scrollbar-none ${className}`}>
      {timeframes.map((period) => (
        <Button
          key={period}
          variant={timeframe === period ? "secondary" : "ghost"}
          size="sm"
          onClick={() => onChange(period)}
          className={`${
            timeframe === period ? "bg-purple-500 text-white" : "text-gray-400"
          } shrink-0`}
        >
          {period}
        </Button>
      ))}
    </div>
  )
}