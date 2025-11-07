import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeaturesContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[50]
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3)
}));

const Features = () => {
  const features = [
    '📚 Cursos Interactivos',
    '✍️ Sistema de Evaluaciones', 
    '📖 Blog Educativo',
    '📊 Dashboard Personalizado'
  ];

  return (
    <FeaturesContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Características Principales
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <Typography variant="h6">
              {feature}
            </Typography>
          </FeatureItem>
        ))}
      </Box>
    </FeaturesContainer>
  );
};

export default Features;