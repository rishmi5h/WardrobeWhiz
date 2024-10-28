import React from 'react';
import styled from 'styled-components';

const OutfitsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const OutfitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Outfits: React.FC = () => {
  return (
    <OutfitsContainer>
      <h1>Outfit Suggestions</h1>
      <OutfitsGrid>{/* Outfit suggestions will be mapped here */}</OutfitsGrid>
    </OutfitsContainer>
  );
};

export default Outfits;
