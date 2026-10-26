import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(MuiButton)(({ theme, variant, color, size }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none',
  textTransform: 'none',
  ...(size === 'large' && {
    width: '100%',
    minWidth: 0,
    padding: theme.spacing(1.3, 2.5),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      minWidth: '210px',
    },
  }),
  ...(variant === 'contained' &&
    color === 'primary' && {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        filter: 'brightness(0.96)',
        boxShadow: 'none',
      },
    }),
}));
