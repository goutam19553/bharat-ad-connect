import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const AvatarModel = () => {
  const { scene } = useGLTF("/HumanAI.glb");
  const avatarRef = useRef<THREE.Group>(null);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const speechText = `Welcome to The Ad-Project, India's first PAN-India AdTech platform. We are transforming traditional advertising—like hoardings, wall ads, and billboards—into intelligent, eco-friendly, and immersive digital experiences using AI and AR. Whether you're a business, a government body, or a local property owner, our technology helps you plan smarter campaigns, boost visibility, and ensure full transparency. Join the future of outdoor advertising with The Ad-Project.`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = "en-IN";

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);

    speechSynthesis.speak(utterance);
  }, []);

  // Basic speaking animation: small up/down movement + subtle mouth open simulation by scaling Y
  useFrame(() => {
    if (avatarRef.current) {
      if (speaking) {
        // Rotate slowly for liveliness
        avatarRef.current.rotation.y += 0.002;
        // Bobbing up and down smoothly
        avatarRef.current.position.y = 0.02 * Math.sin(Date.now() * 0.005);

        // Simple "lip-sync" effect: scale Y oscillates between 0.98 and 1.02
        const mouthMovement = 1 + 0.02 * Math.sin(Date.now() * 0.03);
        avatarRef.current.scale.set(1, mouthMovement, 1);
      } else {
        // Reset position and scale when not speaking
        avatarRef.current.rotation.y += 0.001; // slow idle rotation
        avatarRef.current.position.y = 0;
        avatarRef.current.scale.set(1, 1, 1);
      }
    }
  });

  return <primitive object={scene} ref={avatarRef} scale={1} />;
};

const HumanAIAvatar = () => {
  return (
    <div className="w-full h-[800px] flex justify-center items-center">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 30 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />
        <Stage environment="city" intensity={0.5} adjustCamera={false}>
          <AvatarModel />
        </Stage>
        {/* No OrbitControls for no user interaction */}
      </Canvas>
    </div>
  );
};

export default HumanAIAvatar;
