"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { MessageSquare, Heart, Share2, BadgeCheck, Check, X } from "lucide-react"
import { Post } from "@/lib/types"

interface PostCardProps extends Post {}

export function PostCard(props: PostCardProps) {
  const { author, content, timestamp, stats, challenge, mediaUrls } = props
  
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(stats.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  // Check if the content is a challenge command
  const isChallengeCommand = content.toLowerCase().startsWith('@pepebetsbot challenge')
  
  // Parse challenge content if it's a command
  const parseChallenge = (content: string) => {
    const match = content.match(/@pepebetsbot challenge @(\w+) (.+)/)
    if (match) {
      return {
        challengedUsername: match[1],
        prediction: match[2]
      }
    }
    return null
  }

  const challengeData = isChallengeCommand ? parseChallenge(content) : null

  // If it's a challenge command, render the challenge card
  if (isChallengeCommand && challengeData) {
    return (
      <Card className="bg-[#1C1C28] border-[#2D2D3D] hover:bg-[#1E1E2A] transition-colors">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-10 h-10 rounded-full bg-[#2D2D3D]" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-white truncate">{author.name}</span>
                {author.isVerified && (
                  <BadgeCheck className="h-4 w-4 text-blue-400 flex-shrink-0" />
                )}
                <span className="text-purple-400">challenges</span>
                <span className="text-white font-medium">@{challengeData.challengedUsername}</span>
                <span className="text-gray-500 shrink-0">• {timestamp}</span>
              </div>
              <span className="text-sm text-gray-500">@{author.username}</span>
            </div>
          </div>

          <p className="mb-4 text-white break-words">{challengeData.prediction}</p>

          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-sm">Wager:</span>
              <span className="text-purple-400 font-medium">0.5 ETH</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="relative flex items-center justify-center py-6 border-green-600/20 bg-green-950/20 hover:bg-green-950/30"
              >
                <div className="absolute left-3 flex items-center text-green-400">
                  <Check className="h-4 w-4 mr-1" />
                </div>
                <span className="text-green-400">
                  Yes <span className="text-green-400/60">(0)</span>
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="relative flex items-center justify-center py-6 border-red-600/20 bg-red-950/20 hover:bg-red-950/30"
              >
                <div className="absolute left-3 flex items-center text-red-400">
                  <X className="h-4 w-4 mr-1" />
                </div>
                <span className="text-red-400">
                  No <span className="text-red-400/60">(0)</span>
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">Active</span>
                <span className="h-1 w-1 rounded-full bg-gray-600" />
                <span className="text-gray-400">{timestamp}</span>
              </div>
              <button className="text-gray-400 hover:text-purple-400 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">{stats.comments}</span>
            </button>
            <button 
              className={`flex items-center gap-2 hover:text-purple-400 transition-colors ${
                isLiked ? 'text-purple-400' : ''
              }`}
              onClick={handleLike}
            >
              <Heart className="h-4 w-4" fill={isLiked ? 'currentColor' : 'none'} />
              <span className="text-sm">{likeCount}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Share2 className="h-4 w-4" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      </Card>
    )
  }

  // Regular post card
  return (
    <Card className="bg-[#1C1C28] border-[#2D2D3D] hover:bg-[#1E1E2A] transition-colors">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-10 h-10 rounded-full bg-[#2D2D3D]" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-white truncate">{author.name}</span>
              {author.isVerified && (
                <div className="flex-shrink-0">
                  <BadgeCheck className="h-4 w-4 text-blue-400" />
                </div>
              )}
              {challenge?.challengedUser && (
                <>
                  <span className="text-purple-400">challenges</span>
                  <span className="text-white font-medium">@{challenge.challengedUser.username}</span>
                  {challenge.challengedUser.isVerified && (
                    <BadgeCheck className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  )}
                </>
              )}
              <span className="text-gray-500 shrink-0">• {timestamp}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-500 truncate">@{author.username}</span>
              {author.isVerified && (
                <div className="flex-shrink-0">
                  <BadgeCheck className="h-3 w-3 text-blue-400" />
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mb-4 text-white break-words">{content}</p>
        
        {challenge && (
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-sm">Wager:</span>
              <span className="text-purple-400 font-medium">{challenge.wager}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="relative flex items-center justify-center py-6 border-green-600/20 bg-green-950/20 hover:bg-green-950/30 group"
              >
                <div className="absolute left-3 flex items-center text-green-400">
                  <Check className="h-4 w-4 mr-1" />
                </div>
                <span className="text-green-400">
                  Yes <span className="text-green-400/60">({challenge.votes.yes})</span>
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="relative flex items-center justify-center py-6 border-red-600/20 bg-red-950/20 hover:bg-red-950/30 group"
              >
                <div className="absolute left-3 flex items-center text-red-400">
                  <X className="h-4 w-4 mr-1" />
                </div>
                <span className="text-red-400">
                  No <span className="text-red-400/60">({challenge.votes.no})</span>
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">Active</span>
                <span className="h-1 w-1 rounded-full bg-gray-600" />
                <span className="text-gray-400">{timestamp}</span>
              </div>
              <button className="text-gray-400 hover:text-purple-400 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-6 text-gray-400">
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{stats.comments}</span>
          </button>
          <button 
            className={`flex items-center gap-2 hover:text-purple-400 transition-colors ${
              isLiked ? 'text-purple-400' : ''
            }`}
            onClick={handleLike}
          >
            <Heart 
              className="h-4 w-4" 
              fill={isLiked ? 'currentColor' : 'none'} 
            />
            <span className="text-sm">{likeCount}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Share2 className="h-4 w-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </Card>
  )
}