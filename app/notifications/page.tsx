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
  // ... previous notifications
  {
    id: 4,
    type: 'accepted',
    user: {
      username: "CryptoKing",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoKing"
    },
    challengePrefix: "XRP hits 1.5",
    amount: 5000,
    timestamp: "30m ago",
    read: false
  },
  {
    id: 5,
    type: 'declined',
    user: {
      username: "BlockMaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BlockMaster"
    },
    challengePrefix: "SHIB to 0.001",
    amount: 1500,
    timestamp: "1h ago",
    read: true
  },
]

export default function NotificationsPage() {
  const getNotificationContent = (notification: Notification) => {
    switch (notification.type) {
      // ... previous cases
      case 'accepted':
        return {
          icon: <Check className="w-4 h-4 text-green-400" />,
          message: 'accepted your challenge',
          action: (
            <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">
              Challenge Started
            </div>
          )
        }
      case 'declined':
        return {
          icon: <X className="w-4 h-4 text-red-400" />,
          message: 'declined your challenge',
          action: (
            <div className="px-3 py-1 bg-red-500/20 text-red-400 rounded-md text-xs">
              Challenge Cancelled
            </div>
          )
        }
      case 'comment':
        return {
          icon: <MessageCircle className="w-4 h-4 text-purple-400" />,
          message: 'commented on your challenge',
        }
      case 'like':
        return {
          icon: <ThumbsUp className="w-4 h-4 text-blue-400" />,
          message: 'liked your challenge',
        }
      case 'share':
        return {
          icon: <Share2 className="w-4 h-4 text-green-400" />,
          message: 'shared your challenge',
        }
      default:
        return {
          icon: <Bell className="w-4 h-4 text-gray-400" />,
          message: 'interacted with your challenge',
        }
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-gray-400" />
          <h1 className="text-lg font-semibold">Notifications</h1>
        </div>
        <button className="text-xs text-gray-400 hover:text-white">
          Mark all as read
        </button>
      </div>

      <div className="space-y-2">
        {notifications.map((notification) => {
          const content = getNotificationContent(notification)
          return (
            <div 
              key={notification.id}
              className={`flex flex-col sm:grid sm:grid-cols-[auto,1fr,auto] gap-3 px-3 py-3 bg-[#1C1C28] rounded-lg hover:bg-[#1E1E2A] transition-colors ${
                !notification.read ? 'border-l-2 border-orange-400' : ''
              }`}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={notification.user.avatar} alt={notification.user.username} />
                <AvatarFallback>{notification.user.username[0]}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <span className="text-orange-400 font-medium">@{notification.user.username}</span>
                  <span className="text-gray-400">{content?.message}</span>
                  {notification.challengePrefix && (
                    <span className="text-gray-300 truncate max-w-[200px]">
                      {notification.challengePrefix}
                    </span>
                  )}
                  {notification.amount && (
                    <span className="text-green-400">${notification.amount.toLocaleString()}</span>
                  )}
                </div>
                <span className="text-xs text-gray-500">{notification.timestamp}</span>
              </div>

              <div className="flex items-center gap-2 mt-2 sm:mt-0 self-end sm:self-center">
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