import { Box, IconButton, Menu } from '@mui/material';
import { useState } from 'react';
import HeaderNavigationItem from './HeaderNavigationItem';

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
];

export default function HeaderNavigation() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuOpen = Boolean(menuAnchor);

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <IconButton
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-controls={menuOpen ? 'header-menu' : undefined}
        aria-expanded={menuOpen}
        onClick={event => setMenuAnchor(event.currentTarget)}
        sx={{
          width: 44,
          height: 44,
          color: 'primary.main',
          backgroundColor: 'background.default',
          border: 1,
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        {[0, 1, 2].map(line => (
          <Box
            key={line}
            sx={{
              width: 20,
              height: 2,
              bgcolor: 'currentColor',
              borderRadius: 1,
            }}
          />
        ))}
      </IconButton>

      <Menu
        id="header-menu"
        anchorEl={menuAnchor}
        open={menuOpen}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 160,
              color: 'text.primary',
              backgroundColor: 'background.paper',
              border: 1,
              borderColor: 'divider',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(35, 65, 92, 0.10)',
            },
          },
        }}
      >
        {navigationItems.map(({ label, to }) => (
          <HeaderNavigationItem
            key={to}
            to={to}
            onClick={handleMenuClose}
          >
            {label}
          </HeaderNavigationItem>
        ))}
      </Menu>
    </>
  );
}
