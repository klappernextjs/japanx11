"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { 
  Bell, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Check, 
  X, 
  Trophy, 
  TrendingDown,
  Swords
} from "lucide-react"

interface Notification {
  id: number
  type: 'challenge_request' | 'comment' | 'like' | 'share' | 'declined' | 'accepted' | 'won' | 'lost'
  user: {
    username: string
    avatar: string
  }
  challengePrefix?: string
  timestamp: string
  amount?: number
  read: boolean
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'challenge_request',
    user: {
      username: "CHILLSNT",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CHILLSNT"
    },
    challengePrefix: "BTC will hit 50k",
    amount: 14000,
    timestamp: "2m ago",
    read: false
  },
  {
    id: 2,
    type: 'won',
    user: {
      username: "MERRY",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MERRY"
    },
    challengePrefix: "ETH will drop to 3k",
    amount: 13000,
    timestamp: "5m ago",
    read: false
  },
  {
    id: 3,
    type: 'comment',
    user: {
      username: "ET",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ET"
    },
    challengePrefix: "SOL breaks 100",
    timestamp: "15m ago",
    read: true
  },
  // Add more notifications...
]

export default function NotificationsPage() {
  const getNotificationContent = (notification: Notification) => {
    switch (notification.type) {
      case 'challenge_request':
        return {
          icon: <Swords className="w-4 h-4 text-blue-400" />,
          message: 'challenged you for',
          action: (
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">
                Accept
              </button>
              <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded-md text-xs">
                Decline
              </button>
            </div>
          )
        }
      case 'won':
        return {
          icon: <Trophy className="w-4 h-4 text-yellow-400" />,
          message: 'You won the challenge',
        }
      case 'lost':
        return {
          icon: <TrendingDown className="w-4 h-4 text-red-400" />,
          message: 'You lost the challenge',
        }
      case 'comment':
        return {
          icon: <MessageCircle className="w-4 h-4 text-purple-400" />,
          message: 'commented on your challenge',
        }
      // Add more cases...
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-gray-400" />
          <h1 className="text-lg font-semibold">Notifications</h1>
        </div>
        <button className="text-xs text-gray-400 hover:text-white">
          Mark all as read
        </button>
      </div>

      <div className="space-y-1">
        {notifications.map((notification) => {
          const content = getNotificationContent(notification)
          return (
            <div 
              key={notification.id}
              className={`grid grid-cols-[auto,1fr,auto] gap-3 px-4 py-3 bg-[#1C1C28] rounded-lg hover:bg-[#1E1E2A] transition-colors ${
                !notification.read ? 'border-l-2 border-orange-400' : ''
              }`}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={notification.user.avatar} alt={notification.user.username} />
                <AvatarFallback>{notification.user.username[0]}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-400 font-medium">@{notification.user.username}</span>
                  <span className="text-gray-400">{content?.message}</span>
                  {notification.challengePrefix && (
                    <span className="text-gray-300 truncate">{notification.challengePrefix}</span>
                  )}
                  {notification.amount && (
                    <span className="text-green-400">${notification.amount.toLocaleString()}</span>
                  )}
                </div>
                <span className="text-xs text-gray-500">{notification.timestamp}</span>
              </div>

              <div className="flex items-center gap-2">
                {content?.icon}
                {content?.action}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}