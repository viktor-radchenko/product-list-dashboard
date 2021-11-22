export const ListItem = ({ item, handleItemButton, deleted }) => {
  const button = deleted ? (
    <div className="dashboard__item-actions">
      <button onClick={() => handleItemButton(item)}>Restore</button>
    </div>
  ) : (
    <div className="dashboard__item-actions">
      <button onClick={() => handleItemButton(item)}>Delete</button>
    </div>
  );

  return (
    <li className="dashboard__item">
      <div className="dashboard__item-name">{item}</div>
      {button}
    </li>
  );
};
