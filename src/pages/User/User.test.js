import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Route, Switch, MemoryRouter, Router, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createMemoryHistory } from 'history';
import 'materialize-css';

import { theme } from '../../theme';
import User from './User';

const userMock = {
  name: 'name',
  avatar_url: 'http://avatar_url.com',
  login: 'login',
  bio: 'bio',
  location: 'location',
  company: 'company',
  blog: 'blog',
  email: 'email',
  followers: 'followers',
  following: 'following',
};

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/user/lucas']}>
        <Switch>
          <Route path="/user/:login">
            <User />
          </Route>
          <Route path="/">
            <div>Another page</div>
          </Route>
        </Switch>
      </MemoryRouter>
    </ThemeProvider>
  );

const server = setupServer(
  rest.get('https://api.github.com/users/lucas', (req, res, ctx) =>
    res(ctx.json({ ...userMock }))
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Users page', () => {
  it('Should render the page', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it('Should unmount the page', () => {
    const { container, unmount } = renderComponent();
    expect(container).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('Should render the page in loading state', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();

    expect(screen.getByText('Buscando usuário...')).toBeInTheDocument();
  });

  it('Should render the page with users information', async () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(userMock.name)).toBeInTheDocument()
    );
    expect(screen.getByText(userMock.name)).toBeInTheDocument();
    expect(screen.getByText(userMock.login)).toBeInTheDocument();
    expect(screen.getByText(userMock.bio)).toBeInTheDocument();
    expect(screen.getByText(userMock.location)).toBeInTheDocument();
    expect(screen.getByText(userMock.company)).toBeInTheDocument();
    expect(screen.getByText(userMock.blog)).toBeInTheDocument();
    expect(screen.getByText(userMock.email)).toBeInTheDocument();
    expect(screen.getByText(userMock.followers)).toBeInTheDocument();
    expect(screen.getByText(userMock.following)).toBeInTheDocument();
    expect(screen.getByText('Ver repositórios do usuário')).toBeInTheDocument();
    expect(
      screen.getByText('Ver repositórios marcados com estrela')
    ).toBeInTheDocument();

    const userImg = screen.getByRole('img');
    expect(userImg).toBeInTheDocument();
    expect(userImg).toHaveAttribute('src', userMock.avatar_url);
  });

  it('Should go back to previous page', async () => {
    const history = createMemoryHistory();

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/user/:login">
              <User />
            </Route>
            <Route path="/">
              <div>Another page</div>
              <Link
                to={{
                  pathname: '/user/lucas',
                  params: 'lucas',
                }}
              >
                Link
              </Link>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();

    const link = screen.getByText('Link');
    expect(link).toBeInTheDocument();
    fireEvent.click(link);

    await waitFor(() =>
      expect(screen.getByText(userMock.name)).toBeInTheDocument()
    );

    const button = screen.getByText('Voltar');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(button).not.toBeInTheDocument();
    expect(screen.getByText('Another page')).toBeInTheDocument();
  });
});
