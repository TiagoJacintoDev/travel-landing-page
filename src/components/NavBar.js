import styled from 'styled-components';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { variables as v } from '../styles/helpers/variables';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: ${v.size.smaller};
`;

const Logo = styled.h1`
  font-family: ${v.ff.logo};
  font-size: ${v.fs.large};
  font-weight: ${v.fw.bold};
`;

const NavList = styled.ul`
  display: flex !important;
  flex-direction: column;
  gap: ${v.size.smaller};
  align-items: center;
  font-family: ${v.ff.default};

  @media ((min-width: ${v.ds.tablet})) {
    flex-direction: row;
  }
`;

const NavItems = (
  <NavList>
    <Link smooth>About Us</Link>
    <Link smooth>Trip Planer</Link>
    <Link smooth>Blog</Link>
    <Link smooth>Gallery</Link>
    <Link smooth>Contact</Link>
  </NavList>
);

export default function NavBar() {
  const isNotMobile = useMediaQuery({
    query: `(min-width: ${v.ds.tablet})`,
  });
  return (
    <NavWrapper>
      <Logo>TRAVELIA</Logo>
      {isNotMobile ? NavItems : <Menu right>{NavItems}</Menu>}
    </NavWrapper>
  );
}
