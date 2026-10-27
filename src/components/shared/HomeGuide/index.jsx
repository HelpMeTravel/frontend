import { Typography } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { GuideContainer, GuideTitle, GridContainer, StepCard } from './styles';

const guideSteps = [
  {
    icon: <FmdGoodOutlinedIcon color="primary" sx={{ fontSize: 28, mb: 1.5 }} />,
    step: '01 · FIND YOUR BEARINGS',
    title: 'Choose your city',
    description: 'Start with a local overview of transport, tickets and useful resources.'
  },
  {
    icon: <LocalActivityOutlinedIcon color="primary" sx={{ fontSize: 28, mb: 1.5 }} />,
    step: '02 · MAKE THE JOURNEY EASIER',
    title: 'Know before you board',
    description: 'Compare ticket options, learn how to buy and check validation rules.'
  },
  {
    icon: <VolunteerActivismOutlinedIcon color="primary" sx={{ fontSize: 28, mb: 1.5 }} />,
    step: '03 · FEEL MORE AT HOME',
    title: 'Travel thoughtfully',
    description: 'Read everyday etiquette and practical tips, then verify details with the operator.'
  }
];

export const HomeGuide = () => {
  return (
    <GuideContainer>
      <GuideTitle variant="h5">
        A guide for the whole journey
      </GuideTitle>

      <GridContainer>
        {guideSteps.map((item, index) => (
          <StepCard key={index}>
            {item.icon}
            
            <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold', mb: 1 }}>
              {item.step}
            </Typography>
            
            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold', mb: 1 }}>
              {item.title}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </StepCard>
        ))}
      </GridContainer>
    </GuideContainer>
  );
};