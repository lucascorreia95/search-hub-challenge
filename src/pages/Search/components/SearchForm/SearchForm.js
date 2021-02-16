import { useState } from "react";
import { TextInput, Button, Icon, RadioGroup } from "react-materialize";

import githubImg from "../../../../asset/img/github-mark.png";
import { DispatchTypes, useRootContext } from "../../../../store";

import { Container, Image, RadioContainer } from "./SearchForm.styles";

export const SearchForm = () => {
  const { state, dispatch } = useRootContext();
  const [inputValue, setInputValue] = useState(state.inputValue || "");
  const [radioValue, setRadioValue] = useState(state.radioValue);

  const handleClickSearchButton = () =>
    dispatch({
      type: DispatchTypes.SearchParams,
      payload: {
        inputValue,
        radioValue,
      },
    });

  return (
    <Container>
      <Image src={githubImg} alt="Github logo" />
      <TextInput
        id="TextInput-4"
        label="Digite um texto para a sua busca!"
        autoComplete="off"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <RadioContainer>
        <RadioGroup
          options={[
            {
              label: "Usuários",
              value: "users",
            },
            {
              label: "Repositórios",
              value: "repositories",
            },
          ]}
          value={radioValue}
          onChange={({ target }) => setRadioValue(target.value)}
          withGap
        />
      </RadioContainer>
      <Button
        node="button"
        type="submit"
        waves="light"
        onClick={handleClickSearchButton}
      >
        Buscar
        <Icon right>search</Icon>
      </Button>
    </Container>
  );
};

export default SearchForm;
