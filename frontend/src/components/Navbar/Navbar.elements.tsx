import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

export const NavLogo = styled.div`
  color: #4b59f7;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
`;

export const NavItem = styled.li`
  height: 64px;
`;

export const NavLinks = styled.a`
  color: #222;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #4b59f7;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
`;
