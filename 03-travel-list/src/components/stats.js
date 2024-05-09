export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start adding some items on your adding list 👜</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing ! READY TO GO ✈️"
          : ` You have ${numItems} items in
          your list and You already packed ${numPacked} items ( ${percentage}%)`}
      </em>
    </footer>
  );
}
