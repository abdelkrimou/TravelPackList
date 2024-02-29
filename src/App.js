import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const packedOne = items.filter((item) => item.packed).length;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }
  function handleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(items);
  }
  return (
    <div className="app">
      <Header />
      <Form items={items} handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        handleCheck={handleCheck}
        setItems={setItems}
      />
      <Footer items={items} packedOne={packedOne} />
    </div>
  );
}
