import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LogoSlider from '../ui/LogoSlider';

const HeroContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #6846ffff 0%, #8d75e6 100%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center'
}));

const Hero = () => {
  return (
    <HeroContainer>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{ fontFamily: 'Cormorant Garamond', fontWeight: '300', letterSpacing: '-3px'}}
          >
          Desarrolla tu maximo potencial
        </Typography>
        <Typography variant="h5" gutterBottom>
          Aprende Desarrollo de Software e Idiomas 
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{ mt: 3 }}
        >
          Comenzar Ahora
        </Button>

        <Button
          variant="contained" 
          size="large"
          sx={{ mt: 3 }}
        >
          Suscribite
        </Button>
      </Container>
      <LogoSlider />
    </HeroContainer>
  );
};

export default Hero;