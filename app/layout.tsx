import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FSWD Course by Huzaifa',
  description: 'Course Content for FSWD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="mx-auto max-w-5xl min-h-screen border-x-2 border-emerald-700 p-4">
        <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
