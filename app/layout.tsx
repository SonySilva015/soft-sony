import type { Metadata } from 'next';
import WhatsAppButton from '@/components/whtsappB';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SoftSony | Soluções Completas em Tecnologia',
  description:
    'Desenvolvimento de software, aplicações SaaS, redes, câmeras, cursos, cibersegurança e venda de computadores.',
  keywords: [
    'SoftSony',
    'desenvolvimento de software',
    'SaaS',
    'instalação de redes',
    'câmeras de segurança',
    'cibersegurança',
    'cursos de programação',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton
          phoneNumber="+244 926376713"

        />

      </body>
    </html>
  );
}