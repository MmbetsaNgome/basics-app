import React, { useState } from "react";

// To-Do List Project (Week 3: Forms and State Management with Arrays)
function ToDoList() {
  // State to hold the list of tasks
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Hooks", completed: false },
    { id: 2, text: "Set up Tailwind CSS", completed: true },
    { id: 3, text: "Build the Portfolio Router", completed: false },
  ]);

  // State for the controlled input field
  const [newTask, setNewTask] = useState("");

  // Handle form submission
  const addTodo = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: newTask.trim(),
      completed: false,
    };

    // Use the functional form of setState for arrays
    setTodos([...todos, newTodo]);
    setNewTask(""); // Clear the input field
  };

  // Toggle the completed status of a task
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove a task
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 w-full max-w-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center">
        To-Do List App (Controlled Forms & Array State)
      </h3>

      {/* Form for adding new tasks */}
      <form onSubmit={addTodo} className="flex mb-6 space-x-3">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
        >
          Add
        </button>
      </form>

      {/* List of To-Do items */}
      <ul className="space-y-3">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500 p-4 border border-dashed rounded-lg">
            No tasks yet!
          </li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition duration-150"
            >
              <span
                className={`text-lg font-medium cursor-pointer ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition"
                aria-label="Remove task"
              >
                {/* SVG Trash Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 6h6v10H7V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="mt-8 text-center bg-purple-50 p-4 rounded-lg border border-purple-200">
        <p className="font-medium text-purple-800 text-sm">
          This project uses **Controlled Inputs** (input value tied to `newTask`
          state) and manages an array of objects using **State**.
        </p>
      </div>
    </div>
  );
}

export default ToDoList;
