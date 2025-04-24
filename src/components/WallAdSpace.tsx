
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface WallAdSpaceProps {
  title: string;
  location: string;
  size: string;
  price: number;
  imageUrl: string;
}

const WallAdSpace = ({ title, location, size, price, imageUrl }: WallAdSpaceProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-md">
          <span className="font-semibold text-slate-900">₹{price.toLocaleString()}/month</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <span className="font-medium">Location:</span> {location}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Size:</span> {size}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-slate-800 hover:bg-slate-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WallAdSpace;
