import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Parallax, Icon, Preloader } from "react-materialize";

import api from "../../services/github";
import Information from "./components/Information";
import Repositories from "./components/Repositories";

import {
  Title,
  ParallaxContainer,
  Container,
  ContainerButtons,
  ButtonStyled,
  UserContainer,
  LoadingContainer,
  Text,
} from "./User.styles";

export const User = () => {
  let { login } = useParams();
  let { goBack } = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);

      const response = await api.get("/users/" + login);

      setUser(response.data);
      setIsLoading(false);
    };

    getUser();
  }, [login]);

  if (!isLoading && !user) {
    return null;
  }

  if (isLoading) {
    return (
      <LoadingContainer>
        <Preloader active color="blue" flashing={false} size="big" />
        <Text>Buscando usuário...</Text>
      </LoadingContainer>
    );
  }

  return (
    <UserContainer>
      <ButtonStyled
        flat
        node="button"
        waves="light"
        icon={<Icon>arrow_back</Icon>}
        onClick={() => goBack()}
      >
        Voltar
      </ButtonStyled>
      <Title>{user.name}</Title>

      <ParallaxContainer>
        <Parallax
          image={<img alt="Avatar" src={user.avatar_url} />}
          options={{
            responsiveThreshold: 0,
          }}
        />
      </ParallaxContainer>

      <Container>
        <Information title="Login" description={user.login} />
        <Information title="Biografia" description={user.bio} />
        <Information title="Local" description={user.location} />
        <Information title="Empresa" description={user.company} />
        <Information title="Blog" description={user.blog} />
        <Information title="E-mail" description={user.email} />
        <Information
          title="Número de seguidores"
          description={user.followers}
        />
        <Information title="Seguindo" description={user.following} />

        <ContainerButtons>
          <Repositories
            login={login}
            endpoint="repos"
            trigger="Ver repositórios do usuário"
            header="Lista de repositórios do usuário"
          />
        </ContainerButtons>

        <Repositories
          login={login}
          endpoint="starred"
          trigger="Ver repositórios marcados com estrela"
          header="Lista de repositórios marcados com estrela pelo usuário"
          showOwner
        />
      </Container>
    </UserContainer>
  );
};

export default User;
