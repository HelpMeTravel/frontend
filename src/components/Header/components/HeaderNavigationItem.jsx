import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeaderNavigationItem({ to, onClick, children }) {
  return (
    <MenuItem
      component={Link}
      to={to}
      onClick={onClick}
      sx={{
        color: 'text.primary',
        '&:hover': {
          backgroundColor: 'primary.light',
        },
      }}
    >
      {children}
    </MenuItem>
  );
}
