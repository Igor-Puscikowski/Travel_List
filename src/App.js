import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function Logo() {
  return <h1>🏝️ Far Away 🏝️</h1>;
}

function Form() {
  const [description, SetDescription] = useState("");
  const [quantity, SetQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    SetDescription("");
    SetQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 🧳?</h3>

      <select
        value={quantity}
        onChange={(e) => SetQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => SetDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((i) => (
          <Item item={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  ///same item in <Item item={i} />
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>X</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>Start adding some items to your packing list 🚀 </em>
    </footer>
  );
}
