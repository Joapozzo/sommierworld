import React, { useState, useEffect, useRef } from 'react';
import { Users, Heart, Star, Award } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    const features = [
        {
            icon: Heart,
            title: 'Atención Personalizada',
            description: 'Cada cliente recibe atención individual y asesoramiento experto para encontrar su descanso ideal.'
        },
        {
            icon: Star,
            title: 'Calidad Premium',
            description: 'Solo trabajamos con marcas que cumplen nuestros más altos estándares de excelencia y durabilidad.'
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="nosotros"
            className="w-full pb-16 sm:pb-20 lg:pb-24 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">

                    {/* Image Column */}
                    <div
                        className={`relative order-2 lg:order-1 transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-8'
                            }`}
                    >
                        <div className="relative group">
                            <Image
                                src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                alt="Consulta personalizada de descanso"
                                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
                                width={700}
                                height={400}
                            />

                            {/* Floating Icon Badge */}
                            <div
                                className={`absolute top-6 left-6 bg-white p-4 rounded-2xl shadow-lg transition-all duration-500 transform ${isVisible ? 'translate-y-0 rotate-0' : 'translate-y-4 rotate-12'
                                    } group-hover:scale-110 group-hover:-rotate-3`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>

                            {/* Decorative floating element */}
                            <div
                                className={`absolute bottom-6 right-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    } group-hover:scale-110 group-hover:rotate-12`}
                                style={{ transitionDelay: '600ms' }}
                            >
                                <Award className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div
                        className={`order-1 lg:order-2 transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-8'
                            }`}
                    >
                        {/* Badge */}
                        <div
                            className={`inline-block transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-light border border-blue-100 mb-6">
                                Nuestra Misión
                            </span>
                        </div>

                        {/* Title */}
                        <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                }`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            Tu Descanso,
                            <span className="text-blue-600 font-normal"> Nuestra Pasión</span>
                        </h2>

                        {/* Content */}
                        <div className="space-y-6">
                            <p
                                className={`text-gray-600 text-lg font-light leading-relaxed transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                    }`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                Durante más de dos décadas, nos hemos dedicado a ayudar a las personas a descubrir
                                su santuario perfecto de descanso. Nuestra experiencia no solo radica en productos premium,
                                sino en comprender las necesidades únicas de cada persona.
                            </p>

                            <p
                                className={`text-gray-600 font-light leading-relaxed transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                    }`}
                                style={{ transitionDelay: '500ms' }}
                            >
                                Creemos que elegir el colchón y sommier correcto es un viaje profundamente personal.
                                Por eso brindamos asesoramiento personalizado, asegurándonos de que encuentres
                                la combinación perfecta para tu estilo de sueño.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="mt-10 space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`group flex items-start space-x-4 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                            } hover:-translate-y-1`}
                                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 group-hover:scale-110 transform">
                                            <Icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-light text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm font-light leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
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
        </section>
    );
};

export default AboutSection;