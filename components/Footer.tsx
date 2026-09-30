import Image from 'next/image';

import logo from '@/public/logo.png';

export default function Footer() {
    const servicos = [
        'Desenvolvimento de Software',
        'Aplicações SaaS',
        'Instalação de Redes',
        'Câmeras de Segurança',
        'Cibersegurança',
        'Cursos de Tecnologia',
        'Venda de Computadores',
    ];

    return (
        <footer className="relative overflow-hidden bg-[#061a2e] px-5 pb-8 pt-16 text-gray-400">
            {/* Efeitos decorativos */}
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#00d4ff]/5 blur-3xl" />
            <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#0066ff]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Conteúdo principal */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* =========================
              MARCA
          ========================== */}
                    <div>
                        <div className="mb-5">
                            <Image
                                src={logo}
                                alt="SoftSony"
                                width={150}
                                height={150}
                                className="h-auto w-[150px] object-contain"
                            />
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-gray-400">
                            Soluções tecnológicas modernas, seguras e eficientes para
                            empresas, instituições e profissionais.
                        </p>

                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            Transformamos ideias em soluções digitais.
                        </p>

                        {/* Redes sociais */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff] hover:bg-[#00d4ff] hover:text-white"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff] hover:bg-[#00d4ff] hover:text-white"
                            >
                                ◎
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff] hover:bg-[#00d4ff] hover:text-white"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff] hover:bg-[#00d4ff] hover:text-white"
                            >
                                ☎
                            </a>
                        </div>
                    </div>

                    {/* =========================
              SERVIÇOS
          ========================== */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-white">
                            Serviços
                        </h3>

                        <ul className="space-y-3 text-sm">
                            {servicos.map((servico) => (
                                <li key={servico}>
                                    <a
                                        href="#servicos"
                                        className="transition-colors duration-300 hover:text-[#00d4ff]"
                                    >
                                        {servico}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* =========================
              CONTACTOS
          ========================== */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-white">
                            Contactos
                        </h3>

                        <div className="space-y-5 text-sm">

                            {/* Email */}
                            <div className="flex gap-3">

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:contato@softsony.com"
                                        className="mt-1 block text-gray-300 transition-colors hover:text-[#00d4ff]"
                                    >
                                        contato@softsony.com
                                    </a>
                                </div>
                            </div>

                            {/* Telefone */}
                            <div className="flex gap-3">


                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Telefone
                                    </p>

                                    <a
                                        href="tel:+244900000000"
                                        className="mt-1 block text-gray-300 transition-colors hover:text-[#00d4ff]"
                                    >
                                        +244 926 376 713
                                    </a>
                                </div>
                            </div>

                            {/* Localização */}
                            <div className="flex gap-3">


                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Localização
                                    </p>

                                    <p className="mt-1 text-gray-300">
                                        Luena, Angola
                                    </p>
                                </div>
                            </div>

                            {/* Horário */}
                            <div className="flex gap-3">


                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gray-500">
                                        Atendimento
                                    </p>

                                    <p className="mt-1 text-gray-300">
                                        Segunda — Sexta
                                    </p>

                                    <p className="text-gray-500">
                                        08:00 — 17:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =========================
              NAVEGAÇÃO
          ========================== */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-white">
                            Navegação
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href=""
                                    className="transition-colors hover:text-[#00d4ff]"
                                >
                                    Início
                                </a>
                            </li>

                            <li>
                                <a
                                    href="sobre-nos"
                                    className="transition-colors hover:text-[#00d4ff]"
                                >
                                    Sobre nós
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#servicos"
                                    className="transition-colors hover:text-[#00d4ff]"
                                >
                                    Serviços
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#equipe"
                                    className="transition-colors hover:text-[#00d4ff]"
                                >
                                    Nossa equipa
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contacto"
                                    className="transition-colors hover:text-[#00d4ff]"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-7">
                            <a
                                href="#contacto"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00b8e6] to-[#0066ff] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0066ff]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                Fale connosco
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* =========================
            LINHA INFERIOR
        ========================== */}
                <div className="mt-14 border-t border-white/10 pt-7">
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left">

                        <p className="text-gray-500">
                            © {new Date().getFullYear()} SoftSony.
                            Todos os direitos reservados.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 text-gray-500">
                            <a
                                href="#"
                                className="transition-colors hover:text-[#00d4ff]"
                            >
                                Política de Privacidade
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-[#00d4ff]"
                            >
                                Termos de Uso
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}