import { useAccount } from 'wagmi'

export function useAuth() {
  const { address, isConnected } = useAccount()

  return {
    isAuthenticated: isConnected,
    address,
    isLoading: false,
  }
}