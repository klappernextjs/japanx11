"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageIcon, SmileIcon, XIcon, HomeIcon, Grid2X2, AtSign, BadgeCheck } from "lucide-react"
import dynamic from 'next/dynamic'
import type { EmojiClickData } from 'emoji-picker-react'
import { toast } from "sonner"
import { Post } from "@/lib/types"
import { Avatar } from "@/components/ui/avatar"

const EmojiPicker = dynamic(
  () => import('emoji-picker-react').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
)

interface CreatePostProps {
  onPostCreated: (post: Post) => void
}

interface UserSuggestion {
  username: string
  name: string
  isVerified?: boolean
  isFriend?: boolean
}

// Mock data - replace with API call
const MOCK_USERS: UserSuggestion[] = [
  { username: "vitalik", name: "Vitalik Buterin", isVerified: true, isFriend: true },
  { username: "cz_binance", name: "CZ", isVerified: true, isFriend: true },
  { username: "saylor", name: "Michael Saylor", isVerified: true, isFriend: true },
  { username: "sbf", name: "Sam Bankman-Fried", isVerified: false, isFriend: false },
  { username: "cryptopunks", name: "CryptoPunks", isVerified: true, isFriend: true },
]

export function CreatePost({ onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [mediaFiles, setMediaFiles] = useState<File[]>([])
  const [mediaPreviews, setMediaPreviews] = useState<string[]>([])
  const [showUserSuggestions, setShowUserSuggestions] = useState(false)
  const [userSuggestions, setUserSuggestions] = useState<UserSuggestion[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const MAX_CHARS = 280
  const MAX_MEDIA_FILES = 4

  const isChallenge = (text: string) => {
    const commandPattern = /^(\/|\/pepe|\/pepebot|@pepe|@pepebot)/i
    return commandPattern.test(text.trim())
  }

  const getButtonText = () => {
    if (isLoading) {
      return isChallenge(content) ? "Creating Challenge..." : "Posting..."
    }
    return isChallenge(content) ? "Challenge" : "Post"
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)

    // Check for user suggestions after challenge command
    const isChallengeCommand = /^(\/|\/pepe|\/pepebot|@pepe|@pepebot)\s+challenge\s+@/i.test(newContent)
    if (isChallengeCommand) {
      const lastAtSymbolIndex = newContent.lastIndexOf('@')
      if (lastAtSymbolIndex !== -1) {
        const searchQuery = newContent.slice(lastAtSymbolIndex + 1).toLowerCase()
        // Filter users based on search query
        const filteredUsers = MOCK_USERS.filter(user => 
          user.username.toLowerCase().includes(searchQuery) || 
          user.name.toLowerCase().includes(searchQuery)
        ).sort((a, b) => {
          // Sort friends first
          if (a.isFriend && !b.isFriend) return -1
          if (!a.isFriend && b.isFriend) return 1
          return 0
        })
        setUserSuggestions(filteredUsers)
        setShowUserSuggestions(true)
        return
      }
    }
    setShowUserSuggestions(false)
  }

  const selectUser = (user: UserSuggestion) => {
    const beforeAt = content.slice(0, content.lastIndexOf('@'))
    const newContent = `${beforeAt}@${user.username}:\nEvent: \nWager: `
    setContent(newContent)
    setShowUserSuggestions(false)
    textareaRef.current?.focus()
  }

  const handleSubmit = async () => {
    if (!content.trim() && mediaFiles.length === 0) return
    
    setIsLoading(true)
    try {
      const challengeMode = isChallenge(content)
      const formData = new FormData()
      formData.append('content', content)
      mediaFiles.forEach((file) => {
        formData.append('media', file)
      })

      // Create the new post object
      const newPost: Post = {
        id: Date.now(),
        author: {
          name: "Your Name",
          username: "your_username",
        },
        content: content,
        timestamp: "Just now",
        stats: {
          comments: 0,
          likes: 0,
        },
        mediaUrls: mediaPreviews,
      }

      // If it's a challenge post, add challenge data
      if (challengeMode) {
        const challengeMatch = content.match(/^(@pepebetsbot|\/pepebot)\s+challenge\s+@(\w+):/i)
        if (challengeMatch) {
          const [_, __, challengedUsername] = challengeMatch
          const contentLines = content.split('\n')
          const event = contentLines.find(line => 
            !line.startsWith('@') && !line.toLowerCase().includes('wager:'))?.trim()
          const wager = contentLines.find(line => 
            line.toLowerCase().includes('wager:'))?.split(':')[1]?.trim()

          newPost.challenge = {
            wager: wager || "0 USDT",
            votes: { yes: 0, no: 0 },
            challengedUser: {
              name: challengedUsername,
              username: challengedUsername,
              isVerified: false
            }
          }
        }
      }

      console.log("Creating new post:", newPost)
      onPostCreated(newPost)

      const response = await fetch('/api/posts/create', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Failed to create post')

      setContent("")
      setMediaFiles([])
      setMediaPreviews([])
      toast.success(challengeMode ? 'Challenge created successfully!' : 'Cast created successfully!')
    } catch (error) {
      console.error("Failed to create cast:", error)
      toast.error(isChallenge(content) ? 'Failed to create challenge' : 'Failed to create cast')
    } finally {
      setIsLoading(false)
    }
  }

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (mediaFiles.length + files.length > MAX_MEDIA_FILES) {
      toast.error(`You can only upload up to ${MAX_MEDIA_FILES} files`)
      return
    }

    const newMediaFiles = [...mediaFiles, ...files]
    setMediaFiles(newMediaFiles)

    const newPreviews = files.map(file => URL.createObjectURL(file))
    setMediaPreviews([...mediaPreviews, ...newPreviews])
  }

  const removeMedia = (index: number) => {
    URL.revokeObjectURL(mediaPreviews[index])
    setMediaFiles(mediaFiles.filter((_, i) => i !== index))
    setMediaPreviews(mediaPreviews.filter((_, i) => i !== index))
  }

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setContent(prev => prev + emojiData.emoji)
    setShowEmojiPicker(false)
  }

  return (
    <Card className="bg-[#1C1C28] border-[#2D2D3D] relative">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Compose</h2>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex gap-2">
          <Avatar className="w-10 h-10 rounded-full bg-[#2D2D3D]" />
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={content}
              onChange={handleContentChange}
              placeholder={`Create a challenge:
@pepebetsbot challenge @username:
Event: Your prediction
Wager: Amount USDT`}
              className="w-full bg-transparent resize-none outline-none min-h-[100px] text-white placeholder-gray-500 text-sm"
              maxLength={MAX_CHARS}
            />

            {/* User Suggestions Dropdown */}
            {showUserSuggestions && userSuggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md bg-[#2D2D3D] border border-[#3D3D4D] shadow-lg">
                {userSuggestions.map((user) => (
                  <button
                    key={user.username}
                    onClick={() => selectUser(user)}
                    className="w-full px-4 py-2 text-left hover:bg-[#3D3D4D] flex items-center gap-2 text-white"
                  >
                    <Avatar className="w-6 h-6 rounded-full bg-[#4D4D5D]" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-medium truncate">{user.name}</span>
                        {user.isVerified && (
                          <BadgeCheck className="h-4 w-4 text-blue-400 flex-shrink-0" />
                        )}
                        {user.isFriend && (
                          <span className="text-xs text-purple-400">(Friend)</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400 truncate">@{user.username}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Media Previews */}
            {mediaPreviews.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {mediaPreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="rounded-xl w-full h-32 object-cover"
                    />
                    <button
                      onClick={() => removeMedia(index)}
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70"
                    >
                      <XIcon size={16} className="text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2D2D3D]">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 gap-2"
              onClick={() => setContent('@pepebetsbot challenge @')}
            >
              <AtSign className="h-4 w-4" />
              Challenge
            </Button>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={mediaFiles.length >= MAX_MEDIA_FILES}
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10"
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleMediaUpload}
                accept="image/*,video/*"
                multiple
                className="hidden"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10"
              >
                <SmileIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10"
              >
                <Grid2X2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              {content.length}/{MAX_CHARS}
            </span>
            <Button 
              className={`${
                isChallenge(content) 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-purple-500 hover:bg-purple-600'
              } text-white disabled:opacity-50`}
              onClick={handleSubmit}
              disabled={(!content.trim() && mediaFiles.length === 0) || isLoading}
            >
              {getButtonText()}
            </Button>
          </div>
        </div>
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-full right-0 mb-2">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </Card>
  )
}