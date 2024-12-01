"use client"

import '@rainbow-me/rainbowkit/styles.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from "@/components/ui/button"

type ConnectButtonProps = React.ComponentProps<typeof ConnectButton.Custom>
type RenderProps = Parameters<ConnectButtonProps["children"]>[0]

export function ConnectWalletDialog() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }: RenderProps) => {
        const ready = mounted
        const connected = ready && account && chain

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button 
                    onClick={openConnectModal}
                    className="bg-purple-500 hover:bg-purple-600"
                  >
                    Connect Wallet
                  </Button>
                )
              }

              return (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={openChainModal}
                    variant="outline"
                    className="hidden sm:flex border-purple-500/20 hover:bg-purple-500/10"
                  >
                    {chain?.hasIcon && (
                      <div className="mr-2 h-4 w-4">
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            className="h-4 w-4"
                          />
                        )}
                      </div>
                    )}
                    {chain?.name}
                  </Button>

                  <Button 
                    onClick={openAccountModal}
                    className="bg-purple-500 hover:bg-purple-600"
                  >
                    {account?.displayName}
                    {account?.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </Button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}