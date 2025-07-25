import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const GallerySection = () => {
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

    const galleryItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            title: "Colección Premium Master",
            subtitle: "Diseño exclusivo",
            gridClass: "md:col-span-2 md:row-span-2",
            heightClass: "h-[300px] sm:h-[400px] lg:h-[500px]"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "Detalles Premium",
            subtitle: "Artesanía superior",
            gridClass: "md:col-span-1",
            heightClass: "h-[140px] sm:h-[180px] lg:h-[240px]"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "Sommiers de Lujo",
            subtitle: "Bases elegantes",
            gridClass: "md:col-span-1",
            heightClass: "h-[140px] sm:h-[180px] lg:h-[240px]"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "Confort Total",
            subtitle: "Experiencia única",
            gridClass: "md:col-span-1",
            heightClass: "h-[140px] sm:h-[180px] lg:h-[240px]"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "Tejidos Premium",
            subtitle: "Materiales selectos",
            gridClass: "md:col-span-1",
            heightClass: "h-[140px] sm:h-[180px] lg:h-[240px]"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Ambientes Premium",
            subtitle: "Espacios de ensueño",
            gridClass: "md:col-span-2",
            heightClass: "h-[200px] sm:h-[250px] lg:h-[300px]"
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="galería"
            className="w-full py-16 sm:py-20 lg:py-24 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 transform ${isVisible
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
                        <span className="inline-block px-6 py-3 bg-blue-50 text-blue-600 rounded-full text-sm font-light border border-blue-100 mb-8">
                            Galería de Productos
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-6 leading-tight transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        Artesanía y
                        <span className="text-blue-600 font-normal"> Elegancia</span>
                    </h2>

                    {/* Description */}
                    <p
                        className={`text-gray-600 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        Explora la artesanía y atención al detalle que caracteriza cada colchón
                        y sommier de nuestra colección premium.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer ${item.gridClass} transition-all duration-700 transform ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${500 + index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className={`relative ${item.heightClass} overflow-hidden`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                    width={1200}
                                    height={630}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                                    <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
                                        {/* Subtitle */}
                                        <p className="text-white/80 text-xs sm:text-sm font-light mb-1 sm:mb-2 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            {item.subtitle}
                                        </p>

                                        {/* Title */}
                                        <h3 className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-light leading-tight group-hover:text-white/95 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Hover Ring Effect */}
                                <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 border border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 group-hover:rotate-180"></div>

                                {/* Corner Accent */}
                                <div className="absolute bottom-4 left-4 w-1 h-8 sm:h-12 bg-white/40 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl ring-0 group-hover:ring-2 group-hover:ring-blue-200 group-hover:ring-opacity-50 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div
                    className={`mt-16 sm:mt-20 flex justify-center transition-all duration-1000 transform ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '1200ms' }}
                >
                    <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;