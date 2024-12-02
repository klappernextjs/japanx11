import { Feed } from "@/components/feed"
import { Sidebar } from "@/components/sidebar"
import TrendingChallenges from "@/components/trending-challenges"  // Default import
import { QuickLinks } from "@/components/quick-links"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DollarSign, Trophy } from "lucide-react"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="hidden md:block md:col-span-3">
        <TrendingChallenges />
      </div>
      <div className="md:col-span-6">
        <Feed />
      </div>
      <div className="md:col-span-3">
        <Sidebar />
      </div>
    </div>
  )
}