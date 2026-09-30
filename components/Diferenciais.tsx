'use client';

import { useEffect, useRef, useState } from 'react';
import {
    Rocket,
    Users,
    Headset,
    Star,
} from 'lucide-react';

const diferenciais = [
    {
        valor: 10,
        prefixo: '+',
        sufixo: '',
        label: 'Anos de experiência',
        descricao:
            'Experiência no desenvolvimento de soluções tecnológicas.',
        icon: Rocket,
    },
    {
        valor: 10,
        prefixo: '+',
        sufixo: '',
        label: 'Clientes atendidos',
        descricao:
            'Empresas, profissionais e instituições atendidos pela SoftSony.',
        icon: Users,
    },
    {
        valor: 24,
        prefixo: '',
        sufixo: '/7',
        label: 'Suporte técnico',
        descricao:
            'Acompanhamento e suporte técnico para os nossos clientes.',
        icon: Headset,
    },
    {
        valor: 100,
        prefixo: '',
        sufixo: '%',
        label: 'Compromisso com a satisfação',
        descricao:
            'Foco na qualidade, atendimento e resultados.',
        icon: Star,
    },
];

export default function Diferenciais() {
    const [contadores, setContadores] = useState(
        diferenciais.map(() => 0)
    );

    const [iniciou, setIniciou] = useState(false);

    const sectionRef = useRef<HTMLElement | null>(null);

    /* Detecta quando a seção entra na tela */
    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !iniciou) {
                    setIniciou(true);
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [iniciou]);

    /* Anima os números */
    useEffect(() => {
        if (!iniciou) return;

        const duracao = 2000;
        const inicio = performance.now();

        const atualizar = (tempoAtual: number) => {
            const progresso = Math.min(
                (tempoAtual - inicio) / duracao,
                1
            );

            // Movimento mais suave
            const suavizado =
                1 - Math.pow(1 - progresso, 3);

            setContadores(
                diferenciais.map((d) =>
                    Math.floor(d.valor * suavizado)
                )
            );

            if (progresso < 1) {
                requestAnimationFrame(atualizar);
            }
        };

        requestAnimationFrame(atualizar);
    }, [iniciou]);

    return (
        <section
            ref={sectionRef}
            id="sobre"
            className="relative overflow-hidden bg-white px-5 py-24"
        >
            {/* Decoração */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00d4ff]/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#1e6fd9]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Cabeçalho */}
                <div className="mb-16 text-center">

                    <span className="inline-flex rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/10 px-4 py-2 text-sm font-semibold text-[#087ea4]">
                        Por que a SoftSony?
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-[#0a2540] md:text-5xl">
                        Tecnologia com propósito
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                        Compromisso com qualidade, inovação, segurança
                        e resultados para os nossos clientes.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#1e6fd9]" />

                </div>

                {/* Diferenciais */}
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">

                    {diferenciais.map((d, i) => {
                        const Icon = d.icon;

                        return (
                            <div
                                key={d.label}
                                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#00d4ff]/40 hover:shadow-xl"
                            >

                                {/* Brilho */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00d4ff]/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

                                {/* Ícone Lucide */}
                                <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#1e6fd9] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <Icon
                                        size={27}
                                        strokeWidth={1.8}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Número animado */}
                                <h3 className="relative text-4xl font-extrabold bg-gradient-to-r from-[#1e6fd9] to-[#00d4ff] bg-clip-text text-transparent md:text-5xl">
                                    {d.prefixo}
                                    {contadores[i]}
                                    {d.sufixo}
                                </h3>

                                {/* Label */}
                                <p className="mt-3 font-bold text-[#0a2540]">
                                    {d.label}
                                </p>

                                {/* Descrição */}
                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {d.descricao}
                                </p>

                                {/* Linha */}
                                <div className="mx-auto mt-5 h-1 w-0 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#1e6fd9] transition-all duration-500 group-hover:w-12" />

                            </div>
                        );
                    })}

                </div>

                {/* Frase final */}
                <div className="mt-14 text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                        Tecnologia • Experiência • Segurança • Inovação
                    </p>
                </div>

            </div>
        </section>
    );
}