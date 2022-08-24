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
  position: relative;
  padding-top: ${v.size.large};
`;

const SocialIcons = styled.ul`
  position: absolute;
  top: 600px;
  display: flex;
  flex-direction: column;
  gap: ${v.size.smaller};
  width: fit-content;
  padding-left: ${v.size.smaller};
`;

const Link = styled.a`
  color: white;
`;

const SubTitle = styled.p`
  font-family: ${v.ff.default};
  font-size: ${v.fs.large};
`;

const HeroTitle = styled.h1`
  font-family: ${v.ff.default};
  font-size: ${v.fs.larger};
  font-weight: ${v.fw.bold};
  width: 15ch;
  margin-bottom: ${v.size.smaller};
`;

export default function Cover() {
  const socialIconSize = 20;
  return (
    <CoverSection>
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

      <Container>
        {/*TODO: Center this div*/}
        <SubTitle>We are the wonder of your weekend</SubTitle>
        <HeroTitle>Discover the world with our guide.</HeroTitle>
        <Button>
          Start Tours <IoPlay size={20} />
        </Button>
      </Container>
    </CoverSection>
  );
}
