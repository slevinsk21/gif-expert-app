// react
import { string } from 'prop-types';

// custom hooks
import { useFetchGifs } from '../hooks';

// components
import { GifItem } from './GifItem';

export const GifGrid = ({ category, onDeleteCategory }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div
      className='fade-in'
      style={{
        background: '#f4f4',
        padding: 10,
        borderRadius: 4,
        margin: '2px 0'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>{category}</h4>

        {isLoading && <small>cargando...</small>}

        <button
          onClick={() => onDeleteCategory(category)}
          style={{
            borderRadius: 100,
            padding: '2px 6px',
            boxSizing: 'border-box',
            backgroundColor: '#252525',
            border: '1px solid black',
            alignSelf: 'flex-start',
            cursor: 'pointer'
          }}
        >
          x
        </button>
      </div>

      {!isLoading && gifs.length && (
        <div className='card-grid'>
          {gifs.map(image => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </div>
  );
};

GifGrid.propTypes = {
  category: string.isRequired
}