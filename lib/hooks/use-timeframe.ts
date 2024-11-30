"use client"

import { useState } from "react"
import { TimeFrame } from "@/lib/types"

export function useTimeframe(defaultTimeframe: TimeFrame = "Daily") {
  const [timeframe, setTimeframe] = useState<TimeFrame>(defaultTimeframe)
  
  const timeframes: TimeFrame[] = ["Daily", "Weekly", "Monthly"]
  
  return {
    timeframe,
    setTimeframe,
    timeframes,
  }
}