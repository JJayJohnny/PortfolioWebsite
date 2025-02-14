import './globals.css'
import { Inter, Sacramento } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/components/Background'
import { Providers } from '@/components/Providers'

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
      <body className={`${inter.variable} ${sacramento.variable} font-inter dark:bg-zinc-950 bg-zinc-50`}>
        <>
          <Providers>
            <Navbar/>
            <Background/>
            {children}
            <Footer/>
          </Providers>
        </>
      </body>
    </html>
  )
}
