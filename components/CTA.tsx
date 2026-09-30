import Link from 'next/link';

export default function Contacto() {
    return (
        <section
            id="contacto"
            className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
        >
            {/* Elementos decorativos */}
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00d4ff]/5 blur-3xl" />
            <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0066ff]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 md:px-10">
                {/* Cabeçalho */}
                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Vamos transformar a sua
                        <span className="block bg-gradient-to-r from-[#00a8d6] to-[#0066ff] bg-clip-text text-transparent">
                            ideia em realidade
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-500">
                        Tem um projeto, uma dúvida ou precisa de uma solução tecnológica?
                        Entre em contacto com a nossa equipa.
                    </p>
                </div>

                {/* Conteúdo */}
                <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
                    {/* Informações */}
                    <div className="lg:col-span-2">
                        <div className="h-full rounded-3xl bg-[#061a2e] p-8 shadow-xl md:p-10">
                            <h3 className="text-2xl font-bold text-white">
                                Entre em contacto
                            </h3>

                            <p className="mt-4 leading-7 text-gray-400">
                                Estamos disponíveis para conversar sobre o seu projeto,
                                esclarecer dúvidas e apresentar as melhores soluções para as
                                suas necessidades.
                            </p>

                            <div className="mt-10 space-y-7">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl text-[#00d4ff]">
                                        ✉
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">
                                            Email
                                        </p>

                                        <a
                                            href="mailto:contato@softsony.com"
                                            className="mt-1 block text-gray-200 transition-colors hover:text-[#00d4ff]"
                                        >
                                            softsony@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Telefone */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl text-[#00d4ff]">
                                        ☎
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">
                                            Telefone
                                        </p>

                                        <a
                                            href="tel:+244926376713"
                                            className="mt-1 block text-gray-200 transition-colors hover:text-[#00d4ff]"
                                        >
                                            +244 926376713
                                        </a>
                                    </div>
                                </div>

                                {/* Localização */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl text-[#00d4ff]">
                                        ⌖
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">
                                            Localização
                                        </p>

                                        <p className="mt-1 text-gray-200">
                                            Luena, Angola
                                        </p>
                                    </div>
                                </div>

                                {/* Horário */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-xl text-[#00d4ff]">
                                        ◷
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">
                                            Horário de atendimento
                                        </p>

                                        <p className="mt-1 text-gray-200">
                                            Segunda — Sexta
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            08:00 — 17:00
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="lg:col-span-3">
                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 md:p-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Envie uma mensagem
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Preencha o formulário abaixo e entraremos em contacto consigo.
                                </p>
                            </div>

                            <form className="space-y-6">
                                {/* Nome + Email */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="nome"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Nome completo
                                        </label>

                                        <input
                                            id="nome"
                                            name="nome"
                                            type="text"
                                            placeholder="Digite o seu nome"
                                            required
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a8d6] focus:bg-white focus:ring-4 focus:ring-[#00d4ff]/10"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="seuemail@gmail.com"
                                            required
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a8d6] focus:bg-white focus:ring-4 focus:ring-[#00d4ff]/10"
                                        />
                                    </div>
                                </div>

                                {/* Telefone + Assunto */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="telefone"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Telefone
                                        </label>

                                        <input
                                            id="telefone"
                                            name="telefone"
                                            type="tel"
                                            placeholder="+244 900 000 000"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a8d6] focus:bg-white focus:ring-4 focus:ring-[#00d4ff]/10"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="assunto"
                                            className="mb-2 block text-sm font-semibold text-slate-700"
                                        >
                                            Assunto
                                        </label>

                                        <select
                                            id="assunto"
                                            name="assunto"
                                            required
                                            defaultValue=""
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all focus:border-[#00a8d6] focus:bg-white focus:ring-4 focus:ring-[#00d4ff]/10"
                                        >
                                            <option value="" disabled>
                                                Selecione um assunto
                                            </option>
                                            <option value="software">
                                                Desenvolvimento de Software
                                            </option>
                                            <option value="saas">
                                                Aplicação SaaS
                                            </option>
                                            <option value="redes">
                                                Redes e Infraestrutura
                                            </option>
                                            <option value="seguranca">
                                                Cibersegurança
                                            </option>
                                            <option value="cameras">
                                                Câmeras de Segurança
                                            </option>
                                            <option value="formacao">
                                                Formação
                                            </option>
                                            <option value="computadores">
                                                Computadores
                                            </option>
                                            <option value="outro">
                                                Outro
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Mensagem */}
                                <div>
                                    <label
                                        htmlFor="mensagem"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Mensagem
                                    </label>

                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        rows={6}
                                        required
                                        placeholder="Descreva o seu projeto ou diga-nos como podemos ajudar..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#00a8d6] focus:bg-white focus:ring-4 focus:ring-[#00d4ff]/10"
                                    />
                                </div>

                                {/* Botão */}
                                <button
                                    type="submit"
                                    className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00b8e6] to-[#0066ff] px-6 py-4 font-bold text-white shadow-lg shadow-[#0066ff]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0066ff]/30"
                                >
                                    Enviar mensagem
                                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </button>

                                <p className="text-center text-xs text-slate-400">
                                    Responderemos à sua mensagem assim que possível.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}