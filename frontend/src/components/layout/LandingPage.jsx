import { Box } from '@mui/material';
import Hero from '../landing/Hero';
import Benefits from '../landing/Benefits';
import Features from '../landing/Features';
import CTA from '../landing/CTA';
import Footer from '../landing/Footer';



const LandingPage = () => {
  return (
    <Box>
      <Hero />
      <Benefits />
      <Features />
      <CTA />
      <Footer />
    </Box>
  );
};

export default LandingPage;