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
      <body className='h-screen w-screen'>
        <Header />
        <div className='w-screen h-screen flex mt-48 justify-center'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}