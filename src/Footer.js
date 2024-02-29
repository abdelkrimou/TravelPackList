export default function Footer({ items }) {
  const numItems = items.length;
  const packedOne = items.filter((item) => item.packed).length;
  const packedpourcent = Math.round((packedOne / numItems) * 100);

  return (
    <footer className="stats">
      {items.length === 0
        ? "Start adding some items to your packing list 🚀"
        : packedpourcent !== 100
        ? `💼 You have ${numItems} items on your list, and you already packed ${packedOne} (${packedpourcent}%)`
        : packedpourcent === 100
        ? "Here we are, ready to get on the plane  ✈️"
        : null}
    </footer>
  );
}
