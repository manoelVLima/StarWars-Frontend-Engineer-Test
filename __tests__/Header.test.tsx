import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header Component tests', () => {
  test('renders main title correctly', () => {
    render(<Header />);

    const mainTitle = screen.getByRole('heading', { name: /star wars/i });
    expect(mainTitle).toBeInTheDocument();
  });

  test('renders subtitle correctly', () => {
    render(<Header />);

    const subtitle = screen.getByText(
      /a long time ago in a galaxy far, far away/i
    );
    expect(subtitle).toBeInTheDocument();
  });
});
