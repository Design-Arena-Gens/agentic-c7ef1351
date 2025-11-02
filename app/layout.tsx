import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethereum: The Future of Crypto',
  description:
    'A stunning 3D experience exploring why Ethereum leads the future of crypto: decentralization, programmability, scalability, security, and open innovation.',
  metadataBase: new URL('https://agentic-c7ef1351.vercel.app'),
  openGraph: {
    title: 'Ethereum: The Future of Crypto',
    description:
      'Explore Ethereum with an immersive 3D experience and learn why it is the future of crypto.',
    url: 'https://agentic-c7ef1351.vercel.app',
    siteName: 'Ethereum: The Future of Crypto',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Ethereum: The Future of Crypto',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased selection:bg-eth-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
