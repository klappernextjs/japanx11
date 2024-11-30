"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Trophy } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#121212] border-gray-800">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2"
          >
            Home
          </Link>
          <Link
            href="/leaderboard"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2"
          >
            <Trophy className="h-4 w-4" />
            Leaderboard
          </Link>
          <Link
            href="/trending"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Trending
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            About
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}