import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { getCurrentYear } from '../helpers';

export const FooterLegalItem = ({ label, to, copyright }) => {
  const content = copyright ? `© ${getCurrentYear()} Help me Travel` : label;

  if (to) {
    return (
      <Link
        component={RouterLink}
        to={to}
        underline="hover"
        color="text.primary"
        variant="caption"
        sx={{ fontWeight: 500 }}
      >
        {content}
      </Link>
    );
  }

  return (
    <Typography variant="caption" color="text.primary">
      {content}
    </Typography>
  );
};
