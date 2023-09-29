import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Pomodoro from './_components/timer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ergo Task Manager',
  description: 'The Ultimate Task Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav className="navBar">
            <p id="icon" className='welcome'>Ergo</p>
            <Link href='/'>Home</Link>
            <Link href='/notes'>Notes</Link>
            <Link href='/tasks'>Tasks</Link>
            <Link href='/visualizer'>Visualizer</Link>
            <p></p>
          </nav>
        {children}
      </body>
    </html>
  )
}