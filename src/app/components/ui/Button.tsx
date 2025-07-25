import React from 'react';

// Tipos para las variantes del botón
type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'neutral' 
  | 'success' 
  | 'danger' 
  | 'dark'
  | 'white';

// Tipos para los tamaños del botón
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Interfaz para las props del botón
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Contenido del botón */
  children: React.ReactNode;
  
  /** Variante de color del botón */
  variant?: ButtonVariant;
  
  /** Si true, muestra el botón con estilo outline */
  outline?: boolean;
  
  /** Tamaño del botón */
  size?: ButtonSize;
  
  /** Si true, el botón ocupa todo el ancho disponible */
  fullWidth?: boolean;
  
  /** Si true, deshabilita el botón */
  disabled?: boolean;
  
  /** Clases CSS adicionales */
  className?: string;
  
  /** Función que se ejecuta al hacer click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    outline = false,
    size = 'md',
    fullWidth = false,
    disabled = false,
    className = '',
    onClick = () => {},
    ...props
}) => {

    // Configuración de colores
    const colorConfig = {
        primary: {
            solid: {
                base: 'bg-blue-600 text-white',
                hover: 'hover:bg-blue-700',
                effect: 'bg-white/20'
            },
            outline: {
                base: 'border-2 border-blue-600 text-blue-600 bg-transparent',
                hover: 'hover:bg-blue-600 hover:text-white',
                effect: 'bg-blue-600/20'
            }
        },
        secondary: {
            solid: {
                base: 'bg-amber-500 text-white',
                hover: 'hover:bg-amber-600',
                effect: 'bg-white/20'
            },
            outline: {
                base: 'border-2 border-amber-500 text-amber-600 bg-transparent',
                hover: 'hover:bg-amber-500 hover:text-white',
                effect: 'bg-amber-500/20'
            }
        },
        accent: {
            solid: {
                base: 'bg-orange-500 text-white',
                hover: 'hover:bg-orange-600',
                effect: 'bg-white/20'
            },
            outline: {
                base: 'border-2 border-orange-500 text-orange-600 bg-transparent',
                hover: 'hover:bg-orange-500 hover:text-white',
                effect: 'bg-orange-500/20'
            }
        },
        neutral: {
            solid: {
                base: 'bg-green-500 text-white',
                hover: 'hover:bg-green-600',
                effect: 'bg-white/20'
            },
            outline: {
                base: 'border-2 border-green-500 text-green-600 bg-transparent',
                hover: 'hover:bg-green-500 hover:text-white',
                effect: 'bg-green-500/20'
            }
        },
        success: {
            solid: {
                base: 'bg-emerald-600 text-white',
                hover: 'hover:bg-emerald-700',
                effect: 'bg-white/20'
            },
            outline: {
                base: 'border-2 border-emerald-600 text-emerald-600 bg-transparent',
                hover: 'hover:bg-emerald-600 hover:text-white',
                effect: 'bg-emerald-600/20'
            }
        },
        danger: {
            solid: {
                base: 'bg-red-600 text-white',
                hover: 'hover:bg-red-700',
                effect: 'bg-white/20'
            },
            outline: {
                base: 'border-2 border-red-600 text-red-600 bg-transparent',
                hover: 'hover:bg-red-600 hover:text-white',
                effect: 'bg-red-600/20'
            }
        },
        dark: {
            solid: {
                base: 'bg-gray-800 text-white',
                hover: 'hover:bg-gray-900',
                effect: 'bg-white/20'
            },
            outline: {
                base: 'border-2 border-gray-800 text-gray-800 bg-transparent',
                hover: 'hover:bg-gray-800 hover:text-white',
                effect: 'bg-gray-800/20'
            }
        },
        white: {
            solid: {
                base: 'bg-white text-gray-800 border border-gray-200',
                hover: 'hover:bg-gray-50 hover:border-gray-300',
                effect: 'bg-gray-800/10'
            },
            outline: {
                base: 'border-2 border-white text-white bg-transparent',
                hover: 'hover:bg-white hover:text-gray-800',
                effect: 'bg-white/20'
            }
        }
    } as const;

    // Configuración de tamaños
    const sizeConfig = {
        sm: 'py-2 px-4 text-sm rounded-lg',
        md: 'py-3 px-6 text-base rounded-xl',
        lg: 'py-4 px-8 text-lg rounded-xl',
        xl: 'py-5 px-10 text-xl rounded-2xl'
    } as const;

    // Obtener configuración actual
    const currentColorConfig = colorConfig[variant] || colorConfig.primary;
    const currentStyleConfig = outline ? currentColorConfig.outline : currentColorConfig.solid;

    const baseClasses = `
    relative group font-medium transition-all duration-300 
    transform hover:scale-105 active:scale-95
    shadow-lg hover:shadow-xl
    overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${currentStyleConfig.base}
    ${currentStyleConfig.hover}
    ${sizeConfig[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'pointer-events-none' : ''}
    ${className}
  `;

    return (
        <button
            className={baseClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                {children}
            </span>

            {/* Efecto shimmer */}
            <div className={`absolute top-0 left-0 w-full h-full ${currentStyleConfig.effect} transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700`}></div>

            {/* Efecto de resplandor */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </button>
    );
};

// Exportar tipos para usar en otros archivos
export type { ButtonProps, ButtonVariant, ButtonSize };
export default Button;