import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('test useForms', () => {
  const initialForm = {
    name: 'Abraham',
    email: 'abraham@gmail.com',
  };
  test('should return the default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      value: initialForm,
      handleInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should return the form name', () => {
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;
    act(() => {
      handleInputChange({ target: { name: 'name', value: newValue } });
    });
    expect(result.current.name).toBe(newValue);
    expect(result.current.value.name).toBe(newValue);
  });

  test('should reset the form', () => {
    const newValue = 'Juan';

    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange, onResetForm } = result.current;
    act(() => {
      handleInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.value.name).toBe(initialForm.name);
  });
});
