import styled from 'styled-components';
import { Button } from 'react-materialize';

export const Header = styled.header``;

export const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 15px;
  color: ${(props) => props.theme.colors.white};
`;

export const Text = styled.p`
  font-size: 22px;
`;

export const ButtonStyled = styled(Button)`
  position: absolute;
  top: 5px;
  left: 15px;
  color: ${(props) => props.theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.grey};
`;

export const UserContainer = styled.section`
  flex: 1;
`;

export const ParallaxContainer = styled.div``;

export const ContainerButtons = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.article`
  padding: 15px;
`;

export const LoadingContainer = styled.section`
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
`;
