"use client"

import * as React from "react"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'
import { WagmiConfig, createConfig } from 'wagmi'
import { mainnet, sepolia, polygon, optimism, arbitrum } from 'wagmi/chains'
import { createPublicClient, http } from 'viem'

const projectId = "37b5e2fccd46c838885f41186745251e"

const { connectors } = getDefaultWallets({
  appName: 'Polls.bet',
  projectId,
  chains: [mainnet, sepolia, polygon, optimism, arbitrum]
})

const config = createConfig({
  connectors,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  })
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        chains={[mainnet, sepolia, polygon, optimism, arbitrum]}
        theme={darkTheme({
          accentColor: '#8B5CF6', // purple-500
          accentColorForeground: 'white',
          borderRadius: 'medium',
          overlayBlur: 'small',
        })}
        modalSize="compact"
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}