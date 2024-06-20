import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '@/components/Filter';

describe('Filter Component tests', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders correctly with initial value', () => {
    render(<Filter selectedValue="name" onChange={mockOnChange} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('name');
  });

  test('calls onChange when a value is selected', () => {
    render(<Filter selectedValue="name" onChange={mockOnChange} />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'planet' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('planet');
  });

  test('renders all filter options', () => {
    render(<Filter selectedValue="name" onChange={mockOnChange} />);

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
    
    const expectedOptions = [
        { value: 'name', text: 'Name' },
        { value: 'planet', text: 'HomeWorld' },
      ];
  
      expectedOptions.forEach((option, index) => {
        expect(options[index]).toHaveValue(option.value);
        expect(options[index]).toHaveTextContent(option.text);
      });
  });
});
