export interface Author {
  name: string
  username: string
  isVerified?: boolean
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
  challengedUser?: {  // Make this optional with ?
    name: string
    username: string
    isVerified?: boolean
  }
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