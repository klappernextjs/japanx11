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