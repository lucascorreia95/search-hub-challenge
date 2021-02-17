import { render } from "@testing-library/react";
import "materialize-css";

import { initialState } from "../../../../store";
import ContextProvider from "../../../../store/Context";

import Result from "./Result";

const renderComponent = () => {
  return render(
    <ContextProvider.Provider
      value={{ state: initialState, dispatch: jest.fn() }}
    >
      <Result />
    </ContextProvider.Provider>
  );
};

describe("Result component", () => {
  it("Should render the Result", () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
  });

  it("Should unmount the Result", () => {
    const { container, unmount } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
