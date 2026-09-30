'use client';

import { useState } from 'react';

import {
    Code2,
    Cloud,
    Network,
    Camera,
    Wrench,
    ShieldCheck,
    GraduationCap,
    Monitor,
    ArrowRight,
    X,
    Check,
    MessageCircle,
} from 'lucide-react';

const servicos = [
    {
        icon: Code2,
        titulo: 'Desenvolvimento de Software',
        descricao:
            'Sistemas web, mobile e desktop personalizados com tecnologia moderna, segura e escalável.',
        detalhes:
            'Criamos sistemas personalizados para empresas, instituições e profissionais, desde plataformas web até aplicações desktop e mobile.',
        recursos: [
            'Sistemas Web',
            'Aplicações Mobile',
            'Aplicações Desktop',
            'Sistemas de gestão',
            'APIs e integrações',
        ],
    },

    {
        icon: Cloud,
        titulo: 'Aplicações SaaS',
        descricao:
            'Plataformas em nuvem sob medida, com arquitetura escalável e modelo de assinatura.',
        detalhes:
            'Desenvolvemos plataformas SaaS completas para empresas que desejam disponibilizar os seus serviços através da internet.',
        recursos: [
            'Plataformas online',
            'Gestão de utilizadores',
            'Sistemas de assinatura',
            'Base de dados',
            'Infraestrutura em nuvem',
        ],
    },

    {
        icon: Network,
        titulo: 'Instalação de Redes',
        descricao:
            'Projeto e instalação de redes cabeadas e Wi-Fi, servidores e infraestrutura de rede.',
        detalhes:
            'Planeamos e implementamos infraestruturas de rede para garantir conectividade, estabilidade e organização.',
        recursos: [
            'Redes LAN',
            'Redes Wi-Fi',
            'Servidores',
            'Configuração de equipamentos',
            'Manutenção de redes',
        ],
    },

    {
        icon: Camera,
        titulo: 'Instalação de Câmeras',
        descricao:
            'Sistemas de CFTV, monitoramento remoto e soluções de segurança para empresas e residências.',
        detalhes:
            'Instalamos sistemas de videovigilância modernos para monitoramento e proteção de espaços residenciais e empresariais.',
        recursos: [
            'CFTV',
            'Câmeras IP',
            'Monitoramento remoto',
            'Gravação de imagens',
            'Configuração de acesso remoto',
        ],
    },

    {
        icon: Wrench,
        titulo: 'Gestão e Manutenção de Equipamentos',
        descricao:
            'Gestão, manutenção e suporte técnico de computadores, servidores e outros equipamentos tecnológicos.',
        detalhes:
            'Ajudamos empresas a manter os seus equipamentos funcionando corretamente, reduzindo falhas e interrupções no trabalho.',
        recursos: [
            'Manutenção preventiva',
            'Manutenção corretiva',
            'Configuração de computadores',
            'Gestão de equipamentos',
            'Suporte técnico',
        ],
    },

    {
        icon: ShieldCheck,
        titulo: 'Segurança Cibernética',
        descricao:
            'Proteção de sistemas e dados, auditorias, prevenção de ameaças e boas práticas de segurança digital.',
        detalhes:
            'Implementamos medidas para ajudar empresas a proteger sistemas, redes e informações contra ameaças digitais.',
        recursos: [
            'Proteção de dados',
            'Segurança de redes',
            'Backups',
            'Auditorias',
            'Prevenção de ameaças',
        ],
    },

    {
        icon: GraduationCap,
        titulo: 'Cursos de Programação e Design',
        descricao:
            'Formações práticas em programação, desenvolvimento web, design digital e tecnologias modernas.',
        detalhes:
            'Oferecemos formação prática para pessoas que desejam desenvolver competências em tecnologia e design.',
        recursos: [
            'Programação',
            'Desenvolvimento Web',
            'Design UI/UX',
            'Tecnologias modernas',
            'Projetos práticos',
        ],
    },

    {
        icon: Monitor,
        titulo: 'Venda de Computadores',
        descricao:
            'Notebooks, desktops e workstations adequados às necessidades de cada profissional ou empresa.',
        detalhes:
            'Ajudamos na escolha de equipamentos adequados às necessidades profissionais, empresariais e técnicas de cada cliente.',
        recursos: [
            'Notebooks',
            'Desktops',
            'Workstations',
            'Equipamentos empresariais',
            'Suporte técnico',
        ],
    },
];

