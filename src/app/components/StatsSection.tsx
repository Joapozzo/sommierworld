import React, { useState, useEffect, useRef } from 'react';
import { Users, Star, Calendar, Award } from 'lucide-react';

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
        clients: 0,
        rating: 0,
        experience: 0,
        awards: 0
    });
    const sectionRef = useRef(null);

    useEffect(() => {
        const animateCount = (
            start: number,
            end: number,
            duration: number,
            key: keyof typeof counts
        ) => {
            const range = end - start;
            const increment = range / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    current = end;
                    clearInterval(timer);
                }
                setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 16);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    setTimeout(() => animateCount(0, 2500, 2000, 'clients'), 300);
                    // setTimeout(() => animateCount(0, 4.9, 2000, 'rating'), 500);
                    setTimeout(() => animateCount(0, 25, 2000, 'experience'), 700);
                    // setTimeout(() => animateCount(0, 15, 2000, 'awards'), 900);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);


    const stats = [
        {
            icon: Users,
            title: 'Familias Satisfechas',
            value: counts.clients,
            suffix: '+',
        },
        // {
        //     icon: Star,
        //     title: 'Calificación Promedio',
        //     value: counts.rating,
        //     suffix: '/5',
        //     decimal: 1
        // },
        {
            icon: Calendar,
            title: 'Años de Experiencia',
            value: counts.experience,
            suffix: '+',
        },
        // {
        //     icon: Award,
        //     title: 'Premios Recibidos',
        //     value: counts.awards,
        //     suffix: '+',
        // }
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-12 sm:py-16 lg:py-20"
        >
            <div className="container mx-auto px-4 sm:px-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-6 lg:gap-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`group text-center transition-all duration-700 transform ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    {/* Icon */}
                                    <div className="
                                        transform transition-all duration-300 
                                        group-hover:scale-110 group-hover:rotate-6
                                    ">
                                        <Icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-blue-600" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl lg:text-base xl:text-lg text-gray-700 leading-tight font-medium">
                                        {stat.title}
                                    </h3>

                                    {/* Number */}
                                    <div>
                                        <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-medium text-gray-800">
                                            {stat.value}
                                        </span>
                                        <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-blue-600">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;