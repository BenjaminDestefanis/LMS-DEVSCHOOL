// Componenten Call To Action - CTA 
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CTAContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center'
}));

const CTA = () => {
  return (
    <CTAContainer>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          ¿Listo para comenzar?
        </Typography>
        <Typography variant="h6" gutterBottom>
          Únete a nuestra plataforma de aprendizaje
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            mt: 3,
            backgroundColor: 'white',
            color: '#667eea',
            '&:hover': {
              backgroundColor: 'grey.100'
            }
          }}
        >
          Registrarse Gratis
        </Button>
      </Container>
    </CTAContainer>
  );
};

export default CTA;