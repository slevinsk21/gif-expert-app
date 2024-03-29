export const getGifs = async (category, limit = 20) => {
  try {
    const URL_API = 'http://api.giphy.com/v1/gifs/';
    const apiKey = 'HEvxu2ifSsoPanYvrbD6Vr9nXshUncir';

    const resp = await fetch(`${URL_API}search?api_key=${apiKey}&q=${category}&limit=${limit}`);

    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images: { downsized_medium } }) => ({
      id,
      title,
      url: downsized_medium.url
    }));
    return gifs;
  } catch (error) {
    return 'No se encontró la imagen';
  }
};
