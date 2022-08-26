import styled from 'styled-components';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { variables as v } from '../styles/helpers/variables';
import { Container, Logo } from '../styles/helpers/helpers';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${v.size.smaller};
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
  font-size: ${v.fs.medium};
  font-weight: ${v.fw.semiBold};

  @media ((min-width: ${v.ds.tablet})) {
    flex-direction: row;
  }

  & a {
    cursor: pointer;
  }
`;

const NavItems = (
  <NavList>
    <Link to='about' smooth>
      About Us
    </Link>
    <Link to='tripPlaner' smooth>
      Trip Planer
    </Link>
    <Link to='blog' smooth>
      Blog
    </Link>
    <Link to='contact' smooth>
      Contact
    </Link>
  </NavList>
);

export default function NavBar({ isMobile }) {
  return (
    <Container>
      <NavWrapper>
        <Logo>TRAVELIA</Logo>
        {isMobile ? <Menu right>{NavItems}</Menu> : NavItems}
      </NavWrapper>
    </Container>
  );
}
