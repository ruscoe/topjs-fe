import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/TopJS/i);
  expect(linkElement).toBeInTheDocument();
});
