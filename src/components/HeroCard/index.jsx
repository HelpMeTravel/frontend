import { Stack, Typography } from '@mui/material';
import { SearchBar } from '../shared/SearchBar';
import { CardContentStyled, CardImage, CardStyled } from '../shared/ui/Card';
import { HeroDescription, HeroTextContent, HeroTitle } from './styles';

import mapImage from '../../assets/map.png';

export const HeroCard = () => (
  <CardStyled cardVariant="hero" cardPadding={{ xs: 1, sm: 2, md: 3 }}>
    <CardContentStyled contentAlignItems="center" contentGap={{ xs: 3, md: 6 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        width="100%"
        sx={{ alignItems: 'center' }}
        spacing={{ xs: 3, md: 6 }}
      >
        <HeroTextContent>
          <HeroTitle variant="h1">HelpMeTravel</HeroTitle>
          <HeroDescription variant="body1">
            Your guide to public transport and cultural etiquette in European cities.
          </HeroDescription>
          <SearchBar />

          <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}
          >
            Find a city. Understand the journey. Feel more at home.
          </Typography>
        </HeroTextContent>

        <CardImage
          component="img"
          src={mapImage}
          alt="Map of Europe with pins"
          cardVariant="hero"
          sx={{ width: { xs: '100%', md: '50%' } }}
        />
      </Stack>
    </CardContentStyled>
  </CardStyled>
);
