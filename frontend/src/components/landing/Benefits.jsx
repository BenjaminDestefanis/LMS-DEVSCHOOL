import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BenefitsContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0)
}));

const BenefitCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center'
}));

const Benefits = () => {
  const benefits = [
    { title: 'Para Estudiantes', desc: 'Aprende a tu ritmo' },
    { title: 'Para Instructores', desc: 'Crea contenido fácil' },
    { title: 'Flexible', desc: 'Accede desde cualquier dispositivo' }
  ];

  return (
    <BenefitsContainer>
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={4} key={index}>
            <BenefitCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {benefit.title}
                </Typography>
                <Typography>
                  {benefit.desc}
                </Typography>
              </CardContent>
            </BenefitCard>
          </Grid>
        ))}
      </Grid>
    </BenefitsContainer>
  );
};

export default Benefits;