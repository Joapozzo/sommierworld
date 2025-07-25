import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';

const ProductsSection = () => {
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

    const categories = [
        {
            id: 'colchones',
            title: 'Colchones',
            subtitle: 'Confort Premium',
            description: 'Descubre nuestra colección de colchones diseñados para brindarte el mejor descanso. Desde tecnología de memoria hasta materiales orgánicos.',
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            buttonText: 'Explorar Colchones'
        },
        {
            id: 'sommiers',
            title: 'Sommiers',
            subtitle: 'Elegancia y Soporte',
            description: 'Bases de cama que combinan funcionalidad y diseño. Perfectos para complementar tu colchón y crear el conjunto ideal para tu descanso.',
            image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            buttonText: 'Ver Sommiers'
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="productos"
            className="w-full pb-16 sm:pb-20 lg:pb-24"
        >
            {/* Header */}
            <div
                className={`text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 transition-all duration-700 transform ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 sm:mb-6">
                    Nuestros
                    <span className="text-blue-600 font-normal"> Productos</span>
                </h2>
                <p className="text-gray-600 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                    Explora nuestras categorías principales y encuentra el producto perfecto para tu descanso ideal
                </p>
            </div>

            {/* Categories Grid - Full Width */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className={`group relative overflow-hidden transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                            }`}
                        style={{ transitionDelay: `${index * 300}ms` }}
                    >
                        {/* Background Image */}
                        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[750px]">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
                                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                                    {/* Subtitle */}
                                    <p className="text-white/80 text-sm sm:text-base font-light mb-2 sm:mb-3 uppercase tracking-wider">
                                        {category.subtitle}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 leading-tight">
                                        {category.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/90 text-base sm:text-lg font-light mb-6 sm:mb-8 max-w-lg leading-relaxed">
                                        {category.description}
                                    </p>

                                    {/* Button */}
                                    <div className="transform transition-all duration-300 group-hover:scale-105">
                                        <Button
                                            variant="white"
                                            outline
                                            size="lg"
                                            className="backdrop-blur-sm"
                                        >
                                            {category.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/30 rounded-full transform transition-all duration-500 group-hover:rotate-90 group-hover:scale-110"></div>
                        </div>
                    </div>
                ))}
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

export default ProductsSection;