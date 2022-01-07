import './ListItem.scss';

export const ListItem = ({ item, handleItemButton, deleted }) => {
  const button = deleted ? (
      <button 
        className='btn btn--action btn--action-restore' 
        type="button" 
        onClick={() => handleItemButton(item)}>
        Restore
      </button>
  ) : (
      <button
        className='btn btn--action btn--action-delete'
        type="button" 
        onClick={() => handleItemButton(item)}>
        Delete
      </button>
  );

  return (
    <li className="product-list__item">
      <div className="product-item">
        <div className='product-item__name'>
          {item.name}
        </div>
        <div className="product-item__button">
          {button}
        </div>
      </div>
     
    </li>
  );
};
