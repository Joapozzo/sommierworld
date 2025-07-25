import React, { useState, useEffect, useRef } from 'react';
import { Award, Shield, Star } from 'lucide-react';
import Image from 'next/image';

const BrandsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Observer para detectar cuando la sección está visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const brands = [
        {
            logo: '/logos/naturalsoft.svg',
            name: 'Natural Soft',
            title: 'Lujo Orgánico',
            description: 'Materiales 100% orgánicos y tecnología de vanguardia. Natural Soft representa la perfecta armonía entre la pureza de la naturaleza y el confort moderno.',
            icon: Shield,
            badge: 'Certificación Orgánica',
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            logo: '/logos/deseo.svg',
            name: 'Deseo',
            title: 'Innovación Premium',
            description: 'Diseños exclusivos que transforman el descanso en una experiencia única. Deseo combina elegancia contemporánea con tecnología avanzada para el máximo confort.',
            icon: Star,
            badge: 'Diseño Exclusivo',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            logo: '/logos/kingkoil.svg',
            name: 'King Koil',
            title: 'Legado Real',
            description: 'Más de 120 años de innovación en el descanso. King Koil combina tradición artesanal con tecnología avanzada para el soporte perfecto.',
            icon: Award,
            badge: '120+ años de excelencia',
            image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="marcas"
            className="w-full py-16 sm:py-20 lg:py-24 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center mb-16 sm:mb-20 transition-all duration-700 transform ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 sm:mb-6">
                        Marcas de
                        <span className="text-blue-600 font-normal"> Confianza Mundial</span>
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                        Trabajamos exclusivamente con las marcas más prestigiosas del mundo del descanso,
                        garantizando calidad y durabilidad excepcionales.
                    </p>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
                    {brands.map((brand, index) => {
                        const Icon = brand.icon;
                        return (
                            <div
                                key={index}
                                className={`group transition-all duration-700 transform ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 h-full hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-1">
                                    {/* Logo Container */}
                                    <div className="flex items-center justify-center h-16 sm:h-20 mb-6 sm:mb-8">
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                const img = e.target as HTMLImageElement;
                                                img.style.display = 'none';
                                                const fallbackDiv = img.nextSibling as HTMLElement;
                                                if (fallbackDiv) fallbackDiv.style.display = 'flex';
                                            }}
                                            width={120}
                                            height={60}
                                        />
                                        <div
                                            className="hidden h-full w-full items-center justify-center bg-gray-50 rounded-xl"
                                            style={{ display: 'none' }}
                                        >
                                            <span className="text-xl sm:text-2xl font-light text-gray-700">{brand.name}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h3 className="text-xl sm:text-2xl font-light text-gray-800 mb-3 sm:mb-4">
                                            {brand.title}
                                        </h3>
                                        <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                                            {brand.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src={brand.image}
                                            alt={`${brand.name} product`}
                                            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Badge */}
                                    <div className="flex items-center justify-center space-x-2 text-blue-600">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="text-sm sm:text-base font-light">
                                            {brand.badge}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom decorative element */}
                <div
                    className={`mt-16 sm:mt-20 flex justify-center transition-all duration-1000 transform ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '800ms' }}
                >
                    <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;