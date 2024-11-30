import { Leaderboard } from "@/components/leaderboard"
import { Feed } from "@/components/feed"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="hidden md:block md:col-span-3">
        <Leaderboard />
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