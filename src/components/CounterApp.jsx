import React, { useState } from "react";

// Counter App Project (Week 3: State and Events)
function CounterApp() {
  // 1. Initialize state with the useState hook
  const [count, setCount] = useState(0);

  // 2. Event handlers to update state
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    // Example of conditional rendering to prevent negative numbers
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  // 3. Conditional Rendering Example
  const statusText =
    count === 0
      ? "Waiting to start..."
      : count > 10
      ? "Wow, that's a lot of clicks!"
      : "Keep counting!";

  return (
    <div className="p-8 flex flex-col items-center w-full max-w-md bg-gray-50 rounded-lg shadow-inner">
      <h3 className="text-xl font-semibold mb-6 text-gray-700">
        State Management with `useState`
      </h3>

      <p className="text-sm font-medium text-gray-500 mb-2">{statusText}</p>

      <div className="text-8xl font-extrabold text-blue-600 mb-8 p-6 bg-white rounded-xl shadow-xl min-w-[150px] text-center transition duration-300">
        {count}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={decrement}
          disabled={count === 0}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 disabled:opacity-50 transition duration-150 transform hover:scale-105"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 transition duration-150 transform hover:scale-105"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-150 transform hover:scale-105"
        >
          Increment
        </button>
      </div>

      <div className="mt-8 text-center bg-teal-50 p-4 rounded-lg border border-teal-200 max-w-sm">
        <p className="font-medium text-teal-800 text-sm">
          This demonstrates **State** (`useState`) and **Event Handling**
          (`onClick`). Updating the state re-renders only this component.
        </p>
      </div>
    </div>
  );
}

export default CounterApp;
