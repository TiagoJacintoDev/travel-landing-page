import { CgArrowLongRight } from 'react-icons/cg';
import Image from '../../images/rice-terrace-vertical.jpg';
import { Grid } from '../../styles/layout/grid';
import styled from 'styled-components';
import { variables as v } from '../../styles/helpers/variables';
import {
  Button,
  Title,
  Paragraph,
  SubTitle,
} from '../../styles/helpers/helpers';

const Section = styled.section`
  color: white;
  background-color: black;
`;

export default function AboutText() {
  return (
    <Section>
      <Grid gap={v.size.medium}>
        <img src={Image}></img>
        <div>
          <Title>About Us</Title>
          <SubTitle>
            We will help you to enjoy a wonderful vacation with you family
          </SubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            corporis laudantium, accusantium architecto deserunt nulla!
            Perferendis odio excepturi a necessitatibus.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ea
            aspernatur obcaecati alias magni mollitia velit corporis deleniti
            voluptatibus eveniet!
          </Paragraph>
          <Button>
            Read More <CgArrowLongRight size={20} />
          </Button>
        </div>
      </Grid>
    </Section>
  );
}
