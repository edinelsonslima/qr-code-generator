import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gerador de QR codes',
  description: 'Crie QR codes de forma simples e rápida.',
  authors: [
    { name: '@edinelsonslima', url: 'https://github.com/edinelsonslima' },
  ],
  abstract: 'Crie QR codes de forma simples e rápida.',
  appleWebApp: true,
  applicationName: 'Gerador de QR codes',
  category: 'QR code',
  colorScheme: 'light',
  creator: '@edinelsonslima',
  themeColor: '#AA2930',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    url: 'https://qr-code-edinelsonslima.vercel.app/',
    countryName: 'Brasil',
    siteName: 'Gerador de QR codes',
    title: 'Gerador de QR codes',
    locale: 'pt_BR',
    description: 'Crie QR codes de forma simples e rápida.',
    images: [
      {
        url: 'https://qr-code-edinelsonslima.vercel.app/favicon.ico',
        alt: 'Gerador de QR codes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@edinelsonslima',
    creatorId: '@edinelsonslima',
    description: 'Crie QR codes de forma simples e rápida.',
    images: [
      {
        url: 'https://qr-code-edinelsonslima.vercel.app/favicon.ico',
        alt: 'Gerador de QR codes',
      },
    ],
    site: 'https://qr-code-edinelsonslima.vercel.app/',
    siteId: 'https://qr-code-edinelsonslima.vercel.app/',
    title: 'Gerador de QR codes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${inter.className} h-screen bg-slate-50 container p-2 mx-auto flex flex-col items-center gap-5`}
      >
        <h1 className='text-primary text-2xl font-bold mt-10'>
          Gerador de QR Code
        </h1>

        {children}

        <footer className='pb-24'>
          <small className='text-slate-800'>
            Desenvolvido por{' '}
            <a
              target='_blank'
              className='text-primary'
              href='https://github.com/edinelsonslima'
            >
              @edinelsonslima
            </a>
          </small>
        </footer>
      </body>
    </html>
  );
}
