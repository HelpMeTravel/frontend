import { StyledButton } from './styles';

export const Button = ({ variant = 'contained', color = 'primary', ...props }) => (
  <StyledButton variant={variant} color={color} {...props} />
);
