import { useState } from "react";
import ListStyling from "./ListStyling";
export default function PackingList({
  items,
  deleteItem,
  handleCheck,
  setItems,
}) {
  const [sort, setSort] = useState("input");

  let sorted;

  if (sort === "input") sorted = items;

  if (sort === "description")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sorted = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list" style={{ position: "relative" }}>
      <ul>
        {sorted.map((item) => (
          <ListStyling
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            handleCheck={handleCheck}
          />
        ))}
      </ul>

      <div className="actions" style={{ position: "absolute", bottom: "30px" }}>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input" defaultChecked>
            Sort by Input Order
          </option>
          <option value="description">Sort by Desription</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={() => setItems([])}> Clear List </button>
      </div>
    </div>
  );
}
