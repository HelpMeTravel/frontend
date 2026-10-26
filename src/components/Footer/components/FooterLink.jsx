import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const FooterLink = ({ to, children }) => (
  <Link
    component={RouterLink}
    to={to}
    underline="hover"
    variant="caption"
    sx={{ color: 'primary.dark', fontWeight: 500 }}
  >
    {children}
  </Link>
);
