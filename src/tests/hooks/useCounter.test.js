import { useCounter } from "../../hooks/useCounter"
import {act, renderHook} from '@testing-library/react-hooks'

describe('Prueba de useCounter', () => {
  test('debe retorrn valor por defecto', () => {
    const {result} = renderHook( () => useCounter() )

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  })

  test('debe de tener el counter en 100', () => {
    const {result} = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  })

  test('debe de incrementar el counter en 1', () => {
    const {result} = renderHook(() => useCounter(100))
    const {increment} = result.current;
    
    // llamar a funciones dentro del test
    act(() => {
      increment();
    })

    const {counter} = result.current;
    expect(counter).toBe(101);
  })

  test('should to decrement counter to 1', () => {
    const {result} = renderHook(()=> useCounter(10));
    const {decrement} = result.current;

    act(() => { decrement() });

    const {counter} = result.current;
    expect(counter).toBe(9);
  })

  test('should to reset params', () => {
    const ct = 1002
    const {result} = renderHook(() => useCounter(ct));

    const {reset, increment} = result.current;

    act(() => {
      increment();
      reset();
    })

    const {counter} = result.current;

    expect(counter).toBe(ct);

  })
})