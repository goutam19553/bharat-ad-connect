import React from 'react';
import WallAdSpace from './WallAdSpace';

const wallAdSpaces = [
  {
    id: 1,
    title: "Prime Wall Space - MG Road",
    location: "MG Road, Bangalore",
    size: "40ft x 20ft",
    price: 5000,
    imageUrl: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/1.jfif"
  },
  {
    id: 2,
    title: "Outdoor Wall of House ",
    location: "RPD cross, Belagavi",
    size: "25ft x 12ft",
    price: 8000,
    imageUrl: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/images%20(22).jpeg"
  },
  {
    id: 3,
    title: "Commercial Center Wall",
    location: "Indiranagar, Bangalore",
    size: "50ft x 25ft",
    price: 6500,
    imageUrl: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/3.jfif"
  },
  {
    id: 4,
    title: "High Traffic Wall - HSR Layout", 
    location: "HSR Layout, Bangalore", 
    size: "30ft x 15ft", 
    price: 7000, 
    imageUrl: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/2.jfif"
  },
  {
    id: 5,
    title: "Near Ramdev Hotel,Belgaum",
    location: "Near Ramdev Hotel,Belgaum",
    size: "15ft x 8ft",
    price: 2000,
    imageUrl: "https://raw.githubusercontent.com/goutam19553/Startup-adtech/refs/heads/main/public/images%20(24).jpeg"
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
