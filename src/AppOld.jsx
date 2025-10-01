import React, { useState } from "react";

// The main App component that acts as a container for all projects.
// It uses a simple state variable to switch between different project views.
const AppOld = () => {
  const [currentProject, setCurrentProject] = useState("profile");

  // A helper component to render buttons for project selection.
  const ProjectButton = ({ name, onClick }) => (
    <button
      className="px-6 py-3 mx-2 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
      style={{
        backgroundColor: name === currentProject ? "#3B82F6" : "#60A5FA",
      }}
      onClick={onClick}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );

  const renderProject = () => {
    switch (currentProject) {
      case "profile":
        return <ProfileCardProject />;
      case "gallery":
        return <PhotoGalleryProject />;
      case "counter":
        return <CounterProject />;
      case "todo":
        return <TodoProject />;
      case "portfolio":
        return <PortfolioProject />;
      default:
        return <div className="text-center p-8">Select a project above.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Beginner React Projects
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Select a project to view its implementation.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <ProjectButton
            name="profile"
            onClick={() => setCurrentProject("profile")}
          />
          <ProjectButton
            name="gallery"
            onClick={() => setCurrentProject("gallery")}
          />
          <ProjectButton
            name="counter"
            onClick={() => setCurrentProject("counter")}
          />
          <ProjectButton
            name="todo"
            onClick={() => setCurrentProject("todo")}
          />
          <ProjectButton
            name="portfolio"
            onClick={() => setCurrentProject("portfolio")}
          />
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-inner">
          {renderProject()}
        </div>
      </div>
    </div>
  );
};

// --- Project 1: Simple Profile Card ---
const ProfileCard = ({ user }) => (
  <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 my-8">
    <div className="flex flex-col items-center">
      <img
        className="h-24 w-24 rounded-full object-cover shadow-sm ring-2 ring-blue-500"
        src={user.imageUrl}
        alt={`${user.name}'s profile`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/96x96/60A5FA/ffffff?text=User";
        }}
      />
      <div className="text-center mt-4">
        <div className="text-xl font-semibold text-gray-800">{user.name}</div>
        <p className="text-sm text-gray-600">{user.title}</p>
        <p className="mt-2 text-gray-500 text-sm italic">{user.bio}</p>
      </div>
      <button
        onClick={() => console.log("Contact button clicked!")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Contact
      </button>
    </div>
  </div>
);

const ProfileCardProject = () => {
  // Define the user data to be passed as a prop.
  const user = {
    name: "Jane Doe",
    title: "Frontend Developer",
    bio: "Passionate about building beautiful and accessible user interfaces.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Project 1: Profile Card</h2>
      <p className="text-gray-600 mb-6">
        This project demonstrates **component creation** and passing data using
        **props**.
      </p>
      <ProfileCard user={user} />
    </div>
  );
};

// --- Project 2: Static Photo Gallery ---
const Photo = ({ imageUrl, title, description }) => (
  <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
    <img
      className="w-full h-48 object-cover"
      src={imageUrl}
      alt={title}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/300x200/60A5FA/ffffff?text=Image";
      }}
    />
    <div className="p-4 bg-white">
      <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const PhotoGalleryProject = () => {
  // Define the array of photo data.
  const photos = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac0634?q=80&w=2070&auto=format&fit=crop",
      title: "Running Trail",
      description: "A scenic trail run on a sunny day.",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1549488344-933e146b216c?q=80&w=2070&auto=format&fit=crop",
      title: "Mountain View",
      description: "A breathtaking view from a mountain summit.",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1506501138805-4ac6b2f4f227?q=80&w=2070&auto=format&fit=crop",
      title: "Desert Sunset",
      description: "The beautiful colors of a desert sunset.",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Project 2: Static Photo Gallery
      </h2>
      <p className="text-gray-600 mb-6">
        This project shows how to use the **`map()` method** to render a list of
        components from an array.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Photo
            key={photo.id}
            imageUrl={photo.imageUrl}
            title={photo.title}
            description={photo.description}
          />
        ))}
      </div>
    </div>
  );
};

// --- Project 3: Simple Counter App ---
const CounterProject = () => {
  // Use the useState hook to manage the counter's value.
  const [count, setCount] = useState(0);

  // Event handlers to update the state.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Project 3: Simple Counter</h2>
      <p className="text-gray-600 mb-6">
        This project is a classic example of using the **`useState` hook** to
        manage a component's state.
      </p>
      <div className="flex flex-col items-center">
        <div className="text-6xl font-extrabold text-blue-600 my-8">
          {count}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleDecrement}
            className="px-6 py-3 bg-red-500 text-white font-medium rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200"
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 text-white font-medium rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Reset
          </button>
          <button
            onClick={handleIncrement}
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Project 4: To-Do List App ---
const TodoProject = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React hooks", completed: false },
    { id: 2, text: "Build a to-do list", completed: true },
    { id: 3, text: "Practice state management", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Project 4: To-Do List App</h2>
      <p className="text-gray-600 mb-6">
        This project demonstrates managing state with an **array of objects**,
        **controlled inputs**, and **conditional rendering**.
      </p>
      <div className="max-w-md mx-auto">
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>
        <ul className="text-left space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
                />
                <span
                  className={`text-gray-800 ${
                    todo.completed ? "line-through text-gray-400 italic" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 112 0v6a1 1 0 11-2 0V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- Project 5: Multi-Page Portfolio Website (Capstone Project) ---
const PortfolioProject = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // A helper component for portfolio navigation.
  const NavButton = ({ name, page }) => (
    <button
      className="px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
      style={{
        backgroundColor: page === currentPage ? "#3B82F6" : "transparent",
        color: page === currentPage ? "white" : "#1F2937",
        border: page !== currentPage ? "1px solid #D1D5DB" : "none",
      }}
      onClick={() => setCurrentPage(page)}
    >
      {name}
    </button>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Project 5: Portfolio Website</h2>
      <p className="text-gray-600 mb-6">
        This capstone project demonstrates building a simple multi-page
        application using **basic routing** with state and conditional
        rendering.
      </p>
      <div className="flex justify-center space-x-2 mb-8">
        <NavButton name="Home" page="home" />
        <NavButton name="About" page="about" />
        <NavButton name="Projects" page="projects" />
      </div>
      <div className="p-6 border rounded-lg shadow-sm bg-white">
        {renderPage()}
      </div>
    </div>
  );
};

// Portfolio Page Components
const HomePage = () => (
  <div className="text-center py-12">
    <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
      Welcome to My Portfolio
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto">
      This is the homepage of a simple portfolio website. It serves as a brief
      introduction and welcome message.
    </p>
  </div>
);

const AboutPage = () => {
  const aboutUser = {
    name: "Jane Doe",
    title: "Frontend Developer",
    bio: "Passionate about building beautiful and accessible user interfaces. I specialize in React and enjoy creating engaging user experiences.  ",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734b658?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <div className="py-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">About Me</h3>
      <ProfileCard user={aboutUser} />
    </div>
  );
};

const ProjectsPage = () => {
  const projectPhotos = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
      title: "React App",
      description: "A web app built with React.",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
      title: "API Integration",
      description: "Working with external APIs.",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1457305237443-44c11b8b2609?q=80&w=2070&auto=format&fit=crop",
      title: "Interactive Design",
      description: "Focus on user experience.",
    },
  ];
  return (
    <div className="py-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">My Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectPhotos.map((photo) => (
          <Photo
            key={photo.id}
            imageUrl={photo.imageUrl}
            title={photo.title}
            description={photo.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AppOld;
