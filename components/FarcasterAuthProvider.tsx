"use client"

import '@farcaster/auth-kit/styles.css'
import { AuthKitProvider } from '@farcaster/auth-kit'

const config = {
  rpcUrl: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL || 'https://mainnet.optimism.io',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'polls.bet',
  siweUri: `${process.env.NEXT_PUBLIC_HOST}/login`,
}

export function FarcasterAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthKitProvider config={config}>
      {children}
    </AuthKitProvider>
  )
}