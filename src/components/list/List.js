import "./List.scss";

import ListItem from "../list-item";

export const List = ({ filteredList, handleItemButton, deleted = false }) => {
  console.log(filteredList)
  
  if (filteredList.length === 0) {
    return (
      <div className="error">
        We could not find any items. Check your filter input or try again
        later...
      </div>
    );
  }

  return (
    <ul className="product-list">
      {filteredList.map((item) => (
        <ListItem
          key={item.name}
          item={item}
          handleItemButton={handleItemButton}
          deleted={deleted}
        />
      ))}
    </ul>
  );
};
