'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/logo-nome (copy 1).png'

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/#servicos', label: 'Serviços' },
        { href: 'sobre-nos', label: 'Sobre' },
        { href: '/#contato', label: 'Contato' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0a2540]/95 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-5 flex justify-between items-center">
                <a href="#" className="text-2xl font-extrabold text-white tracking-wide">
                    <Image
                        src={logo}
                        alt="ssss"
                        width={120}
                        height={100}

                    />


                </a>

                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-white font-medium hover:text-[#00d4ff] transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contato"
                    className="hidden md:inline-block px-6 py-2.5 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all"
                >
                    Orçamento
                </a>

                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {menuOpen && (
                <div className="md:hidden bg-[#0a2540] mt-2 py-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-6 py-3 text-white hover:bg-[#1e6fd9]/30"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}