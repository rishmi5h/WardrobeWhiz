import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  height: 100vh;
  position: sticky;
  top: 0;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/wardrobe">My Wardrobe</SidebarLink>
      <SidebarLink to="/outfits">Outfit Suggestions</SidebarLink>
      <SidebarLink to="/calendar">Calendar</SidebarLink>
      <SidebarLink to="/profile">Profile Settings</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
