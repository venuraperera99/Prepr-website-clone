// Header.test.js
import { render, screen } from '@testing-library/react';
import { Header } from "../src/components/Header";

test('renders header with "PreprLabs"', () => {
  render(<Header />);
  const headerElement = screen.getByText(/PreprLabs/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders header tabs', () => {
  render(<Header />);
  const exploreTab = screen.getByText(/Explore/i);
  const dashboardTab = screen.getByText(/Dashboard/i);
  const myChallengesTab = screen.getByText(/My Challenges/i);
  const myLabsTab = screen.getByText(/My Labs/i);
  const myProjectsTab = screen.getByText(/My Projects/i);
  const careerExplorerTab = screen.getByText(/Career Explorer/i);

  expect(exploreTab).toBeInTheDocument();
  expect(dashboardTab).toBeInTheDocument();
  expect(myChallengesTab).toBeInTheDocument();
  expect(myLabsTab).toBeInTheDocument();
  expect(myProjectsTab).toBeInTheDocument();
  expect(careerExplorerTab).toBeInTheDocument();
});
