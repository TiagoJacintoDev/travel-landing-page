import styled from 'styled-components';
import { variables as v } from '../styles/helpers/variables';
import { Title, SubTitle, Button, Paragraph } from '../styles/helpers/helpers';

const Wrapper = styled.div`
  padding-block: ${v.size.medium};
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  font-family: ${v.ff.default};
  font-size: ${v.fs.large};
  background-color: transparent;
  border: 0;
  outline: 0;
  color: white;
  padding: ${v.size.smallest};
  border-bottom: 1px solid ${v.color.accent};
`;

export default function Contact() {
  return (
    <Wrapper>
      <Title style={{ marginBottom: v.size.smallest }}>
        Subscribe to Our Newsletter
      </Title>
      <Paragraph style={{ marginBottom: v.size.small }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, tenetur.
      </Paragraph>
      <form style={{ display: 'flex' }}>
        <EmailInput type='email' placeholder='johndoe@gmail.com'></EmailInput>
        <Button onClick={e => e.preventDefault()}>SUBSCRIBE</Button>
      </form>
    </Wrapper>
  );
}
