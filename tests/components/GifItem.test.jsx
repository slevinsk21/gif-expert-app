import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components';

describe('File: <GifItem>', () => {
  const title = 'One Punch';
  const url = 'https://media2.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=31de32d5k2muizam1hx9t4pnszuerbpp1gl0rj6nx6wxry0k&rid=giphy.gif&ct=g';

  test('#1: Test: ( must be do match to the snapshot )', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('#2 Test: ( should be show the image with the url and alt properly indicated )', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(`${title}-image`);
  });

  test('#3 Test: ( should be show the title on the component )', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title));
  });
});
