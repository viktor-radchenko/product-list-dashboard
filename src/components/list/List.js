import ListItem from "../list-item";

export const List = ({ filteredList, handleItemButton, deleted = false }) => {
  if (filteredList.length === 0) {
    return (
      <div className="dasboard__error">
        We could not find any items. Check your filter input or try again
        later...
      </div>
    );
  }

  return (
    <ul className="dashboard__list">
      {filteredList.map((item) => (
        <ListItem
          key={item}
          item={item}
          handleItemButton={handleItemButton}
          deleted={deleted}
        />
      ))}
    </ul>
  );
};
