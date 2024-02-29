import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");

  function handleSubmit(e) {
    e.preventDefault();
    const dateNow = Date.now();
    if (description.trim() === "") return;
    const newItem = {
      id: dateNow,
      description: description,
      quantity: +quantity,
      packed: false,
    };
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option key={num} value={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
