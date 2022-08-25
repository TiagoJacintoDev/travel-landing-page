import styled from 'styled-components';
import { variables as v } from '../helpers/variables';

export const Grid = styled.div`
  @media (min-width: ${v.ds.tablet}) {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    column-gap: ${({ gap }) => gap};
  }
`;
