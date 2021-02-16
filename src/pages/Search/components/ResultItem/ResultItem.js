import { memo } from "react";
import PropTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";
import { Button, Col, Card, CardTitle } from "react-materialize";

import { DescriptionContainer } from "./ResultItem.styles";

export const ResultItem = ({ item, type }) => {
  const history = useHistory();

  const handleDetailsClick = (login) =>
    history.push({
      pathname: "/user/" + login,
      params: login,
    });

  if (type === "repositories") {
    return (
      <Col key={item.id} xl={3} l={4} m={6} s={12}>
        <Card
          header={
            <CardTitle image={item.owner.avatar_url}>{item.name}</CardTitle>
          }
          actions={[
            <a key={1} href={item.html_url} target="_blank" rel="noreferrer">
              Abrir repositório
            </a>,
            <Link
              key={2}
              to={{
                pathname: "/user/" + item.owner.login,
                params: item.owner.login,
              }}
            >
              Ver proprietário
            </Link>,
          ]}
        >
          <DescriptionContainer>{item.description}</DescriptionContainer>
        </Card>
      </Col>
    );
  }

  return (
    <Col key={item.id} xl={3} l={4} m={6} s={12}>
      <Card
        header={<CardTitle image={item.avatar_url}>{item.login}</CardTitle>}
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
  );
};

ResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["users", "repositories"]).isRequired,
};

export default memo(ResultItem);
