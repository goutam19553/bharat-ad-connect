import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

function Model() {
  const { scene } = useGLTF("/HumanAI.glb");
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // slow rotation
    }
  });

  return <primitive ref={ref} object={scene} scale={1.5} position={[0, -1.5, 0]} />;
}

export function HumanAvatar() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 1.5, 3.5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
