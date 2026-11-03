import { Grid, Typography, Stack, Box } from '@mui/material';
import { FmdGoodOutlinedIcon, LocalActivityOutlinedIcon, VolunteerActivismOutlinedIcon } from '../../../constants/icons';
import { CenteredContent } from '../ui/CenteredContent';
import { CardStyled, CardTitle, CardDescription } from '../ui/Card';
import { GuideTitle } from './styles';

const iconStyles = { fontSize: 28, mb: 1.5 };
const textBoldStyles = { fontWeight: 'bold', mb: 1 };

const StepIcon = ({ icon: IconComponent, color = "primary", sx = iconStyles }) => {
  return <IconComponent color={color} sx={sx} />;
};

const guideSteps = [
  {
    icon: FmdGoodOutlinedIcon,
    step: '01 · FIND YOUR BEARINGS',
    title: 'Choose your city',
    description: 'Start with a local overview of transport, tickets and useful resources.'
  },
  {
    icon: LocalActivityOutlinedIcon,
    step: '02 · MAKE THE JOURNEY EASIER',
    title: 'Know before you board',
    description: 'Compare ticket options, learn how to buy and check validation rules.'
  },
  {
    icon: VolunteerActivismOutlinedIcon,
    step: '03 · FEEL MORE AT HOME',
    title: 'Travel thoughtfully',
    description: 'Read everyday etiquette and practical tips, then verify details with the operator.'
  }
];

export const HomeGuide = () => {
  return (
    <CenteredContent>
      <Box sx={{ width: '100%', maxWidth: '1000px' }}>
        <GuideTitle align="center" variant="h5">
          A guide for the whole journey
        </GuideTitle>
        
        <Grid container spacing={3}>
          {guideSteps.map((stepItem, index) => (
            <Grid xs={12} md={4} key={index}>
              <CardStyled cardPadding={3} sx={{ height: '100%', maxWidth: 'none' }}>
                <Stack sx={{ height: '100%' }}>
                  <StepIcon icon={stepItem.icon} />
                  <Typography color="text.secondary" sx={textBoldStyles} variant="overline">
                    {stepItem.step}
                  </Typography>
                  <CardTitle sx={textBoldStyles} variant="h6">
                    {stepItem.title}
                  </CardTitle>
                  <CardDescription variant="body2">
                    {stepItem.description}
                  </CardDescription>
                </Stack>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Box>
    </CenteredContent>
  );
};