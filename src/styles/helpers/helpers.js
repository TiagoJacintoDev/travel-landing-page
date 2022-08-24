import styled from 'styled-components';
import { variables as v } from './variables';

export const Container = styled.div`
  width: min(${v.ds.desktop}, 100% - 120px);
  margin-inline: auto;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${v.size.smaller};
  font-family: ${v.ff.default};
  color: white;
  background-color: ${v.color.accent};
  border: none;
  padding: ${v.size.smaller} ${v.size.smaller};
`;
