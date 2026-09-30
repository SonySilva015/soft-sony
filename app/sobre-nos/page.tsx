import Image from 'next/image';

import Header from '@/components/Header';

import nos from '@/public/nos.png';

import {
    Handshake,
    Lightbulb,
    ShieldCheck,
    Star,
    Rocket,
    Target,
    Eye,
    MapPin,
    Phone,
    Mail,

    ArrowRight,
} from 'lucide-react';

const valores = [
    {
        icon: Handshake,
        title: 'Compromisso',
        description:
            'Comprometemo-nos com cada projeto e procuramos entregar soluções que realmente acrescentem valor.',
    },
    {
        icon: Lightbulb,
        title: 'Inovação',
        description:
            'Acompanhamos a evolução tecnológica para desenvolver soluções modernas e eficientes.',
    },
    {
        icon: ShieldCheck,
        title: 'Segurança',
        description:
            'Colocamos a segurança e a proteção dos dados como elementos fundamentais das nossas soluções.',
    },
    {
        icon: Star,
        title: 'Qualidade',
        description:
            'Procuramos manter elevados padrões de qualidade no desenvolvimento dos nossos produtos e serviços.',
    },
    {
        icon: Handshake,
        title: 'Parceria',
        description:
            'Construímos relações duradouras com os nossos clientes, baseadas em confiança e colaboração.',
    },
    {
        icon: Rocket,
        title: 'Evolução',
        description:
            'Estamos sempre a aprender, melhorar e procurar novas formas de ajudar os nossos clientes.',
    },
];

const fotos = [
    '/images/galeria/foto1.jpg',
    '/images/galeria/foto2.jpg',
    '/images/galeria/foto3.jpg',
    '/images/galeria/foto4.jpg',
    '/images/galeria/foto5.jpg',
    '/images/galeria/foto6.jpg',
];

