export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({packPercentage}%)🚀
      </em>
    </footer>
  );
}
