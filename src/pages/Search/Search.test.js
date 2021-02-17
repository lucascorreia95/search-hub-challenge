import { render } from '@testing-library/react';
import 'materialize-css';

import { initialState } from '../../store';
import ContextProvider from '../../store/Context';

import Search from './Search';

const renderComponent = () =>
  render(
    <ContextProvider.Provider
      value={{ state: initialState, dispatch: jest.fn() }}
    >
      <Search />
    </ContextProvider.Provider>
  );

describe('Search page', () => {
  it('Should render the page', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
  });

  it('Should unmount the page', () => {
    const { container, unmount } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
