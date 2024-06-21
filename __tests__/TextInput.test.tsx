import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '@/components/TextInput';

describe('TextInput Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders correctly with initial value', () => {
    render(
      <TextInput
        value="test value"
        onChange={mockOnChange}
        placeholder="Enter text"
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('test value');
  });

  test('calls onChange when the value changes', () => {
    render(
      <TextInput value="" onChange={mockOnChange} placeholder="Enter text" />
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('new value');
  });

  test('renders correctly without placeholder', () => {
    render(<TextInput value="test value" onChange={mockOnChange} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates input value correctly when typed into', () => {
    let value = '';
    const handleChange = (newValue: string) => {
      value = newValue;
    };

    render(
      <TextInput
        value={value}
        onChange={handleChange}
        placeholder="Enter text"
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'typed value' } });

    expect(value).toBe('typed value');
  });
});
