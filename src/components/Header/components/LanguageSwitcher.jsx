import { Box, Button } from '@mui/material';
import { useState } from 'react';

// For now, this component is not used in the MVP, but it can be easily added to the Header component in the future.

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = () => {
    setLanguage(currentLanguage => (currentLanguage === 'EN' ? 'UA' : 'EN'));
  };

  return (
    <Button
      onClick={handleLanguageChange}
      aria-label="Switch language"
      color="inherit"
      sx={{
        minWidth: '94px',
        px: 1.5,
        py: 1,
        color: 'primary.main',
        backgroundColor: 'background.default',
        border: 1,
        borderColor: 'divider',
        '&:hover': {
          backgroundColor: 'primary.light',
        },
      }}
    >
      <Box
        component="span"
        sx={{
          color: language === 'EN' ? 'primary.main' : 'text.secondary',
          fontWeight: language === 'EN' ? 700 : 500,
        }}
      >
        EN
      </Box>

      <Box
        component="span"
        sx={{
          mx: 0.75,
          color: 'divider',
        }}
      >
        /
      </Box>

      <Box
        component="span"
        sx={{
          color: language === 'UA' ? 'text.secondary' : 'primary.main',
          fontWeight: language === 'UA' ? 700 : 500,
        }}
      >
        UA
      </Box>
    </Button>
  );
};
