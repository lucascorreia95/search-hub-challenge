import "materialize-css";
import { render, screen } from "@testing-library/react";
import RepositoriesItem from "./RepositoriesItem";

const itemMock = {
  name: "name",
  description: "description",
  language: "language",
  stargazers_count: 1,
  html_url: "http://html_url.com.br",
  owner: {
    login: "login",
  },
};

describe("RepositoriesItem component", () => {
  it("Should render the component", () => {
    const { container } = render(<RepositoriesItem item={itemMock} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("Should unmount the component", () => {
    const { container, unmount } = render(<RepositoriesItem item={itemMock} />);
    expect(container.firstChild).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it("Should render the component with name", () => {
    const { container } = render(<RepositoriesItem item={itemMock} />);
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemMock.name)).toBeInTheDocument();
  });

  it("Should render the component with owner login", () => {
    const { container } = render(
      <RepositoriesItem item={itemMock} showOwner />
    );
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemMock.owner.login)).toBeInTheDocument();
  });

  it("Should render the component with description", () => {
    const { container } = render(<RepositoriesItem item={itemMock} />);
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemMock.description)).toBeInTheDocument();
  });

  it("Should render the component with language", () => {
    const { container } = render(<RepositoriesItem item={itemMock} />);
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemMock.language)).toBeInTheDocument();
  });

  it("Should render the component with stars count", () => {
    const { container } = render(<RepositoriesItem item={itemMock} />);
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText(itemMock.stargazers_count)).toBeInTheDocument();
  });

  it("Should render the component with link to the repository", () => {
    const { container } = render(<RepositoriesItem item={itemMock} />);
    expect(container.firstChild).toBeInTheDocument();

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", itemMock.html_url);
  });
});
