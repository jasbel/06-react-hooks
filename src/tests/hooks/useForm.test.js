import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Prueba en <useForm />', () => {
  const initForm = {
    name: 'Asbel',
    email: 'asbel@gmail.com',
  };

  test('should result a default form', () => { 
    const {result} = renderHook(() => useForm(initForm))

    expect(result.current[0]).toEqual(initForm);
    expect(typeof result.current[1]).toBe('function');
    expect(typeof result.current[2]).toBe('function');
  })

  test('should change value form (change name)', () => { 
    const {result} = renderHook(() => useForm(initForm));
    const [, change] = result.current;

    act(() => {
      change({target: {name:'name', value: 'jhon'}})
    })

    expect(result.current[0].name).toBe('jhon');
    expect(result.current[0]).toEqual({...initForm, name: 'jhon'});
  })

  test('should reset form to initForm', () => { 
    const {result} = renderHook(() => useForm(initForm));
    const [, change, reset] = result.current;

    act(() => {
      change({target: {name:'name', value: 'jhon'}});
      reset();
    })

    expect(result.current[0]).toEqual(initForm)
  })
})