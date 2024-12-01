import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'PepeBets',
  projectId: '37b5e2fccd46c838885f41186745251e', // Get from WalletConnect Cloud
  chains
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export { chains }