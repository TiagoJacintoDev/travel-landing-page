import styled from 'styled-components';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import { IoPlay } from 'react-icons/io5';

import { variables as v } from '../styles/helpers/variables';
import { Container, Button } from '../styles/helpers/helpers';

const CoverSection = styled.section`
  padding-top: ${v.size.large};
`;

const SocialIcons = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${v.size.smaller};
  width: fit-content;
  padding-left: ${v.size.smaller};
  padding-top: ${v.size.medium};
`;

const Link = styled.a`
  color: white;
`;

const SubTitle = styled.p`
  font-family: ${v.ff.default};
  font-size: ${v.fs.medium};
  @media (min-width: ${v.ds.tablet}) {
    font-size: ${v.fs.large};
  }
`;

const HeroTitle = styled.h1`
  font-family: ${v.ff.default};
  font-size: ${v.fs.larger};
  @media (min-width: ${v.ds.laptop}) {
    font-size: ${v.fs.largest};
  }
  font-weight: ${v.fw.bold};
  width: 15ch;
  margin-bottom: ${v.size.smaller};
`;

export default function Cover() {
  const socialIconSize = 20;
  return (
    <CoverSection>
      <Container>
        {/*TODO: Center this div*/}
        <SubTitle>We are the wonder of your weekend</SubTitle>
        <HeroTitle>Discover the world with our guide.</HeroTitle>
        <Button>
          Start Tours <IoPlay size={20} />
        </Button>
      </Container>

      <SocialIcons>
        <Link href='https://instagram.com' target='_blank'>
          <FaInstagram size={socialIconSize} />
        </Link>

        <Link href='https://facebook.com' target='_blank'>
          <FaFacebookF size={socialIconSize} />
        </Link>

        <Link href='https://linkedin.com' target='_blank'>
          <FaLinkedinIn size={socialIconSize} />
        </Link>

        <Link href='https://twitter.com' target='_blank'>
          <FaTwitter size={socialIconSize} />
        </Link>
      </SocialIcons>
    </CoverSection>
  );
}
