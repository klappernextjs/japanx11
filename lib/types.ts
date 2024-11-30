export type NotificationType = 
  | 'challenge_request'
  | 'comment'
  | 'like'
  | 'share'
  | 'declined'
  | 'accepted'
  | 'won'
  | 'lost'
  | 'mentioned'
  | 'followed'
  | 'challenge_completed'
  | 'challenge_started'

export interface Author {
  name: string
  username: string
  isVerified?: boolean
  avatar?: string
}

export interface Stats {
  comments: number
  likes: number
}

export interface Challenge {
  wager: string
  votes: {
    yes: number
    no: number
  }
  challengedUser?: Author  // Using Author interface here
  challengePrefix?: string
}

export interface Post {
  id: number
  author: Author
  content: string
  timestamp: string
  stats: Stats
  challenge?: Challenge
  mediaUrls?: string[]
}

export interface Notification {
  id: number
  type: NotificationType
  user: Author
  challengePrefix?: string
  timestamp: string
  amount?: number
  read: boolean
  challenge?: Challenge
  post?: Post
}

export interface LeaderboardEntry {
  rank: number
  user: {
    isVerified: any
    username: string
    avatar: string
    address: string
  }
  stats: {
    percentage: number
    eth: number
    points: number
  }
  isVerified?: boolean
}

// Optional: Add more specific leaderboard types
export interface LeaderboardStats {
  percentage: number
  eth: number
  points: number
}

export interface LeaderboardUser {
  username: string
  avatar: string
  address: string
  isVerified?: boolean
}

// You can use these more specific types in the main interface
export interface LeaderboardEntryDetailed {
  rank: number
  user: LeaderboardUser
  stats: LeaderboardStats
}