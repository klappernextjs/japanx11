"use client"

import { useFarcasterAuth } from '@/hooks/useFarcasterAuth'
import { SignInButton } from '@farcaster/auth-kit'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function FarcasterLogin() {
  const { isAuthenticated, user, isLoading } = useFarcasterAuth()

  if (isLoading) {
    return <div className="animate-pulse h-8 w-32 bg-gray-800 rounded" />
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.pfp.url} alt={user.username} />
          <AvatarFallback>{user.username[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{user.displayName}</span>
          <span className="text-xs text-gray-400">@{user.username}</span>
        </div>
      </div>
    )
  }

  return (
    <SignInButton className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
      <img 
        src="/farcaster-logo.svg" 
        alt="Farcaster" 
        className="w-4 h-4" 
      />
      Connect Farcaster
    </SignInButton>
  )
}