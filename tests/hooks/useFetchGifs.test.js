// jest
import { renderHook, waitFor } from '@testing-library/react';

// custom hooks
import { useFetchGifs } from '../../src/hooks';

describe('File: useFetchGifs', () => {
  test('#1: Test: ( should be return initial state )', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('#2 Test: ( should be return an object with Array of gifs and isLoading in false  )', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
      // { timeout: 1000 } // set time to await custom
      )

    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  });

})

// test('# Test: (  )', () => {});

