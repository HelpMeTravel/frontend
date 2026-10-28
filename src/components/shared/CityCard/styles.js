
import { Box, Stack, styled } from '@mui/material';

import {
  CardStyled,
  CardImage,
  CardContentStyled,
  CardTitle,
  CardDescription,
} from '../ui/Card';

export const CityCardStyled = styled(CardStyled)({
  maxWidth: 'none',
  padding: 0,
});

export const CityImage = styled(CardImage)(({ theme }) => ({
  height: 180,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
}));

export const CityCardContent = styled(CardContentStyled)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: theme.spacing(1),
  padding: `${theme.spacing(1)} !important`,

  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(1),
    padding: `${theme.spacing(1)} !important`,
  },
}));

export const CityCardInfo = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
}));

export const CityCardText = styled(Box)({
  minWidth: 0,
});

export const CityName = styled(CardTitle)(({ theme }) => ({
  marginBottom: theme.spacing(0.5),
  fontWeight: 600,
}));

export const CountryName = styled(CardDescription)({});

export const CityCardFooter = styled(Stack)({
  width: '100%',
});

export const CityArrow = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 22,
  lineHeight: 1,
}));
