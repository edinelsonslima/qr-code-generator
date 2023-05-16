import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gerador de QR codes',
  description: 'Crie QR codes de forma simples e rápida.',
  url: 'https://qr-code-edinelsonslima.vercel.app/',
  image: 'https://qr-code-edinelsonslima.vercel.app/favicon.ico',
  twitter: {
    card: 'summary_large_image',
    domain: 'qr-code-edinelsonslima.vercel.app',
    url: 'https://qr-code-edinelsonslima.vercel.app/',
    title: 'Gerador de QR codes',
    description: 'Crie QR codes de forma simples e rápida.',
    image: 'https://qr-code-edinelsonslima.vercel.app/favicon.ico',
  },
  facebook: {
    url: 'https://qr-code-edinelsonslima.vercel.app/',
    type: 'website',
    title: 'Gerador de QR codes',
    description: 'Crie QR codes de forma simples e rápida.',
    image: 'https://qr-code-edinelsonslima.vercel.app/favicon.ico',
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
