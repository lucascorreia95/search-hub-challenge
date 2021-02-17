import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'materialize-css';

import Repositories from './Repositories';

const itemMock = {
  name: 'name',
  id: 1,
  description: 'description',
  language: 'language',
  stargazers_count: 1,
  html_url: 'http://html_url.com.br',
  owner: {
    login: 'login',
  },
};

const server = setupServer(
  rest.get('https://api.github.com/users/lucas/repos', (req, res, ctx) =>
    res(ctx.json([itemMock]))
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Repositories component', () => {
  it('Should render the component', () => {
    const { container } = render(
      <Repositories login="lucas" endpoint="repos" />
    );
    expect(container).toBeInTheDocument();
  });

  it('Should unmount the component', () => {
    const { container, unmount } = render(
      <Repositories login="lucas" endpoint="repos" />
    );
    expect(container).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('Should render the component with button to open', () => {
    const { container } = render(
      <Repositories
        login="lucas"
        endpoint="repos"
        trigger="modal"
        header="header"
      />
    );
    expect(container).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'modal' })).toBeInTheDocument();
  });

  it('Should render the component with button to close', () => {
    const { container } = render(
      <Repositories
        login="lucas"
        endpoint="repos"
        trigger="modal"
        header="header"
      />
    );
    expect(container).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument();
  });

  it('Should render the component with header', () => {
    const { container } = render(
      <Repositories
        login="lucas"
        endpoint="repos"
        trigger="modal"
        header="header"
      />
    );
    expect(container).toBeInTheDocument();

    expect(screen.getByText('header')).toBeInTheDocument();
  });

  it('Should render the component in loading state', () => {
    const { container } = render(
      <Repositories
        login="lucas"
        endpoint="repos"
        trigger="modal"
        header="header"
      />
    );
    expect(container).toBeInTheDocument();

    const buttonOpen = screen.getByRole('button', { name: 'modal' });
    fireEvent.click(buttonOpen);

    expect(screen.getByText('Buscando items...')).toBeInTheDocument();
  });

  it('Should render the component with items', async () => {
    const { container } = render(
      <Repositories
        login="lucas"
        endpoint="repos"
        trigger="modal"
        header="header"
      />
    );
    expect(container).toBeInTheDocument();

    const buttonOpen = screen.getByRole('button', { name: 'modal' });
    fireEvent.click(buttonOpen);

    await waitFor(() => screen.getByText(itemMock.name));
    expect(screen.getByText(itemMock.name)).toBeInTheDocument();
  });

  it('Should request the next page', async () => {
    const spyFunc = jest.fn();

    server.use(
      rest.get('https://api.github.com/users/lucas/repos', (req, res, ctx) => {
        spyFunc();
        return res(
          ctx.set({
            link:
              '<https://api.github.com/search/users?q=lucas&page=2&per_page=12>; rel="next"' +
              '<https://api.github.com/search/users?q=lucas&page=84&per_page=12>; rel="last"',
          }),
          ctx.json([itemMock])
        );
      })
    );

    const { container } = render(
      <Repositories
        login="lucas"
        endpoint="repos"
        trigger="modal"
        header="header"
      />
    );
    expect(container).toBeInTheDocument();

    const buttonOpen = screen.getByRole('button', { name: 'modal' });
    fireEvent.click(buttonOpen);

    await waitFor(() => screen.getByText(itemMock.name));
    expect(screen.getByText(itemMock.name)).toBeInTheDocument();

    const nextPage = screen.getByText('2');
    fireEvent.click(nextPage);

    await waitFor(() => expect(spyFunc).toHaveBeenCalledTimes(2));
  });
});
