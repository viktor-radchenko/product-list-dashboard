import { useState } from "react";

import NewItemForm from "../new-item-form";

export const Controls = ({ handleFilterKey, handleItemAdd }) => {
  const [newItemFormVisible, setNewItemFormVisible] = useState(false);

  const toggleNewItemForm = () => {
    setNewItemFormVisible((prev) => !prev);
  };

  return (
    <div className="dasboard__controls">
      <form>
        <label className="dashboard__label" htmlFor="productFilter">
          Filter items by name
          <input
            className="dashboard__input"
            id="productFilter"
            onChange={handleFilterKey}
          />
        </label>
      </form>
      {newItemFormVisible && <NewItemForm handleItemAdd={handleItemAdd} />}
      <button onClick={toggleNewItemForm}>
        {newItemFormVisible ? "Cancel" : "Add new item"}
      </button>
    </div>
  );
};
