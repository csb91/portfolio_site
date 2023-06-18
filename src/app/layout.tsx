import '../styles/globals.css';
import Footer from '../components/Footer';
import Header from '@/components/Header';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Carter Brooks',
    template: '%s | Carter Brooks',
  },
  description: 'Explore Carter Brooks\'s software developer portfolio, showcasing expertise in full-stack web development.',
  keywords: '',
  alternates: {
    canonical: 'https://carterbrooks.dev',

  },
  creator: 'Carter Brooks',
  icons: {
    icon: 'milkyway-favicon.ico',
    apple: 'milkyway-apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    title: 'Carter Brooks',
    card: 'summary_large_image'
  },
  verification: {
    google: '',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-screen dark:bg-zinc-800'>
      <link rel="icon" href="/milkyway-favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/milkyway-apple-icon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <Header />
        <div className='container flex mx-auto min-h-screen justify-center mt-40'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}