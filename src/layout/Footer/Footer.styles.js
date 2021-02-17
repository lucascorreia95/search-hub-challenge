import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.grey};
  text-align: center;
`;

export const Text = styled.p``;

export const Link = styled.a`
  font-weight: bold;
  margin: 0 3px;
`;
