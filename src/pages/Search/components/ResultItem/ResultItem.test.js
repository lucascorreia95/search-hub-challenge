import { render, screen, fireEvent } from '@testing-library/react';
import 'materialize-css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import ResultItem from './ResultItem';

const itemPropMock = {
  id: 1,
  name: 'name',
  login: 'login',
  html_url: 'https://html_url.com.br',
  avatar_url: 'https://avatar_url.com.br',
  description: 'description',
  owner: {
    avatar_url: 'https://avatar_url.com.br',
    login: 'login',
  },
};

const renderComponent = (props) => {
  const history = createMemoryHistory();

  const propsMock = {
    item: itemPropMock,
    type: 'users',
    ...props,
  };

  return render(
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <ResultItem {...propsMock} />
        </Route>

        <Route path="/user/:login">
          <div>Users Page</div>
        </Route>
      </Switch>
    </Router>
  );
};

describe('ResultItem component', () => {
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

  it('Should render the component with user image', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    const userImage = screen.getByRole('img');
    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute('src', itemPropMock.avatar_url);
  });

  it('Should render the component with user login', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemPropMock.login)).toBeInTheDocument();
  });

  it('Should render the component with navigate button', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    const navigateButton = screen.getByRole('button');
    expect(navigateButton).toBeInTheDocument();
    expect(navigateButton.textContent).toEqual('Ver detalhes');
  });

  it('Should navigate to users page', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    const navigateButton = screen.getByRole('button');
    fireEvent.click(navigateButton);

    expect(screen.getByText('Users Page')).toBeInTheDocument();
    expect(navigateButton).not.toBeInTheDocument();
  });

  it('Should render the component with repositories type', () => {
    const { container } = renderComponent({
      item: itemPropMock,
      type: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();
  });

  it('Should unmount the component with repositories type', () => {
    const { container, unmount } = renderComponent({
      item: itemPropMock,
      type: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('Should render the component with image in repositories type', () => {
    const { container } = renderComponent({
      item: itemPropMock,
      type: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();

    const userImage = screen.getByRole('img');
    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute('src', itemPropMock.owner.avatar_url);
  });

  it('Should render the component with name in repositories type', () => {
    const { container } = renderComponent({
      item: itemPropMock,
      type: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemPropMock.name)).toBeInTheDocument();
  });

  it('Should render the component with description in repositories type', () => {
    const { container } = renderComponent({
      item: itemPropMock,
      type: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemPropMock.description)).toBeInTheDocument();
  });

  it('Should render the component with link to repository in repositories type', () => {
    const { container } = renderComponent({
      item: itemPropMock,
      type: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();

    const repositoryLink = screen.getByText('Abrir repositório');
    expect(repositoryLink).toBeInTheDocument();
    expect(repositoryLink).toHaveAttribute('href', itemPropMock.html_url);
  });

  it('Should render the component with link to users page in repositories type', () => {
    const { container } = renderComponent({
      item: itemPropMock,
      type: 'repositories',
    });
    expect(container.firstChild).toBeInTheDocument();

    const repositoryLink = screen.getByText('Ver proprietário');
    expect(repositoryLink).toBeInTheDocument();
    expect(repositoryLink).toHaveAttribute(
      'href',
      `/user/${itemPropMock.owner.login}`
    );
  });
});
