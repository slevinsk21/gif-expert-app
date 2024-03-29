// react
import { string } from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className='card' style={{ fontSize: 14 }}>
      <img src={url} alt={`${title}-image`} />

      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: string.isRequired,
  url: string.isRequired
};
