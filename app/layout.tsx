import type { Metadata } from 'next'
import './globals.css'
import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Navbar />
      <Footer />
    </html>
  )
}
