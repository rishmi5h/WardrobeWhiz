import styled from 'styled-components';

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;

  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.accent};
  color: ${({ variant }) => (variant === 'secondary' ? '#333333' : 'white')};

  &:hover {
    transform: scale(1.05);
  }
`;

export default Button;
