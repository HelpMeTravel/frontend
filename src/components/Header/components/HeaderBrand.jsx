import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeaderBrand() {
  return (
    <Typography
      component={Link}
      to="/"
      variant="h3"
      sx={{
        color: 'primary.main',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      HelpMeTravel
    </Typography>
  );
}
