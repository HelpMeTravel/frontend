import { Box, styled } from '@mui/material';

export const FeedbackCardText = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    maxWidth: '640px',
  },
}));
