import 'materialize-css';
import { render, screen } from '@testing-library/react';
import Information from './Information';

describe('Information component', () => {
  it('Should render the component', () => {
    const { container } = render(<Information description="description" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('Should unmount the component', () => {
    const { container, unmount } = render(
      <Information description="description" />
    );
    expect(container.firstChild).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('Should render the component with description', () => {
    const { container } = render(<Information description="description" />);
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText('description')).toBeInTheDocument();
  });

  it('Should render the component with title', () => {
    const { container } = render(
      <Information title="title" description="description" />
    );
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('Should not render the component when have no description', () => {
    const { container } = render(<Information />);
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
