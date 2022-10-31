import styled from "styled-components";
import { variables as v } from "../../styles/helpers/variables";
import AboutStats from "./AboutStats";
import AboutText from "./AboutText";
import { Container } from "../../styles/helpers/helpers";

const SectionWrapper = styled.div`
  background-color: black;
  padding-block: ${v.size.small};
  @media (min-width: ${v.ds.tablet}) {
    padding-block: ${v.size.medium};
  }
`;

export default function About() {
  return (
    <SectionWrapper id="about">
      <Container>
        <AboutText />
        <AboutStats />
      </Container>
    </SectionWrapper>
  );
}
