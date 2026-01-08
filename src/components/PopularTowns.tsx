// src/components/PopularTowns.tsx

import React from 'react';

interface Town {
  name: string;
  image: string; // You can replace with actual image paths later
}

//src\assets\jambo\test_1.jpeg

const towns: Town[] = [
  { name: "Kamulu", image: "src/assets/jambo/test_11.jpeg" },
  { name: "Juja", image: "src/assets/jambo/test_12.jpeg" },
  { name: "Ngong Kimuka", image: "src/assets/jambo/test_13.jpeg" },
  { name: "Ngong Kibiko", image: "src/assets/jambo/test_14.jpeg" },
  { name: "Muranga", image: "src/assets/jambo/test_15.jpeg" },
  { name: "Kimuka", image: "src/assets/jambo/test_16.jpeg" },
  
];

const PopularTowns = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">Homes to let in popular towns</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {towns.map((town) => (
            <div key={town.name} className="flex flex-col items-center">
              <img
                src={town.image}
                alt={town.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <span className="text-sm font-medium text-gray-700">{town.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTowns;