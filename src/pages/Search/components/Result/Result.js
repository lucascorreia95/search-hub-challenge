import { useEffect, useState } from 'react';
import parse from 'parse-link-header';
import { Row, Pagination, Icon, Preloader } from 'react-materialize';

import api from '../../../../services/github';
import { useRootContext, DispatchTypes } from '../../../../store';
import ResultItem from '../ResultItem';

import { Container, LoadingContainer, Text } from './Result.styles';

export const Result = () => {
  const { state, dispatch } = useRootContext();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(12);

  const handleSelectPage = (page) =>
    dispatch({
      type: DispatchTypes.Page,
      payload: {
        page,
      },
    });

  useEffect(() => {
    const getResults = async () => {
      setIsLoading(true);

      const { data, headers } = await api.get(`search/${state.radioValue}`, {
        params: {
          q: state.inputValue,
          page: state.page,
          per_page: pageSize,
        },
      });

      const pagination = parse(headers.link);

      if (pagination && pagination.last) {
        setTotalPages(Number(pagination.last.page));
      }

      setResults({ ...data, type: state.radioValue });
      setIsLoading(false);
    };

    if (state.inputValue) {
      getResults();
    }
  }, [pageSize, state.inputValue, state.page, state.radioValue]);

  if (!isLoading && !results) {
    return null;
  }

  if (isLoading) {
    return (
      <LoadingContainer>
        <Preloader active color="blue" flashing={false} size="big" />
        <Text>Buscando resultados...</Text>
      </LoadingContainer>
    );
  }

  if (results.items.length === 0) {
    return (
      <Container>
        <Icon large center>
          search_off
        </Icon>
        <Text>Sua busca não retornou resultados!</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {results.items.map((item) => (
          <ResultItem key={item.id} item={item} type={results.type} />
        ))}
      </Row>
      <Pagination
        activePage={state.page}
        items={totalPages}
        maxButtons={5}
        leftBtn={<Icon>chevron_left</Icon>}
        rightBtn={<Icon>chevron_right</Icon>}
        onSelect={handleSelectPage}
      />
    </Container>
  );
};

export default Result;