export default function Servicos() {
    const [servicoSelecionado, setServicoSelecionado] = useState<
        (typeof servicos)[number] | null
    >(null);

    return (
        <section
            id="servicos"
            className="bg-gray-50 px-5 py-24"
        >
            <div className="mx-auto max-w-7xl">

                {/* Cabeçalho */}
                <div className="mb-16 text-center">
                    <span className="inline-flex rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/10 px-4 py-2 text-sm font-semibold text-[#087ea4]">
                        O que fazemos
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-[#0a2540] md:text-5xl">
                        Nossos Serviços
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                        Soluções tecnológicas completas para ajudar empresas,
                        profissionais e instituições a crescerem.
                    </p>

                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#1e6fd9]" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

                    {servicos.map((s, i) => {
                        const Icon = s.icon;

                        return (
                            <button
                                type="button"
                                key={s.titulo}
                                onClick={() => setServicoSelecionado(s)}
                                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 border-t-4 border-t-transparent bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-t-[#00d4ff] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:ring-offset-2"
                            >
                                {/* Brilho */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#00d4ff]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#00d4ff]/20" />

                                {/* Número */}
                                <span className="absolute right-5 top-5 text-xs font-bold text-gray-200 transition-colors duration-300 group-hover:text-[#00d4ff]/40">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                {/* Ícone */}
                                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#1e6fd9] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                    <Icon
                                        size={30}
                                        strokeWidth={1.8}
                                        className="text-white"
                                    />
                                </div>

                                {/* Título */}
                                <h3 className="mb-3 text-xl font-bold text-[#0a2540] transition-colors duration-300 group-hover:text-[#087ea4]">
                                    {s.titulo}
                                </h3>

                                {/* Descrição */}
                                <p className="text-sm leading-6 text-gray-600">
                                    {s.descricao}
                                </p>

                                {/* Ação */}
                                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1e6fd9]">
                                    <span>Ver detalhes</span>

                                    <ArrowRight
                                        size={18}
                                        strokeWidth={2}
                                        className="transition-transform duration-300 group-hover:translate-x-2"
                                    />
                                </div>

                                {/* Linha inferior */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00d4ff] to-[#1e6fd9] transition-all duration-500 group-hover:w-full" />
                            </button>
                        );
                    })}

                </div>

                {/* CTA */}
                <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a2540] to-[#1e6fd9] p-8 text-white md:p-10">
                    <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

                        <div>
                            <h3 className="text-2xl font-bold md:text-3xl">
                                Precisa de uma solução personalizada?
                            </h3>

                            <p className="mt-2 max-w-2xl text-white/75">
                                Fale com a nossa equipa e explique o que a sua
                                empresa precisa.
                            </p>
                        </div>

                        <a
                            href="#contacto"
                            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#0a2540] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00d4ff] hover:text-white"
                        >
                            <span>Solicitar Orçamento</span>

                            <ArrowRight
                                size={18}
                                strokeWidth={2}
                            />
                        </a>

                    </div>
                </div>
            </div>

            {/* MODAL */}
            {servicoSelecionado &&
                (() => {
                    const Icon = servicoSelecionado.icon;

                    return (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020b1c]/70 p-5 backdrop-blur-sm"
                            onClick={() => setServicoSelecionado(null)}
                        >
                            <div
                                className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl md:p-9"
                                onClick={(e) => e.stopPropagation()}
                            >

                                {/* Fechar */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setServicoSelecionado(null)
                                    }
                                    aria-label="Fechar"
                                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 hover:bg-[#0a2540] hover:text-white"
                                >
                                    <X
                                        size={20}
                                        strokeWidth={2}
                                    />
                                </button>

                                {/* Ícone */}
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#1e6fd9] shadow-lg">
                                    <Icon
                                        size={38}
                                        strokeWidth={1.7}
                                        className="text-white"
                                    />
                                </div>

                                {/* Label */}
                                <span className="text-sm font-semibold uppercase tracking-wider text-[#1e6fd9]">
                                    Serviço SoftSony
                                </span>

                                {/* Título */}
                                <h3 className="mt-2 pr-10 text-2xl font-extrabold text-[#0a2540] md:text-3xl">
                                    {servicoSelecionado.titulo}
                                </h3>

                                {/* Detalhes */}
                                <p className="mt-5 leading-7 text-gray-600">
                                    {servicoSelecionado.detalhes}
                                </p>

                                {/* Recursos */}
                                <div className="mt-7">
                                    <h4 className="mb-4 font-bold text-[#0a2540]">
                                        O que podemos oferecer
                                    </h4>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {servicoSelecionado.recursos.map(
                                            (recurso) => (
                                                <div
                                                    key={recurso}
                                                    className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                                                >
                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00d4ff]/15 text-[#087ea4]">
                                                        <Check
                                                            size={15}
                                                            strokeWidth={3}
                                                        />
                                                    </span>

                                                    <span className="text-sm text-gray-700">
                                                        {recurso}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href="#contacto"
                                    onClick={() =>
                                        setServicoSelecionado(null)
                                    }
                                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#1e6fd9] px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <MessageCircle
                                        size={19}
                                        strokeWidth={2}
                                    />

                                    <span>
                                        Solicitar este serviço
                                    </span>
                                </a>

                            </div>
                        </div>
                    );
                })()}
        </section>
    );
}