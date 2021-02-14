import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import parse from "parse-link-header";
import {
  Button,
  Row,
  Col,
  Card,
  CardTitle,
  Pagination,
  Icon,
  Preloader,
} from "react-materialize";

import api from "../../../../services/github";
import { useRootContext, DispatchTypes } from "../../../../store";

import { Container, LoadingContainer } from "./Result.styles";

export const Result = () => {
  const { state, dispatch } = useRootContext();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(12);
  const history = useHistory();

  const handleDetailsClick = (login) =>
    history.push({
      pathname: "/user/" + login,
      params: login,
    });

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

      const { data, headers } = await api.get("search/users", {
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

      setResults(data);
      setIsLoading(false);
    };

    if (state.inputValue) {
      getResults();
    }
  }, [pageSize, state.inputValue, state.page]);

  if (!isLoading && !results) {
    return null;
  }

  if (isLoading) {
    return (
      <LoadingContainer>
        <Preloader active color="blue" flashing={false} size="big" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Row>
        {results.items.length > 0 &&
          results.items.map((item) => (
            <Col key={item.id} xl={3} l={4} m={6} s={12}>
              <Card
                header={
                  <CardTitle image={item.avatar_url}>{item.login}</CardTitle>
                }
              >
                <Button
                  node="button"
                  waves="light"
                  flat
                  onClick={() => handleDetailsClick(item.login)}
                >
                  Ver detalhes
                </Button>
              </Card>
            </Col>
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
