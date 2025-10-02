import React from 'react';
import Image from 'next/image';
import { brands } from '../utils/data';

const BrandsSlider = () => {

    // Duplicamos las marcas para el efecto infinito
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 sm:mb-6">
                        Marcas de
                        <span className="text-blue-600 font-normal"> Confianza Mundial</span>
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                        Trabajamos exclusivamente con las marcas más prestigiosas del mundo del descanso
                    </p>
                </div>

                {/* Slider Container con máscara de gradiente */}
                <div className="relative">
                    {/* Gradientes en los extremos */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* Slider */}
                    <div className="relative overflow-hidden py-8">
                        <div className="flex animate-scroll">
                            {duplicatedBrands.map((brand, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 mx-8 sm:mx-12 lg:mx-16"
                                    style={{ width: '160px' }}
                                >
                                    <div className="h-20 sm:h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="max-h-full w-auto object-contain"
                                            width={160}
                                            height={80}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default BrandsSlider;