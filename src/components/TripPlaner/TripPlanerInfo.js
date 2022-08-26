import styled from 'styled-components';
import { Grid } from '../../styles/layout/grid';
import { variables as v } from '../../styles/helpers/variables';
import {
  Title,
  Paragraph,
  Button,
  Container,
} from '../../styles/helpers/helpers';
import { VscArrowRight } from 'react-icons/vsc';

const Wrapper = styled.div`
  color: white;
`;

const Info = styled.div`
  margin-top: ${v.size.smaller};
  & > * {
    margin-bottom: ${v.size.smaller};
  }
`;

export default function TripPlanerText() {
  return (
    <Wrapper>
      <Container>
        <Grid gap={`clamp(10px, 50px, ${v.size.larger})`}>
          <div>
            <Title style={{ marginBottom: `${v.size.small}` }}>
              Explore the best version of the USA
            </Title>
            <Button style={{ marginBottom: `${v.size.small}` }}>
              Explore <VscArrowRight size={20} />
            </Button>
          </div>
          <Info>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              eligendi sequi aspernatur impedit fugiat perspiciatis?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius
              ipsa error esse corporis facere.
            </Paragraph>
          </Info>
        </Grid>
      </Container>
    </Wrapper>
  );
}
