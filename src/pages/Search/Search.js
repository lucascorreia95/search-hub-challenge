import { useState } from "react";
import { TextInput, Button, Icon } from "react-materialize";

import githubImg from "../../asset/img/github-mark.png";
import { DispatchTypes, useRootContext } from "../../store";
import Result from "./components/Result";

import { Container, Image } from "./Search.styles";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useRootContext();

  const handleClick = () =>
    dispatch({
      type: DispatchTypes.InputValue,
      payload: {
        inputValue,
      },
    });

  return (
    <>
      <Container>
        <Image src={githubImg} alt="Github logo" />
        <TextInput
          id="TextInput-4"
          label="Digite um texto para a sua busca!"
          autocomplete="off"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <Button node="button" type="submit" waves="light" onClick={handleClick}>
          Buscar
          <Icon right>search</Icon>
        </Button>
      </Container>
      <Result />
    </>
  );
};

export default Search;
