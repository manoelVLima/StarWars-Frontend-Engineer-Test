import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CharacterCard, { ICharacterCardProps } from '@/components/CharacterCard';
import { mockCharacter } from '../__mocks__/Character.mock';

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

const mockProps: ICharacterCardProps = {
  character: mockCharacter,
  index: 0,
};

it('renders CharacterCard correctly', () => {
  renderWithQueryClient(<CharacterCard {...mockProps} />);
  expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
});
