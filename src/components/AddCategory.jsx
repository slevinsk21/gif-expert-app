// react
import { useState } from 'react';
import { func } from 'prop-types';


export const AddCategory = ({ onAddCategory }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    value.trim().length && onAddCategory(value);
    setValue('');
  };

  return (
    <form
      aria-label='form'
      onSubmit={handleSubmit}
      style={{ display: 'flex', margin: '8px 0' }}
    >
      <input
        type='text'
        placeholder='Buscar Gifs...'
        value={value}
        onChange={({ target }) => setValue(target.value)}
        maxLength={32}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: func.isRequired
};
