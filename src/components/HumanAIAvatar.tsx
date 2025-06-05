// src/components/HumanAIAvatar.tsx
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const AvatarModel = ({ speaking }: { speaking: boolean }) => {
  const { scene } = useGLTF("/HumanAI.glb");
  const avatarRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (avatarRef.current) {
      if (speaking) {
        avatarRef.current.rotation.y += 0.01;
        avatarRef.current.position.y = Math.sin(Date.now() * 0.01) * 0.05;
      } else {
        avatarRef.current.rotation.y += 0.002;
        avatarRef.current.position.y = 0;
      }
    }
  });

  return <primitive object={scene} ref={avatarRef} scale={1.5} />;
};

const HumanAIAvatar = () => {
  const [speaking, setSpeaking] = useState(false);

  const startSpeech = () => {
    if (speaking) return;

    const speechText = `Welcome to The Ad-Project, India's first PAN-India AdTech platform. We are transforming traditional advertising—like hoardings, wall ads, and billboards—into intelligent, eco-friendly, and immersive digital experiences using AI and AR. Whether you're a business, a government body, or a local property owner, our technology helps you plan smarter campaigns, boost visibility, and ensure full transparency. Join the future of outdoor advertising with The Ad-Project.`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-IN";

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full h-[600px] flex flex-col justify-center items-center gap-4">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 5], fov: 30 }}
        style={{ width: "100%", height: "550px" }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stage environment="city" intensity={0.5}>
          <AvatarModel speaking={speaking} />
        </Stage>
      </Canvas>
      <button
        onClick={startSpeech}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Start Avatar Speech
      </button>
    </div>
  );
};

export default HumanAIAvatar;
