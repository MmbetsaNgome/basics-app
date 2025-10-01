import React from 'react'

// Helper component to demonstrate Props
const UserCard = ({ name, title, bio, imageUrl }) => {
    return (
        <div className="max-w-xs w-full bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 border border-gray-100">
            {/* Image Placeholder with Error Fallback */}
            <img 
                className="w-full h-48 object-cover object-center bg-gray-200"
                src={imageUrl} 
                alt={`${name}'s profile`} 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x480/A0AEC0/FFFFFF?text=User+Image"; }}
            />
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{title}</p>
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

// Main Profile Card Project component (Week 2: Props and Lists)

const MultipleProfiles = () => {
 // Array of Props data to be passed down
    const usersData = [
        {
            id: 1,
            name: "Anya Sharma",
            title: "Frontend Developer",
            bio: "Building beautiful and responsive web interfaces using React and Tailwind CSS. Enthusiastic about modular design.",
            imageUrl: "https://placehold.co/600x480/3182CE/FFFFFF?text=Anya+S"
        },
        {
            id: 2,
            name: "Ben Carter",
            title: "UX/UI Designer",
            bio: "Focusing on user-centric design principles and prototyping in Figma. I bring concepts to life in the browser.",
            imageUrl: "https://placehold.co/600x480/059669/FFFFFF?text=Ben+C"
        },
        {
            id: 3,
            name: "Chloe Lee",
            title: "Technical Writer",
            bio: "Creating clear, concise documentation for developers. My passion is translating complex code into understandable concepts.",
            imageUrl: "https://placehold.co/600x480/D97706/FFFFFF?text=Chloe+L"
        }
    ];

    return (
        <div className="w-full flex flex-col items-center p-4">
            <h3 className="text-xl font-semibold mb-8 text-gray-700">Functional Components, Props, and List Rendering Demonstration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl">
                {/* Use .map() to iterate over the array and render multiple cards */}
                {usersData.map((user) => (
                    <UserCard 
                        key={user.id} // IMPORTANT: The unique key for list items
                        name={user.name}
                        title={user.title}
                        bio={user.bio}
                        imageUrl={user.imageUrl}
                    />
                ))}
            </div>

            <div className="mt-10 text-center bg-blue-50 p-4 rounded-lg border border-blue-200 max-w-4xl">
                <p className="font-medium text-blue-800 text-sm">
                    This demonstrates two key concepts: 
                    <strong className="font-bold"> Props</strong> (passing data to the reusable `UserCard` component) and 
                    <strong className="font-bold"> List Rendering</strong> (using the JavaScript `.map()` method to display multiple profiles from an array).
                </p>
            </div>
        </div>
    );
}

export default MultipleProfiles