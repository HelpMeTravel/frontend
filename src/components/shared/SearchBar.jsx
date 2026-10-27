import { Box, IconButton, InputBase } from '@mui/material';
import { ArrowForwardIcon, SearchIcon } from '../../constants/icons';

export const SearchBar = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flex: '1 1 auto',
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      p: 0.75,
      pl: 2,
      mb: { xs: 2.5, md: 3 },
      boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
    }}
  >
    <SearchIcon sx={{ color: '#23415C', fontSize: '1.5rem' }} />
    <InputBase
      sx={{
        ml: 1.5,
        flex: 1,
        color: '#23415C',
        fontSize: '1rem',
      }}
      placeholder="Search for a city..."
      inputProps={{ 'aria-label': 'search for a city' }}
    />
    <IconButton
      sx={{
        backgroundColor: '#527F9F',
        color: '#FFFFFF',
        borderRadius: '12px',
        p: 1.25,
        '&:hover': {
          backgroundColor: '#46687D',
        },
      }}
    >
      <ArrowForwardIcon />
    </IconButton>
  </Box>
);
