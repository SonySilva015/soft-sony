
import Hero from '@/components/Hero';
import Servicos from '@/components/Services';
import Diferenciais from '@/components/Diferenciais';
import CTA from '@/components/CTA';
import Tean from '@/components/tean';
import Sobre from '@/components/sobre';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Tean />
      <CTA />

    </main>
  );
}