export default function SobrePage() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-[#020b1c] text-white">

                {/* =====================================================
                    HERO
                ====================================================== */}

                <section className="relative min-h-[680px] overflow-hidden">

                    {/* Imagem de fundo */}
                    <div className="absolute inset-0">
                        <Image
                            src={nos}
                            alt="Equipa SoftSony a trabalhar em conjunto"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </div>

                    {/* Overlay principal */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020b1c] via-[#020b1c]/85 to-[#020b1c]/20" />

                    {/* Overlay inferior */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c] via-transparent to-[#020b1c]/30" />

                    {/* Conteúdo */}
                    <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-32 md:px-10">

                        <div className="max-w-2xl">

                            <span className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-2 text-sm font-semibold text-[#00d4ff]">
                                <Rocket size={16} />
                                Sobre a SoftSony
                            </span>

                            <h1 className="mt-6 font-extrabold leading-tight text-white lg:text-5xl">
                                Tecnologia que

                                <span className="block bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">
                                    transforma ideias
                                </span>

                                em resultados.
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
                                Desenvolvemos soluções digitais modernas, seguras
                                e eficientes para empresas, profissionais e
                                instituições.
                            </p>

                        </div>
                    </div>
                </section>


                {/* =====================================================
                    QUEM SOMOS
                ====================================================== */}

                <section className="border-y border-white/5 bg-[#061329]">

                    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">

                        <div className="mx-auto max-w-4xl text-center">

                            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00d4ff]">
                                Quem somos
                            </span>

                            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                                Uma empresa preparada para o futuro
                            </h2>

                            <p className="mt-6 text-lg leading-relaxed text-white/60">
                                A SoftSony trabalha para aproximar empresas,
                                profissionais e instituições das novas tecnologias.
                                Desenvolvemos soluções pensadas para melhorar processos,
                                aumentar produtividade e criar novas oportunidades.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    MISSÃO + VISÃO
                ====================================================== */}

                <section>

                    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">

                        <div className="grid gap-8 lg:grid-cols-2">

                            {/* MISSÃO */}
                            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#00d4ff]/10 to-transparent p-8 transition-all duration-300 hover:border-[#00d4ff]/30 hover:-translate-y-1 md:p-12">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00d4ff]/10 text-[#00d4ff] transition-transform duration-300 group-hover:scale-110">
                                    <Target
                                        size={28}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
                                    Nossa missão
                                </p>

                                <h2 className="mt-3 text-3xl font-bold">
                                    Criar soluções que fazem a diferença
                                </h2>

                                <p className="mt-5 leading-relaxed text-white/60">
                                    A nossa missão é fornecer soluções tecnológicas
                                    acessíveis, modernas e seguras que ajudem os nossos
                                    clientes a melhorar os seus negócios e alcançar
                                    os seus objetivos.
                                </p>

                            </div>


                            {/* VISÃO */}
                            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#0066ff]/10 to-transparent p-8 transition-all duration-300 hover:border-[#0066ff]/30 hover:-translate-y-1 md:p-12">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066ff]/10 text-[#00d4ff] transition-transform duration-300 group-hover:scale-110">
                                    <Eye
                                        size={28}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#00d4ff]">
                                    Nossa visão
                                </p>

                                <h2 className="mt-3 text-3xl font-bold">
                                    Ser referência em tecnologia
                                </h2>

                                <p className="mt-5 leading-relaxed text-white/60">
                                    Pretendemos construir uma empresa reconhecida
                                    pela qualidade das suas soluções, inovação,
                                    profissionalismo e capacidade de transformar
                                    desafios em oportunidades.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    VALORES
                ====================================================== */}

                <section className="bg-[#061329]">

                    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">

                        <div className="max-w-3xl">

                            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00d4ff]">
                                Os nossos valores
                            </span>

                            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                                Princípios que orientam a SoftSony
                            </h2>

                            <p className="mt-5 text-lg text-white/60">
                                Os nossos valores estão presentes na forma como
                                trabalhamos, desenvolvemos soluções e nos
                                relacionamos com os nossos clientes.
                            </p>

                        </div>


                        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {valores.map((valor) => {

                                const Icon = valor.icon;

                                return (
                                    <div
                                        key={valor.title}
                                        className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/40 hover:bg-white/[0.05]"
                                    >

                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00d4ff]/20">

                                            <Icon
                                                size={27}
                                                strokeWidth={1.8}
                                            />

                                        </div>

                                        <h3 className="mt-6 text-xl font-bold">
                                            {valor.title}
                                        </h3>

                                        <p className="mt-3 leading-relaxed text-white/60">
                                            {valor.description}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    GALERIA
                ====================================================== */}

                <section>

                    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">

                        <div className="text-center">

                            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00d4ff]">
                                Galeria
                            </span>

                            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                                Conheça um pouco da SoftSony
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-white/60">
                                Alguns momentos, projetos e atividades da nossa equipa.
                            </p>

                        </div>


                        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">

                            {fotos.map((foto, index) => (

                                <div
                                    key={foto}
                                    className={`group relative overflow-hidden rounded-2xl border border-white/10 ${index === 0
                                        ? 'col-span-2 row-span-2'
                                        : ''
                                        }`}
                                >

                                    <Image
                                        src={foto}
                                        alt={`Galeria SoftSony ${index + 1}`}
                                        width={800}
                                        height={600}
                                        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 md:h-64"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CONTACTO + MAPA
                ====================================================== */}

                <section
                    id="contacto"
                    className="border-t border-white/5 bg-[#061329]"
                >

                    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">

                        <div className="mb-12">

                            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00d4ff]">
                                Contacto
                            </span>

                            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                                Fale com a SoftSony
                            </h2>

                            <p className="mt-5 max-w-2xl text-lg text-white/60">
                                Tem uma ideia, projeto ou precisa de uma solução
                                tecnológica? Entre em contacto connosco.
                            </p>

                        </div>


                        <div className="grid gap-8 lg:grid-cols-2">

                            {/* INFORMAÇÕES */}
                            <div className="space-y-4">

                                {/* ENDEREÇO */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#00d4ff]/30">

                                    <div className="flex gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
                                            <MapPin
                                                size={22}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <div>

                                            <h3 className="font-bold">
                                                Endereço
                                            </h3>

                                            <p className="mt-1 text-white/60">
                                                Luanda, Angola
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* TELEFONE */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#00d4ff]/30">

                                    <div className="flex gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
                                            <Phone
                                                size={22}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <div>

                                            <h3 className="font-bold">
                                                Telefone
                                            </h3>

                                            <a
                                                href="tel:+244000000000"
                                                className="mt-1 block text-white/60 transition hover:text-[#00d4ff]"
                                            >
                                                +244 926 376 6713
                                            </a>

                                        </div>

                                    </div>

                                </div>


                                {/* EMAIL */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#00d4ff]/30">

                                    <div className="flex gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
                                            <Mail
                                                size={22}
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <div>

                                            <h3 className="font-bold">
                                                Email
                                            </h3>

                                            <a
                                                href="mailto:info@softsony.com"
                                                className="mt-1 block text-white/60 transition hover:text-[#00d4ff]"
                                            >
                                                info@softsony.com
                                            </a>

                                        </div>

                                    </div>

                                </div>


                                {/* REDES SOCIAIS */}
                                <div className="flex gap-3 pt-3">

                                    <a
                                        href="#"
                                        aria-label="Facebook"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]"
                                    >

                                    </a>

                                    <a
                                        href="#"
                                        aria-label="LinkedIn"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]"
                                    >

                                    </a>

                                    <a
                                        href="#"
                                        aria-label="Instagram"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]"
                                    >

                                    </a>

                                </div>

                            </div>


                            {/* MAPA */}
                            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

                                <iframe
                                    title="Localização da SoftSony"
                                    src="https://www.google.com/maps?q=Luanda,Angola&output=embed"
                                    className="h-[400px] w-full border-0 grayscale-[30%]"
                                    loading="lazy"
                                />

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA FINAL
                ====================================================== */}

                <section className="relative overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/10 via-transparent to-[#0066ff]/10" />

                    <div className="relative mx-auto max-w-5xl px-5 py-20 text-center md:py-28">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00d4ff]/10 text-[#00d4ff]">
                            <Rocket
                                size={32}
                                strokeWidth={1.7}
                            />
                        </div>

                        <h2 className="mt-6 text-3xl font-bold md:text-5xl">
                            Vamos construir o futuro juntos?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
                            Conte-nos o que precisa e vamos encontrar a solução
                            tecnológica certa para o seu projeto.
                        </p>

                        <a
                            href="#contacto"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0099ff] px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00d4ff]/20"
                        >
                            <span>Entrar em contacto</span>

                            <ArrowRight
                                size={19}
                                strokeWidth={2}
                            />
                        </a>

                    </div>

                </section>

            </main>
        </>
    );
}