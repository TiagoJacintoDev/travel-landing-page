import { CgArrowLongRight } from 'react-icons/cg';
import Image from '../../images/rice-terrace-vertical.jpg';
import { variables as v } from '../../styles/helpers/variables';
import styled from 'styled-components';
import { Button } from '../../styles/helpers/helpers';

const Section = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  column-gap: ${v.size.medium};
  align-items: center;

  font-family: ${v.ff.default};
  color: white;
  background-color: black;
`;

const Title = styled.h1`
  font-size: ${v.fs.larger};
  font-weight: ${v.fw.semiBold};
  margin-bottom: ${v.size.smallest};
`;

const SubTitle = styled.h2`
  font-size: ${v.fs.large};
  margin-bottom: calc(${v.size.smaller} * 1.75);
`;

const Paragraph = styled.p`
  color: ${v.color.lightGray};
  margin-bottom: calc(${v.size.smaller} * 1.75);
`;

export default function AboutText() {
  return (
    <Section>
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
    </Section>
  );
}
