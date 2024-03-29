// react
import { useState, useEffect } from 'react';

// services
import { getGifs } from '../services';

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetGifs = async () => {
    try {
      const data = await getGifs(category);
      setGifs(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetGifs();
  }, []);

  return { gifs, isLoading };
};
