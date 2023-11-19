"use client"
import './globals.css'
import { Inter, Sacramento } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import Background from '@/components/Background'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const sacramento = Sacramento({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sacramento'
})

export const metadata = {
  title: 'JJayJohnny',
  description: 'JJayJohnny\'s portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sacramento.variable} font-inter`}>
        <SessionProvider>
          <ThemeProvider enableSystem={true} attribute='class' defaultTheme='system'>
            <Navbar/>
            <Background/>
            {children}
            <Footer/>
          </ThemeProvider>
        </SessionProvider>
        </body>
    </html>
  )
}
