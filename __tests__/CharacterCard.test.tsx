import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getApi } from '@/services/requests';
import { Planet } from '@/interfaces/IPlanet';
import { mockCharacter } from '../__mocks__/Character.mock';
import CharacterCard from '@/components/CharacterCard';

jest.mock('@/services/requests');

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

describe('CharacterCard Component tests', () => {
  test('renders Character Info and Planet Name correctly', async () => {
    (getApi as jest.Mock).mockResolvedValueOnce({
      name: 'Tatooine',
    } as Planet);

    renderWithQueryClient(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('HEIGHT - 172')).toBeInTheDocument();
    expect(screen.getByText('MASS - 77')).toBeInTheDocument();
    expect(screen.getByText('GENDER - male')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(await screen.findByText('Tatooine')).toBeInTheDocument();
  });
});
