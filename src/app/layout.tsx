import '../styles/globals.css';
import Footer from '../components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carter Brooks | Software Developer Portfolio',
  description: 'Explore Carter Brooks\'s software developer portfolio, showcasing expertise in full-stack web development.',
  keywords: '',
  alternates: {
    canonical: 'https://carterbrooks.dev',

  },
  creator: 'Carter Brooks',
  icons: {
    icon: 'fire-favicon.ico'
  },
  openGraph: {
    title: 'Carter Brooks | Developer Portfolio',
    url: 'https://carterbrooks.dev',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen w-screen dark:bg-zinc-800'>
        <Header />
        <div className='flex flex-grow min-h-screen justify-center mt-36'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}