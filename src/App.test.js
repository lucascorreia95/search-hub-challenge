import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the component', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
