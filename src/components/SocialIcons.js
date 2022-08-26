import styled from 'styled-components';
import { variables as v } from '../styles/helpers/variables';

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const SocialIconsList = styled.ul`
  display: flex;
  gap: ${v.size.smaller};
  width: fit-content;
`;

const SocialLink = styled.a`
  color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 100%;
`;

export default function SocialIcons({ isMobile }) {
  const socialIconSize = 20;
  return (
    <SocialIconsList>
      <SocialLink href='https://facebook.com' target='_blank'>
        <FaFacebookF size={socialIconSize} />
      </SocialLink>

      <SocialLink href='https://linkedin.com' target='_blank'>
        <FaLinkedinIn size={socialIconSize} />
      </SocialLink>

      <SocialLink href='https://instagram.com' target='_blank'>
        <FaInstagram size={socialIconSize} />
      </SocialLink>

      <SocialLink href='https://twitter.com' target='_blank'>
        <FaTwitter size={socialIconSize} />
      </SocialLink>
    </SocialIconsList>
  );
}
