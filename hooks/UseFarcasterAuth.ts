"use client"

import { useProfile } from '@farcaster/auth-kit'

export function useFarcasterAuth() {
  const { isAuthenticated, profile, loading } = useProfile()

  return {
    isAuthenticated,
    user: profile,
    loading,
    isFarcasterUser: Boolean(profile?.fid)
  }
}