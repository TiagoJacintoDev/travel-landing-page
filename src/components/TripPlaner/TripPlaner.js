import styled from "styled-components";
import { variables as v } from "../../styles/helpers/variables";
import TripPlanerInfo from "./TripPlanerInfo";

const Section = styled.div`
  background-color: ${v.color.lightDark};
  padding-block: ${v.size.smaller};
  @media (min-width: ${v.ds.tablet}) {
    padding-block: ${v.size.small};
  }
`;

export default function TripPlaner() {
  return (
    <Section id="tripPlaner">
      <TripPlanerInfo />
    </Section>
  );
}
