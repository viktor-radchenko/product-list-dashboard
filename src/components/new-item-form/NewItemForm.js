import { useState } from "react";

export const NewItemForm = ({ handleItemAdd }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    if (itemName === "") return;
    handleItemAdd(e.target.itemName.value);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemName">
        Type item name
        <input
          type="text"
          id="itemName"
          name="itemName"
          onChange={handleChange}
          value={name}
        />
      </label>
      <button type="submit">Add item</button>
    </form>
  );
};
