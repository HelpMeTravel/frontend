import { Box, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FooterLegalItem } from './components/FooterLegalItem';
import { FooterLink } from './components/FooterLink';
import { FOOTER_LEGAL_ITEMS, FOOTER_LINKS } from './constants';
import { FooterBrand, FooterContent, FooterDisclaimer, FooterLegal, FooterRoot } from './styles';

export const Footer = () => (
  <FooterRoot>
    <FooterContent>
      <Box>
        <FooterBrand component={RouterLink} to="/" variant="h5">
          HelpMeTravel
        </FooterBrand>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2.5, maxWidth: 420 }}>
          Less uncertainty. More of the city. A practical field guide to traveling with care.
        </Typography>
      </Box>
      <Stack direction="column" spacing={1}>
        {FOOTER_LINKS.map(({ to, label }) => (
          <FooterLink key={to} to={to}>
            {label}
          </FooterLink>
        ))}
      </Stack>
      <FooterDisclaimer variant="caption">
        Independent travel guidance, not an operator website. Always check official rules before you
        travel.
      </FooterDisclaimer>
      <FooterLegal>
        {FOOTER_LEGAL_ITEMS.map(item => (
          <FooterLegalItem key={item.id} {...item} />
        ))}
      </FooterLegal>
    </FooterContent>
  </FooterRoot>
);
