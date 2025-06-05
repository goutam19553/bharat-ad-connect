import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const speechText = `Welcome to The Ad-Project, India's first PAN-India AdTech platform. We are transforming traditional advertising—like hoardings, wall ads, and billboards—into intelligent, eco-friendly, and immersive digital experiences using AI and AR. Whether you're a business, a government body, or a local property owner, our technology helps you plan smarter campaigns, boost visibility, and ensure full transparency. Join the future of outdoor advertising with The Ad-Project.`;

const AvatarModel = ({ onSpeakStart, onSpeakEnd }: { onSpeakStart: () => void; onSpeakEnd: () => void }) => {
  const { scene } = useGLTF("/HumanAI.glb");
  const avatarRef = useRef<THREE.Group>(null);
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = () => {
    if (speaking) return;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-IN";

    utterance.onstart = () => {
      setSpeaking(true);
      onSpeakStart();
    };
    utterance.onend = () => {
      setSpeaking(false);
      onSpeakEnd();
    };

    speechSynthesis.speak(utterance);
  };

  useFrame(() => {
    if (!avatarRef.current) return;

    if (speaking) {
      avatarRef.current.position.y = 0.02 * Math.sin(Date.now() * 0.005);
      const mouthMovement = 1 + 0.02 * Math.sin(Date.now() * 0.03);
      avatarRef.current.scale.set(1, mouthMovement, 1);
    } else {
      avatarRef.current.position.y = 0;
      avatarRef.current.scale.set(1, 1, 1);
    }
  });

  return (
    <primitive
      object={scene}
      ref={avatarRef}
      scale={1}
      onClick={handleSpeak}
      onTouchStart={handleSpeak}
      style={{ cursor: "pointer" }}
    />
  );
};

const HumanAIAvatar = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <div className="w-full h-[800px] flex flex-col justify-center items-center relative">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 30 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />
        <Stage environment="city" intensity={0.5} adjustCamera={false}>
          <AvatarModel onSpeakStart={() => setIsSpeaking(true)} onSpeakEnd={() => setIsSpeaking(false)} />
        </Stage>
      </Canvas>

      {/* Text Box below avatar */}
      {isSpeaking && (
        <div className="absolute bottom-8 max-w-xl bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg shadow-lg text-center text-sm md:text-base mx-4">
          {speechText}
        </div>
      )}
    </div>
  );
};

export default HumanAIAvatar;
