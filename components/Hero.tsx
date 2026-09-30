'use client';

import { useEffect, useState } from 'react';

import img1 from '@/public/fundo1.png';
import img2 from '@/public/parc.png';
import sss from '@/public/ssss.jpg'

const slides = [
    {
        id: 1,
        image: img1.src,
        badge: '🚀 Tecnologia de ponta para o seu negócio',
        title: 'Soluções completas em tecnologia',
        description:
            'Da criação de software à segurança cibernética, da instalação de redes aos cursos profissionais. A SoftSony é sua parceira tecnológica.',
    },
    {
        id: 2,
        image: img2.src,
        badge: '🤝 Parcerias que geram resultados',
        title: 'Tecnologia para fazer o seu negócio crescer',
        description:
            'Conte com a SoftSony para transformar ideias em soluções digitais modernas, seguras e eficientes.',
    },
    {
        id: 3,
        image: sss.src,
        badge: '💡 Inovação para o futuro',
        title: 'Transformamos desafios em soluções',
        description:
            'Software, redes, segurança e formação profissional reunidos numa única parceira tecnológica.',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Troca automática
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    };

    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* =========================
                IMAGENS
            ========================== */}
            {slides.map((slide, index) => (
                <img
                    key={slide.id}
                    src={slide.image}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${index === currentSlide
                        ? 'opacity-100'
                        : 'opacity-0'
                        }`}
                />
            ))}

            {/* =========================
                OVERLAY ESCURO
            ========================== */}
            <div className="absolute inset-0 bg-[#020b1c]/60" />

            {/* =========================
                GRADIENTE
            ========================== */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020b1c]/95 via-[#020b1c]/65 to-transparent" />

            {/* =========================
                CONTEÚDO
            ========================== */}
            <div className="relative z-10 flex min-h-screen items-center px-5 pt-24 pb-16 md:px-10">

                <div className="w-full max-w-4xl pl-0 md:pl-10">



                    {/* Título */}
                    <h1
                        key={`title-${currentSlide}`}
                        className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
                    >
                        {slides[currentSlide].title}
                    </h1>

                    {/* Descrição */}
                    <p
                        key={`description-${currentSlide}`}
                        className="mb-10 max-w-2xl text-lg text-white/90 md:text-xl"
                    >
                        {slides[currentSlide].description}
                    </p>

                    {/* Botões */}
                    <div className="flex flex-col gap-4 sm:flex-row">

                        <a
                            href="#servicos"
                            className="rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0099ff] px-8 py-4 text-center font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00d4ff]/50"
                        >
                            Ver Serviços
                        </a>

                        <a
                            href="#contato"
                            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                        >
                            Falar Conosco
                        </a>

                    </div>
                </div>
            </div>

            {/* =========================
                BOTÃO ANTERIOR
            ========================== */}
            <button
                onClick={prevSlide}
                aria-label="Slide anterior"
                className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl text-white backdrop-blur-md transition-all hover:bg-white/20 md:left-6"
            >
                ‹
            </button>

            {/* =========================
                BOTÃO PRÓXIMO
            ========================== */}
            <button
                onClick={nextSlide}
                aria-label="Próximo slide"
                className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl text-white backdrop-blur-md transition-all hover:bg-white/20 md:right-6"
            >
                ›
            </button>

            {/* =========================
                INDICADORES
            ========================== */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Ir para slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
                            ? 'w-10 bg-[#00d4ff]'
                            : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}

            </div>
        </section>
    );
}