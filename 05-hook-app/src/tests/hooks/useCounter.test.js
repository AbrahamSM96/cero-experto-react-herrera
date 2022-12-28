import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';
describe('Test useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result?.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should return the value 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result?.current;

    expect(counter).toBe(100);
  });

  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result?.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });
  test('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result?.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });
  test('should reset the counter', () => {
    const { result } = renderHook(() => useCounter(30));
    const { reset, decrement } = result?.current;

    act(() => {
      decrement(2);
      reset();
    });

    expect(result.current.counter).toBe(30);
  });
});
