import styled from 'styled-components';
import { variables as v } from '../styles/helpers/variables';
import { Title, Container, Button, Paragraph } from '../styles/helpers/helpers';

const Wrapper = styled.div`
  color: white;
  padding-block: ${v.size.medium};
  background-color: black;
`;

const EmailInput = styled.input`
  font-family: ${v.ff.default};
  font-size: ${v.fs.large};
  background-color: transparent;
  border: 0;
  outline: 0;
  color: white;
  padding-block: ${v.size.smallest};
  border-bottom: 1px solid ${v.color.accent};
  @media (min-width: ${v.ds.tablet}) {
    padding: ${v.size.smallest};
  }
`;

const Form = styled.form`
  display: flex;
  @media (max-width: ${v.ds.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: calc(${v.size.small} - 15px);
  }
`;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function Contact() {
  return (
    <Wrapper id='contact'>
      <Container style={containerStyle}>
        <Title style={{ marginBottom: v.size.smallest }}>
          Subscribe to Our Newsletter
        </Title>
        <Paragraph style={{ marginBottom: v.size.small }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, tenetur.
        </Paragraph>
        <Form>
          <EmailInput type='email' placeholder='johndoe@gmail.com'></EmailInput>
          <Button onClick={e => e.preventDefault()}>SUBSCRIBE</Button>
        </Form>
      </Container>
    </Wrapper>
  );
}
