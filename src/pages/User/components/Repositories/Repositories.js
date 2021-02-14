import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import parse from "parse-link-header";
import {
  Modal,
  Button,
  Row,
  Col,
  Collection,
  Icon,
  Pagination,
  Preloader,
} from "react-materialize";

import RepositoriesItem from "../RepositoriesItem";
import api from "../../../../services/github";

import { LoadingContainer } from "./Repositories.styles";

export const Repositories = ({
  login,
  header,
  trigger,
  endpoint,
  showOwner,
}) => {
  const [repositories, setRepositories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getReposList = async () => {
      setIsLoading(true);

      const { data, headers } = await api.get(`/users/${login}/${endpoint}`, {
        params: {
          page,
          per_page: pageSize,
        },
      });

      const pagination = parse(headers.link);

      if (pagination && pagination.last) {
        setTotalPages(Number(pagination.last.page));
      }

      setRepositories(data);
      setIsLoading(false);
    };

    if (isOpen) {
      getReposList();
    }
  }, [endpoint, isOpen, login, page, pageSize]);

  return (
    <Modal
      actions={[
        <Button flat modal="close" node="button" waves="green">
          Fechar
        </Button>,
      ]}
      bottomSheet
      fixedFooter={false}
      header={header}
      id={`Modal-repos-${endpoint}`}
      open={false}
      options={{
        dismissible: true,
        endingTop: "10%",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: () => setIsOpen(true),
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: "4%",
      }}
      trigger={<Button node="button">{trigger}</Button>}
    >
      {isLoading && (
        <LoadingContainer>
          <Preloader active color="blue" flashing={false} size="big" />
        </LoadingContainer>
      )}
      {repositories && !isLoading && (
        <>
          <Row>
            <Col s={12}>
              <Collection>
                {repositories.map((item) => (
                  <RepositoriesItem
                    key={item.id}
                    item={item}
                    showOwner={showOwner}
                  />
                ))}
              </Collection>
            </Col>
          </Row>
          <Pagination
            activePage={page}
            items={totalPages}
            maxButtons={5}
            leftBtn={<Icon>chevron_left</Icon>}
            rightBtn={<Icon>chevron_right</Icon>}
            onSelect={(newPage) => setPage(newPage)}
          />
        </>
      )}
    </Modal>
  );
};

Repositories.propTypes = {
  login: PropTypes.string.isRequired,
  header: PropTypes.string,
  trigger: PropTypes.string,
  endpoint: PropTypes.string.isRequired,
  showOwner: PropTypes.bool,
};

Repositories.defaultProps = {
  showOwner: false,
};

export default Repositories;
