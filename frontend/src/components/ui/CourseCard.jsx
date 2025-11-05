// components/CourseCard.js
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import { AccessTime, People } from '@mui/icons-material';
import { courseCardStyles } from './styles/courseCardStyle';

function CourseCard({ course }) {
  return (
    <Card sx={courseCardStyles.card}>
      <CardContent sx={courseCardStyles.cardContent}>
        {/* Header */}
        <Box sx={courseCardStyles.header}>
          <Typography variant="h6" sx={courseCardStyles.title}>
            {course.title}
          </Typography>
          <Chip 
            label={course.status} 
            size="small"
            color={course.status === 'Activo' ? 'success' : 'warning'}
            sx={courseCardStyles.chip}
          />
        </Box>

        {/* Descripción */}
        <Typography variant="body2" sx={courseCardStyles.description}>
          {course.description}
        </Typography>

        {/* Stats */}
        <Box sx={courseCardStyles.statsContainer}>
          <Box sx={courseCardStyles.statItem}>
            <AccessTime sx={courseCardStyles.icon} />
            <Typography variant="body2" sx={courseCardStyles.statText}>
              {course.duration}
            </Typography>
          </Box>
          <Box sx={courseCardStyles.statItem}>
            <People sx={courseCardStyles.icon} />
            <Typography variant="body2" sx={courseCardStyles.statText}>
              {course.students} estudiantes
            </Typography>
          </Box>
        </Box>
      </CardContent>

      {/* Botón */}
      <Box sx={courseCardStyles.buttonContainer}>
        <Button 
          variant="contained" 
          fullWidth
          sx={courseCardStyles.button}
        >
          Inscribirse al curso
        </Button>
      </Box>
    </Card>
  );
}

export default CourseCard;