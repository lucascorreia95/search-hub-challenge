import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "materialize-css";

import { DispatchTypes, initialState } from "../../../../store";
import ContextProvider from "../../../../store/Context";

import Result from "./Result";

const itemPropMock = {
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

const renderComponent = (state, dispatch = jest.fn()) => {
  const mockState = {
    ...initialState,
    ...state,
  };
  return render(
    <ContextProvider.Provider value={{ state: mockState, dispatch }}>
      <Result />
    </ContextProvider.Provider>
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

describe("Result component", () => {
  it("Should render the Result", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it("Should unmount the Result", () => {
    const { container, unmount } = renderComponent();
    expect(container).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it("Should not render the Result when is not loading and not have results", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
    expect(container.childElementCount).toEqual(0);
  });

  it("Should render the Result in loading state", () => {
    const { container } = renderComponent({
      inputValue: "lucas",
      page: 1,
      radioValue: "users",
    });
    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByText("Buscando resultados...")).toBeInTheDocument();
  });

  it("Should render the Result in empty state", async () => {
    const { container } = renderComponent({
      inputValue: "lucas",
      page: 1,
      radioValue: "users",
    });
    expect(container.firstChild).toBeInTheDocument();

    await waitFor(() => screen.getByText("Sua busca não retornou resultados!"));
  });

  it("Should render the Result with items", async () => {
    server.use(
      rest.get(
        "https://api.github.com/search/users?q=correia&page=1&per_page=12",
        (req, res, ctx) => {
          return res(ctx.json({ items: [itemPropMock] }));
        }
      )
    );

    const { container } = renderComponent({
      inputValue: "correia",
      page: 1,
      radioValue: "users",
    });
    expect(container.firstChild).toBeInTheDocument();

    await waitFor(() => screen.getByText(itemPropMock.login));
  });

  it("Should dispatch to context the value of next page", async () => {
    server.use(
      rest.get(
        "https://api.github.com/search/users?q=correia&page=1&per_page=12",
        (req, res, ctx) => {
          return res(
            ctx.set({
              link:
                '<https://api.github.com/search/users?q=lucas&page=2&per_page=12>; rel="next"' +
                '<https://api.github.com/search/users?q=lucas&page=84&per_page=12>; rel="last"',
            }),
            ctx.json({ items: [itemPropMock] })
          );
        }
      )
    );

    const spyDispatch = jest.fn();

    const { container } = renderComponent(
      {
        inputValue: "correia",
        page: 1,
        radioValue: "users",
      },
      spyDispatch
    );
    expect(container.firstChild).toBeInTheDocument();

    await waitFor(() => screen.getByRole("list"));

    fireEvent.click(screen.getByText("2"));

    expect(spyDispatch).toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledWith({
      type: DispatchTypes.Page,
      payload: {
        page: 2,
      },
    });
  });
});
