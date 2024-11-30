import { Post } from './types'


export const dummyPosts: Post[] = [
  {
    id: 1,
    author: {
      name: "CryptoWhale",
      username: "whale_alerts",
      isVerified: true
    },
    content: "ETH will break $3000 by end of January",
    timestamp: "2m ago",
    stats: {
      comments: 45,
      likes: 156,
    },
    challenge: {
      wager: "0.5 ETH",
      votes: {
        yes: 234,
        no: 156,
      },
      challengedUser: {
        name: "Vitalik Buterin",
        username: "vitalik",
        isVerified: true
      }
    },
  },
  {
    id: 2,
    author: {
      name: "SolanaSage",
      username: "sol_sage",
      isVerified: true
    },
    content: "SOL will flip ETH in market cap by 2025 🚀 What do you think?",
    timestamp: "15m ago",
    stats: {
      comments: 89,
      likes: 245,
    },
    challenge: {
      wager: "100 SOL",
      votes: {
        yes: 789,
        no: 1023,
      },
    },
  },
  {
    id: 3,
    author: {
      name: "CryptoNews",
      username: "crypto_news",
      isVerified: true
    },
    content: "Just published my latest analysis on the crypto market trends for 2024. What are your thoughts? 📊",
    timestamp: "1h ago",
    stats: {
      comments: 12,
      likes: 45,
    },
  },
  {
    id: 4,
    author: {
      name: "TechEnthusiast",
      username: "tech_eth",
      isVerified: true
    },
    content: "Amazing developments in the L2 scaling solutions space! 🚀",
    timestamp: "2h ago",
    stats: {
      comments: 23,
      likes: 89,
    },
  },
  {
    id: 5,
    author: {
      name: "NFTArtist",
      username: "nft_creator",
      isVerified: true
    },
    content: "Just dropped my latest NFT collection! Check it out 🎨",
    timestamp: "3h ago",
    stats: {
      comments: 34,
      likes: 156,
    },
  },
  {
    id: 6,
    author: {
      name: "DeFiExplorer",
      username: "defi_exp",
      isVerified: true
    },
    content: "Thread 🧵 on the latest DeFi innovations and yield farming strategies...",
    timestamp: "4h ago",
    stats: {
      comments: 56,
      likes: 234,
    },
  },
]