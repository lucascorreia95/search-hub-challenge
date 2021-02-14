import styled from "styled-components";
import { Button } from "react-materialize";

export const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 15px;
  color: white;
`;

export const ButtonStyled = styled(Button)`
  position: absolute;
  top: 5px;
  left: 15px;
  color: #3c3c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`;

export const UserContainer = styled.div`
  flex: 1;
`;

export const ParallaxContainer = styled.div``;

export const ContainerButtons = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  padding: 15px;
`;

export const LoadingContainer = styled.div`
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
`;
