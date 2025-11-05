// styles/courseCardStyles.js
export const courseCardStyles = {
  // Estilos de la Card principal
  card: {
    borderRadius: 3,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  // Estilos del CardContent
  cardContent: {
    flexGrow: 1, 
    p: 3
  },

  // Estilos del header
  header: {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    mb: 2
  },

  // Estilos del título
  title: {
    fontWeight: 600, 
    color: 'text.primary'
  },

  // Estilos del Chip
  chip: {
    borderRadius: 1
  },

  // Estilos de la descripción
  description: {
    color: 'text.secondary', 
    mb: 3, 
    lineHeight: 1.6
  },

  // Estilos de las stats
  statsContainer: {
    display: 'flex', 
    gap: 3, 
    mb: 2
  },

  // Estilos de cada stat
  statItem: {
    display: 'flex', 
    alignItems: 'center', 
    gap: 1
  },

  // Estilos del icono
  icon: {
    fontSize: 20, 
    color: 'primary.main'
  },

  // Estilos del texto de stat
  statText: {
    color: 'text.secondary'
  },

  // Estilos del contenedor del botón
  buttonContainer: {
    p: 2, 
    pt: 0
  },

  // Estilos del botón
  button: {
    borderRadius: 2,
    py: 1,
    fontWeight: 600,
    textTransform: 'none'
  }
};