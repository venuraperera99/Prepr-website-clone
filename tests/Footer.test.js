// Footer.test.js
import { render, screen } from '@testing-library/react';
import { Footer } from '../src/components/Footer';

test('renders footer with version, links, and powered by message', () => {
  render(<Footer />);
  const versionElement = screen.getByText(/v24.0.9/i);
  const privacyPolicyElement = screen.getByText(/Privacy policy/i);
  const termsOfUseElement = screen.getByText(/Terms of use/i);
  const helpCenterElement = screen.getByText(/Help Center/i);
  const poweredByElement = screen.getByText(/Powered by LearnLab.ai/i);

  expect(versionElement).toBeInTheDocument();
  expect(privacyPolicyElement).toBeInTheDocument();
  expect(termsOfUseElement).toBeInTheDocument();
  expect(helpCenterElement).toBeInTheDocument();
  expect(poweredByElement).toBeInTheDocument();
});
