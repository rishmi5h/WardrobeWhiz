import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo to="/">WardrobeWhiz</Logo>
      <NavLinks>
        <NavLink to="/wardrobe">Wardrobe</NavLink>
        <NavLink to="/outfits">Outfits</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 