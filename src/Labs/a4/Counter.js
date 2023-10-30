import React, { useState } from "react";
function Counter() {
  let count = 0;
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => { count++; console.log(count); }}>
        Up
      </button>
      <button
        onClick={() => { count--; console.log(count); }}>
        Down
      </button>
    </div>
  );
}
export default Counter;