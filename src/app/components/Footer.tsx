import React, { useState, useEffect, useRef } from 'react';
import { Star, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

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

    const partners = [
        { name: 'Natural Soft', description: 'Lujo orgánico' },
        { name: 'King Koil', description: 'Tradición premium' },
        { name: 'Deseo', description: 'Innovación y diseño' }
    ];

    const contactInfo = [
        {
            icon: Phone,
            label: '+54 351 123-4567',
            href: 'tel:+543511234567'
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp Disponible',
            href: '#'
        },
        {
            icon: Mail,
            label: 'info@descansopremiun.com',
            href: 'mailto:info@descansopremiun.com'
        },
        {
            icon: MapPin,
            label: 'Córdoba, Argentina',
            href: '#'
        }
    ];

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">

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

                            {/* Decorative Element */}
                            <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                        </div>

                        {/* Partners */}
                        <div
                            className={`transition-all duration-700 transform ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <h4 className="text-lg sm:text-xl font-light mb-6 text-white">
                                Nuestros Socios
                            </h4>
                            <div className="space-y-4">
                                {partners.map((partner, index) => (
                                    <div
                                        key={index}
                                        className={`group flex items-center space-x-3 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                            } hover:translate-x-2`}
                                        style={{ transitionDelay: `${500 + index * 100}ms` }}
                                    >
                                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 group-hover:bg-blue-300 transition-all duration-300"></div>
                                        <div>
                                            <span className="text-white font-light block group-hover:text-blue-200 transition-colors duration-300">
                                                {partner.name}
                                            </span>
                                            <span className="text-white/60 text-sm font-light">
                                                {partner.description}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div
                            className={`transition-all duration-700 transform ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            <h4 className="text-lg sm:text-xl font-light mb-6 text-white">
                                Contacto
                            </h4>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className={`group flex items-center space-x-3 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                                } hover:translate-x-2`}
                                            style={{ transitionDelay: `${700 + index * 100}ms` }}
                                        >
                                            <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                                <Icon className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                                            </div>
                                            <span className="text-white/80 font-light group-hover:text-white transition-colors duration-300">
                                                {info.label}
                                            </span>
                                        </a>
                                    );
                                })}
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
                    style={{ transitionDelay: '1000ms' }}
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