import styled from 'styled-components';
import { variables as v } from '../../styles/helpers/variables';

const GridLadder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: ${v.size.small};
  font-family: ${v.ff.default};
`;

const GridNumbers = styled.h1`
  color: ${v.color.accent};
  font-size: ${v.fs.larger};
  @media (min-width: ${v.ds.tablet}) {
    font-size: ${v.fs.largest};
  }
  font-weight: ${v.fw.bold};
  text-align: center;
`;

const GridText = styled.p`
  color: white;
  text-align: center;
`;

const CostumersArea = styled.div`
  grid-column: 1 / 2;
`;

const ToursArea = styled.div`
  grid-column: 2/3;
  grid-row: 2;
`;

const ExpertsArea = styled.div`
  grid-column: 3/4;
  grid-row: 3;
`;

export default function AboutStats() {
  return (
    <GridLadder>
      <CostumersArea>
        <GridNumbers>12k+</GridNumbers>
        <GridText>Global Costumers</GridText>
      </CostumersArea>
      <ToursArea>
        <GridNumbers>1680</GridNumbers>
        <GridText>Completed Tours</GridText>
      </ToursArea>
      <ExpertsArea>
        <GridNumbers>360+</GridNumbers>
        <GridText>Experts</GridText>
      </ExpertsArea>
    </GridLadder>
  );
}
