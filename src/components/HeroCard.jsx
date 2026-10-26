import { Card, CardContent, Typography, Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import mapImage from '../assets/map.png';

export const HeroCard = () => (
  <Card
    sx={{
      width: '100%',
      maxWidth: { xs: 400, sm: 440, md: 1000 },
      backgroundColor: '#DCEBE2',
      borderRadius: { xs: '20px', md: '32px' },
      boxShadow: 'none',
      p: { xs: 1, sm: 2, md: 3 },
      boxSizing: 'border-box',
    }}
  >
    <CardContent
      sx={{
        p: { xs: 1.5, sm: 2, md: 3 },
        '&:last-child': { pb: { xs: 1.5, sm: 2, md: 3 } },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 3, md: 6 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: '100%',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.85rem', sm: '2.4rem', md: '3rem' },
            fontWeight: 700,
            color: '#23415C',
            mb: { xs: 1.5, md: 2 },
          }}
        >
          HelpMeTravel
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            color: '#58738A',
            mb: { xs: 3, md: 4 },
            lineHeight: 1.5,
          }}
        >
          Your guide to public transport and cultural etiquette in European cities.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            p: 0.75,
            pl: 2,
            mb: { xs: 2.5, md: 3 },
            maxWidth: { xs: '100%', md: 480 },
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

        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: '#718C9C',
          }}
        >
          Find a city. Understand the journey. Feel more at home.
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={mapImage}
          alt="Map of Europe with pins"
          sx={{
            width: '100%',
            maxHeight: { xs: 280, md: 420 },
            borderRadius: { xs: '16px', md: '24px' },
            display: 'block',
            objectFit: 'cover',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}
        />
      </Box>
    </CardContent>
  </Card>
);
