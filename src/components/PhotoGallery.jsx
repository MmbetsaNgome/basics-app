import React from "react";

// Sample data array for the gallery
const photos = [
  {
    id: 1,
    url: "https://placehold.co/300x200/ffbe0b/FFFFFF?text=React",
    title: "React Hooks",
  },
  {
    id: 2,
    url: "https://placehold.co/300x200/fb5607/FFFFFF?text=Vite",
    title: "Vite Setup",
  },
  {
    id: 3,
    url: "https://placehold.co/300x200/ff006e/FFFFFF?text=Tailwind",
    title: "Tailwind CSS",
  },
  {
    id: 4,
    url: "https://placehold.co/300x200/3a86ff/FFFFFF?text=JS",
    title: "ES6 Refresher",
  },
];

// Photo Gallery Project (Week 2: Lists)
function PhotoGallery() {
  return (
    <div className="w-full p-4">
      <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center">
        Rendering Lists with the `map()` Function
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 w-full max-w-sm"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-32 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x200/374151/FFFFFF?text=Image+Error";
              }}
            />
            <div className="p-4 text-center">
              <p className="text-lg font-medium text-gray-800">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center bg-indigo-50 p-4 rounded-lg border border-indigo-200 max-w-4xl mx-auto">
        <p className="font-medium text-indigo-800 text-sm">
          This component iterates over the `photos` array using **`.map()`** to
          render a list of cards. The `key` prop is essential here for
          performance.
        </p>
      </div>
    </div>
  );
}

export default PhotoGallery;
