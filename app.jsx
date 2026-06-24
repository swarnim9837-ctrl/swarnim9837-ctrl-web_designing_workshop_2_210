import React, { useState } from "react";

function App() {

  // State Variable
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (

    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >

      <h1>Counter Application using useState Hook</h1>

      <h2>Counter Value: {count}</h2>

      <button
        onClick={increment}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Decrement
      </button>

      <button
        onClick={reset}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Reset
      </button>

    </div>
  );
}

export default App;