import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const sampleWallImages = [
  "/sample-walls/wall1.jpg",
  "/sample-walls/wall2.jpg",
  "/sample-walls/wall3.jpg",
];

const AdPreview: React.FC = () => {
  const [adImage, setAdImage] = useState<string | null>(null);
  const [selectedWall, setSelectedWall] = useState<string | null>(sampleWallImages[0]);

  const handleAdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAdImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">Ad Preview Tool</h1>

      <div className="max-w-4xl mx-auto grid gap-6">
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
          <label className="block text-sm font-semibold mb-2">Upload Your Ad Image</label>
          <Input type="file" accept="image/*" onChange={handleAdUpload} className="bg-zinc-800" />
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
          <label className="block text-sm font-semibold mb-2">Choose a Wall Background</label>
          <div className="flex gap-4 overflow-x-auto">
            {sampleWallImages.map((url) => (
              <img
                key={url}
                src={url}
                onClick={() => setSelectedWall(url)}
                className={`w-48 h-32 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedWall === url ? "border-purple-500" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow-xl">
          <h2 className="text-lg font-semibold mb-4">Preview</h2>
          <div className="relative w-full aspect-video bg-zinc-700 rounded-lg overflow-hidden">
            {selectedWall && (
              <img src={selectedWall} alt="Wall" className="absolute w-full h-full object-cover" />
            )}
            {adImage && (
              <img
                src={adImage}
                alt="Ad"
                className="absolute bottom-4 right-4 w-1/2 h-auto border-2 border-white shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPreview;
