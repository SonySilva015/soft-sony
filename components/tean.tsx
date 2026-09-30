import Image from 'next/image';

import img from '@/public/me.jpeg';
import img2 from '@/public/mar.jpg';
import isabel from '@/public/isi.jpg';
import deb from '@/public/deb.jpg'

const equipe = [
    {
        nome: 'Sony Cassungulo',
        cargo: '(CEO ) / Desenvolvedor / técnico de segurança cybersecurity',
        imagem: img,
        descricao:
            'Responsável pela direção estratégica da SoftSony, desenvolvimento de soluções tecnológicas e coordenação dos principais projetos da empresa.',
        delay: 'delay-100',
    },

    {
        nome: 'Isabel Tomé',
        cargo: 'Especialista em Marketing',
        imagem: isabel,
        descricao:
            'Responsável pelo desenvolvimento de estratégias de marketing, comunicação e posicionamento da SoftSony no mercado.',
        delay: 'delay-200',
    },

    {
        nome: 'Marcelo Ngumba',
        cargo: 'UI/UX Designer & Frontend Developer / desenvolvedor',
        imagem: img2,
        descricao:
            'Especialista na criação de interfaces modernas, responsivas e intuitivas, com foco na experiência e satisfação dos utilizadores.',
        delay: 'delay-300',
    },
    {
        nome: 'Debora Cassungulo',
        cargo: 'UI/UX Designer & Frontend Developer',
        imagem: deb,
        descricao:
            'Especialista na criação de interfaces modernas, responsivas e intuitivas, com foco na experiência e satisfação dos utilizadores.',
    },

    {
        nome: 'Antonio Kalenga',
        cargo: 'Especialista em Redes',
        imagem: '/images/equipe/redes.jpg',
        descricao:
            'Responsável pela implementação, configuração e manutenção de infraestruturas de rede, garantindo conectividade, desempenho e segurança.',
        delay: 'delay-400',
    },
];

export default function Equipe() {
    return (
        <section
            id="equipe"
            className="relative overflow-hidden bg-white py-20 md:py-28"
        >
            {/* ELEMENTOS DECORATIVOS */}

            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00d4ff]/5 blur-3xl" />

            <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0066ff]/5 blur-3xl" />

            <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#00d4ff]/5 blur-3xl" />

            {/* CONTAINER */}

            <div className="relative mx-auto max-w-7xl px-5 md:px-10">

                {/* CABEÇALHO */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex items-center gap-2 rounded-full border border-[#00a8d6]/20 bg-[#00d4ff]/5 px-4 py-2 text-sm font-semibold text-[#008fc4]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#00b8e6]" />

                        Nossa equipa
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Profissionais que fazem a

                        <span className="block bg-gradient-to-r from-[#00a8d6] to-[#0066ff] bg-clip-text text-transparent">
                            tecnologia acontecer
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-500">
                        Conheça os profissionais que fazem parte da SoftSony. Uma equipa
                        multidisciplinar unida pela tecnologia, criatividade e compromisso
                        com a qualidade.
                    </p>
                </div>

                {/* EQUIPA */}

                <div className="mt-20 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">

                    {equipe.map((membro) => (
                        <div
                            key={membro.nome}
                            className={`group text-center motion-safe:animate-[fadeInUp_0.8s_ease-out_both] ${membro.delay}`}
                        >

                            {/* FOTO */}

                            <div className="relative mx-auto h-56 w-56 sm:h-60 sm:w-60">

                                {/* Glow */}

                                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0066ff] opacity-20 blur-md transition-all duration-500 group-hover:opacity-50 group-hover:blur-lg" />

                                {/* Moldura */}

                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff] via-[#0099ff] to-[#0066ff] p-[3px] transition-all duration-500 group-hover:scale-105">

                                    {/* Imagem */}

                                    <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100">

                                        <Image
                                            src={membro.imagem}
                                            alt={`Fotografia de ${membro.nome}, ${membro.cargo}`}
                                            fill
                                            sizes="(max-width: 640px) 224px, (max-width: 1024px) 240px, 240px"
                                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                        />

                                        {/* Overlay */}

                                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0066ff]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    </div>
                                </div>
                            </div>

                            {/* INFORMAÇÕES */}

                            <div className="mt-8">

                                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#0066ff]">
                                    {membro.nome}
                                </h3>

                                <p className="mt-1 text-sm font-semibold text-[#00a8d6]">
                                    {membro.cargo}
                                </p>

                                <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-slate-500">
                                    {membro.descricao}
                                </p>

                            </div>

                            {/* REDES SOCIAIS */}

                            <div className="mt-5 flex justify-center gap-3">

                                <a
                                    href="#"
                                    aria-label={`LinkedIn de ${membro.nome}`}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff] hover:bg-[#0066ff] hover:text-white"
                                >
                                    in
                                </a>

                                <a
                                    href="#"
                                    aria-label={`Facebook de ${membro.nome}`}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff] hover:bg-[#0066ff] hover:text-white"
                                >
                                    f
                                </a>

                                <a
                                    href="#"
                                    aria-label={`Email de ${membro.nome}`}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#00b8e6] hover:bg-[#00b8e6] hover:text-white"
                                >
                                    @
                                </a>

                            </div>

                        </div>
                    ))}

                </div>

                {/* FRASE FINAL */}

                <div className="mt-20 text-center">

                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                        Inovação • Tecnologia • Criatividade • Resultados
                    </p>

                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#00b8e6] to-[#0066ff]" />

                </div>

            </div>
        </section>
    );
}