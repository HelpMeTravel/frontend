import { Button } from '../shared/Button';
import { CardContentStyled, CardDescription, CardStyled, CardTitle } from '../shared/ui/Card';
import { ArrowForwardIcon } from '../../constants/icons';
import { FeedbackCardText } from './styles';

export const FeedbackCard = () => (
  <CardStyled>
    <CardContentStyled>
      <FeedbackCardText>
        <CardTitle variant="h3">Help keep the guide useful</CardTitle>
        <CardDescription variant="body1">
          Spotted a detail that has changed? Share a correction and, if possible, an official
          source.
        </CardDescription>
      </FeedbackCardText>
      <Button
        size="large"
        endIcon={<ArrowForwardIcon sx={{ fontSize: '1.25rem' }} />}
      >
        Share feedback
      </Button>
    </CardContentStyled>
  </CardStyled>
);
