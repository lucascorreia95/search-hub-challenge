import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.grey};
  text-align: center;
`;

export const Link = styled.a`
  font-weight: bold;
  margin: 0 3px;
`;
