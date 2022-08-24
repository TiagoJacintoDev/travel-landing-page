import styled from 'styled-components';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { variables as v } from '../styles/helpers/variables';
import { Container } from '../styles/helpers/helpers';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  gap: ${v.size.small};
  @media (min-width: ${v.ds.laptop}) {
    gap: ${v.size.medium};
  }
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
  const isMobile = useMediaQuery({
    query: `(max-width: ${v.ds.tablet})`,
  });
  return (
    <Container>
      <NavWrapper>
        <Logo>TRAVELIA</Logo>
        {isMobile ? <Menu right>{NavItems}</Menu> : NavItems}
      </NavWrapper>
    </Container>
  );
}
