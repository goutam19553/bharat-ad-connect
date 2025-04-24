import React from 'react';
import WallAdSpace from './WallAdSpace';

const wallAdSpaces = [
  {
    id: 1,
    title: "Prime Wall Space - MG Road",
    location: "MG Road, Bangalore",
    size: "40ft x 20ft",
    price: 45000,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "High Traffic Wall - HSR Layout",
    location: "HSR Layout, Bangalore",
    size: "30ft x 15ft",
    price: 35000,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Commercial Center Wall",
    location: "Indiranagar, Bangalore",
    size: "50ft x 25ft",
    price: 55000,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Metro Station Adjacent Wall",
    location: "Whitefield, Bangalore",
    size: "45ft x 22ft",
    price: 48000,
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Brigade Road Billboard",
    location: "Brigade Road, Bangalore",
    size: "35ft x 18ft",
    price: 42000,
    imageUrl: "/placeholder.svg"
  }
];

const WallAdSpaceGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Available Wall Ad Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wallAdSpaces.map((space) => (
          <WallAdSpace
            key={space.id}
            title={space.title}
            location={space.location}
            size={space.size}
            price={space.price}
            imageUrl={space.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default WallAdSpaceGrid;
