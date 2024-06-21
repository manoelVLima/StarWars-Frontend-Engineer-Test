import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '@/components/Pagination';

describe('Pagination Component test', () => {
  const mockHandlePageChange = jest.fn();

  beforeEach(() => {
    mockHandlePageChange.mockClear();
  });

  test('renders Previous button disabled on first page', () => {
    render(
      <Pagination handlePageChange={mockHandlePageChange} currentPage={1} />
    );

    const previousButton = screen.getByRole('button', { name: /previous/i });
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toBeDisabled();
  });

  test('renders Next button enabled on first page', () => {
    render(
      <Pagination handlePageChange={mockHandlePageChange} currentPage={1} />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeEnabled();
  });

  test('calls handlePageChange with correct argument when Next is clicked', () => {
    render(
      <Pagination handlePageChange={mockHandlePageChange} currentPage={1} />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(2);
  });

  test('calls handlePageChange with correct argument when Previous is clicked', () => {
    render(
      <Pagination handlePageChange={mockHandlePageChange} currentPage={2} />
    );

    const previousButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(previousButton);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);
  });

  test('renders Next button disabled on last page', () => {
    render(
      <Pagination handlePageChange={mockHandlePageChange} currentPage={9} />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });

  test('renders Previous button enabled on last page', () => {
    render(
      <Pagination handlePageChange={mockHandlePageChange} currentPage={9} />
    );

    const previousButton = screen.getByRole('button', { name: /previous/i });
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toBeEnabled();
  });
});
