
import { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';


const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
    });
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

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Aquí iría la lógica de envío del formulario
    };

    const contactInfo = [
        {
            icon: Phone,
            label: 'Teléfono',
            value: '+54 351 123-4567',
            href: 'tel:+543511234567'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@sommierworld.com',
            href: 'mailto:info@sommierworld.com'
        },
        {
            icon: MapPin,
            label: 'Ubicación',
            value: 'Córdoba, Argentina',
            href: '#'
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="w-full py-10 sm:py-10 lg:py-15 bg-blue-600 relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-32"></div>
            </div>

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
                            Consulta Personalizada
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        Déjanos
                        <span className="block font-normal">Guiarte</span>
                    </h2>

                    {/* Description */}
                    <p
                        className={`text-white/90 text-lg sm:text-xl font-light max-w-4xl mx-auto leading-relaxed transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                            }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        Elegir el colchón perfecto es un viaje personal. Nuestros expertos en descanso
                        están aquí para brindarte asesoramiento personalizado según tus necesidades únicas.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">

                    {/* Left Column - Info */}
                    <div
                        className={`transition-all duration-700 transform ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-8'
                            }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 lg:mb-8">
                            Asesoramiento Experto
                        </h3>
                        <p className="text-white/90 font-light leading-relaxed mb-10 lg:mb-12 text-lg">
                            Cada cuerpo es diferente, y también lo son las preferencias de descanso.
                            Compártenos tus necesidades y te ayudaremos a descubrir la combinación perfecta
                            de comodidad, soporte y lujo que transformará tus noches.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`group flex items-center space-x-4 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                            } hover:translate-x-2`}
                                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                                    >
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                            <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-white/70 text-sm font-light">{info.label}</p>
                                            <a
                                                href={info.href}
                                                className="text-white font-light hover:text-white/90 transition-colors duration-300"
                                            >
                                                {info.value}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div
                        className={`transition-all duration-700 transform ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-8'
                            }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                            <div className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-light text-white/90 mb-3">
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 font-light backdrop-blur-sm"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-light text-white/90 mb-3">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 font-light backdrop-blur-sm"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                {/* WhatsApp Input */}
                                <div>
                                    <label className="block text-sm font-light text-white/90 mb-3">
                                        WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleFormChange}
                                        className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 font-light backdrop-blur-sm"
                                        placeholder="+54 9 351 123-4567"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label className="block text-sm font-light text-white/90 mb-3">
                                        Mensaje
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        rows={4}
                                        className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 font-light resize-none backdrop-blur-sm"
                                        placeholder="Cuéntanos sobre tus preferencias de descanso y lo que buscas..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    variant="white"
                                    size="lg"
                                    fullWidth
                                    onClick={handleSubmit}
                                    className="mt-8"
                                >
                                    <Send className="w-5 h-5" />
                                    Enviar Consulta
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative element */}
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

export default ContactSection;