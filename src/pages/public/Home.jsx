import { Stack } from '@mui/material';
import { FeedbackCard } from '../../components/FeedbackCard';
import { HeroCard } from '../../components/HeroCard';
import { checkHealth } from '../../api';

export const Home = () => {
  //TODO: Check health of the API and handle errors. Remove in the next iteration.
  checkHealth();
  return (
    <Stack spacing={2}>
      <HeroCard />
      <FeedbackCard />
    </Stack>
  );
}
