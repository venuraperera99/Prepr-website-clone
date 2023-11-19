import { render, screen, fireEvent } from '@testing-library/react';
import { MenuGrid } from '../src/components/MenuGrid';

test('renders menu items', () => {
  render(<MenuGrid onClose={() => {}} />);
  const menuItem1 = screen.getByText(/Item 1/i);
  const menuItem2 = screen.getByText(/Item 2/i);
  const menuItem3 = screen.getByText(/Item 3/i);

  expect(menuItem1).toBeInTheDocument();
  expect(menuItem2).toBeInTheDocument();
  expect(menuItem3).toBeInTheDocument();
});

test('calls onClose when a menu item is clicked', () => {
  const onCloseMock = jest.fn();
  render(<MenuGrid onClose={onCloseMock} />);
  const menuItem1 = screen.getByText(/Item 1/i);

  fireEvent.click(menuItem1);

  expect(onCloseMock).toHaveBeenCalled();
});