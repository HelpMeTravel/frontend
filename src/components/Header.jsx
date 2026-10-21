import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
AppBar,
Toolbar,
Typography,
Box,
Button,
IconButton,
Menu,
MenuItem,
} from '@mui/material';

export default function Header() {
const [language, setLanguage] = useState('EN');
const [menuAnchor, setMenuAnchor] = useState(null);

const menuOpen = Boolean(menuAnchor);

const handleLanguageChange = () => {
setLanguage(language === 'EN' ? 'UA' : 'EN');
};

const handleMenuClose = () => {
setMenuAnchor(null);
};

return (
<AppBar
position="static"
elevation={0}
sx={{
bgcolor: '#F6F9F8',
color: '#23415C',
borderBottom: '1px solid #DCE5E9',
}}
>
<Toolbar
sx={{
minHeight: '76px',
px: { xs: 2, md: 4 },
display: 'flex',
justifyContent: 'space-between',
gap: 2,
}}
>
{/* Назва сайту */}
<Typography
component={Link}
to="/"
sx={{
color: '#23415C',
textDecoration: 'none',
fontFamily: '"Inter", sans-serif',
fontSize: '1.4rem',
fontWeight: 700,
whiteSpace: 'nowrap',
'&': {
textDecoration: 'none',
},
}}
>
HelpMeTravel
</Typography>

    {/* Перемикач мови та меню */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      {/* Перемикач мови */}
      <Button
        onClick={handleLanguageChange}
        aria-label="Switch language"
        color="inherit"
        sx={{
          minWidth: '94px',
          px: 1.5,
          py: 1,
          fontFamily: '"Inter", sans-serif',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#23415C',
          backgroundColor: '#FFFFFF',
          border: '1px solid #DCE5E9',
          borderRadius: '12px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#EAF1F3',
            borderColor: '#B9CAD4',
          },
        }}
      >
        <Box
          component="span"
          sx={{
            color: language === 'EN' ? '#23415C' : '#58738A',
            fontWeight: language === 'EN' ? 700 : 500,
          }}
        >
          EN
        </Box>

        <Box
          component="span"
          sx={{
            mx: 0.75,
            color: '#B9CAD4',
          }}
        >
          /
        </Box>

        <Box
          component="span"
          sx={{
            color: language === 'UA' ? '#58738A' : '#23415C',
            fontWeight: language === 'UA' ? 700 : 500,
          }}
        >
          UA
        </Box>
      </Button>

      {/* Кнопка меню-гамбургера */}
      <IconButton
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-controls={menuOpen ? 'header-menu' : undefined}
        aria-expanded={menuOpen}
        onClick={(event) => setMenuAnchor(event.currentTarget)}
        sx={{
          width: 44,
          height: 44,
          color: '#23415C',
          backgroundColor: '#FFFFFF',
          border: '1px solid #DCE5E9',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          '&:hover': {
            backgroundColor: '#EAF1F3',
            borderColor: '#B9CAD4',
          },
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 2,
            bgcolor: 'currentColor',
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            width: 20,
            height: 2,
            bgcolor: 'currentColor',
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            width: 20,
            height: 2,
            bgcolor: 'currentColor',
            borderRadius: 1,
          }}
        />
      </IconButton>

      {/* Випадаюче меню */}
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
              color: '#23415C',
              backgroundColor: '#F6F9F8',
              border: '1px solid #DCE5E9',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(35, 65, 92, 0.10)',
            },
          },
        }}
      >
        <MenuItem
          component={Link}
          to="/"
          onClick={handleMenuClose}
          sx={{
            color: '#23415C',
            '&:hover': {
              backgroundColor: '#EAF1F3',
            },
          }}
        >
          Home
        </MenuItem>

        <MenuItem
          component={Link}
          to="/about"
          onClick={handleMenuClose}
          sx={{
            color: '#23415C',
            '&:hover': {
              backgroundColor: '#EAF1F3',
            },
          }}
        >
          About
        </MenuItem>
      </Menu>
    </Box>
  </Toolbar>
</AppBar>

);
}