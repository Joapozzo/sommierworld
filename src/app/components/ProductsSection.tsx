import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
// import Button from './ui/Button';

const ProductsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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
            id: "colchones",
            title: "Colchones",
            subtitle: "Confort Premium",
            description:
                "Descubre nuestra colección de colchones diseñados para brindarte el mejor descanso. Desde tecnología de memoria hasta materiales orgánicos.",
            image: "/imgs/colchon.webp",
            // buttonText: 'Explorar Colchones'
        },
        {
            id: "sommiers",
            title: "Sommiers",
            subtitle: "Elegancia y Soporte",
            description:
                "Bases de cama que combinan funcionalidad y diseño. Perfectos para complementar tu colchón y crear el conjunto ideal para tu descanso.",
            image: "/imgs/sommier.png",
            // buttonText: 'Ver Sommiers'
        },
        {
            id: "blanco",
            title: "Ropa de Cama",
            subtitle: "Textiles Premium",
            description:
                "Sábanas, acolchados, fundas y toda la ropa de cama que necesitas para completar tu experiencia de descanso con el máximo confort.",
            image: "/imgs/ropa.jpg",
            // buttonText: 'Ver Textiles'
        },
        {
            id: "almohadas",
            title: "Almohadas",
            subtitle: "Apoyo Perfecto",
            description:
                "Una amplia variedad de almohadas con diferentes materiales y firmezas para garantizar el soporte ideal para tu cabeza y cuello.",
            image: "/imgs/almohada.jpg",
            // buttonText: 'Explorar Almohadas'
        },
    ];

    // const accessories = [
    //     // {
    //     //     id: 'respaldos',
    //     //     title: 'Respaldos',
    //     //     subtitle: 'Diseño y Funcionalidad',
    //     //     description: 'Respaldos ergonómicos que transforman tu cama en un espacio de lectura y relajación, combinando estilo y comodidad.',
    //     //     image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //     //     // buttonText: 'Ver Respaldos'
    //     // },
    //     {
    //         id: 'bauleras',
    //         title: 'Bauleras y Pies de Cama',
    //         subtitle: 'Almacenamiento Elegante',
    //         description: 'Soluciones de almacenamiento prácticas y elegantes que optimizan el espacio de tu dormitorio sin comprometer el estilo.',
    //         image: '/imgs/pie.jpg',
    //         // buttonText: 'Ver Accesorios'
    //     }
    // ];

    return (
        <section
            ref={sectionRef}
            id="productos"
            className="w-fulL"
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

            {/* Main Categories Grid - 2x2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className={`group relative overflow-hidden transition-all duration-700 transform ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        {/* Background Image */}
                        <div className="relative h-[450px] sm:h-[500px] lg:h-[550px]">
                            <Image
                                src={category.image}
                                alt={category.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                width={1200}
                                height={630}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                                    {/* Subtitle */}
                                    <p className="text-white/80 text-sm sm:text-base font-light mb-2 sm:mb-3 uppercase tracking-wider">
                                        {category.subtitle}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 leading-tight">
                                        {category.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light mb-4 sm:mb-6 max-w-md leading-relaxed">
                                        {category.description}
                                    </p>

                                    {/* Button */}
                                    {/* <div className="transform transition-all duration-300 group-hover:scale-105">
                                        <Button
                                            variant="white"
                                            outline
                                            size="md"
                                            className="backdrop-blur-sm"
                                        >
                                            {category.buttonText}
                                        </Button>
                                    </div> */}
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 border-2 border-white/30 rounded-full transform transition-all duration-500 group-hover:rotate-90 group-hover:scale-110"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Accessories Section */}
            {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-8 sm:mb-12 transition-all duration-700 transform ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}
                    style={{ transitionDelay: '800ms' }}
                >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-3 sm:mb-4">
                        Accesorios y
                        <span className="text-blue-600 font-normal"> Complementos</span>
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Completa tu dormitorio con nuestros accesorios funcionales y elegantes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {accessories.map((accessory, index) => (
                        <div
                            key={accessory.id}
                            className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${1000 + index * 200}ms` }}
                        >

                            <div className="relative h-[350px] sm:h-[400px] lg:h-[450px]">
                                <Image
                                    src={accessory.image}
                                    alt={accessory.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    width={1200}
                                    height={627}
                                />


                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/70"></div>


                                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                                    <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">

                                        <p className="text-white/80 text-xs sm:text-sm font-light mb-2 uppercase tracking-wider">
                                            {accessory.subtitle}
                                        </p>


                                        <h4 className="text-white text-xl sm:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 leading-tight">
                                            {accessory.title}
                                        </h4>


                                        <p className="text-white/90 text-sm sm:text-base font-light mb-4 sm:mb-5 max-w-sm leading-relaxed">
                                            {accessory.description}
                                        </p>


                                        <div className="transform transition-all duration-300 group-hover:scale-105">

                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 border border-white/30 rounded-full transform transition-all duration-500 group-hover:rotate-180 group-hover:scale-125"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Bottom decorative element */}
            {/* <div
                className={`mt-16 sm:mt-20 flex justify-center transition-all duration-1000 transform ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                    }`}
                style={{ transitionDelay: '1400ms' }}
            >
                <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            </div> */}
        </section>
    );
};

export default ProductsSection;