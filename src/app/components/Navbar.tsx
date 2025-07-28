"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Button from './ui/Button';
import Link from 'next/link';

const EnhancedNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };
        checkMobile();
        handleScroll();
        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logoDefault = isMobile ? '/logos/logotipo-reducido-1.svg' : '/logos/logotipo-3.svg';
    const logoScrolled = isMobile ? '/logos/logotipo-reducido-2.svg' : '/logos/logotipo-2.svg';
    const menuItems = ['Inicio', 'Marcas', 'Productos', 'Nosotros', 'Galería'];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="relative w-15 sm:w-20 md:w-40 lg:w-60 h-12 overflow-hidden" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${isScrolled
                                    ? "opacity-100 translate-y-0 scale-100"
                                    : "opacity-0 translate-y-4 scale-95"
                                    }`}
                            >
                                <Link href={"/"}>
                                    <Image
                                        src={logoScrolled}
                                        alt="Logo Scrolled"
                                        fill
                                        className="object-contain"
                                    />
                                </Link>
                            </div>
                            <div
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${!isScrolled
                                    ? "opacity-100 translate-y-0 scale-100"
                                    : "opacity-0 -translate-y-4 scale-95"
                                    }`}
                            >
                                <Image
                                    src={logoDefault}
                                    alt="Logo Default"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`relative group px-2 py-1 transition-all duration-300 ${isScrolled
                                        ? "text-gray-700 hover:text-blue-600"
                                        : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    <span className="relative z-10">{item}</span>
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/5 h-0.5 bg-blue-600 transition-all duration-300 rounded-full"></div>
                                </a>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <div className="hidden lg:block">
                            <Button>Contactar</Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            className="lg:hidden p-2 relative group"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200 opacity-30"></div>
                            {isMenuOpen ? (
                                <X
                                    className={`w-6 h-6 relative z-10 ${isScrolled ? "text-gray-700" : "text-white"
                                        }`}
                                />
                            ) : (
                                <Menu
                                    className={`w-6 h-6 relative z-10 ${isScrolled ? "text-gray-700" : "text-white"
                                        }`}
                                />
                            )}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Full Screen Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Content */}
                <div
                    className={`absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl transform transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div className="pt-24 pb-8 px-6">
                        <div className="space-y-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block text-xl font-medium text-gray-800 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-xl px-4 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="pt-6">
                                <Button
                                    className="relative group w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium text-lg overflow-hidden"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative z-10">Contactar</span>
                                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnhancedNavbar;