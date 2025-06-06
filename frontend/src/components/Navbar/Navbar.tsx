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
import { useAuth } from '@/hooks/useAuth';
import { GoogleLogin } from '@react-oauth/google';

const Navbar: React.FC = () => {
  const { user, login, logout } = useAuth();

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
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {user.avatarUrl && (
                <img src={user.avatarUrl} alt={user.name} style={{ width: 32, height: 32, borderRadius: '50%' }} />
              )}
              <span style={{ fontWeight: 500 }}>{user.name}</span>
              <button
                style={{
                  background: '#eee',
                  color: '#222',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '1rem',
                  marginLeft: 8
                }}
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                if (credentialResponse.credential) {
                  await login(credentialResponse.credential);
                }
              }}
              onError={() => {
                alert('Google Login Failed');
              }}
              useOneTap
            />
          )}
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
