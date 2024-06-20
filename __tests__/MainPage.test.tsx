import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from '@/components/MainPage';
import { useQuery } from '@tanstack/react-query';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockCharacters = [
  { name: 'Luke Skywalker', homeworld: 'https://swapi.dev/api/planets/1/', height: '172', mass: '77', gender: 'male' },
  { name: 'Darth Vader', homeworld: 'https://swapi.dev/api/planets/1/', height: '202', mass: '136', gender: 'male' },
];

const mockGetApi = jest.fn();

jest.mock('@/services/requests', () => ({
  getApi: () => mockGetApi,
}));

describe('MainPage Component test', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    (useRouter as jest.Mock).mockReturnValue({
      replace: jest.fn(),
    });

    (usePathname as jest.Mock).mockReturnValue('/');
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('1'),
    });
  });

  test('renders Filter, TextInput, Pagination and CharacterCard components', () => {
    render(<MainPage />);

    expect(screen.getByText('Filter By')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Clear All')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();

    mockCharacters.forEach(character => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });
  });

  test('handles filtering correctly', async () => {
    render(<MainPage />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Luke' } });

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
      expect(screen.queryByText('Darth Vader')).not.toBeInTheDocument();
    });
  });

  test('handles pagination correctly', () => {
    const mockReplace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });

    render(<MainPage />);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(mockReplace).toHaveBeenCalled();
  });

  test('displays loading skeletons when data is loading', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
    });

    render(<MainPage />);

    expect(screen.getAllByTestId('skeleton-loading')).toHaveLength(10);
  });
});
