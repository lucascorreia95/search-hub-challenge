import styled from "styled-components";

export const Title = styled.h3`
  font-size: ${(props) => (props.fontSize === "small" ? "1.32rem" : "2.92rem")};
  margin: ${(props) =>
    props.fontSize === "small" ? "0" : "1.9466666667rem 0 1rem 0"};
  box-sizing: border-box;
`;

export const Description = styled.p`
  display: block;
  padding-left: 20px;
  margin: ${(props) =>
    props.fontSize === "small" ? "0 0 1rem 0" : "1rem 0 1rem 0"};
  box-sizing: border-box;
`;
