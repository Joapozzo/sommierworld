import React, { useState, useEffect, useRef } from 'react';
import { Shield, Clock, MessageCircle } from 'lucide-react';

const ServiceSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const services = [
        {
            icon: Shield,
            title: 'Garantía Extendida',
            description: 'Cobertura integral en todos nuestros productos premium, protegiendo tu inversión durante años de descanso perfecto.'
        },
        {
            icon: Clock,
            title: 'Post Venta',
            description: 'Después de tu compra seguimos acompañándote. Si surge algún inconveniente, lo resolvemos de inmediato para que disfrutes tu colchón sin preocupaciones.'
        },
        {
            icon: MessageCircle,
            title: 'Soporte Continuo',
            description: 'Nuestros expertos permanecen disponibles para guiarte en cuidado, mantenimiento y optimización de tu experiencia de descanso.'
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="service"
            className="w-full py-15 sm:py-20 lg:py-25 bg-blue-600 relative"
        >
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-32"></div>
            </div> */}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center mb-16 sm:mb-20 lg:mb-24 transition-all duration-700 transform ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* Badge */}
                    <div
                        className={`inline-block transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-light border border-white/20 mb-8">
                            Compromiso Total
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        Más Allá de
                        <span className="block font-normal">la Compra</span>
                    </h2>

                    {/* Description */}
                    <p
                        className={`text-white/90 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        Nuestro compromiso con tu experiencia de descanso perfecto se extiende
                        mucho más allá del momento en que eliges tu colchón.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className={`group text-center transition-all duration-700 transform ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                                    }`}
                                style={{
                                    transitionDelay: `${500 + index * 150}ms`,
                                }}
                            >
                                <div className="relative">
                                    {/* Card */}
                                    <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-8 lg:p-12 rounded-3xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-105 h-full min-h-[350px] sm:min-h-[300px] lg:min-h-[400px] md:min-h-[450px] xl:min-h-[450px]">
                                        {/* Icon Container */}
                                        <div className="relative mb-8">
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                                            </div>

                                            {/* Floating Ring */}
                                            <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 mx-auto border-2 border-white/20 rounded-full group-hover:scale-125 group-hover:rotate-90 transition-all duration-700"></div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-light text-white mb-6 group-hover:text-white/95 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/80 font-light leading-relaxed text-sm sm:text-base group-hover:text-white/90 transition-colors duration-300">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className="absolute top-6 right-6 w-3 h-3 bg-white/30 rounded-full group-hover:scale-150 group-hover:bg-white/50 transition-all duration-500"></div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Wave Decoration */}
                <div
                    className={`mt-20 sm:mt-24 flex justify-center transition-all duration-1000 transform ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '1000ms' }}
                >
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;