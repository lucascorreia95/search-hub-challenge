import styled from 'styled-components';
import { CollectionItem } from 'react-materialize';

export const CollectionItemStyled = styled(CollectionItem)`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  @media (min-width: 600px) {
    flex-flow: row;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  flex: 0 0 auto;
  min-width: 0;
`;

export const InformationContainer = styled.div`
  margin-right: 15px;
  flex: 1;
  min-width: 0;
`;
