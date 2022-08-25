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
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: ${v.fs.larger};
  font-family: ${v.ff.default};
  font-weight: ${v.fw.semiBold};
  margin-bottom: ${v.size.smallest};
`;

export const SubTitle = styled.h2`
  font-size: ${v.fs.large};
  font-family: ${v.ff.default};
  margin-bottom: calc(${v.size.smaller} * 1.75);
`;

export const Paragraph = styled.p`
  color: ${v.color.lightGray};
  font-family: ${v.ff.default};
  margin-bottom: calc(${v.size.smaller} * 1.75);
`;
