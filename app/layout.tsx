import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vitae Saúde | Consultas e exames com mais rapidez',
  description:
    'Benefícios em saúde em Volta Redonda e Barra Mansa: consultas por R$ 50, descontos em exames, mais de 35 especialidades e planos individual e familiar.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
