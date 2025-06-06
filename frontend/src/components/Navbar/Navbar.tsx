import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn
} from './Navbar.elements';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            ATS Resume Checker
          </Link>
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks as={Link} to="/upload">
              Upload
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks as={Link} to="/dashboard">
              Dashboard
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          {/* Placeholder for login/logout button */}
          <button style={{
            background: '#4b59f7',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 20px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Login
          </button>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
