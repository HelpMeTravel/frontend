import { Stack } from '@mui/material';
import { FeedbackCard } from '../../components/FeedbackCard';
import { HeroCard } from '../../components/HeroCard';

export const Home = () => (
  <Stack spacing={4}>
    <HeroCard />
    <FeedbackCard />
  </Stack>
);
