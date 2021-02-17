import { render, screen, fireEvent } from '@testing-library/react';
import 'materialize-css';

import { initialState, DispatchTypes } from '../../../../store';
import ContextProvider from '../../../../store/Context';

import SearchForm from './SearchForm';

const renderComponent = (dispatch = jest.fn(), state = {}) => {
  const stateMock = {
    ...initialState,
    ...state,
  };

  return render(
    <ContextProvider.Provider value={{ state: stateMock, dispatch }}>
      <SearchForm />
    </ContextProvider.Provider>
  );
};

describe('SearchForm component', () => {
  it('Should render the component', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
  });

  it('Should unmount the component', () => {
    const { container, unmount } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('Should render the component with Github image', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByAltText('Github logo')).toBeInTheDocument();
  });

  it('Should render the component with text input', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(
      screen.getByLabelText('Digite um texto para a sua busca!')
    ).toBeInTheDocument();
  });

  it('Should change value of the text input', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    const textInput = screen.getByLabelText(
      'Digite um texto para a sua busca!'
    );

    fireEvent.change(textInput, { target: { value: 'lucas' } });
    expect(textInput.value).toBe('lucas');
  });

  it('Should render the component with Usuários option', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByLabelText('Usuários')).toBeInTheDocument();
  });

  it('Should render the component with Repositórios option', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByLabelText('Repositórios')).toBeInTheDocument();
  });

  it('Should render the component with subit button', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should dispatch search params to the context', () => {
    const spyDispatch = jest.fn();

    const { container } = renderComponent(spyDispatch);
    expect(container.firstChild).toBeInTheDocument();

    const textInput = screen.getByLabelText(
      'Digite um texto para a sua busca!'
    );
    fireEvent.change(textInput, { target: { value: 'lucas' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(spyDispatch).toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledWith({
      type: DispatchTypes.SearchParams,
      payload: {
        inputValue: 'lucas',
        radioValue: 'users',
      },
    });
  });

  it('Should dispatch search params to the context with Repositórios option', () => {
    const spyDispatch = jest.fn();

    const { container } = renderComponent(spyDispatch);
    expect(container.firstChild).toBeInTheDocument();

    const textInput = screen.getByLabelText(
      'Digite um texto para a sua busca!'
    );
    fireEvent.change(textInput, { target: { value: 'lucas' } });

    const repositoriesOpt = screen.getByLabelText('Repositórios');
    fireEvent.click(repositoriesOpt);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(spyDispatch).toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledWith({
      type: DispatchTypes.SearchParams,
      payload: {
        inputValue: 'lucas',
        radioValue: 'repositories',
      },
    });
  });

  it('Should render the component with input value and option aready defined', () => {
    const spyDispatch = jest.fn();

    const { container } = renderComponent(spyDispatch, {
      inputValue: 'lucas',
      radioValue: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(spyDispatch).toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledWith({
      type: DispatchTypes.SearchParams,
      payload: {
        inputValue: 'lucas',
        radioValue: 'repositories',
      },
    });
  });
});
