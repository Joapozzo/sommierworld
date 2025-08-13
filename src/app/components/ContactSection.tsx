import { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useSendEmail } from '../hooks/useSendEmail';

const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedLocal, setSelectedLocal] = useState(0);
    const { sendEmail, loading, error, success } = useSendEmail();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: '',
        local: ''
    });
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

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        await sendEmail(formData);
    };

    const locales = [
        {
            name: 'Local Centro',
            address: 'Av. General Paz 123, Centro, Córdoba',
            phone: '+54 351 423-7650',
            whatsapp: '+54 9 351 423-7650',
            coordinates: '31°24\'14.2"S 64°11\'07.1"W',
            mapUrl: 'https://maps.google.com/?q=-31.4039,-64.1853',
            mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.3!2d-64.1853!3d-31.4039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI0JzE0LjIiUyA2NMKwMTEnMDcuMSJX!5e0!3m2!1ses!2sar!4v1699024800000!5m2!1ses!2sar'
        },
        {
            name: 'Local Nueva Córdoba',
            address: 'Av. Hipólito Yrigoyen 567, Nueva Córdoba',
            phone: '+54 351 756-9380',
            whatsapp: '+54 9 351 756-9380',
            coordinates: '31°25\'32.1"S 64°11\'45.2"W',
            mapUrl: 'https://maps.google.com/?q=-31.4256,-64.1959',
            mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8!2d-64.1959!3d-31.4256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzMyLjEiUyA2NMKwMTEnNDUuMiJX!5e0!3m2!1ses!2sar!4v1699024800001!5m2!1ses!2sar'
        }
    ];

    const generalContact = {
        email: 'contacto@sommierworld.com'
    };

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

                    {/* Left Column - Locales Info */}
                    <div
                        className={`transition-all duration-700 transform ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-8'
                            }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 lg:mb-8">
                            Nuestros Locales
                        </h3>
                        <p className="text-white/90 font-light leading-relaxed mb-10 lg:mb-12 text-lg">
                            Visitanos en cualquiera de nuestros dos locales en Córdoba. Cada uno cuenta con
                            expertos especializados para ayudarte a encontrar el descanso perfecto.
                        </p>

                        {/* Navegación entre locales */}
                        <div className="flex bg-white/10 backdrop-blur-sm p-2 rounded-2xl border border-white/20 mb-8 gap-2">
                            {locales.map((local, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedLocal(index)}
                                    className={`flex-1 py-3 px-6 rounded-xl font-light transition-all duration-300 ${selectedLocal === index
                                        ? 'bg-white text-blue-600 shadow-lg'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {local.name}
                                </button>
                            ))}
                        </div>

                        {/* Local seleccionado */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 mb-8">
                            <h4 className="text-2xl font-normal text-white mb-6">{locales[selectedLocal].name}</h4>

                            <div className="space-y-6">
                                {/* Dirección */}
                                <div className="group flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm font-light mb-1">Dirección</p>
                                        <a
                                            href={locales[selectedLocal].mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white font-light hover:text-white/90 transition-colors duration-300 text-lg block"
                                        >
                                            {locales[selectedLocal].address}
                                        </a>
                                        <p className="text-white/60 text-sm font-light mt-2">
                                            {locales[selectedLocal].coordinates}
                                        </p>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="group flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-sm font-light mb-1">Teléfono</p>
                                        <a
                                            href={`tel:${locales[selectedLocal].phone.replace(/\s/g, '')}`}
                                            className="text-white font-light hover:text-white/90 transition-colors duration-300 text-lg"
                                        >
                                            {locales[selectedLocal].phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mapa del local seleccionado */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 mb-8">
                            <h5 className="text-lg font-light text-white mb-4 text-center">Ubicación</h5>
                            <div className="relative rounded-2xl overflow-hidden">
                                <iframe
                                    key={selectedLocal}
                                    src={locales[selectedLocal].mapEmbed}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-2xl"
                                    title={`Ubicación de ${locales[selectedLocal].name}`}
                                ></iframe>
                            </div>
                        </div>

                        {/* Email General */}
                        <div className="group flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div>
                                <p className="text-white/70 text-sm font-light">Email General</p>
                                <a
                                    href={`mailto:${generalContact.email}`}
                                    className="text-white font-light hover:text-white/90 transition-colors duration-300"
                                >
                                    {generalContact.email}
                                </a>
                            </div>
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

                                {/* Local Preference */}
                                <div>
                                    <label className="block text-sm font-light text-white/90 mb-3">
                                        Local de Preferencia
                                    </label>
                                    <select
                                        name="local"
                                        value={formData.local}
                                        onChange={handleFormChange}
                                        className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 font-light backdrop-blur-sm"
                                    >
                                        <option value="" className="bg-blue-600">Seleccionar local</option>
                                        <option value="centro" className="bg-blue-600">Local Centro</option>
                                        <option value="nueva-cordoba" className="bg-blue-600">Local Nueva Córdoba</option>
                                        <option value="cualquiera" className="bg-blue-600">Cualquier local</option>
                                    </select>
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
                                    disabled={formData.name === '' || formData.email === '' || formData.message === '' || loading}
                                >
                                    <Send className="w-5 h-5" />
                                    {loading ? 'Enviando...' : 'Enviar Consulta'}
                                </Button>

                                {success && <p className="text-green-400 mt-2 text-center">¡Mensaje enviado correctamente!</p>}
                                {error && <p className="text-red-200 mt-2 text-center">{error}</p>}
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