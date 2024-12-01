// Define the base profile structure
export interface Profile {
    fid: number
    username: string
    displayName: string
    pfp: {
      url: string
      verified: boolean
    }
    profile: {
      bio?: string
    }
    verifications: string[]
    custody_address?: string
    connectedAddress?: string
  }
  
  // Type guard to check if profile has required properties
  export function isFarcasterProfile(profile: any): profile is Profile {
    return (
      profile &&
      typeof profile.fid === 'number' &&
      typeof profile.username === 'string' &&
      typeof profile.displayName === 'string' &&
      profile.pfp &&
      typeof profile.pfp.url === 'string'
    )
  }
  
  // Auth state interface
  export interface FarcasterAuthState {
    isAuthenticated: boolean
    profile: Profile | null
    isLoading: boolean
  }
  
  // Optional: Add more specific types for different features
  export interface FarcasterChallenge {
    challenger: Profile
    opponent: Profile
    prediction: string
    wager: number
    timestamp: number
    status: 'pending' | 'accepted' | 'rejected' | 'completed'
  }