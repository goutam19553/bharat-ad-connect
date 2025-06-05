// src/components/HumanAIAvatar.tsx
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const AvatarModel = () => {
  const { scene } = useGLTF("/HumanAI.glb");
  const avatarRef = useRef<THREE.Group>(null);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    // Speech content
    const speechText = `Welcome to The Ad-Project, India's first PAN-India AdTech platform. We are transforming traditional advertising—like hoardings, wall ads, and billboards—into intelligent, eco-friendly, and immersive digital experiences using AI and AR. Whether you're a business, a government body, or a local property owner, our technology helps you plan smarter campaigns, boost visibility, and ensure full transparency. Join the future of outdoor advertising with The Ad-Project.`;

    // SpeechSynthesis setup
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-IN";

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);

    // Play speech
    speechSynthesis.speak(utterance);
  }, []);

  // Animate the avatar if speaking
  useFrame(() => {
    if (speaking && avatarRef.current) {
      avatarRef.current.rotation.y += 0.002;
      avatarRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.02;
    }
  });

  return <primitive object={scene} ref={avatarRef} scale={1.2} />;
};

const HumanAIAvatar = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 3], fov: 35 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true }} // transparent background
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stage environment="city" intensity={0.5}>
          <AvatarModel />
        </Stage>
        {/* Removed OrbitControls to disable user interaction */}
      </Canvas>
    </div>
  );
};

export default HumanAIAvatar;
