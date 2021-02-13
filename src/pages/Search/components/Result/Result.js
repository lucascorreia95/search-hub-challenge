import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Card,
  CardTitle,
  Pagination,
  Icon,
} from "react-materialize";

import api from "../../../../services/github";
import { useRootContext, DispatchTypes } from "../../../../store";

import { Container } from "./Result.styles";

export const Result = () => {
  const { state, dispatch } = useRootContext();
  const [results, setResults] = useState(null);
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
      const response = await api.get("search/users", {
        params: {
          q: state.inputValue,
          page: state.page,
          per_page: pageSize,
        },
      });

      console.log(response);
      setResults(response.data);
    };

    if (state.inputValue) {
      getResults();
    }
  }, [pageSize, state.inputValue, state.page]);

  if (!results) {
    return null;
  }

  return (
    <Container>
      <Row>
        {results.items.length > 0 &&
          results.items.map((item) => (
            <Col xl={3} l={4} m={6} s={12}>
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
        items={results.total_count / pageSize}
        maxButtons={5}
        leftBtn={<Icon>chevron_left</Icon>}
        rightBtn={<Icon>chevron_right</Icon>}
        onSelect={handleSelectPage}
      />
    </Container>
  );
};

export default Result;
