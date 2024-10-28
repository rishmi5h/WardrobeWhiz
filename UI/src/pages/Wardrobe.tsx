import React from 'react';
import styled from 'styled-components';

const WardrobeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Wardrobe: React.FC = () => {
  return (
    <WardrobeContainer>
      <h1>My Wardrobe</h1>
      <GridContainer>{/* Clothing items will be mapped here */}</GridContainer>
    </WardrobeContainer>
  );
};

export default Wardrobe;
