import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { ModalProvider } from '@/components/Model-Provider'
import { CrispProvider } from '@/components/crisp-provider'
export const metadata: Metadata = {
  title: 'AI-Saas App',
  description: 'Explore the power of AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider/>
        <body>
          <ModalProvider/>
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}