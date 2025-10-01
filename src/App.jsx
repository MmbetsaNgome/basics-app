import { useState } from "react";

// Import all your individual project components
import ProfileCard from "./components/ProfileCard";
import PhotoGallery from "./components/PhotoGallery";
import CounterApp from "./components/CounterApp";
import ToDoList from "./components/ToDoList";
import PortfolioRouter from "./components/PortfolioRouter"; // Your multi-page capstone
import MultipleProfiles from "./components/MultipleProfiles";

// Define the available projects
const projects = [
  { id: "card", name: "Profile Card (Props)" },
  { id:"multipleprofiles", name:"Multiple Users Profile Cards"},
  { id: "gallery", name: "Photo Gallery (Lists)" },
  { id: "counter", name: "Counter App (State)" },
  { id: "todo", name: "To-Do List (State & Arrays)" },
  { id: "portfolio", name: "Portfolio (Routing)" },
];

function App() {
  const [activeProject, setActiveProject] = useState("");

  // Function to render the currently selected component
  const renderProject = () => {
    switch (activeProject) {
      case "card":
        return <ProfileCard />;
    case "multipleprofiles":
        return<MultipleProfiles />
      case "gallery":
        return <PhotoGallery />;
      case "counter":
        return <CounterApp />;
      case "todo":
        return <ToDoList />;
      case "portfolio":
        return <PortfolioRouter />;
      default:
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold">
              Welcome to the React Workshop!
            </h2>
            <p className="text-gray-600 mt-2">
              Select a project from the navigation bar above.
            </p>
            <h2> To Start your own follow the instructions below</h2>
            <p>Open your terminal or command prompt. These commands create a new Vite project using the React template and install the necessary default dependencies.

01:Create the Vite Project: 
npm create vite@latest project-name

02:Navigate and Install Base Dependencies:
cd project-name
npm install

03:Install Tailwind CSS(Install tailwindcss and @tailwindcss/vite via npm.)
npm install tailwindcss @tailwindcss/vite

{/* 04:Configure the Vite plugin(Add the @tailwindcss/vite plugin to your Vite configuration.(vite.config.ts))

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})


05:Import Tailwind CSS (Add an @import to your CSS file that imports Tailwind CSS.)
@import "tailwindcss";

06:Start your build process
npm run dev */}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Navigation Bar */}
      <div className="bg-white shadow-lg p-4 sticky top-0 z-10">
        <nav className="flex flex-wrap justify-center gap-2 max-w-7xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out ${
                activeProject === project.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {project.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Project Content Area */}
      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          Project:{" "}
          {projects.find((p) => p.id === activeProject)?.name ||
            "Select a Project"}
        </h1>
        <div className="bg-white p-6 rounded-xl shadow-2xl min-h-[60vh] flex justify-center items-start">
          {renderProject()}
        </div>
      </main>
    </div>
  );
}

export default App;
