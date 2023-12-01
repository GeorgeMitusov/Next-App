import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google';
import Navbar from './Navbar';
import { Suspense } from 'react';
import Loading from './loading';
import AuthProvider from './auth/Provider';

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']
})

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
    <html lang="en" data-theme="night">
      <body className={roboto.className}>
        <AuthProvider>
          <Navbar />
          <main> 
            <Suspense fallback={<Loading />}>
              {children} 
            </Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
