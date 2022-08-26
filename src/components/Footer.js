import styled from 'styled-components';
import { variables as v } from '../styles/helpers/variables';
import {
  Container,
  Paragraph,
  SubTitle,
  Logo,
} from '../styles/helpers/helpers';
import CaveImage from '../assets/images/3563728_16x9.jpg';
import SocialIcons from './SocialIcons';

const Wrapper = styled.div`
  color: white;
  padding-top: ${v.size.small};
  background-image: url(${CaveImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

const Grid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  column-gap: ${v.size.smaller};
  @media (min-width: ${v.ds.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
  grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${v.size.smaller};
`;

const List = styled.ul`
  font-size: ${v.fs.medium};
  font-family: ${v.ff.default};
  list-style: none;

  & li {
    font-weight: ${v.fw.semiBold};
  }
`;

const bold = {
  fontWeight: v.fw.bold,
};

export default function Footer({ isMobile }) {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <Column>
            <Logo>TRAVELIA</Logo>
            <Paragraph style={{ color: 'white' }}>
              Would you like a free consultation?
            </Paragraph>
            <Paragraph style={{ color: 'white' }}>
              Call us at 1-324-531-6342
            </Paragraph>
          </Column>

          <Column>
            <SubTitle style={bold}>Quick Links</SubTitle>
            <List>
              <li>Home</li>
              <li>Tours</li>
              <li>Calendar</li>
              <li>Private Tour</li>
              <li>Faq</li>
            </List>
          </Column>
          {!isMobile && (
            <Column>
              <SubTitle style={bold}>Resources</SubTitle>
              <List>
                <li>Support</li>
                <li>Development</li>
                <li>Contact</li>
                <li>Terms & Conditions</li>
                <li>Safety & Security</li>
              </List>
            </Column>
          )}
          {!isMobile && (
            <Column>
              <SubTitle style={bold}>Categories</SubTitle>
              <List>
                <li>Home</li>
                <li>Tours</li>
                <li>Calendar</li>
                <li>Private Tour</li>
                <li>Faq</li>
              </List>
            </Column>
          )}
        </Grid>
        <SocialIcons />
      </Container>
      <Paragraph
        style={{
          color: 'white',
          paddingBlock: v.size.small,
          textAlign: 'center',
        }}
      >
        © Copyright 2022. All rights reserved
      </Paragraph>
    </Wrapper>
  );
}
