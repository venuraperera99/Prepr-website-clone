import { render, screen } from '@testing-library/react';
import App from './App';
import { Header } from './components/Header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/HELLO/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header in home page', () => {
  render(<Header />);
  const linkElement = screen.getByText(/HELLO/i);
  expect(linkElement).toBeInTheDocument();
});
