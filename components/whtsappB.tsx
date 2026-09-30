'use client';

import React from 'react';

interface WhatsAppButtonProps {
    /** Número de telefone com código do país (ex: 5511999999999) */
    phoneNumber: string;
    /** Mensagem inicial opcional que aparecerá no chat */
    message?: string;
}

export default function WhatsAppButton({
    phoneNumber,
    message = 'Olá! Gostaria de mais informações.',
}: WhatsAppButtonProps) {
    // Limpa caracteres não numéricos do telefone
    const cleanPhone = phoneNumber.replace(/\D/g, '');

    // Constrói o link oficial da API do WhatsApp
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95"
            >
                {/* Anel Pulsante de Fundo (Aura/Onda de atenção) */}
                <span className="absolute -z-10 h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />

                {/* Ícone SVG do WhatsApp com leve rotação no Hover */}
                <svg
                    className="h-8 w-8 fill-current transition-transform duration-300 group-hover:rotate-12"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2zm5.857 14.161c-.247.693-1.438 1.327-1.99 1.385-.513.054-1.18.082-3.391-.832-2.828-1.169-4.639-4.047-4.78-4.236-.14-.188-1.143-1.523-1.143-2.903 0-1.38.722-2.059.98-2.342.257-.282.56-.352.748-.352.187 0 .375.003.538.01.173.007.408-.066.638.486.235.565.801 1.956.871 2.097.07.141.117.306.023.493-.094.188-.141.306-.282.47-.141.165-.298.368-.424.494-.141.141-.289.294-.124.576.165.282.734 1.21 1.572 1.957 1.077.96 1.986 1.258 2.268 1.399.282.141.447.118.611-.07.165-.189.705-.823.893-1.105.188-.282.376-.235.634-.141.258.094 1.644.775 1.926.916.282.141.47.212.54.329.07.118.07.682-.177 1.375z" />
                </svg>
            </a>
        </div>
    );
}