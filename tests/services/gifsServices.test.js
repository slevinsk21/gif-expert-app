import { getGifs } from '../../src/services';

describe('File: gifsServices', () => {
  test('#1: Test: ( must return an array of gifs )', async () => {
    const gifs = await getGifs('Naruto');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });
});
