import React from "react";

// Helper component to demonstrate Props
const UserCard = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 border border-gray-100">
      {/* Image Placeholder with Error Fallback */}
      <img
        className="w-full h-48 object-cover object-center bg-gray-200"
        src={imageUrl}
        alt={`${name}'s profile`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x480/A0AEC0/FFFFFF?text=User+Image";
        }}
      />
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
          {title}
        </p>
        <p className="text-gray-600 text-base">{bio}</p>
      </div>
      <div className="flex justify-center p-4 border-t bg-gray-50">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full shadow-lg hover:bg-blue-600 transition duration-150">
          Connect
        </button>
      </div>
    </div>
  );
};

// Main Profile Card Project component (Week 2: Props)
function ProfileCard() {
  // Props data to be passed down
  const userData = {
    name: "Anya Sharma",
    title: "Frontend Developer",
    bio: "Building beautiful and responsive web interfaces using React and Tailwind CSS. Enthusiastic about modular design.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h3 className="text-xl font-semibold mb-6 text-gray-700">
        Functional Component & Props Demonstration
      </h3>
      <UserCard {...userData} />
      <div className="mt-8 text-center bg-blue-50 p-4 rounded-lg border border-blue-200 max-w-lg">
        <p className="font-medium text-blue-800 text-sm">
          This demonstrates passing data from a parent component (`ProfileCard`)
          to a child component (`UserCard`) using **Props**.
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
