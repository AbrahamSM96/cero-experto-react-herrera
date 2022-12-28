import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Test <MultipleCustomHooks/>', () => {
  const mockIncrement = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show the default component', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
    });
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking bad Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Siguiente Quote' });
    expect(nextButton.disabled).toBeTruthy();
  });

  test('should show an Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Abraham', quote: 'Hola mundo' }],
      loading: false,
    });
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Hola mundo')).toBeTruthy();
    expect(screen.getByText('Abraham')).toBeTruthy();

    const nextButton = screen.getByRole('button', {
      name: 'Siguiente Quote',
    });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should call the function increment', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Abraham', quote: 'Hola mundo' }],
      loading: false,
    });
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', {
      name: 'Siguiente Quote',
    });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
