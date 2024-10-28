import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url('/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CTAButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection>
        <Title>Welcome to WardrobeWhiz</Title>
        <Subtitle>
          Organize your wardrobe and discover perfect outfit combinations
        </Subtitle>
        <CTAButton to="/wardrobe">Upload Your Wardrobe</CTAButton>
      </HeroSection>
    </div>
  );
};

export default Home; 