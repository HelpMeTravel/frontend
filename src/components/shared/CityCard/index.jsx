import {
  ArrowForwardIcon,
} from '../../../constants/icons';
import {
  CityCardStyled,
  CityImage,
  CityCardContent,
  CityCardInfo,
  CityCardText,
  CityName,
  CountryName,
  CityCardFooter,
  CityArrow,
} from './styles';

export const CityCard = ({ img, countryName, cityName }) => (
  <CityCardStyled>
    <CityCardContent>
      <CityImage
        component="img"
        src={img}
        alt={cityName}
        cardVariant="standard"
      />

      <CityCardInfo
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <CityCardText>
          <CityName variant="h6">
            {cityName}
          </CityName>

          <CountryName variant="body2">
            {countryName}
          </CountryName>
        </CityCardText>

        <CityCardFooter
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <ArrowForwardIcon aria-hidden="true" />
        </CityCardFooter>
      </CityCardInfo>
    </CityCardContent>
  </CityCardStyled>
);
