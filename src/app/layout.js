import './globals.css'
import { Inter, Bowlby_One } from 'next/font/google'

const bowlby = Bowlby_One({ 
  subsets:['latin'], 
  weight: ['400'],
  variable: '--font-bowlby',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata = {
  title: 'Italian Jure Sanguinis Quiz',
  description: 'Take this interactive quiz to discover if you qualify for Italian citizenship by descent via jure sanguinis.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bowlby.variable}`}>{children}</body>
    </html>
  )
}
