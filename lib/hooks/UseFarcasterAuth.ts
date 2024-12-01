"use client"

import { useProfile } from '@farcaster/auth-kit'
import { type Profile, isFarcasterProfile } from '@/src/types/farcaster'

export function useFarcasterAuth() {
  const { isAuthenticated, profile } = useProfile()

  return {
    isAuthenticated,
    profile: profile && isFarcasterProfile(profile) ? (profile as Profile) : null,
    isLoading: !isAuthenticated && !profile
  }
}