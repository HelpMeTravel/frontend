import { Box, Typography, styled } from '@mui/material';

export const FooterRoot = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  paddingBlock: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBlock: theme.spacing(6),
  },
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  gap: theme.spacing(2.5),
}));

export const FooterBrand = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

export const FooterLegal = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(0.75),
}));

export const FooterDisclaimer = styled(Typography)(({ theme }) => ({
  maxWidth: 420,
  color: theme.palette.text.secondary,
}));
