// jest
import { render, screen } from '@testing-library/react';

// custom hooks
import { useFetchGifs } from '../../src/hooks';

// components
import { GifGrid } from '../../src/components';

jest.mock('../../src/hooks');

describe('File: <GifGrid>', () => {
  const category = 'Naruto';

  test('#1: Test: ( should be show the loading initializing )', () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);

    expect(screen.getByText('cargando...'));
    expect(screen.getByText(category));
  });

  test('#2 Test: ( should be get 2 images form mock service )', () => {
    const gifs = [
      {
        id: '2y98KScHKeaQM',
        title: 'Naruto Shippuden GIF',
        url: 'https://media4.giphy.com/media/2y98KScHKeaQM/giphy.gif?cid=31de32d5mgkg2iifx4d8d66squp5liucip6eb29dc24fg7ev&rid=giphy.gif&ct=g'
      },
      {
        id: 'lmFm5QZMzdmQ8',
        title: 'naruto shippuden GIF',
        url: 'https://media1.giphy.com/media/lmFm5QZMzdmQ8/giphy.gif?cid=31de32d5mgkg2iifx4d8d66squp5liucip6eb29dc24fg7ev&rid=giphy.gif&ct=g'
      }
    ];

    useFetchGifs.mockReturnValue({ gifs, isLoading: false });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
