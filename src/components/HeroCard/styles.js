import { Box, Typography, styled } from '@mui/material';

export const HeroTextContent = styled(Box)({
  flex: 1,
  width: '100%',
  minWidth: 0,
  textAlign: 'left',
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(2),
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}));
