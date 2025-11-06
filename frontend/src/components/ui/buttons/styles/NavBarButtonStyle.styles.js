import { styled } from '@mui/material/styles'
//import { Button } from '@mui/material/Button'
import Button from '@mui/material/Button';

const NavBarButtonStyle = styled(Button)(({ theme, color = '#dd7e2a'}) => ({

    // Puedes recibir props como 'color' para personalizar
    position: 'relative',
    //borderColor: color,
    border: 'none',
    color: color,
    overflow: 'hidden',
    fontWeight: 800,
    textTransform: 'none', // Para mantener el texto normal
    //borderRadius: '8px', // Bordes redondeados opcionales

    '&::before': {
        width: '20%',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: 0,
        backgroundColor: color,
        transform: 'rotateZ(-45deg) translate(-50%, -50%)',
        transition: 'all 0.3s',
        content: '""',
        zIndex: -1,
    },

    '&:hover': {
        color: '#000',
        backgroundColor: 'transparent',
        
        '&::before': {
        width: '100%',
        top: 0,
        transform: 'none',
        },
    },

         // Para deshabilitar el efecto cuando el botón está disabled
    '&.Mui-disabled': {
        '&::before': {
        display: 'none',
        },
    },
    
    '@keyframes ani507': {
        '10%': {
        width: 0,
        transform: 'rotateZ(-45deg) translate(-100%, -50%)',
        },
        '20%': {
        width: 0,
        transform: 'rotateZ(0) translate(-100%, 85%)',
        },
        '60%': {
        width: '100%',
        transform: 'rotateZ(0) translate(0, 85%)',
        },
        '100%': {
        width: '100%',
        transform: 'rotateZ(0) translate(0, 0)',
        },
    },
}))

export default NavBarButtonStyle;