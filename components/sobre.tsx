import Image from 'next/image';
import Link from 'next/link';

import img from '@/public/sobre.png';

export default function Sobre() {
    return (
        <section
            id="sobre"
            className="relative min-h-screen overflow-hidden bg-white"
        >
            {/* IMAGEM DE FUNDO */}
            <Image
                src={img}
                alt=""
                fill
                priority
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* GRADIENTE PRINCIPAL */}
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/95 via-55% to-white/20" />

            {/* GRADIENTE INFERIOR */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

            {/* CONTEÚDO */}
            <div className="relative z-10 mx-auto flex min-h-[850px] max-w-7xl items-center px-5 py-20 md:px-10">

                {/* BLOCO DO LADO DIREITO */}
                <div className="w-full max-w-2xl lg:ml-auto">

                    {/* BADGE */}


                    {/* TÍTULO */}
                    <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        Tecnologia para

                        <span className="mt-2 block bg-gradient-to-r from-[#00a8d6] to-[#0066ff] bg-clip-text text-transparent">
                            transformar ideias
                        </span>
                    </h2>

                    {/* DESCRIÇÃO */}
                    <p className="mt-7 text-lg leading-relaxed text-slate-600 md:text-xl">
                        A SoftSony é uma empresa de tecnologia dedicada a desenvolver
                        soluções modernas, seguras e eficientes para empresas,
                        instituições e profissionais.
                    </p>

                    <p className="mt-4 leading-relaxed text-slate-500">
                        Trabalhamos em diferentes áreas da tecnologia, desde
                        desenvolvimento de software e soluções web até redes,
                        segurança informática e formação profissional.
                    </p>

                    {/* CARDS */}
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {/* SOLUÇÕES MODERNAS */}
                        <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/40 hover:shadow-xl">
                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl">
                                💡
                            </div>

                            <h3 className="font-bold text-slate-900">
                                Soluções modernas
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                Tecnologia atual, eficiente e adaptada às necessidades de
                                cada projeto.
                            </p>
                        </div>

                        {/* SEGURANÇA */}
                        <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/40 hover:shadow-xl">
                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl">
                                🔒
                            </div>

                            <h3 className="font-bold text-slate-900">
                                Segurança
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                Proteção e segurança para os seus sistemas e dados.
                            </p>
                        </div>

                        {/* PROFISSIONALISMO */}
                        <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/40 hover:shadow-xl">
                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl">
                                ✓
                            </div>

                            <h3 className="font-bold text-slate-900">
                                Profissionalismo
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                Compromisso, qualidade e responsabilidade em cada projeto.
                            </p>
                        </div>

                        {/* PARCERIA */}
                        <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/40 hover:shadow-xl">
                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl">
                                🤝
                            </div>

                            <h3 className="font-bold text-slate-900">
                                Parceria
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                Trabalhamos lado a lado com os nossos clientes para alcançar
                                resultados.
                            </p>
                        </div>

                    </div>

                    {/* BOTÃO */}
                    <div className="mt-10">
                        <Link
                            href="/sobre-nos"
                            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00b8e6] to-[#0066ff] px-7 py-4 font-bold text-white shadow-lg shadow-[#00b8e6]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0066ff]/30"
                        >
                            Saiba mais sobre nós

                            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}