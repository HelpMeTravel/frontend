
import { Box } from '@mui/material';

import {
  CityCardStyled,
  CityImage,
  CityCardContent,
  CityCardFooter,
  CityName,
  CountryName,
  CityArrow,
} from './styles';

export const CityCard = ({ img, countryName, cityName }) => {
  return (
    <CityCardStyled>
      <Box sx={{ p: 1, pb: 0 }}>
        <CityImage src={img} alt={cityName} />
      </Box>

      <CityCardContent>
        <CityCardFooter>
          <Box>
            <CityName variant="h6">
              {cityName}
            </CityName>

            <CountryName variant="body2">
              {countryName}
            </CountryName>
          </Box>

          <CityArrow aria-hidden="true">
            ↗
          </CityArrow>
        </CityCardFooter>
      </CityCardContent>
    </CityCardStyled>
  );
};
