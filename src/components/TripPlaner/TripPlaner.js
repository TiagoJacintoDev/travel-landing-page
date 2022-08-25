import styled from 'styled-components';
import { variables as v } from '../../styles/helpers/variables';
import TripPlanerInfo from './TripPlanerInfo';
import TripPlanerCarousel from './TripPlanerCarousel';

const Section = styled.div`
  background-color: ${v.color.lightDark};
  padding: ${v.size.medium};
`;

export default function TripPlaner() {
  return (
    <Section>
      <TripPlanerInfo />
      <TripPlanerCarousel />
    </Section>
  );
}
