export default function ListStyling({ item, deleteItem, handleCheck }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => handleCheck(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
