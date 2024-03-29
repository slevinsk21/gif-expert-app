// react
import { useState } from 'react';

// components
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragón ball']);

  const onAddCategory = newCategory => {
    const newValueExist = categories.find(
      i => i.toLowerCase() === newCategory.toLowerCase()
    );
    // const newValueExist = categories.includes(newCategory);
    !newValueExist
      ? setCategories([newCategory, ...categories])
      : alert(`la cattegoría: ${newCategory} ya fue agregada...`);
  };

  const onDeleteCategory = categoryToDelete => {
    setCategories(categories.filter(category => category !== categoryToDelete));
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.length ? (
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
            onDeleteCategory={onDeleteCategory}
          />
        ))
      ) : (
        <h1
          className='fade-in'
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: 380,
            lineHeight: '42px',
            margin: '50px auto',
            textAlign: 'center'
          }}
        >
          Aún no hay nada por aquí 😅... por favor agrega un nombre
        </h1>
      )}
    </>
  );
};
