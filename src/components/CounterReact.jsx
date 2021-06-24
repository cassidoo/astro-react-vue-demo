import React, { useState } from "react";

export default function CounterReact({ demo }) {
  let [count, setCount] = useState(0);

  let add = () => {
    setCount(count + 1);
  };

  let subtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      React Count: {count} {demo}
      <br />
      <button onClick={subtract}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}
