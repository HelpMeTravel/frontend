
import { Box, Typography, styled } from '@mui/material';

export const CityCardStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.cardBorderRadius.mobile,

  [theme.breakpoints.up('md')]: {
    borderRadius: theme.shape.cardBorderRadius.desktop,
  },
}));

export const CityImage = styled('img')(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: 160,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
}));

export const CityCardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 1, 2),
}));

export const CityCardFooter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
});

export const CityName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

export const CountryName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const CityArrow = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 22,
  lineHeight: 1,
  flexShrink: 0,
}));
