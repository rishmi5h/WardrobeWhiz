import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileSection = styled.section`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <h1>Profile Settings</h1>
      <ProfileSection>{/* Profile content will go here */}</ProfileSection>
    </ProfileContainer>
  );
};

export default Profile;
