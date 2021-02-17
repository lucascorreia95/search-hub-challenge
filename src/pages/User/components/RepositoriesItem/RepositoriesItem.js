import { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';

import Information from '../Information';

import {
  CollectionItemStyled,
  InformationContainer,
  ButtonContainer,
} from './RepositoriesItem.styles';

export const RepositoriesItem = ({ item, showOwner }) => (
  <CollectionItemStyled>
    <InformationContainer>
      <Information title="Nome" description={item.name} fontSize="small" />
      {showOwner && (
        <Information
          title="Proprietário"
          description={item.owner.login}
          fontSize="small"
        />
      )}
      <Information
        title="Descrição"
        description={item.description}
        fontSize="small"
      />
      <Information
        title="Linguagem"
        description={item.language}
        fontSize="small"
      />
      <Information
        title="Estrelas"
        description={item.stargazers_count}
        fontSize="small"
      />
    </InformationContainer>
    <ButtonContainer>
      <Button href={item.html_url} node="a" waves="light" target="_blank">
        Abrir repositório
        <Icon right>cloud</Icon>
      </Button>
    </ButtonContainer>
  </CollectionItemStyled>
);

RepositoriesItem.propTypes = {
  item: PropTypes.object.isRequired,
  showOwner: PropTypes.bool,
};

RepositoriesItem.defaultProps = {
  showOwner: false,
};

export default memo(RepositoriesItem);
