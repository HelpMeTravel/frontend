import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Stack, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#e4ece7',
        py: 1.5,
        textAlign: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#557088',
            fontSize: '0.8rem',
          }}
        >
          Independent travel guidance, not an operator website. Always check official rules before
          you travel.
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center">
          <Link
            component={RouterLink}
            to="/explore"
            underline="hover"
            sx={{ color: '#1f3a52', fontWeight: 600, fontSize: '0.85rem' }}
          >
            Explore cities
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            underline="hover"
            sx={{ color: '#1f3a52', fontWeight: 600, fontSize: '0.85rem' }}
          >
            About the guide
          </Link>
          <Link
            component={RouterLink}
            to="/feedback"
            underline="hover"
            sx={{ color: '#1f3a52', fontWeight: 600, fontSize: '0.85rem' }}
          >
            Feedback
          </Link>
        </Stack>

        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.75rem' }}>
          &copy; 2026 HelpMeTravel
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
