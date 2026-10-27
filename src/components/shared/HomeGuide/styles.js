import { Box, Typography, styled } from '@mui/material';

export const GuideContainer = styled(Box)({
  width: '100%',
  maxWidth: '1000px', 
  margin: '0 auto',
});

export const GuideTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const StepCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light, 
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));