import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vitae Saúde | Consultas por R$50 para clientes Vitae',
  description:
    'Benefícios em saúde em Volta Redonda e Barra Mansa: consultas médicas por R$50 para clientes Vitae e planos a partir de R$99,90 por mês.',
  icons: { icon: '/vitae-symbol.png', apple: '/vitae-symbol.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
