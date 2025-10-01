import React, { useState } from "react";

// Capstone Project (Week 4: Basic Routing/Navigation)

// Define content for each page
const pages = {
  home: {
    title: "Welcome to My Portfolio!",
    content: (
      <>
        <p className="text-xl mb-4 text-gray-700">
          Hi, I'm a passionate React developer learning the fundamentals.
        </p>
        <p className="text-gray-600">
          Use the navigation bar above to explore my projects and learn more
          about me.
        </p>
      </>
    ),
  },
  about: {
    title: "About Me",
    content: (
      <>
        <p className="text-xl mb-4 text-gray-700">
          I'm currently focused on mastering state management, component
          lifecycles, and modern JavaScript features.
        </p>
        <p className="text-gray-600">
          This capstone project showcases my ability to create modular,
          single-page applications using functional components and hooks.
        </p>
      </>
    ),
  },
  projects: {
    title: "My Projects",
    content: (
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>Profile Card (Props demo)</li>
        <li>Counter App (State demo)</li>
        <li>To-Do List (Array manipulation)</li>
        <li>Photo Gallery (List rendering)</li>
      </ul>
    ),
  },
};

// Component to display the active page content
const PageContent = ({ pageId }) => {
  const page = pages[pageId] || pages.home; // Default to home

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-extrabold text-indigo-600 mb-6">
        {page.title}
      </h2>
      <div className="max-w-xl mx-auto">{page.content}</div>
    </div>
  );
};

// Main Portfolio Router Component
function PortfolioRouter() {
  // Use state to manage which "page" is currently active
  const [currentPage, setCurrentPage] = useState("home");

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center">
        Basic Client-Side Routing (Capstone)
      </h3>

      {/* Internal Navigation for the Portfolio */}
      <nav className="flex justify-center space-x-2 p-4 mb-8 border-b">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`px-4 py-2 rounded-full font-medium transition duration-150 ${
              currentPage === item.id
                ? "bg-indigo-600 text-white shadow-lg"
                : "text-indigo-600 hover:bg-indigo-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Display the selected page content */}
      <PageContent pageId={currentPage} />

      <div className="mt-8 text-center bg-gray-100 p-4 rounded-lg border border-gray-200">
        <p className="font-medium text-gray-700 text-sm">
          This component simulates routing without a library like React Router,
          using **State** to conditionally render different components/pages.
        </p>
      </div>
    </div>
  );
}

export default PortfolioRouter;
