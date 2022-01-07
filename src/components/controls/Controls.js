import { useState } from 'react';


import NewItemForm from '../new-item-form';
import './Controls.scss';

export const Controls = ({ handleFilterKey, handleItemAdd }) => {
  const [newItemFormVisible, setNewItemFormVisible] = useState(false);

  const toggleNewItemForm = () => {
    setNewItemFormVisible((prev) => !prev);
  };

  return (
    <div className='controls'>
      <form className='form controls__form'>
        <label className='form__label' htmlFor='productFilter'>
          <span className="sr-only">Filter items by name</span>
        </label>
        <input
          className='form__input'
          placeholder='Filter items by name'
          id='productFilter'
          onChange={handleFilterKey}
        />
      </form>
      <div className='controls__box'>
        {newItemFormVisible && <NewItemForm handleItemAdd={handleItemAdd} />}
        <button className='btn controls__btn' onClick={toggleNewItemForm}>
            {newItemFormVisible ? 'Cancel' : 'Add new item'}
        </button>
      </div>
    </div>
  );
};
