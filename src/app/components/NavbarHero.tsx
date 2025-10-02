import React from 'react';
import Image from 'next/image';
import EnhancedNavbar from './Navbar';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const NavbarHeroSection = () => {
  const goToSection = (section: string) => {
    window.scrollTo({
      top: document.getElementById(section)?.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className="relative min-h-screen" id="inicio">
      <EnhancedNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <Image
            src="/imgs/hero-desktop.webp"
            alt="Luxury bedroom"
            className="hidden md:block w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          {/* Mobile Image */}
          <Image
            src="/imgs/hero-mobile.webp"
            alt="Luxury bedroom"
            className="md:hidden w-full h-full object-cover"
            width={768}
            height={1024}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/30 to-transparent md:bg-gradient-to-r md:from-blue-900/40 md:via-blue-800/50 md:to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          {/* Mobile & Tablet Layout - Todo alineado a la izquierda */}
          <div className="lg:hidden">
            <div className="text-left max-w-2xl">
              {/* Título */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight animate-slide-up font-light">
                Transformamos
                <br />
                <span className="font-bold">Tu Descanso</span>
                <br />
                <span className="">En Lujo</span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-lg leading-relaxed animate-fade-in-delayed text-white">
                Descubre colchones y sommiers premium que redefinen el
                confort. Más de 20 años creando experiencias de descanso
                perfectas.
              </p>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up-delayed max-w-md">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth={true}
                  className="order-1"
                  onClick={() => goToSection('productos')}

                >
                  Explorar Colección
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                {/* <Button
                  variant="white"
                  outline={true}
                  size="md"
                  fullWidth={true}
                  className="order-2"
                  onClick={() => goToSection('consulta-personalizada')}
                >
                  Consulta Personalizada
                </Button> */}
              </div>
            </div>
          </div>

          {/* Desktop Layout - Layout original con 2 columnas */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Columna Izquierda - Solo el título centrado */}
            <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl text-white mb-0 leading-tight animate-slide-up font-light">
                Transformamos
                <br />
                <span className="font-medium">Tu Descanso</span>
                <br />
                <span className="">En Lujo</span>
              </h1>
            </div>

            {/* Columna Derecha - Subtítulo + Botones alineados a la derecha */}
            <div className="flex flex-col items-end text-right justify-center">
              <p className="text-xl mb-10 max-w-lg leading-relaxed animate-fade-in-delayed text-white">
                Descubre colchones y sommiers premium que redefinen el
                confort. Más de 20 años creando experiencias de descanso
                perfectas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end animate-slide-up-delayed">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth={true}
                  onClick={() => goToSection('productos')}
                >
                  Explorar Colección
                  <ArrowRight className="w-5 h-5" />
                </Button>
                {/* <Button
                  variant="white"
                  outline={true}
                  size="sm"
                  fullWidth={true}
                  onClick={() => { }}
                >
                  Consulta Personalizada
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm mb-2">Deslizar</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .animate-fade-in-delayed {
            animation: fade-in 1s ease-out 0.3s both;
          }

          .animate-slide-up {
            animation: slide-up 1s ease-out;
          }

          .animate-slide-up-delayed {
            animation: slide-up 1s ease-out 0.5s both;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          /* Responsive animations */
          @media (max-width: 1023px) {
            .animate-slide-up {
              animation: slide-up 0.8s ease-out;
            }

            .animate-fade-in-delayed {
              animation: fade-in 0.8s ease-out 0.2s both;
            }

            .animate-slide-up-delayed {
              animation: slide-up 0.8s ease-out 0.4s both;
            }
          }
        `}</style>
    </div>
  );
};

export default NavbarHeroSection;