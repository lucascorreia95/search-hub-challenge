import styled from 'styled-components';

export const Header = styled.header``;

export const Figure = styled.figure``;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column;
  flex: 1;
  min-width: 0;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 0;
  margin: 0 auto;
  margin-bottom: 1rem;
  box-sizing: border-box;
  width: 100%;
`;

export const Image = styled.img`
  max-width: 25%;
  margin: 0 auto;
  display: block;
`;
