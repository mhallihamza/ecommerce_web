import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Headers from './Components/Headers'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ShoppingCard from './Components/ShoppingCard'
import { CartProvider } from '@/context/CartContext'
import { SideCartContextProvider } from '@/context/SideCartContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CartProvider>
        <SideCartContextProvider>
    <body className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1">
        <Headers />
        <Navbar />
        <main className="flex-1">
          <ShoppingCard/>
          {children}
        </main>
      </div>
      <Footer />
    </body>
        </SideCartContextProvider>
      </CartProvider>
  </html>
  )
}
