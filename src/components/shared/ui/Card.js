import { Box, CardContent, Card as MuiCard, Typography, styled } from '@mui/material';

export const CardStyled = styled(MuiCard, {
  shouldForwardProp: prop => !['cardVariant', 'cardPadding'].includes(prop),
})(({ theme, cardVariant, cardPadding }) => ({
  width: '100%',
  maxWidth: theme.spacing(50),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.cardBorderRadius.mobile,
  boxShadow: 'none',
  boxSizing: 'border-box',
  ...theme.unstable_sx({
    p: cardPadding,
  }),
  [theme.breakpoints.up('sm')]: {
    maxWidth: theme.spacing(55),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: theme.spacing(125),
    borderRadius: theme.shape.cardBorderRadius.desktop,
  },
  ...(cardVariant === 'hero' && {
    backgroundColor: theme.palette.success.light,
    border: 'none',
    borderRadius: theme.shape.heroCardBorderRadius.mobile,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.spacing(125),
      borderRadius: theme.shape.heroCardBorderRadius.desktop,
    },
  }),
}));

export const CardImage = styled(Box, {
  shouldForwardProp: prop => prop !== 'cardVariant',
})(({ theme, cardVariant }) => {
  const borderRadius =
    cardVariant === 'hero' ? theme.shape.heroCardBorderRadius : theme.shape.cardBorderRadius;

  return {
    width: '100%',
    maxWidth: '100%',
    display: 'block',
    objectFit: 'contain',
    borderRadius: `${borderRadius.mobile}px`,
    [theme.breakpoints.up('md')]: {
      borderRadius: `${borderRadius.desktop}px`,
    },
  };
});

export const CardContentStyled = styled(CardContent, {
  shouldForwardProp: prop => !['contentAlignItems', 'contentGap'].includes(prop),
})(({ theme, contentAlignItems, contentGap }) => ({
  padding: `${theme.spacing(3)} !important`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  gap: theme.spacing(2.5),
  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(4)} !important`,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(4),
  },
  ...theme.unstable_sx({
    alignItems: contentAlignItems,
    gap: contentGap,
  }),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1.5),
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
