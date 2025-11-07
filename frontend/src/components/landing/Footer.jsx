import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: 'white',
  padding: theme.spacing(4, 0),
  marginTop: 'auto'
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2025 ADADevSchool LMS. Todos los derechos reservados.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;