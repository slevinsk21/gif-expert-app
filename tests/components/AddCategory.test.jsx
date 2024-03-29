// jest
import { fireEvent, render, screen } from '@testing-library/react';

// components
import { AddCategory } from '../../src/components';

describe('File: <AddCategory>', () => {
  const inputValue = 'Naruto';
  const onAddCategory = jest.fn();

  test('#1: Test: ( should be to change the value of the input )', () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test('#2 Test: ( AddCategory should be called if the input has any value )', () => {
    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
  });

  test('#3 Test: ( AddCategory should not be called if the input has an empty value )', () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(0);
  });
});
