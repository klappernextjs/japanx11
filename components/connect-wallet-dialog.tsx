"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet } from "lucide-react"

export function ConnectWalletDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Wallet className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Connect Wallet</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#121212] border-gray-800">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>
            Connect your wallet to start creating challenges and participating in predictions.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Button className="w-full" onClick={() => {}}>
            MetaMask
          </Button>
          <Button className="w-full" onClick={() => {}}>
            WalletConnect
          </Button>
          <Button className="w-full" onClick={() => {}}>
            Coinbase Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}