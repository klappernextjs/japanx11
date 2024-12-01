import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { MobileNav } from '@/components/mobile-nav'
import { Toaster } from "@/components/ui/toaster"
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polls.bet - Crypto Prediction Challenges',
  description: 'Create and participate in crypto prediction challenges',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0A0A0A] text-white min-h-screen`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="hidden md:block">
              <Navbar />
            </div>
            <main className="container mx-auto px-4 py-6 pb-20 md:pb-6">
              {children}
            </main>
            <div className="md:hidden">
              <MobileNav />
            </div>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}