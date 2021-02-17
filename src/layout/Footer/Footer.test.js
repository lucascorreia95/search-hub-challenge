import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';
import Footer from './Footer';

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );

describe('Footer Component (layout)', () => {
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

  it('Should render the component with text content', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByTestId('footer-text-content').textContent).toEqual(
      'Desenvolvido porLucas Correia- FEV./2021 -Link do repositório'
    );
  });

  it('Should render the component with the link to github', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByTestId('footer-link-github').textContent).toEqual(
      'Lucas Correia'
    );

    expect(screen.getByTestId('footer-link-github')).toHaveAttribute('href');
  });

  it('Should render the component with the link to repository', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();

    expect(screen.getByTestId('footer-link-repository').textContent).toEqual(
      'Link do repositório'
    );

    expect(screen.getByTestId('footer-link-github')).toHaveAttribute('href');
  });
});
