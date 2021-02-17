import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Route, Switch, MemoryRouter } from "react-router-dom";
import "materialize-css";

import User from "./User";

const useMock = {
  id: 1,
  name: "name",
  login: "login",
  html_url: "https://html_url.com.br",
  avatar_url: "https://avatar_url.com.br",
  description: "description",
  owner: {
    avatar_url: "https://avatar_url.com.br",
    login: "login",
  },
};

const renderComponent = () => {
  return render(
    <MemoryRouter initialEntries={["/user/lucas"]}>
      <Switch>
        <Route path={`/user/:login`}>
          <User />
        </Route>
      </Switch>
    </MemoryRouter>
  );
};

const server = setupServer(
  rest.get(
    "https://api.github.com/search/users?q=lucas&page=1&per_page=12",
    (req, res, ctx) => {
      return res(ctx.json({ items: [] }));
    }
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Users page", () => {
  it("Should render the page", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it("Should unmount the page", () => {
    const { container, unmount } = renderComponent();
    expect(container).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it("Should render the page in loading state", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();

    expect(screen.getByText("Buscando usuário...")).toBeInTheDocument();
  });
});
