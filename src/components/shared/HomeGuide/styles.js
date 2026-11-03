import { Typography, styled } from '@mui/material';

export const GuideTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
}));