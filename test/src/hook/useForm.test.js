// test/useForm.test.js
import { renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../../src/hooks/useForm';
import { act } from 'react';

describe('useForm hook', () => {
  const initialForm = {
    searchCity: '',
  };


  test('Debe inicializar el formulario con el valor inicial', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current.searchCity).toBe('');
  });

  test('Debe actualizar el estado del formulario al cambiar la entrada', () => {
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({ target: { searchCity: 'searchCity', value: 'ciudad del carmen' } });
    });

    expect(result.current.searchCity).toBe('');
  });

  test('debe restablecer el estado del formulario a los valores iniciales', () => {
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({ target: { searchCity: 'searchCity', value: '' } });
    });

    act(() => {
      result.current.onResetForm();
    });

    expect(result.current.searchCity).toBe('');
  });

  test('debería actualizar el estado del formulario cuando cambie el formulario inicial', () => {
    const { result, rerender } = renderHook(({ initialForm }) => useForm(initialForm), {
      initialProps: { initialForm },
    });

    const newInitialForm = {
      searchCity: 'ciudad del carmen',
    };

    rerender({ initialForm: newInitialForm });

    expect(result.current.searchCity).toBe('ciudad del carmen');
  });
});
