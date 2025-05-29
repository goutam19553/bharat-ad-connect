import React from "react";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles } from "@react-three/drei";
import DroneModel from "@/components/3d/DroneModel";

export default function DroneAdvertisingPage(): JSX.Element {
  return (
    <div className="bg-[#0f0f0f] text-slate-200 min-h-screen">
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
          Illuminate Your Brand with Drone Advertising
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Experience the future of marketing with dazzling drone light shows that mesmerize your audience and
          elevate your brand into the skies.
        </p>
      </section>

      <section className="w-full h-[500px]">
        <Canvas camera={{ position: [0, 2, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          <DroneModel />
          <Sparkles count={40} speed={1.5} size={4} color="#00ffff" opacity={1} scale={[5, 5, 5]} />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </section>

      <section className="p-10 grid gap-8 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold text-yellow-400">Why Choose Drone Advertising?</h2>
          <ul className="list-disc list-inside mt-4 text-slate-300">
            <li>Unforgettable visual experiences that leave lasting impressions</li>
            <li>Eco-friendly and noise-free alternative to fireworks</li>
            <li>Perfect for product launches, events, and celebrations</li>
            <li>Interactive features like QR codes in the sky</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-400">BotLab Dynamics: Pioneers in Drone Light Shows</h2>
          <p className="mt-2 text-slate-300">
            BotLab Dynamics delivers breathtaking outdoor and indoor drone performances tailored to your needs. Their technology-powered storytelling creates immersive, awe-inspiring shows.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-400">Success Stories</h2>
          <ul className="list-disc list-inside mt-4 text-slate-300">
            <li>Mahindra Lifespaces: Aerial QR codes for Metaverse integration</li>
            <li>Mercedes Maybach, Godrej Properties: Brand-aligned light shows</li>
            <li>Amaravati Drone Summit 2024: World-record 5,500 drone display</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-400">Affordable Brilliance</h2>
          <p className="mt-2 text-slate-300">
            Starting at just ₹10 lakhs for a 100-drone show, our offerings are not only spectacular but also cost-effective.
          </p>
        </div>

        <div className="text-center">
          <Button className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-500 hover:to-indigo-600 text-black font-semibold shadow-lg hover:shadow-yellow-400/30 transition duration-300">
            Book a Drone Show
          </Button>
        </div>
      </section>
    </div>
  );
}

