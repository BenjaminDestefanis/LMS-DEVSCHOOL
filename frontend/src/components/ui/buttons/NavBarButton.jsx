import React from 'react';
import NavBarButtonStyle from './styles/NavBarButtonStyle.styles';

/**
 * Botón con efecto de animación personalizado
 * @param {Object} props - Props del componente
 * @param {ReactNode} props.children - Contenido del botón
 * @param {string} props.color - Color personalizado (opcional)
 * @param {function} props.onClick - Función click handler
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 * @param {string} props.variant - Variante del botón (outlined, contained, text)
 * @param {string} props.size - Tamaño (small, medium, large)
 * @param {Object} props.sx - Estilos adicionales de MUI
 */
const NavBarButton = ({
  children,
  color = '#fff',
  onClick,
  disabled = false,
  variant = 'outlined',
  size = 'medium',
  sx = {},
  ...props
}) => {
  return (
    <NavBarButtonStyle
      color={color}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      sx={sx}
      {...props}
    >
      {children}
    </NavBarButtonStyle>
  );
};

export default NavBarButton;