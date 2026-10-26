import { HeroCard } from '../../components/HeroCard';
import { FeedbackCard } from '../../components/FeedbackCard';

export const Home = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '2rem',
      gap: '32px',
      color: '#fffff',
    }}
  >
    <HeroCard />
    <FeedbackCard />
  </div>
);
