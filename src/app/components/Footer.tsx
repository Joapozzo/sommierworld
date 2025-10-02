import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { brands, locales as sucursales } from '../utils/data';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const generalContact = {
        email: 'info@sommierworld.com'
    };

    return (
        <footer
            ref={footerRef}
            className="w-full bg-blue-900 text-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 translate-y-32"></div>
            </div>

            <div className="relative z-10">
                {/* Main Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">

                        {/* Company Info */}
                        <div
                            className={`lg:col-span-1 transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-light mb-6 text-white">
                                Sommier
                                <span className="text-blue-300 font-normal"> World</span>
                            </h3>
                            <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg mb-8">
                                Transformando experiencias de descanso a través de colchones premium,
                                asesoramiento experto y cuidado personalizado desde hace más de 20 años.
                            </p>

                            {/* Email General */}
                            <div className="group flex items-center space-x-3 mb-6">
                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                    <Mail className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300" />
                                </div>
                                <a
                                    href={`mailto:${generalContact.email}`}
                                    className="text-white/80 font-light group-hover:text-white transition-colors duration-300"
                                >
                                    {generalContact.email}
                                </a>
                            </div>

                            {/* Decorative Element */}
                            <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                        </div>

                        {/* Sucursal Centro */}
                        <div
                            className={`transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <h4 className="text-lg sm:text-xl font-light mb-6 text-white">
                                {sucursales[0].name}
                            </h4>
                            <div className="space-y-4">
                                {/* Dirección */}
                                <div className="group flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 flex-shrink-0 mt-1">
                                        <MapPin className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <div>
                                        <span className="text-white/80 font-light block leading-relaxed">
                                            {sucursales[0].address}
                                        </span>
                                        <span className="text-white/50 text-sm font-light">
                                            {sucursales[0].coordinates}
                                        </span>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="group flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                        <Phone className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <a
                                        href={`tel:${sucursales[0].phone.replace(/\s/g, '')}`}
                                        className="text-white/80 font-light group-hover:text-white transition-colors duration-300"
                                    >
                                        {sucursales[0].phone}
                                    </a>
                                </div>

                                {/* WhatsApp */}
                                <div className="group flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                        <MessageCircle className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <a
                                        href={`https://wa.me/${sucursales[0].whatsapp.replace(/\s/g, '').replace('+', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 font-light group-hover:text-white transition-colors duration-300"
                                    >
                                        WhatsApp Zona Norte
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Sucursal Nueva Córdoba */}
                        <div
                            className={`transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            <h4 className="text-lg sm:text-xl font-light mb-6 text-white">
                                {sucursales[1].name}
                            </h4>
                            <div className="space-y-4">
                                {/* Dirección */}
                                <div className="group flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 flex-shrink-0 mt-1">
                                        <MapPin className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <div>
                                        <span className="text-white/80 font-light block leading-relaxed">
                                            {sucursales[1].address}
                                        </span>
                                        <span className="text-white/50 text-sm font-light">
                                            {sucursales[1].coordinates}
                                        </span>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="group flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                        <Phone className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <a
                                        href={`tel:${sucursales[1].phone.replace(/\s/g, '')}`}
                                        className="text-white/80 font-light group-hover:text-white transition-colors duration-300"
                                    >
                                        {sucursales[1].phone}
                                    </a>
                                </div>

                                {/* WhatsApp */}
                                <div className="group flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                        <MessageCircle className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <a
                                        href={`https://wa.me/${sucursales[1].whatsapp.replace(/\s/g, '').replace('+', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 font-light group-hover:text-white transition-colors duration-300"
                                    >
                                        WhatsApp Zona Sur
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Partners */}
                        <div
                            className={`transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '800ms' }}
                        >
                            <h4 className="text-lg sm:text-xl font-light mb-6 text-white">
                                Nuestros Socios
                            </h4>
                            <div className="space-y-4">
                                {brands.map((partner, index) => (
                                    <div
                                        key={index}
                                        className={`group flex items-center space-x-3 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                            } hover:translate-x-2`}
                                        style={{ transitionDelay: `${900 + index * 100}ms` }}
                                    >
                                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 group-hover:bg-blue-300 transition-all duration-300"></div>
                                        <div>
                                            <span className="text-white font-light block group-hover:text-blue-200 transition-colors duration-300">
                                                {partner.name}
                                            </span>
                                            {/* <span className="text-white/60 text-sm font-light">
                                                {partner.description}
                                            </span> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Width Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Copyright */}
                <div
                    className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 transition-all duration-700 transform ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                        }`}
                    style={{ transitionDelay: '1200ms' }}
                >
                    <div className="text-center">
                        <p className="text-white/60 font-light text-sm sm:text-base">
                            &copy; 2025 Sommier World. Todos los derechos reservados.
                        </p>

                        {/* Decorative dots */}
                        <div className="flex justify-center space-x-2 mt-6">
                            <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;