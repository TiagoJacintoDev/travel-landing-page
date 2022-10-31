import styled from "styled-components";
import { variables as v } from "./variables";

export const Container = styled.div`
  width: min(${v.ds.desktop}, 100% - ${v.size.small});
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
  transition: color 500ms, background-color 500ms;
  &:hover {
    color: ${v.color.accent};
    background-color: ${v.color.white};
  }
`;

export const Title = styled.h1`
  font-size: ${v.fs.largeLarger};
  @media (min-width: ${v.ds.laptop}) {
    font-size: ${v.fs.larger};
  }
  font-family: ${v.ff.default};
  font-weight: ${v.fw.semiBold};
`;

export const SubTitle = styled.h2`
  font-size: ${v.fs.large};
  font-family: ${v.ff.default};
  font-weight: ${v.fw.semiBold};
`;

export const Paragraph = styled.p`
  font-size: ${v.fs.medium};
  color: ${v.color.lightGray};
  font-family: ${v.ff.default};
`;

export const Logo = styled.h1`
  color: white;
  font-family: ${v.ff.logo};
  font-size: ${v.fs.large};
  font-weight: ${v.fw.bold};
`;
