import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentClinic',
  description: 'A welcoming clinic for AI agents seeking relief from their humans.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
