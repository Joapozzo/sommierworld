import React, { useState, useEffect, useRef } from 'react';
import { Play, Volume2, Eye, PlayCircle } from 'lucide-react';

const MultimediaSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeVideo, setActiveVideo] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [videoErrors, setVideoErrors] = useState<{ [key: number]: boolean }>({});
    const [counts, setCounts] = useState({
        views: 0,
        engagement: 0,
        shares: 0
    });
    const sectionRef = useRef<HTMLElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Detectar dispositivos móviles
    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor;
            const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) ||
                window.innerWidth <= 768;
            setIsMobile(isMobileDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                    setTimeout(() => animateCount(0, 125, 2000, 'views'), 300);
                    setTimeout(() => animateCount(0, 98, 2000, 'engagement'), 500);
                    setTimeout(() => animateCount(0, 89, 2000, 'shares'), 700);
                }
            },
            { threshold: 0.1 } // 🔥 CAMBIAR A 0.1
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        // 🔥 ACTIVAR VIDEOS CUANDO LA SECCIÓN SEA VISIBLE
        const activateAllVideos = () => {
            videoRefs.current.forEach((video, index) => {
                if (video && !videoErrors[index]) {
                    video.muted = true;
                    video.playsInline = true;
                    video.setAttribute('webkit-playsinline', 'true');
                    video.setAttribute('x5-playsinline', 'true');

                    const playVideo = async () => {
                        try {
                            await video.play();
                            console.log(`✅ Video ${index} playing`);
                        } catch (error) {
                            console.log(`❌ Video ${index} failed:`, error);
                        }
                    };

                    // Intentar reproducir inmediatamente
                    playVideo();

                    // Reintento cada segundo
                    const interval = setInterval(() => {
                        if (video.paused) {
                            playVideo();
                        } else {
                            clearInterval(interval);
                        }
                    }, 1000);

                    // Limpiar después de 10 segundos
                    setTimeout(() => clearInterval(interval), 10000);
                }
            });
        };

        // Activar después de que la sección sea visible
        setTimeout(activateAllVideos, 500);

        // 🔥 LISTENER GLOBAL PARA CUALQUIER INTERACCIÓN
        const handleInteraction = () => {
            activateAllVideos();
            // Remover listeners
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
        };

        document.addEventListener('touchstart', handleInteraction, { passive: true });
        document.addEventListener('click', handleInteraction);
        document.addEventListener('scroll', handleInteraction, { passive: true });

        return () => {
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
        };
    }, [isVisible, videoErrors]);

    const videos = [
        {
            src: "https://res.cloudinary.com/dqafurpsp/video/upload/v1755631601/sw-video-1_smilq4.mp4",
            poster: "/images/video-1-poster.jpg", // Imagen de poster
            title: "Transformación Moderna",
            description: "Espacios que reflejan personalidad",
            category: "Diseño Interior"
        },
        {
            src: `https://res.cloudinary.com/dqafurpsp/video/upload/v1755631604/sw-video-2_mmq2jo.mp4`,
            poster: "/images/video-2-poster.jpg",
            title: "Elegancia Minimalista",
            description: "Simplicidad con carácter único",
            category: "Estilo Contemporáneo"
        },
        {
            src: `https://res.cloudinary.com/dqafurpsp/video/upload/v1755631602/sw-video-3_wsjfck.mp4`,
            poster: "/images/video-3-poster.jpg",
            title: "Ambiente Acogedor",
            description: "Calidez en cada detalle",
            category: "Decoración"
        }
    ];

    const handleVideoHover = (index: number) => {
        setActiveVideo(index);

        // 🔥 REPRODUCIR EN AMBOS DISPOSITIVOS
        if (!videoErrors[index] && videoRefs.current[index]) {
            const video = videoRefs.current[index];
            video.muted = true;
            const playPromise = video?.play();

            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    setVideoErrors(prev => ({ ...prev, [index]: true }));
                });
            }
        }
    };

    const handleVideoLeave = (index: number) => {
        // 🔥 NUNCA PAUSAR EN MÓVILES - SIEMPRE REPRODUCIÉNDOSE
        if (!isMobile) {
            setActiveVideo(null);
            if (videoRefs.current[index]) {
                videoRefs.current[index]?.pause();
            }
        }
    };

    const handleVideoLoadedData = (index: number) => {
        // 🔥 REPRODUCIR INMEDIATAMENTE AL CARGAR
        if (videoRefs.current[index]) {
            const video = videoRefs.current[index];
            video.muted = true;
            video.play().catch(console.log);
        }
    };

    const handleVideoClick = (index: number) => {
        // En mobile, permitir click para reproducir
        if (isMobile || videoErrors[index]) {
            if (videoRefs.current[index]) {
                const video = videoRefs.current[index];
                if (video?.paused) {
                    setActiveVideo(index);
                    video.play().catch(() => {
                        setVideoErrors(prev => ({ ...prev, [index]: true }));
                    });
                } else {
                    setActiveVideo(null);
                    video.pause();
                }
            }
        }
    };

    const handleVideoError = (index: number) => {
        console.warn(`Error loading video ${index}`);
        setVideoErrors(prev => ({ ...prev, [index]: true }));
    };

    const stats = [
        {
            icon: Eye,
            title: 'Visualizaciones',
            value: counts.views,
            suffix: 'K+',
        },
        {
            icon: Play,
            title: '% Engagement',
            value: counts.engagement,
            suffix: '%',
        },
        {
            icon: Volume2,
            title: '% Contenido Compartido',
            value: counts.shares,
            suffix: '%',
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full pb-16 sm:pb-20 lg:pb-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <div
                            className={`inline-block transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                        >
                            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-light border border-blue-100 mb-6">
                                Contenido Multimedia
                            </span>
                        </div>

                        <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                }`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            Experiencias que
                            <span className="text-blue-600 font-normal"> Inspiran</span>
                        </h2>

                        <p
                            className={`text-gray-600 text-lg font-light leading-relaxed max-w-3xl mx-auto transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                                }`}
                            style={{ transitionDelay: '300ms' }}
                        >
                            Descubre cómo transformamos espacios a través de nuestro contenido visual.
                            Cada video cuenta una historia única de diseño y creatividad.
                        </p>
                    </div>

                    {/* Videos Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className={`group relative transition-all duration-700 transform cursor-pointer ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${400 + index * 200}ms` }}
                                onMouseEnter={() => handleVideoHover(index)}
                                onMouseLeave={() => handleVideoLeave(index)}
                                onClick={() => handleVideoClick(index)}
                            >
                                {/* Video Container */}
                                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                    {videoErrors[index] ? (
                                        // Fallback para errores de video
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
                                            style={{
                                                backgroundImage: video.poster ? `url(${video.poster})` : undefined,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="text-white text-center">
                                                <PlayCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                                <p className="text-sm opacity-90">Video no disponible</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <video
                                            ref={(el) => { videoRefs.current[index] = el; }}
                                            src={video.src}
                                            poster={video.poster}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            muted={true}
                                            loop
                                            autoPlay
                                            playsInline
                                            preload="auto"
                                            onError={() => handleVideoError(index)}
                                            onLoadedData={() => handleVideoLoadedData(index)} // 🔥 NUEVO
                                            onLoadStart={() => {
                                                setVideoErrors(prev => ({ ...prev, [index]: false }));
                                            }}
                                            onCanPlay={() => {
                                                if (videoRefs.current[index]?.paused) {
                                                    videoRefs.current[index]?.play().catch(console.log);
                                                }
                                            }}
                                        />
                                    )}

                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${activeVideo === index ? 'opacity-100' : 'opacity-60'
                                        }`}>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                                {video.category}
                                            </span>
                                        </div>

                                        {/* Play Icon */}
                                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeVideo === index && !isMobile ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                                            }`}>
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                <Play className="w-6 h-6 text-white ml-1" />
                                            </div>
                                        </div>

                                        {/* Mobile Click Indicator */}
                                        {isMobile && (
                                            <div className="absolute bottom-20 right-4">
                                                <div className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded">
                                                    Toca para reproducir
                                                </div>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className={`absolute bottom-4 left-4 right-4 text-white transition-all duration-500 ${activeVideo === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                                            }`}>
                                            <h3 className="text-lg font-medium mb-1">
                                                {video.title}
                                            </h3>
                                            <p className="text-sm opacity-90">
                                                {video.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group text-center transition-all duration-700 transform ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                                >
                                    <div className="flex flex-col items-center space-y-4">
                                        {/* Icon */}
                                        <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                            <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-blue-600" />
                                        </div>

                                        {/* Number */}
                                        <div>
                                            <span className="text-3xl sm:text-4xl font-light text-gray-800">
                                                {stat.value}
                                            </span>
                                            <span className="text-2xl sm:text-3xl font-medium text-blue-600">
                                                {stat.suffix}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg sm:text-xl text-gray-700 leading-tight font-light">
                                            {stat.title}
                                        </h3>
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
                        style={{ transitionDelay: '1400ms' }}
                    >
                        <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MultimediaSection;