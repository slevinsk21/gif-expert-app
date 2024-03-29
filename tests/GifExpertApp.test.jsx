// jest
import { render, screen, FireFunction } from '@testing-library/react';

// components
import { GifExpertApp } from '../src/GifExpertApp';

describe('File: <GifExpertApp>', () => {
  test('#1: Test: (  )', () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

  test('#2: Test: (  )', () => {
    render(<GifExpertApp />);

    screen.FireFunction(onAddCategory)
  });
});
