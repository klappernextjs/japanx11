import { useAccount, useNetwork, useSignMessage } from 'wagmi'

export function useAuth() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { signMessage } = useSignMessage()

  return {
    isAuthenticated: isConnected,
    address,
    chainId: chain?.id,
    signMessage,
    isLoading: false,
  }
}