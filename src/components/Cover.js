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

const SocialIcons = styled.ul`
  display: flex;
  @media (min-width: ${v.ds.tablet}) {
    flex-direction: column;
  }
  width: fit-content;
`;

const SocialLink = styled.a`
  color: white;
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
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
  @media (max-width: ${v.ds.mobile}) {
    font-size: calc(${v.fs.large} + 12px);
  }
  @media (min-width: ${v.ds.laptop}) {
    font-size: ${v.fs.largest};
  }
  font-weight: ${v.fw.bold};
  width: 15ch;
  margin-bottom: ${v.size.smaller};
`;

export default function Cover() {
  const socialIconSize = 30;
  return (
    <>
      <Container>
        <SubTitle>We are the wonder of your weekend</SubTitle>
        <HeroTitle>Discover the world with our guide.</HeroTitle>
        <Button>
          Start Tour <IoPlay size={20} />
        </Button>
      </Container>
      <SocialIcons>
        <SocialLink
          backgroundColor='#3A5795'
          href='https://facebook.com'
          target='_blank'
        >
          <FaFacebookF size={socialIconSize} />
        </SocialLink>

        <SocialLink
          backgroundColor='#0077B5'
          href='https://linkedin.com'
          target='_blank'
        >
          <FaLinkedinIn size={socialIconSize} />
        </SocialLink>

        <SocialLink
          backgroundColor='#D7005C'
          href='https://instagram.com'
          target='_blank'
        >
          <FaInstagram size={socialIconSize} />
        </SocialLink>

        <SocialLink
          backgroundColor='#1C9CEB  '
          href='https://twitter.com'
          target='_blank'
        >
          <FaTwitter size={socialIconSize} />
        </SocialLink>
      </SocialIcons>
    </>
  );
}
